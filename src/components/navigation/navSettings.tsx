"use client";

import IconButton from "@mui/material/IconButton";
import { useState } from "react";
import dynamic from "next/dynamic";
import SvgIconLocal from "../resume/svgIconLocal";
import { ICONS } from "@/src/types/types";
const SettingsDrawer = dynamic(() => import("../settings/settingsDrawer"));

export default function NavSettings() {
  const [settingsDrawerOpen, setSettingsDrawerOpen] = useState(false);

  return (
    <>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="settings"
        onClick={() => setSettingsDrawerOpen(true)}
      >
        <SvgIconLocal
          id={ICONS.SETTINGS}
          fill="currentColor"
          width={35}
          height={35}
        />
      </IconButton>
      {settingsDrawerOpen && (
        <SettingsDrawer
          settingsDrawerOpen={settingsDrawerOpen}
          setSettingsDrawerOpen={setSettingsDrawerOpen}
        />
      )}
    </>
  );
}
