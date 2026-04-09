import {
  aboutListReact,
  responsibilitesListReact,
  techStackListReact,
} from "@/src/constants/workConstants";
import WorkComponent from "./workComponent";

export default function ReactWork() {
  return (
    <WorkComponent
      aboutList={aboutListReact}
      responsibilitiesList={responsibilitesListReact}
      techStackList={techStackListReact}
    />
  );
}
