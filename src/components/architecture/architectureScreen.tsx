"use client";

import TableOfContentsComponent from "../reusable/tableOfContents/tableOfContentsComponent";
import ArchitecturePerformance from "./architecturePerformance";

export default function ArchitectureScreen() {
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
          content: <ArchitecturePerformance />,
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
