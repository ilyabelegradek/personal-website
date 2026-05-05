import Typography from "@mui/material/Typography";
import { getTranslations } from "next-intl/server";

export default async function ArchitectureIntro() {
  const t = await getTranslations("Architecture");

  return (
    <Typography variant="titleFont" className="px-3 sm:px-14 text-xl">
      {t("arch_intro")}
    </Typography>
  );
}
