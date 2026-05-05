import { getTranslations } from "next-intl/server";
import StringWithHyperlink from "@/src/components/reusable/stringWithHyperlink";
import {
  drawerCodeSample,
  tabCodeSample,
  themeCreationCodeSample,
  themingDescriptionRichText,
} from "@/src/constants/architectureConstants";
import CardWithContent from "../cardWithContent";
import CustomCodeBlock from "../../reusable/customCodeBlock";
import { Typography } from "@mui/material";

export default async function ArchitectureTheming() {
  const t = await getTranslations("Architecture");

  return (
    <div className="flex flex-col gap-8 mx-3 sm:mx-14">
      <StringWithHyperlink
        richText={themingDescriptionRichText}
        translationsNamespace="Architecture"
        hideBullet
      />
      <CardWithContent
        descriptionKey="arch_theming_configuration"
        content={<CustomCodeBlock code={themeCreationCodeSample} />}
      />
      <CardWithContent
        descriptionKey={"arch_theming_components"}
        content={
          <div className="flex flex-col">
            <CustomCodeBlock code={drawerCodeSample} />
            <CustomCodeBlock code={tabCodeSample} />
          </div>
        }
      />
      <Typography>{t("arch_theming_final")}</Typography>
    </div>
  );
}
