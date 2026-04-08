import WorkComponent from "./workComponent";

const aboutList = [
  "React developer for NextJS Typescript rewrite of 20+ year old legacy__ application",
];

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

export default function ReactWork() {
  return (
    <WorkComponent
      aboutList={aboutList}
      responsibilitiesList={responsibilitesList}
      techStackList={techStackList}
    />
  );
}
