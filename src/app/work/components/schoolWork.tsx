import ExpandableList from "@/src/components/expandableList";
import ExpandableSection from "@/src/components/expandableSection";

export default function SchoolWork() {
  const schoolworkList = [
    "Computer Science Major",
    "Statistics Minor",
    "New Media Certificate",
    "Data Science Certificate",
    "3.75 GPA",
    "Graduated with Honors",
  ];

  return (
    <ExpandableSection title="Bachelor's Degree">
      <ExpandableList listItems={schoolworkList} />
    </ExpandableSection>
  );
}
