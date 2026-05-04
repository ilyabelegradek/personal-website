"use client";

import {
  TYPES_DESCRIPTION,
  typesDescriptionList,
} from "@/src/constants/architectureConstants";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTranslations } from "next-intl";

export default function ProjectStructureDescription(props: {
  description: string;
}) {
  const { description } = props;

  return (
    <Box
      className="flex-1 px-4 py-3"
      sx={{
        borderRadius: 2,
        border: 1,
        borderColor: "divider",
        bgcolor: "background.paper",
        color: "text.primary",
        boxShadow: 1,
      }}
    >
      <Description description={description} />
    </Box>
  );
}

function Description(props: { description: string }) {
  const { description } = props;
  const t = useTranslations();

  if (description === TYPES_DESCRIPTION) {
    return (
      <div className="flex flex-col gap-2">
        <Typography>{t("arch_types_description")}</Typography>
        {typesDescriptionList.map((typeDescKey, index) => (
          <Typography
            className="pl-6"
            key={index}
          >{`• ${t(typeDescKey)}`}</Typography>
        ))}
        <Typography>{t("arch_types_desc_final")}</Typography>
      </div>
    );
  }

  return <Typography>{t(description)}</Typography>;
}
