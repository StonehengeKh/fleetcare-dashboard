import type { UseFormReturn } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { TextField } from "@components/form/TextField";
import { SelectField } from "@components/form/SelectField";
import { TextAreaField } from "@components/form/TextAreaField";
import { PrimaryButton } from "@components/PrimaryButton";
import type { AssetDetailsFormValues } from "@features/assets/formTypes";

type AssetDetailsFormProps = {
  form: Pick<
    UseFormReturn<AssetDetailsFormValues>,
    "register" | "handleSubmit" | "formState"
  >;
  onSubmit: (values: AssetDetailsFormValues) => void;
  isSaving?: boolean;
};

export function AssetDetailsForm({
  form,
  onSubmit,
  isSaving,
}: AssetDetailsFormProps) {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isDirty },
  } = form;

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid gap-4 mt-4 lg:grid-cols-[2fr_1fr]"
    >
      <div className="rounded-xl2 bg-card border border-card-edge p-4 space-y-4">
        <TextField
          label={t("assetForm.nameLabel", "Name")}
          error={
            errors.name &&
            t("assetForm.nameError", "Please enter a name for this asset.")
          }
          {...register("name")}
        />

        <SelectField
          label={t("assetForm.statusLabel", "Status")}
          error={errors.status?.message}
          {...register("status")}
        >
          <option value="OK">{t("dashboard.ok")}</option>
          <option value="Due soon">{t("dashboard.dueSoon")}</option>
          <option value="Overdue">{t("dashboard.overdue")}</option>
        </SelectField>

        <TextField
          label={t("assetForm.nextInspectionLabel", "Next inspection")}
          type="date"
          error={
            errors.nextInspection &&
            t("assetForm.nextInspectionError", "Please enter a valid date.")
          }
          {...register("nextInspection")}
        />

        <TextAreaField
          label={t("assetForm.notesLabel", "Notes")}
          rows={4}
          error={
            errors.notes &&
            t("assetForm.notesError", "Notes must not exceed 1000 characters.")
          }
          {...register("notes")}
        />
      </div>

      <div className="rounded-xl2 bg-card border border-card-edge p-4 space-y-3">
        <h3 className="font-medium mb-2">{t("assets.compliance")}</h3>
        <div className="text-dim text-sm">{t("assets.nextInspection")}</div>
        <PrimaryButton
          type="submit"
          fullWidth
          disabled={isSubmitting || !isDirty || isSaving}
        >
          {isSaving
            ? t("assetForm.saving", "Saving…")
            : t("assetForm.save", "Save changes")}
        </PrimaryButton>
      </div>
    </form>
  );
}
