import { ArchitectureEntries } from "../types/types";

export const performanceNextJS: ArchitectureEntries = {
  title: "Next.js Built-In Components",
  entries: [
    {
      title: "Font",
      descriptionPoints: [
        "Bundled with static assets, improving privacy and performance",
        "Preloaded fonts prevent flashes of unstyled text",
        "No layout shift - fallback font has same font size",
      ],
      imageUrl: "/images/fontScreenshot.webp",
    },
    {
      title: "Dynamic Imports",
      descriptionPoints: [
        "Load javascript modules and React components only when they're needed",
        "Reduces first contentful paint time",
      ],
      imageUrl: "/images/dynamicScreenshot.webp",
    },
    {
      title: "Image",
      descriptionPoints: [
        "Only loads images when they enter the viewport - leads to faster page loading",
        "Prevents layout shift while images are loading",
      ],
      imageUrl: "/images/imageScreenshot.webp",
    },
  ],
};

export const TYPES_DESCRIPTION = "TYPES_DESCRIPTION";
