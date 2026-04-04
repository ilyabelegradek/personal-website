"use client";

import { Tab, Tabs, Typography } from "@mui/material";
import { useState } from "react";
import AndroidWork from "./androidWork";
import ReactWork from "./reactWork";

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
    </div>
  );
}
