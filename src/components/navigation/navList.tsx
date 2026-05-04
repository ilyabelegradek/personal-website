"use client";

import { ICONS, NavigationItem } from "@/src/types/types";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Typography from "@mui/material/Typography";
import { useTranslations } from "next-intl";
import SvgIconLocal from "../resume/svgIconLocal";

const navigationItems: NavigationItem[] = [
  { stringKey: "home", ref: "/", iconID: ICONS.HOME },
  {
    stringKey: "arch_title",
    ref: "/architecture",
    iconID: ICONS.ARCHITECTURE,
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
            <div className="flex gap-2 items-center">
              <Typography variant="titleFont" color={"#FFFFFF"}>
                {t(navItem.stringKey)}
              </Typography>
              <SvgIconLocal id={navItem.iconID} fill={"#FFFFFF"} />
            </div>
          </Link>
        );
      })}
    </>
  );
}
