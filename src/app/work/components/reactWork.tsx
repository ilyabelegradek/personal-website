import WorkComponent from "./workComponent";

const aboutList = ["react_role"];

const responsibilitesList = [
  "react_work_collab",
  "react_work_screens",
  "react_work_api",
];

const techStackList = [
  "react_tech_ide",
  "react_tech_styling",
  "react_tech_design",
  "react_tech_state",
  "react_tech_api",
  "react_tech_forms",
  "react_tech_validation",
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
