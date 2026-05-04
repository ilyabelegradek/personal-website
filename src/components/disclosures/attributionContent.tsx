import { attributionList } from "@/src/constants/disclosuresConstants";
import { Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import StringWithHyperlink from "../reusable/stringWithHyperlink";

export default function AttributionContent() {
  const t = useTranslations();

  return (
    <div className="flex flex-col">
      <Typography variant="bodyFont">{t("site_uses")}</Typography>
      {attributionList.map((richText) => (
        <StringWithHyperlink richText={richText} key={richText.strKey} />
      ))}
    </div>
  );
}
