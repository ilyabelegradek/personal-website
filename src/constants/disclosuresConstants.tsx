import { CustomRichText } from "../types/types";

export const disclosureTabList = ["privacy_policy", "attribution"];

export const attributionList: CustomRichText[] = [
  {
    strKey: "attribution_next",
    argumentName: "nextjs",
    link: "https://nextjs.org/",
  },
  {
    strKey: "attribution_react",
    argumentName: "react",
    link: "https://react.dev/",
  },
  {
    strKey: "attribution_mui",
    argumentName: "mui",
    link: "https://mui.com/material-ui/",
  },
  {
    strKey: "attribution_material_icons",
    argumentName: "muiIcons",
    link: "https://mui.com/material-ui/material-icons/",
  },
  {
    strKey: "attribution_next_intl",
    argumentName: "nextIntl",
    link: "https://next-intl.dev/",
  },
  {
    strKey: "attribution_react_pdf",
    argumentName: "pdfRenderer",
    link: "https://www.npmjs.com/package/@react-pdf/renderer",
  },
  {
    strKey: "attribution_tailwind",
    argumentName: "tailwind",
    link: "https://tailwindcss.com/",
  },
  {
    strKey: "attribution_emotion",
    argumentName: "emotion",
    link: "https://mui.com/material-ui/integrations/interoperability/",
  },
  {
    strKey: "attribution_code_blocks",
    argumentName: "syntaxHighlighter",
    link: "https://www.npmjs.com/package/react-syntax-highlighter",
  },
];

export const privacyList: CustomRichText[] = [
  {
    strKey: "privacy_vercel_analytics",
    argumentName: "vercelAnalytics",
    link: "https://vercel.com/docs/analytics",
  },
  {
    strKey: "privacy_vercel_speed",
    argumentName: "vercelSpeedInsights",
    link: "https://vercel.com/docs/speed-insights",
  },
  { strKey: "privacy_cookies" },
  { strKey: "privacy_third_party" },
];
