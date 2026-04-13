"use client";

import { getCookie } from "@/src/app/getCookie";
import { setCookie } from "@/src/app/setCookie";
import {
  DEFAULT_LOCALE,
  LOCALE_COOKIE_NAME,
  LOCALES,
} from "@/src/constants/localeConstants";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function LanguageSelect() {
  const t = useTranslations();
  const [currentLocale, setCurrentLocale] = useState(DEFAULT_LOCALE);
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getCurrentLocale() {
      const localeCookie = await getCookie(LOCALE_COOKIE_NAME, DEFAULT_LOCALE);
      setCurrentLocale(localeCookie);
      setLoading(false);
    }

    getCurrentLocale();
  }, []);

  const handleChange = async (event: SelectChangeEvent) => {
    setLoading(true);
    const newLocale = event.target.value;
    setCurrentLocale(newLocale);
    await setCookie(LOCALE_COOKIE_NAME, newLocale);
    router.refresh();
    setLoading(false);
  };

  return (
    <FormControl fullWidth disabled={loading}>
      <InputLabel id="locale-label">{t("language")}</InputLabel>
      <Select
        labelId="locale-label"
        id="locale"
        value={currentLocale}
        label={t("language")}
        onChange={handleChange}
      >
        {LOCALES.map((locale) => (
          <MenuItem value={locale.value} key={locale.value}>
            <Typography>{t(locale.displayName)}</Typography>
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
