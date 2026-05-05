"use client";

import { disclosureTabList } from "@/src/constants/disclosuresConstants";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { useTranslations } from "next-intl";
import { useState } from "react";
import PrivacyContent from "./privacyContent";
import dynamic from "next/dynamic";
const AttributionContent = dynamic(() => import("./attributionContent"));

export default function DisclosuresContent() {
  const t = useTranslations("Disclosures");
  const [disclosureTabValue, setDisclosureTabValue] = useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setDisclosureTabValue(newValue);
  };

  return (
    <>
      <Tabs value={disclosureTabValue} onChange={handleChange}>
        {disclosureTabList.map((tab) => (
          <Tab label={t(tab)} key={tab} />
        ))}
      </Tabs>
      {disclosureTabValue == 0 && <PrivacyContent />}
      {disclosureTabValue == 1 && <AttributionContent />}
    </>
  );
}
