import StringWithHyperlink from "@/src/components/reusable/stringWithHyperlink";
import {
  pdfCodeSample,
  pdfDescKeys,
  pdfDescriptionRichText,
  pdfStyleSample,
} from "@/src/constants/architectureConstants";
import { getTranslations } from "next-intl/server";
import CardWithContent from "../cardWithContent";
import CustomCodeBlock from "../../reusable/customCodeBlock";

export default async function ArchitecturePDF() {
  const t = await getTranslations("Architecture");

  return (
    <div className="flex flex-col gap-8 mx-3 sm:mx-14">
      <StringWithHyperlink
        richText={pdfDescriptionRichText}
        translationsNamespace="Architecture"
        hideBullet
      />
      <CardWithContent
        descriptionKeys={pdfDescKeys}
        content={
          <div className="flex flex-col gap-4">
            <CustomCodeBlock code={pdfCodeSample} />
            <CustomCodeBlock code={pdfStyleSample} />
          </div>
        }
      />
    </div>
  );
}
