import StringWithHyperlink from "../reusable/stringWithHyperlink";
import { localizationDescriptionRichText } from "@/src/constants/architectureConstants";

export default async function ArchitectureLocalization() {
  return (
    <div className="flex flex-col gap-8 mx-3 sm:mx-14">
      <StringWithHyperlink
        richText={localizationDescriptionRichText}
        translationsNamespace="Architecture"
        hideBullet
      />
    </div>
  );
}
