import { useNavigate } from "react-router-dom";
import { ROUTES } from "@app/router/paths";

export default function BackLink({
  label = "← Back to assets",
}: {
  label?: string;
}) {
  const navigate = useNavigate();
  return (
    <button
      type="button"
      onClick={() => {
        if (window.history.length > 2) navigate(-1);
        else navigate(ROUTES.assets);
      }}
      className="text-dim hover:underline"
    >
      {label}
    </button>
  );
}
