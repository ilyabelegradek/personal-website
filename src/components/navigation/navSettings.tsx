"use client";

import IconButton from "@mui/material/IconButton";
import SettingsIcon from "@mui/icons-material/Settings";
import { useState } from "react";
import dynamic from "next/dynamic";
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
        <SettingsIcon />
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
