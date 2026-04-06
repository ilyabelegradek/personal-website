"use client";

import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  styled,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import SettingsIcon from "@mui/icons-material/Settings";
import { NavigationItem } from "@/src/types/types";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import SettingsDrawer from "./settingsDrawer";
import { usePathname } from "next/navigation";

const navigationItems: NavigationItem[] = [
  { stringKey: "home", ref: "/", icon: <HomeIcon /> },
  {
    stringKey: "skills",
    ref: "/skills",
    icon: <MenuBookIcon />,
  },
  {
    stringKey: "work",
    ref: "/work",
    icon: <WorkHistoryIcon />,
  },
];

const NavHeaderButton = styled(Button)(({ theme }) => ({
  "& .MuiButton-endIcon svg": {
    color: theme.customColors.navBarHeader,
  },
}));

export default function NavBar() {
  const t = useTranslations();
  const [settingsDrawerOpen, setSettingsDrawerOpen] = useState(false);
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Box sx={{ width: "100%" }}>
      <AppBar position="static" className="text-center">
        <Toolbar>
          {mounted &&
            navigationItems.map((navItem) => {
              return (
                <Link
                  href={navItem.ref}
                  key={navItem.ref}
                  className={`mx-2.5 pt-0.5 ${pathname === navItem.ref ? "border-b" : ""}`}
                >
                  <NavHeaderButton endIcon={navItem.icon} color="secondary">
                    <Typography variant="titleFont" color={"#FFFFFF"}>
                      {t(navItem.stringKey)}
                    </Typography>
                  </NavHeaderButton>
                </Link>
              );
            })}
          <div className="flex-1" />
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
