import { getTranslations } from "next-intl/server";
import StringWithHyperlink from "@/src/components/reusable/stringWithHyperlink";
import {
  codeBlockCodeSample,
  codeBlocksDescriptionRichText,
} from "@/src/constants/architectureConstants";
import CardWithContent from "../cardWithContent";
import CustomCodeBlock from "../../reusable/customCodeBlock";

export default async function ArchitectureCodeBlocks() {
  const t = await getTranslations("Architecture");

  return (
    <div className="flex flex-col gap-8 mx-3 sm:mx-14">
      <StringWithHyperlink
        richText={codeBlocksDescriptionRichText}
        translationsNamespace="Architecture"
        hideBullet
      />
      <CardWithContent
        descriptionKey="arch_code_blocks_code_block"
        content={<CustomCodeBlock code={codeBlockCodeSample} />}
      />
    </div>
  );
}
