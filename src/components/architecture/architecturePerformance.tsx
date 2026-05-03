import { performanceNextJS } from "@/src/constants/architectureConstants";
import ArchitectureEntriesCard from "./architectureEntriesCard";
import Typography from "@mui/material/Typography";

export default function ArchitecturePerformance() {
  return (
    <div className="flex flex-col gap-8">
      <Typography>
        I wanted to write this website in React to showcase my proficiency with
        the framework as well as with some third party libraries.
      </Typography>
      <Typography>
        The downside of this approach is that React is pure Javascript, which by
        default has to load on the client, so the first time users visit my
        site, it'll take several seconds to load. This is a poor user experience
        for any site, but especially for a personal site which should be fast
        and lightweight.
      </Typography>
      <Typography>
        Therefore, I used Next.js for server-side rendering. I also did the
        following optimizations:
      </Typography>
      <ArchitectureEntriesCard entries={performanceNextJS} />
    </div>
  );
}
