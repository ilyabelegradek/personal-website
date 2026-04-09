import {
  aboutListAndroid,
  responsibilitesListAndroid,
  techStackListAndroid,
} from "@/src/constants/workConstants";
import WorkComponent from "./workComponent";

export default function AndroidWork() {
  return (
    <WorkComponent
      aboutList={aboutListAndroid}
      responsibilitiesList={responsibilitesListAndroid}
      techStackList={techStackListAndroid}
    />
  );
}
