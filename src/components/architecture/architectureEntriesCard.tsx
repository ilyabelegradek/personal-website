import { ArchitectureEntries } from "@/src/types/types";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import CurrentEntryContent from "./currentEntryContent";
import { getTranslations } from "next-intl/server";

export default async function ArchitectureEntriesCard(props: {
  entries: ArchitectureEntries;
}) {
  const { entries } = props;
  const t = await getTranslations("Architecture");

  return (
    <Card className="my-4">
      <div className="flex flex-col items-center h-full">
        <Typography
          className="font-bold text-xl sm:text-2xl text-center p-4 sm:p-6"
          variant="titleFont"
        >
          {t(entries.title)}
        </Typography>
        <Divider className="w-full" />
        <Typography className="p-4 sm:p-6 text-start" variant="titleFont">
          {t(entries.description)}
        </Typography>
        <CurrentEntryContent entries={entries} />
      </div>
    </Card>
  );
}
