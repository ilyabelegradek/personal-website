"use client";

import { Tab, Tabs, Typography } from "@mui/material";
import { useState } from "react";
import AndroidWork from "./androidWork";
import ReactWork from "./reactWork";
import EducationWork from "./educationWork";
import KidChessWork from "./kidChessWork";
import { useTranslations } from "next-intl";

const tabList = ["Android", "React"];

export default function Work() {
  const t = useTranslations();
  const [projectsTabValue, setProjectsTabValue] = useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setProjectsTabValue(newValue);
  };

  return (
    <div className="flex flex-col m-15 gap-5">
      <Typography variant="titleFont" className="text-3xl font-bold underline">
        {`General Motors (2020 - 2026)`}
      </Typography>
      <Tabs value={projectsTabValue} onChange={handleChange}>
        {tabList.map((tab) => (
          <Tab label={tab} key={tab} />
        ))}
      </Tabs>
      {projectsTabValue === 0 && <AndroidWork />}
      {projectsTabValue === 1 && <ReactWork />}
      <Typography variant="titleFont" className="text-3xl font-bold underline">
        {t("education_uga")}
      </Typography>
      <EducationWork />
      <Typography variant="titleFont" className="text-3xl font-bold underline">
        {t("chess_title")}
      </Typography>
      <KidChessWork />
    </div>
  );
}
