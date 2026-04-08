import WorkComponent from "./workComponent";

const aboutList = ["android_role_long", "android_about_long"];

const responsibilitesList = [
  "android_work_collab",
  "android_incidents",
  "android_msauth",
  "android_analytics",
];

const techStackList = [
  "android_tech_ui",
  "android_tech_ide",
  "android_tech_ci",
  "android_tech_qa",
  "android_tech_memory",
  "android_tech_auth",
  "android_tech_test",
  "android_tech_config",
  "android_tech_analytics",
  "android_tech_story",
  "android_tech_incident",
  "android_tech_deploy",
];

export default function AndroidWork() {
  return (
    <WorkComponent
      aboutList={aboutList}
      responsibilitiesList={responsibilitesList}
      techStackList={techStackList}
    />
  );
}
