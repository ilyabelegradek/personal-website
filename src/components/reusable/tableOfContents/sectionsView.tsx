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
    <div className="w-full pb-8 pt-8 pl-35 sm:pl-55">
      {sections.map((section) => (
        <section
          id={section.titleStrKey}
          key={section.titleStrKey}
          className="flex flex-col gap-6 mb-6 scroll-mt-24"
        >
          <Typography
            className="flex justify-center font-bold underline sm:text-3xl"
            variant="titleFont"
          >
            {t(section.titleStrKey)}
          </Typography>
          {section.content}
          {!section.hideDivider && <Divider />}
        </section>
      ))}
    </div>
  );
}
