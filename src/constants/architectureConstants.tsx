import { ArchitectureEntries } from "../types/types";

export const performanceNextJS: ArchitectureEntries = {
  title: "Next.js Built-In Components",
  entries: [
    {
      title: "Font",
      description: "Loads without layout shift or external network request",
      imageUrl: "/images/fontScreenshot.webp",
    },
    {
      title: "Dynamic Imports",
      description:
        "Loads the component on demand, reducing initial bundle size and speeding up page load.",
      imageUrl: "/images/dynamicScreenshot.webp",
    },
    {
      title: "Image",
      description:
        "Only loads when the image enters the viewport (lazy loading). Loads without layout shift",
      imageUrl: "/images/imageScreenshot.webp",
    },
  ],
};
