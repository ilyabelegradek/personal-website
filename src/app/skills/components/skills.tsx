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
        <div className="flex flex-col">
          {programmingLanguages.map((language) => (
            <Typography variant="bodyFont" key={language}>
              {language}
            </Typography>
          ))}
        </div>
      </ExpandableSection>
      <ExpandableSection title="Miscallaneous">
        <div className="flex flex-col">
          {miscList.map((miscItem) => (
            <Typography variant="bodyFont" key={miscItem}>
              {miscItem}
            </Typography>
          ))}
        </div>
      </ExpandableSection>
    </div>
  );
}
