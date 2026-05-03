import { performanceNextJS } from "@/src/constants/architectureConstants";
import { Typography } from "@mui/material";
import Image from "next/image";
import ArchitectureEntriesCard from "../reusable/architectureEntriesCard";

export default function ArchitecturePerformance() {
  return (
    <div className="flex flex-col gap-8">
      <ArchitectureEntriesCard entries={performanceNextJS} />
    </div>
  );
}

/*
<Typography>
        Link: Used for navigation between routes, prefetches the data when the
        Link enters the viewport.
      </Typography>
*/
