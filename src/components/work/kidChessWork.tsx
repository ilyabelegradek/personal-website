import ExpandableList from "@/src/components/reusable/expandableList";
import ExpandableSection from "@/src/components/reusable/expandableSection";
import { chessList } from "@/src/constants/workConstants";
import { useTranslations } from "next-intl";

export default function KidChessWork() {
  const t = useTranslations();

  return (
    <ExpandableSection title={t("chess_summer")}>
      <ExpandableList listItems={chessList.map((stringKey) => t(stringKey))} />
    </ExpandableSection>
  );
}
