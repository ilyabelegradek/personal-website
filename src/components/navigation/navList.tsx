"use client";

import { NavigationItem } from "@/src/types/types";
import { usePathname } from "next/navigation";
import HomeIcon from "@mui/icons-material/Home";
import ArchitectureIcon from "@mui/icons-material/Architecture";
import Link from "next/link";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useTranslations } from "next-intl";

const navigationItems: NavigationItem[] = [
  { stringKey: "home", ref: "/", icon: <HomeIcon /> },
  {
    stringKey: "arch_title",
    ref: "/architecture",
    icon: <ArchitectureIcon />,
  },
];

export default function NavList() {
  const t = useTranslations("Global");
  const pathname = usePathname();

  return (
    <>
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
    </>
  );
}
