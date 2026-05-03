import { Typography } from "@mui/material";

export default function ArchitecturePerformance() {
  return (
    <div className="flex flex-col h-160">
      <Typography variant="titleFont" className="underline">
        Next.js Built-In Components
      </Typography>
      <Typography>
        Font: Loads without layout shift or external network request
      </Typography>
      <Typography>
        Image: Only loads when the image enters the viewport (lazy loading).
        Loads without layout shift
      </Typography>
      <Typography>
        Link: Used for navigation between routes, prefetches the data when the
        Link enters the viewport.
      </Typography>
      <Typography>
        Dynamic Imports: Loads the component on demand, reducing initial bundle
        size and speeding up page load.
      </Typography>
    </div>
  );
}
