"use client";

import { Switch, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";

export default function LanguageSwitch() {
  const t = useTranslations();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {};

  return (
    <div className="flex flex-col">
      <Typography>{t("language")}</Typography>
      <div className="flex">
        <Typography>{t("russian")}</Typography>
        <Switch checked={true} onChange={handleChange} />
        <Typography>{t("english")}</Typography>
      </div>
    </div>
  );
}
