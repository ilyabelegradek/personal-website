"use client";

import { ArchitectureEntries, ICONS } from "@/src/types/types";
import Typography from "@mui/material/Typography";
import { useTranslations } from "next-intl";
import { useState } from "react";
import Image from "next/image";
import IconButton from "@mui/material/IconButton";
import SvgIconLocal from "../resume/svgIconLocal";

export default function CurrentEntryContent(props: {
  entries: ArchitectureEntries;
}) {
  const { entries } = props;
  const t = useTranslations("Architecture");
  const [currentEntryIndex, setCurrentEntryIndex] = useState(0);
  const entry = entries.entries[currentEntryIndex];

  return (
    <>
      <div className="flex flex-col md:flex-row p-4 sm:p-6 items-center md:items-start sm: justify-between w-full gap-6">
        <div className="flex-1 flex flex-col items-center md:items-start">
          <Typography className="font-bold" variant="titleFont">
            {t(entry.title)}
          </Typography>
          {entry.descriptionPoints.map((descPoint, index) => (
            <Typography
              className="max-w-prose leading-relaxed text-sm sm:text-base text-start"
              key={index}
            >
              {`• ${t(descPoint)}`}
            </Typography>
          ))}
        </div>
        <div className="overflow-hidden">
          <Image
            priority
            src={entry.imageUrl}
            alt={entry.title}
            width={471}
            height={63}
            style={{ width: "auto", height: "auto" }}
          />
        </div>
      </div>
      <div className="flex">
        <IconButton
          disabled={currentEntryIndex == 0}
          onClick={() => setCurrentEntryIndex((current) => current - 1)}
          size="large"
          aria-label="next entry"
        >
          <SvgIconLocal
            id={ICONS.CHEVRONLEFT}
            fill="currentColor"
            width={35}
            height={35}
          />
        </IconButton>
        <IconButton
          disabled={currentEntryIndex == entries.entries.length - 1}
          onClick={() => setCurrentEntryIndex((current) => current + 1)}
          size="large"
          aria-label="previous entry"
        >
          <SvgIconLocal
            id={ICONS.CHEVRONRIGHT}
            fill="currentColor"
            width={35}
            height={35}
          />
        </IconButton>
      </div>
    </>
  );
}
