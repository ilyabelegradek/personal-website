import { performanceNextJS } from "@/src/constants/architectureConstants";
import ArchitectureEntriesCard from "./architectureEntriesCard";
import Typography from "@mui/material/Typography";

export default function ArchitecturePerformance() {
  return (
    <div className="flex flex-col gap-8 mx-3 sm:mx-14">
      <Typography>
        I wanted to write this website using React and various third party
        libraries to showcase my proficiency with them.
      </Typography>
      <Typography>
        The downside of this approach, as opposed to a simpler HTML page styled
        with CSS, is that React is pure Javascript. By default, my application
        would have to load on the user's browser, which would take several
        seconds the first time they visit. This is a poor experience for any
        site, but especially for a personal site which should be fast and
        lightweight.
      </Typography>
      <Typography>
        Therefore, I used Next.js for server-side rendering. I also did the
        following optimizations:
      </Typography>
      <ArchitectureEntriesCard entries={performanceNextJS} />
    </div>
  );
}
