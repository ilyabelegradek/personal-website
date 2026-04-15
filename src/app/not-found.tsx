import Typography from "@mui/material/Typography";
import { useTranslations } from "next-intl";

export default function NotFound() {
  const t = useTranslations();

  return (
    <div className="flex flex-col w-full h-[80vh] items-center justify-center text-center">
      <Typography variant="titleFont">{t("error_404")}</Typography>
    </div>
  );
}
