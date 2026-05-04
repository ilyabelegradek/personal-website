import { privacyList } from "@/src/constants/disclosuresConstants";
import Typography from "@mui/material/Typography";
import StringWithHyperlink from "../reusable/stringWithHyperlink";
import { useTranslations } from "next-intl";

export default function PrivacyContent() {
  const t = useTranslations("Disclosures");

  return (
    <div className="flex flex-col">
      <Typography variant="bodyFont">{t("site_uses")}</Typography>
      {privacyList.map((richText) => (
        <StringWithHyperlink richText={richText} key={richText.strKey} />
      ))}
    </div>
  );
}
