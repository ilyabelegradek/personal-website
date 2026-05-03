import { ArchitectureEntries } from "../types/types";

export const performanceNextJS: ArchitectureEntries = {
  title: "Next.js Built-In Components",
  entries: [
    {
      title: "Font",
      descriptionPoints: [
        "Loads without layout shift or external network request",
      ],
      imageUrl: "/images/fontScreenshot.webp",
    },
    {
      title: "Dynamic Imports",
      descriptionPoints: [
        "Loads the component on demand, reducing initial bundle size and speeding up page load.",
      ],
      imageUrl: "/images/dynamicScreenshot.webp",
    },
    {
      title: "Image",
      descriptionPoints: [
        "Only loads when the image enters the viewport (lazy loading). Loads without layout shift",
      ],
      imageUrl: "/images/imageScreenshot.webp",
    },
  ],
};
