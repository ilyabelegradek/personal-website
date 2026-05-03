import { MockFile } from "@/src/types/types";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import FolderIcon from "@mui/icons-material/Folder";
import Card from "@mui/material/Card";
import { Box } from "@mui/material";

export default function ArchitectureProjectStructure() {
  const [selectedFileDescription, setSelectedFileDescription] = useState(
    "Click a folder to see a short description.",
  );
  const projectStructureList: MockFile[] = [
    {
      title: "public",
      level: 0,
      description:
        "The Next.js convention is that anything in the public folder can be referenced in my code starting from the base url /. This is a good place to keep static files.",
    },
    {
      title: "fonts",
      level: 1,
      description:
        "Here I store all the font files I use in the application as .ttf files. Because they're in 'public', I can access them anywhere in the app.",
    },
    {
      title: "icons",
      level: 1,
      description:
        "Here I store a sprite file containing SVG icons used by my downloadable resume.",
    },
    {
      title: "images",
      level: 1,
      description:
        "This folder contains all the images used in my app. This makes it easy for Next.js's Image components to access them - and for me to find them if I need to make an update.",
    },
    {
      title: "strings",
      level: 1,
      description:
        "This directory stores localization files for each language: en.json, ru.json, etc. If I want to support a new language, I simply add a new json file here.",
    },
  ];

  return (
    <div>
      <Typography>
        My codebase needs to be intuitive to navigate so I can easily make
        updates and modifications. It also needs to be scalable, readable, and
        follow best practices to demonstrate my competency as a developer.
      </Typography>
      <Card className="flex justify-between gap-8 sm:ml-25 sm:mr-45 mt-10 p-4">
        <div className="flex flex-col gap-2">
          {projectStructureList.map((file) => (
            <Box
              sx={{
                marginLeft: 4 * file.level,
                px: 2,
                borderRadius: 1,
                cursor: "pointer",
                ...(selectedFileDescription === file.description
                  ? {
                      bgcolor: "secondary.main",
                      color: "secondary.contrastText",
                      fontWeight: "medium",
                    }
                  : {
                      "&:hover": { bgcolor: "action.hover" },
                    }),
              }}
              onClick={() => setSelectedFileDescription(file.description)}
              key={file.title}
            >
              <Typography className="flex items-center gap-1">
                <FolderIcon fontSize="inherit" />
                {file.title}
              </Typography>
            </Box>
          ))}
        </div>
        <Typography
          sx={{
            minWidth: 280,
            maxWidth: 540,
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
          {selectedFileDescription}
        </Typography>
      </Card>
    </div>
  );
}
