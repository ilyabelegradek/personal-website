import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { getTranslations } from "next-intl/server";
import { ReactNode } from "react";

export default async function CardWithContent(props: {
  titleKey: string;
  descriptionKeys?: string[] | undefined;
  content: ReactNode;
}) {
  const t = await getTranslations("Architecture");
  const { titleKey, descriptionKeys, content } = props;

  return (
    <Card className="max-w-screen sm:w-fit p-4 h-fit">
      <Typography
        className="flex font-bold justify-center underline"
        variant="titleFont"
      >
        {t(titleKey)}
      </Typography>
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
