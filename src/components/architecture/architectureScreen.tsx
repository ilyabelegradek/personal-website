"use client";

import dynamic from "next/dynamic";
const TableOfContentsComponent = dynamic(
  () => import("../reusable/tableOfContents/tableOfContentsComponent"),
);
const ArchitecturePerformance = dynamic(
  () => import("./architecturePerformance"),
);
const ArchitectureProjectStructure = dynamic(
  () => import("./architectureProjectStructure"),
);

export default function ArchitectureScreen() {
  return (
    <TableOfContentsComponent
      sections={[
        {
          titleStrKey: "arch_title",
          content: <div className="h-160"></div>,
        },
        {
          titleStrKey: "arch_perf",
          content: <ArchitecturePerformance />,
        },
        {
          titleStrKey: "arch_proj_struct",
          content: <ArchitectureProjectStructure />,
        },
        {
          titleStrKey: "arch_theming",
          content: <div className="h-160"></div>,
        },
        {
          titleStrKey: "arch_localization",
          content: <div className="h-160"></div>,
        },

        {
          titleStrKey: "arch_pdf",
          content: <div className="h-160"></div>,
          hideDivider: true,
        },
      ]}
    />
  );
}
