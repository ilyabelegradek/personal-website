import ExpandableList from "@/src/components/expandableList";
import ExpandableSection from "@/src/components/expandableSection";
import { Typography } from "@mui/material";

export default function Skills() {
  const programmingLanguages = [
    "Kotlin",
    "Typescript",
    "Javascript",
    "Java",
    "HTML",
    "css",
  ];

  const miscList = ["Languages: English and Russian"];

  return (
    <div className="flex flex-col gap-5 m-15 sm:flex-row sm:flex-wrap">
      <ExpandableSection title="Programming Languages">
        <ExpandableList listItems={programmingLanguages} />
      </ExpandableSection>
      <ExpandableSection title="Miscallaneous">
        <ExpandableList listItems={miscList} />
      </ExpandableSection>
    </div>
  );
}
