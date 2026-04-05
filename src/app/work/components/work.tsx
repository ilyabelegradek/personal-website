"use client";

import { Tab, Tabs, Typography } from "@mui/material";
import { useState } from "react";
import AndroidWork from "./androidWork";
import ReactWork from "./reactWork";
import SchoolWork from "./schoolWork";
import KidChessWork from "./kidChessWork";

export default function Work() {
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
        <Tab label="Android" />
        <Tab label="React" />
      </Tabs>
      {projectsTabValue === 0 && <AndroidWork />}
      {projectsTabValue === 1 && <ReactWork />}
      <Typography variant="titleFont" className="text-3xl font-bold underline">
        {`University of Georgia (2016 - 2020)`}
      </Typography>
      <SchoolWork />
      <Typography variant="titleFont" className="text-3xl font-bold underline">
        {`Kid Chess (2013 - 2019)`}
      </Typography>
      <KidChessWork />
    </div>
  );
}
