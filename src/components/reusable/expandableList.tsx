import Typography from "@mui/material/Typography";

export default function ExpandableList(props: { listItems: string[] }) {
  const { listItems } = props;

  return (
    <div className="flex flex-col">
      {listItems.map((listItem) => (
        <Typography variant="bodyFont" key={listItem}>
          {`• ${listItem}`}
        </Typography>
      ))}
    </div>
  );
}
