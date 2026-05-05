import { getTranslations } from "next-intl/server";
import StringWithHyperlink from "@/src/components/reusable/stringWithHyperlink";
import { themingDescriptionRichText } from "@/src/constants/architectureConstants";
import CardWithContent from "../cardWithContent";
import MUIComponentsRow from "./muiComponentsRow";

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
        descriptionKey={"arch_theming_components"}
        content={<MUIComponentsRow />}
      />
    </div>
  );
}
