"use client";

import { TableOfContentsSection } from "@/src/types/types";
import { Divider, Typography } from "@mui/material";
import { useTranslations } from "next-intl";

export default function SectionsView(props: {
  sections: TableOfContentsSection[];
}) {
  const { sections } = props;
  const t = useTranslations();

  return (
    <div className="w-full pb-8 pr-8 pt-8">
      {sections.map((section) => (
        <section
          id={section.titleStrKey}
          key={section.titleStrKey}
          className="flex flex-col gap-6 mb-6 scroll-mt-24"
        >
          <Typography>{t(section.titleStrKey)}</Typography>
          {section.content}
          {!section.hideDivider && <Divider />}
        </section>
      ))}
    </div>
  );
}
