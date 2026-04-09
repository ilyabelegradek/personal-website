import ExpandableList from "@/src/components/expandableList";
import ExpandableSection from "@/src/components/expandableSection";
import { educationList } from "@/src/constants/workConstants";
import { useTranslations } from "next-intl";

export default function EducationWork() {
  const t = useTranslations();

  return (
    <ExpandableSection title="Bachelor's Degree">
      <ExpandableList
        listItems={educationList.map((stringKey) => t(stringKey))}
      />
    </ExpandableSection>
  );
}
