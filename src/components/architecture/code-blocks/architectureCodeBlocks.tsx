import { getTranslations } from "next-intl/server";
import StringWithHyperlink from "@/src/components/reusable/stringWithHyperlink";
import { codeBlocksDescriptionRichText } from "@/src/constants/architectureConstants";

export default async function ArchitectureCodeBlocks() {
  const t = await getTranslations("Architecture");

  return (
    <div className="flex flex-col gap-8 mx-3 sm:mx-14">
      <StringWithHyperlink
        richText={codeBlocksDescriptionRichText}
        translationsNamespace="Architecture"
        hideBullet
      />
    </div>
  );
}
