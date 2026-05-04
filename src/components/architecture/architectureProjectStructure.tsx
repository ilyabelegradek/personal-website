import Typography from "@mui/material/Typography";
import ProjectStructureCard from "./projectStructureCard";
import { getTranslations } from "next-intl/server";

export default async function ArchitectureProjectStructure() {
  const t = await getTranslations("Architecture");

  return (
    <div className="mx-3 sm:mx-14">
      <Typography>{t("arch_struct_explanation")}</Typography>
      <ProjectStructureCard />
    </div>
  );
}
