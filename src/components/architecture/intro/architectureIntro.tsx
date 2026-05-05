import Typography from "@mui/material/Typography";
import { getTranslations } from "next-intl/server";
import CardWithContent from "../cardWithContent";

export default async function ArchitectureIntro() {
  const t = await getTranslations("Architecture");

  return (
    <div className="px-3 sm:px-14">
      <CardWithContent
        content={
          <Typography variant="titleFont" className="text-xl">
            {t("arch_intro")}
          </Typography>
        }
      />
    </div>
  );
}
