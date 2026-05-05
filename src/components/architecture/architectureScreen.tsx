import TableOfContentsComponent from "../reusable/tableOfContents/tableOfContentsComponent";
import ArchitectureCodeBlocks from "./code-blocks/architectureCodeBlocks";
import ArchitectureIntro from "./intro/architectureIntro";
import ArchitectureLocalization from "./localization/architectureLocalization";
import ArchitecturePDF from "./pdf/architecturePdf";
import ArchitecturePerformance from "./performance/architecturePerformance";
import ArchitectureProjectStructure from "./projectStructure/architectureProjectStructure";
import ArchitectureTheming from "./theming/architecureTheming";

export default function ArchitectureScreen() {
  return (
    <TableOfContentsComponent
      sections={[
        {
          titleStrKey: "arch_title",
          content: <ArchitectureIntro />,
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
          content: <ArchitectureTheming />,
        },
        {
          titleStrKey: "arch_localization",
          content: <ArchitectureLocalization />,
        },
        {
          titleStrKey: "arch_pdf",
          content: <ArchitecturePDF />,
        },
        {
          titleStrKey: "arch_code_blocks",
          content: <ArchitectureCodeBlocks />,
          hideDivider: true,
        },
      ]}
    />
  );
}
