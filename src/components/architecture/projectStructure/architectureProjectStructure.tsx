import Typography from "@mui/material/Typography";
import { getTranslations } from "next-intl/server";
import ProjectStructureCard from "./projectStructureCard";

export default async function ArchitectureProjectStructure() {
  const t = await getTranslations("Architecture");

  return (
    <div className="mx-3 sm:mx-14">
      <Typography>{t("arch_struct_explanation")}</Typography>
      <ProjectStructureCard />
    </div>
  );
}
