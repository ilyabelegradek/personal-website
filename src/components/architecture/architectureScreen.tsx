"use client";

import TableOfContentsComponent from "../reusable/tableOfContents/tableOfContentsComponent";

export default function ArchitectureScreen() {
  /*
      "architecture_title": "Site Architecture",
  "architecture_theming": "Theming",
  "architecture_localization": "Localization",
  "architecture_performance": "Performance Optimization",
  "architecture_pdf": "PDF Downloading"

    */

  return (
    <TableOfContentsComponent
      sections={[
        {
          titleStrKey: "architecture_title",
          content: <div className="h-160"></div>,
        },
        {
          titleStrKey: "architecture_theming",
          content: <div className="h-160"></div>,
        },
        {
          titleStrKey: "architecture_localization",
          content: <div className="h-160"></div>,
        },
        {
          titleStrKey: "architecture_performance",
          content: <div className="h-160"></div>,
        },
        {
          titleStrKey: "architecture_pdf",
          content: <div className="h-160"></div>,
          hideDivider: true,
        },
      ]}
    />
  );
}
