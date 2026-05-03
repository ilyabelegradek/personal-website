"use client";

import { ArchitectureEntries } from "@/src/types/types";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useState } from "react";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Icon from "@mui/material/Icon";

export default function ArchitectureEntriesCard(props: {
  entries: ArchitectureEntries;
}) {
  const { entries } = props;
  const [currentEntryIndex, setCurrentEntryIndex] = useState(0);
  const entry = entries.entries[currentEntryIndex];

  return (
    <Card className="mx-3 my-4 sm:mx-8 h-96">
      <div className="flex flex-col items-center h-full">
        <div className="flex-1 overflow-y-auto w-full">
          <div className="flex w-full flex-col text-center">
            <Typography
              className="font-bold text-xl sm:text-2xl text-center p-4 sm:p-6"
              variant="titleFont"
            >
              {entries.title}
            </Typography>
            <Divider className="w-full" />
            <div className="flex flex-col p-4 sm:p-6 md:text-left items-center md:items-start">
              <Typography className="font-bold" variant="titleFont">
                {entry.title}
              </Typography>
              {entry.descriptionPoints.map((descPoint, index) => (
                <Typography
                  className="max-w-prose leading-relaxed text-sm sm:text-base"
                  key={index}
                >
                  {`• ${descPoint}`}
                </Typography>
              ))}
              <div className="w-full max-w-180 overflow-hidden bg-slate-50 dark:bg-slate-900">
                <Image
                  src={entry.imageUrl}
                  alt={entry.title}
                  width={720}
                  height={480}
                  sizes="(max-width: 640px) 100vw, 720px"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex">
          <IconButton
            disabled={currentEntryIndex == 0}
            onClick={() => setCurrentEntryIndex((current) => current - 1)}
            size="large"
          >
            <Icon fontSize="large">
              <ChevronLeftIcon />
            </Icon>
          </IconButton>
          <IconButton
            disabled={currentEntryIndex == entries.entries.length - 1}
            onClick={() => setCurrentEntryIndex((current) => current + 1)}
            size="large"
          >
            <Icon fontSize="large">
              <ChevronRightIcon />
            </Icon>
          </IconButton>
        </div>
      </div>
    </Card>
  );
}
