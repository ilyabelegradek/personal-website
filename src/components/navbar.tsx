"use client";

import { Box, AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SettingsIcon from "@mui/icons-material/Settings";
import { NavigationItem } from "@/src/types/types";
import Link from "next/link";
import EmailCopyIcon from "./emailIcon";
import { useTranslations } from "next-intl";

const navigationItems: NavigationItem[] = [
  {
    stringKey: "skills",
    ref: "/skills",
  },
  {
    stringKey: "work-experience",
    ref: "/work",
  },
];

export default function NavBar() {
  const t = useTranslations();

  return (
    <Box sx={{ width: "100%" }}>
      <AppBar position="static" className="text-center">
        <Toolbar>
          <Link href="/">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="home"
            >
              <HomeIcon />
            </IconButton>
          </Link>
          {navigationItems.map((navItem) => {
            return (
              <Link
                href={navItem.ref}
                key={navItem.ref}
                className="mx-2.5 pt-0.5"
              >
                <Typography variant="gelasio">
                  {t(navItem.stringKey)}
                </Typography>
              </Link>
            );
          })}
          <div className="flex-1" />
          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/in/ilya-belegradek/"
              target="_blank"
            >
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="linkedIn"
              >
                <LinkedInIcon />
              </IconButton>
            </a>
            <EmailCopyIcon />
            <Link href={"/settings"}>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="settings"
              >
                <SettingsIcon />
              </IconButton>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
