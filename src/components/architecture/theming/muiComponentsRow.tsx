import { getTranslations } from "next-intl/server";
import CustomCodeBlock from "../../reusable/customCodeBlock";
import {
  drawerCodeSample,
  tabCodeSample,
} from "@/src/constants/architectureConstants";

export default async function MUIComponentsRow() {
  const t = await getTranslations("architecture");

  return (
    <div className="flex flex-col gap-4">
      <CustomCodeBlock code={drawerCodeSample} />
      <CustomCodeBlock code={tabCodeSample} />
    </div>
  );
}
