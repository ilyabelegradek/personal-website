import ExpandableList from "@/src/components/expandableList";
import ExpandableSection from "@/src/components/expandableSection";

export default function KidChessWork() {
  const chessList = [
    "Collaborated with team of coaches to teach kids how to play chess",
  ];

  return (
    <ExpandableSection title="Summer Job">
      <ExpandableList listItems={chessList} />
    </ExpandableSection>
  );
}
