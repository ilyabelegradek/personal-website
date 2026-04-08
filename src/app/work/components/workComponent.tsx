import ExpandableList from "@/src/components/expandableList";
import ExpandableSection from "@/src/components/expandableSection";
import { useTranslations } from "next-intl";

export default function WorkComponent(props: {
  aboutList: string[];
  responsibilitiesList: string[];
  techStackList: string[];
}) {
  const { aboutList, responsibilitiesList, techStackList } = props;
  const t = useTranslations();

  return (
    <div className="flex flex-col gap-5 sm:flex-row sm:flex-wrap">
      <ExpandableSection title={t("title_about")}>
        <ExpandableList
          listItems={aboutList.map((stringKey) => t(stringKey))}
        />
      </ExpandableSection>
      <ExpandableSection title={t("title_responsibilities")}>
        <ExpandableList
          listItems={responsibilitiesList.map((stringKey) => t(stringKey))}
        />
      </ExpandableSection>
      <ExpandableSection title={t("title_tech_stack")}>
        <ExpandableList
          listItems={techStackList.map((stringKey) => t(stringKey))}
        />
      </ExpandableSection>
    </div>
  );
}
