import ExpandableList from "@/src/components/expandableList";
import ExpandableSection from "@/src/components/expandableSection";
import { schoolworkList } from "@/src/constants/constants";
import { useTranslations } from "next-intl";

export default function SchoolWork() {
  const t = useTranslations();

  return (
    <ExpandableSection title="Bachelor's Degree">
      <ExpandableList
        listItems={schoolworkList.map((stringKey) => t(stringKey))}
      />
    </ExpandableSection>
  );
}
