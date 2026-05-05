"use client";

import { ReactNode } from "react";
import { Typography, useTheme } from "@mui/material";
import { useTranslations } from "next-intl";
import { CustomRichText } from "@/src/types/types";

export default function StringWithHyperlink(props: {
  richText: CustomRichText;
  translationsNamespace?: string | undefined;
  hideBullet?: boolean | undefined;
}) {
  const { richText, translationsNamespace, hideBullet } = props;
  const { strKey, argumentName, link } = richText;
  const t = useTranslations(translationsNamespace ?? "Disclosures");
  const theme = useTheme();

  if (argumentName === undefined || link === undefined) {
    return <Typography variant="bodyFont">• {t(strKey)}</Typography>;
  }

  return (
    <Typography variant="bodyFont">
      {!hideBullet && "• "}
      {t.rich(strKey, {
        [argumentName]: (chunks: ReactNode) => (
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="underline"
            style={{ color: theme.palette.primary.main }}
          >
            {chunks}
          </a>
        ),
      })}
    </Typography>
  );
}
