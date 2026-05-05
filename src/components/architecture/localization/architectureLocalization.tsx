import {
  localizationConfigSample,
  localizationDescriptionRichText,
  localizationJsonSample,
  localizationProviderSample,
} from "@/src/constants/architectureConstants";
import StringWithHyperlink from "@/src/components/reusable/stringWithHyperlink";
import CardWithContent from "../cardWithContent";
import CustomCodeBlock from "../../reusable/customCodeBlock";

export default async function ArchitectureLocalization() {
  return (
    <div className="flex flex-col gap-8 mx-3 sm:mx-14">
      <StringWithHyperlink
        richText={localizationDescriptionRichText}
        translationsNamespace="Architecture"
        hideBullet
      />
      <CardWithContent
        descriptionKey="arch_localization_json"
        content={<CustomCodeBlock code={localizationJsonSample} />}
      />
      <CardWithContent
        descriptionKey="arch_localization_config"
        content={<CustomCodeBlock code={localizationConfigSample} />}
      />
      <CardWithContent
        descriptionKey="arch_localization_using"
        content={<CustomCodeBlock code={localizationProviderSample} />}
      />
    </div>
  );
}
