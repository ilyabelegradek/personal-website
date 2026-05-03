"use client";

import { TableOfContentsSection } from "@/src/types/types";
import { useTranslations } from "next-intl";
import useGetVisibleSections from "./useGetVisibleSections";
import SectionsView from "./sectionsView";
import TableOfContents from "./tableOfContents";

export default function TableOfContentsComponent(props: {
  sections: TableOfContentsSection[];
}) {
  const t = useTranslations();
  const { sections } = props;
  const { activeIDs } = useGetVisibleSections(
    sections.map((section) => section.titleStrKey),
  );

  return (
    <div className="flex gap-20 pl-68">
      <TableOfContents
        allIDs={sections.map((section) => section.titleStrKey)}
        activeIDs={activeIDs}
      />
      <SectionsView sections={sections} />
    </div>
  );
}
