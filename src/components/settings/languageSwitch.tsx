"use client";

import { getCookie } from "@/src/app/getCookie";
import { setCookie } from "@/src/app/setCookie";
import { Switch, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

export default function LanguageSwitch() {
  const t = useTranslations();
  const [currentLocale, setCurrentLocale] = useState("en");

  useEffect(() => {
    async function getCurrentLocale() {
      const localeCookie = await getCookie("locale", "en");
      setCurrentLocale(localeCookie);
    }

    getCurrentLocale();
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let newLocale = "";
    if (currentLocale === "en") newLocale = "ru";
    else newLocale = "en";
    setCookie("locale", newLocale);
  };

  return (
    <div className="flex flex-col">
      <Typography>{t("language")}</Typography>
      <div className="flex">
        <Typography>{t("russian")}</Typography>
        <Switch checked={currentLocale === "en"} onChange={handleChange} />
        <Typography>{t("english")}</Typography>
      </div>
    </div>
  );
}
