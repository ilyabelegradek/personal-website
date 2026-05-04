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
import { useTranslations } from "next-intl";

export default function ArchitectureEntriesCard(props: {
  entries: ArchitectureEntries;
}) {
  const { entries } = props;
  const [currentEntryIndex, setCurrentEntryIndex] = useState(0);
  const entry = entries.entries[currentEntryIndex];
  const t = useTranslations();

  return (
    <Card className="my-4">
      <div className="flex flex-col items-center h-full">
        <div className="flex-1 w-full">
          <div className="flex w-full flex-col text-center">
            <Typography
              className="font-bold text-xl sm:text-2xl text-center p-4 sm:p-6"
              variant="titleFont"
            >
              {t(entries.title)}
            </Typography>
            <Divider className="w-full" />
            <Typography className="p-4 sm:p-6 text-start" variant="titleFont">
              {t(entries.description)}
            </Typography>
            <div className="flex flex-col md:flex-row p-4 sm:p-6 md:text-left items-center md:items-start gap-6">
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
                  src={entry.imageUrl}
                  alt={entry.title}
                  width={471}
                  height={63}
                  style={{ width: "auto", height: "auto" }}
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
