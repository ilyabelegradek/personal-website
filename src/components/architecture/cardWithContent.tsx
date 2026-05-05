import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { getTranslations } from "next-intl/server";
import { ReactNode } from "react";

export default async function CardWithContent(props: {
  titleKey?: string;
  descriptionKey?: string;
  descriptionKeys?: string[] | undefined;
  content: ReactNode;
  fullWidth?: boolean | undefined;
}) {
  const t = await getTranslations("Architecture");
  const { titleKey, descriptionKey, descriptionKeys, content, fullWidth } =
    props;

  return (
    <Card
      className="max-w-screen sm:w-fit p-4 h-fit"
      sx={
        fullWidth
          ? { width: "100%" }
          : {
              "@media (width >= 640px)": {
                width: "fit-content",
              },
            }
      }
    >
      {titleKey && (
        <Typography
          className="flex font-bold justify-center underline"
          variant="titleFont"
        >
          {t(titleKey)}
        </Typography>
      )}
      {descriptionKey && (
        <Typography className="justify-center">{t(descriptionKey)}</Typography>
      )}
      {descriptionKeys &&
        descriptionKeys.map((descKey) => (
          <Typography
            className="leading-relaxed text-sm sm:text-base text-start"
            key={descKey}
          >
            {`• ${t(descKey)}`}
          </Typography>
        ))}
      {content}
    </Card>
  );
}
