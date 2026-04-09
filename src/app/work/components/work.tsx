"use client";

import { styled, Tab, Tabs, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import AndroidWork from "./androidWork";
import ReactWork from "./reactWork";
import EducationWork from "./educationWork";
import KidChessWork from "./kidChessWork";

const tabList = ["Android", "React"];

const StyledTab = styled(Tab)(({ theme }) => ({
  "&.Mui-selected": {
    color: theme.customColors.tabColor,
  },
}));

export default function Work() {
  const [projectsTabValue, setProjectsTabValue] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setProjectsTabValue(newValue);
  };

  return (
    <div className="flex flex-col m-15 gap-5">
      <Typography variant="titleFont" className="text-3xl font-bold underline">
        {`General Motors (2020 - 2026)`}
      </Typography>
      <Tabs value={projectsTabValue} onChange={handleChange}>
        {mounted && tabList.map((tab) => <StyledTab label={tab} key={tab} />)}
      </Tabs>
      {projectsTabValue === 0 && <AndroidWork />}
      {projectsTabValue === 1 && <ReactWork />}
      <Typography variant="titleFont" className="text-3xl font-bold underline">
        {`University of Georgia (2016 - 2020)`}
      </Typography>
      <EducationWork />
      <Typography variant="titleFont" className="text-3xl font-bold underline">
        {`Kid Chess (2013 - 2019)`}
      </Typography>
      <KidChessWork />
    </div>
  );
}
