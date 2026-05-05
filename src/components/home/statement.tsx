import Typography from "@mui/material/Typography";
import { useTranslations } from "next-intl";

export default function Statement() {
  const today = new Date();
  const numYears = today.getFullYear() - 2020;
  const t = useTranslations("Home");

  return (
    <div className="flex w-80 mt-5 sm:mt-20 sm:mx-20">
      <Typography variant="bodyFont">
        {t("statement", { numYears: numYears })}
      </Typography>
    </div>
  );
}
