import { useTranslation } from "react-i18next";

export default function NotFoundPage() {
  const { t } = useTranslation();
  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold">{t("common.notFoundTitle")}</h2>
      <p className="text-dim mt-1">{t("common.notFoundText")}</p>
    </div>
  );
}
