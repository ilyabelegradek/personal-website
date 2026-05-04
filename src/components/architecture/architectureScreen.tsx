import TableOfContentsComponent from "../reusable/tableOfContents/tableOfContentsComponent";
import ArchitecturePerformance from "./architecturePerformance";
import ArchitectureProjectStructure from "./architectureProjectStructure";

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
