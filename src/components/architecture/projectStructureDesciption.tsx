"use client";

import { TYPES_DESCRIPTION } from "@/src/constants/architectureConstants";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function ProjectStructureDescription(props: {
  description: string;
}) {
  const { description } = props;

  return (
    <Box
      sx={{
        flex: 1,
        borderRadius: 2,
        border: 1,
        borderColor: "divider",
        bgcolor: "background.paper",
        px: 4,
        py: 3,
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
  if (description === TYPES_DESCRIPTION) {
    return (
      <div className="flex flex-col gap-2">
        <Typography>
          Here I have a types.tsx file where I export all the custom types I use
          in this project. For example, this simulated project directory is an
          array of MockFile. A MockFile consists of:
        </Typography>
        <Typography className="pl-6">
          • title: string (The name of the directory or folder. In this case,
          "types")
        </Typography>
        <Typography className="pl-6">
          • indentationLevel: number (Starts at 0, simulates project structure
          indentation. In this case, 1)
        </Typography>
        <Typography className="pl-6">
          • description: string (Either the directory's description, or a
          constant to signify special formatting. In this case, the constant
          TYPES_DESCRIPTION)
        </Typography>
        <Typography className="pl-6">
          • isFile: boolean? (Optional, to show the file icon. Not set for this
          directory.)
        </Typography>
        <Typography className="pl-6">
          • path: string? (Optional, used to simulate the file explorer behavior
          by expanding and collapsing appropriate paths)
        </Typography>
        <Typography>
          Keeping all the types in one directory makes it easy to modify and
          maintain them.
        </Typography>
      </div>
    );
  }

  return <Typography>{description}</Typography>;
}

/*
 "Here I have a types.tsx file where I export all the custom types I use in this project. For example, this simulated project directory is an array of MockFile, each of which has a title (in this case, types), an indentationLevel (int from 0-N to simulate indentation), a description (what you're reading now!), and an optional isFile flag to change the icon. Keeping all the types in one spot makes it easy to modify and maintain them.",
*/
