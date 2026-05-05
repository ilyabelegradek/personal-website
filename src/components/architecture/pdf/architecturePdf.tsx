import StringWithHyperlink from "@/src/components/reusable/stringWithHyperlink";
import { pdfDescriptionRichText } from "@/src/constants/architectureConstants";
import { getTranslations } from "next-intl/server";

export default async function ArchitecturePDF() {
  const t = await getTranslations("Architecture");

  return (
    <div className="flex flex-col gap-8 mx-3 sm:mx-14">
      <StringWithHyperlink
        richText={pdfDescriptionRichText}
        translationsNamespace="Architecture"
        hideBullet
      />
    </div>
  );
}
