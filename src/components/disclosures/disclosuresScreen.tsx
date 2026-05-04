import Typography from "@mui/material/Typography";
import { getTranslations } from "next-intl/server";
import DisclosuresContent from "./disclosuresContent";

export default async function DisclosuresScreen() {
  const t = await getTranslations("Global");

  return (
    <div className="flex flex-col m-15 gap-5">
      <Typography variant="titleFont" className="text-3xl font-bold underline">
        {t("disclosures_site")}
      </Typography>
      <DisclosuresContent />
    </div>
  );
}
