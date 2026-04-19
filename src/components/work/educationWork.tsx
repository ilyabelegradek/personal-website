import ExpandableList from "@/src/components/reusable/expandableList";
import ExpandableSection from "@/src/components/reusable/expandableSection";
import { educationList } from "@/src/constants/workConstants";
import { useTranslations } from "next-intl";

export default function EducationWork() {
  const t = useTranslations();

  return (
    <ExpandableSection title={t("education_degree")}>
      <ExpandableList
        listItems={educationList.map((stringKey) => t(stringKey))}
      />
    </ExpandableSection>
  );
}
