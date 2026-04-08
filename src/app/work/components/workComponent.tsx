import ExpandableList from "@/src/components/expandableList";
import ExpandableSection from "@/src/components/expandableSection";
import { Typography } from "@mui/material";
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
        <ExpandableList listItems={aboutList} />
      </ExpandableSection>
      <ExpandableSection title={t("title_responsibilities")}>
        <ExpandableList listItems={responsibilitiesList} />
      </ExpandableSection>
      <ExpandableSection title={t("title_tech_stack")}>
        <ExpandableList listItems={techStackList} />
      </ExpandableSection>
    </div>
  );
}
