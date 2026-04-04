import ExpandableSection from "@/src/components/expandableSection";
import { Typography } from "@mui/material";

export default function ReactWork() {
  const responsibilitesList = [
    "Reviewed legacy application with UI/UX, business, and other developers",
    "Implemented screens based on Figma mockups and existing functionality",
    "Setup placeholder requests and responses with mock data for eventual integration stories",
  ];

  const techStackList = [
    "IDE: Visual Studio Code",
    "Styling: Tailwind",
    "Design Library: MUI",
    "State Management: Mobx",
    "Rest API: React Redux ??",
    "Forms: Formik",
    "Validation: Yup",
  ];

  return (
    <div className="flex flex-col gap-5 sm:flex-row sm:flex-wrap">
      <ExpandableSection title="About">
        <Typography>
          React developer for NextJS Typescript rewrite of 20+ year old legacy
          __ application
        </Typography>
      </ExpandableSection>
      <ExpandableSection title="Responsibilites">
        <div className="flex flex-col">
          {responsibilitesList.map((responsibility) => (
            <Typography variant="bodyFont" key={responsibility}>
              {responsibility}
            </Typography>
          ))}
        </div>
      </ExpandableSection>
      <ExpandableSection title="Tech Stack">
        <div className="flex flex-col">
          {techStackList.map((stackItem) => (
            <Typography variant="bodyFont" key={stackItem}>
              {stackItem}
            </Typography>
          ))}
        </div>
      </ExpandableSection>
    </div>
  );
}
