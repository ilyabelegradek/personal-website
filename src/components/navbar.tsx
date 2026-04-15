"use client";

import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import SettingsIcon from "@mui/icons-material/Settings";
import { NavigationItem } from "@/src/types/types";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useState } from "react";
import SettingsDrawer from "./settings/settingsDrawer";
import { usePathname } from "next/navigation";

const navigationItems: NavigationItem[] = [
  { stringKey: "home", ref: "/", icon: <HomeIcon /> },
  {
    stringKey: "work",
    ref: "/work",
    icon: <WorkHistoryIcon />,
  },
];

export default function NavBar() {
  const t = useTranslations();
  const [settingsDrawerOpen, setSettingsDrawerOpen] = useState(false);
  const pathname = usePathname();

  return (
    <Box sx={{ width: "100%" }}>
      <AppBar
        position="static"
        className="text-center"
        enableColorOnDark
        sx={{ backgroundImage: "none" }}
      >
        <Toolbar className="flex justify-between w-full">
          {navigationItems.map((navItem) => {
            return (
              <Link
                href={navItem.ref}
                key={navItem.ref}
                className={`mx-2.5 p-3 ${pathname === navItem.ref ? "border-b" : ""}`}
              >
                <Button endIcon={navItem.icon} color="secondary">
                  <Typography variant="titleFont" color={"#FFFFFF"}>
                    {t(navItem.stringKey)}
                  </Typography>
                </Button>
              </Link>
            );
          })}
          <div className="sm:flex-1" />
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="settings"
            onClick={() => setSettingsDrawerOpen(true)}
          >
            <SettingsIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      {settingsDrawerOpen && (
        <SettingsDrawer
          settingsDrawerOpen={settingsDrawerOpen}
          setSettingsDrawerOpen={setSettingsDrawerOpen}
        />
      )}
    </Box>
  );
}
