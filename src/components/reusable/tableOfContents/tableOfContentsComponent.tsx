import { TableOfContentsSection } from "@/src/types/types";
import SectionsView from "./sectionsView";
import TableOfContents from "./tableOfContents";

export default function TableOfContentsComponent(props: {
  sections: TableOfContentsSection[];
}) {
  const { sections } = props;

  return (
    <div className="flex gap-20 overflow-x-hidden">
      <TableOfContents
        allIDs={sections.map((section) => section.titleStrKey)}
      />
      <SectionsView sections={sections} />
    </div>
  );
}
