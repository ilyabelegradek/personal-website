"use client";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import HomeIcon from "@mui/icons-material/Home";
import ArchitectureIcon from "@mui/icons-material/Architecture";
import SettingsIcon from "@mui/icons-material/Settings";
import { NavigationItem } from "@/src/types/types";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useState } from "react";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";

const SettingsDrawer = dynamic(() => import("../settings/settingsDrawer"));

const navigationItems: NavigationItem[] = [
  { stringKey: "home", ref: "/", icon: <HomeIcon /> },
  {
    stringKey: "architecture_title",
    ref: "/architecture",
    icon: <ArchitectureIcon />,
  },
];

export default function NavBar() {
  const t = useTranslations();
  const [settingsDrawerOpen, setSettingsDrawerOpen] = useState(false);
  const pathname = usePathname();

  return (
    <AppBar
      position="sticky"
      className="text-center"
      enableColorOnDark
      sx={{ backgroundImage: "none", top: 0 }}
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
      {settingsDrawerOpen && (
        <SettingsDrawer
          settingsDrawerOpen={settingsDrawerOpen}
          setSettingsDrawerOpen={setSettingsDrawerOpen}
        />
      )}
    </AppBar>
  );
}
