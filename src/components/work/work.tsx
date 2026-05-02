"use client";

import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import AndroidWork from "./androidWork";
import ReactWork from "./reactWork";
import EducationWork from "./educationWork";
import KidChessWork from "./kidChessWork";
import { useTranslations } from "next-intl";
import { workTabList } from "@/src/constants/workConstants";

export default function Work() {
  const t = useTranslations();
  const [projectsTabValue, setProjectsTabValue] = useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setProjectsTabValue(newValue);
  };

  return (
    <div className="flex flex-col m-15 gap-5">
      <Typography variant="titleFont" className="text-3xl font-bold underline">
        {t("work-title")}
      </Typography>
      <Tabs value={projectsTabValue} onChange={handleChange}>
        {workTabList.map((tab) => (
          <Tab label={t(tab)} key={tab} />
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
