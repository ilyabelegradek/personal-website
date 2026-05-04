import {
  performanceNextJS,
  performanceTesting,
} from "@/src/constants/architectureConstants";
import ArchitectureEntriesCard from "./architectureEntriesCard";
import Typography from "@mui/material/Typography";
import { getTranslations } from "next-intl/server";

export default async function ArchitecturePerformance() {
  const t = await getTranslations("Architecture");

  return (
    <div className="flex flex-col gap-8 mx-3 sm:mx-14">
      <Typography sx={{ whiteSpace: "pre-line" }}>
        {t("arch_perf_intro")}
      </Typography>
      <ArchitectureEntriesCard entries={performanceNextJS} />
      <ArchitectureEntriesCard entries={performanceTesting} />
    </div>
  );
}
