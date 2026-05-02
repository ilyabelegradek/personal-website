"use client";

import {
  attributionList,
  disclosureTabList,
  privacyList,
} from "@/src/constants/disclosuresConstants";
import { Tabs, Tab, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import { useState } from "react";
import StringWithHyperlink from "../reusable/stringWithHyperlink";

export default function DisclosuresScreen() {
  const t = useTranslations();
  const [disclosureTabValue, setDisclosureTabValue] = useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setDisclosureTabValue(newValue);
  };

  return (
    <div className="flex flex-col m-15 gap-5">
      <Typography variant="titleFont" className="text-3xl font-bold underline">
        {t("disclosures_site")}
      </Typography>
      <Tabs value={disclosureTabValue} onChange={handleChange}>
        {disclosureTabList.map((tab) => (
          <Tab label={t(tab)} key={tab} />
        ))}
      </Tabs>
      {disclosureTabValue == 0 &&
        privacyList.map((richText) => (
          <StringWithHyperlink richText={richText} key={richText.strKey} />
        ))}
      {disclosureTabValue == 1 &&
        attributionList.map((richText) => (
          <StringWithHyperlink richText={richText} key={richText.strKey} />
        ))}
    </div>
  );
}
