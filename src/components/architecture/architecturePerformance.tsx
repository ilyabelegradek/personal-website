import { performanceNextJS } from "@/src/constants/architectureConstants";
import ArchitectureEntriesCard from "./architectureEntriesCard";

export default function ArchitecturePerformance() {
  return (
    <div className="flex flex-col gap-8">
      <ArchitectureEntriesCard entries={performanceNextJS} />
    </div>
  );
}
