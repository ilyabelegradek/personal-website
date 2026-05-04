import { MockFile } from "@/src/types/types";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import FolderIcon from "@mui/icons-material/Folder";
import ArticleIcon from "@mui/icons-material/Article";
import Card from "@mui/material/Card";
import { Box } from "@mui/material";
import ProjectStructureDescription from "./projectStructureDesciption";
import { TYPES_DESCRIPTION } from "@/src/constants/architectureConstants";

export default function ArchitectureProjectStructure() {
  const [selectedFileDescription, setSelectedFileDescription] = useState(
    "Click a folder to see its children and a short description. Not every directory or file is represented - that felt excessive!",
  );
  const [expandedFolders, setExpandedFolders] = useState<Set<string>>(
    new Set(),
  );

  const projectStructureList: MockFile[] = [
    {
      title: "public",
      indentationLevel: 0,
      description:
        "The Next.js convention is that anything in the public folder can be referenced anywhere in the codebase starting from the base url /. This is a good place to keep static files.",
      path: "public",
    },
    {
      title: "fonts",
      indentationLevel: 1,
      description:
        "Here I store all the font files I use in the application as .ttf files. Because they're in 'public', I can access them anywhere in the app.",
      path: "public/fonts",
    },
    {
      title: "icons",
      indentationLevel: 1,
      description:
        "Here I store a sprite file containing SVG icons used by my downloadable resume.",
      path: "public/icons",
    },
    {
      title: "images",
      indentationLevel: 1,
      description:
        "This folder contains all the images used in my app. This makes it easy for Next.js's Image components to access them - and for me to find them if I need to make an update.",
      path: "public/images",
    },
    {
      title: "strings",
      indentationLevel: 1,
      description:
        "This directory stores localization files for each language: en.json, ru.json, etc. If I want to support a new language, I simply add a new json file here.",
      path: "public/strings",
    },
    {
      title: "src",
      indentationLevel: 0,
      description:
        "Next.js supports the common pattern of placing application code in a 'src' directory to separate it from configuration files (generally in the root directory).",
      path: "src",
    },
    {
      title: "app",
      indentationLevel: 1,
      description:
        "This is the folder used by the Next.js app router. Every route in the site has to be declared in this directory.",
      path: "src/app",
    },
    {
      title: "architecture",
      indentationLevel: 2,
      description:
        "This is the folder for the /architecture route - the screen that you're on now! It has its own layout.tsx and page.tsx.",
      path: "src/app/architecture",
    },
    {
      title: "disclosures",
      indentationLevel: 2,
      description:
        "This is the folder for the /disclosures route - which you can view by opening the settings in the top right and clicking on the 'Disclosures' link.",
      path: "src/app/disclosures",
    },
    {
      title: "favicon.ico",
      indentationLevel: 2,
      description:
        "The icon you see on the browser tab. Next.js convention dictates this icon is placed in the app/ directory.",
      isFile: true,
      path: "src/app/favicon.ico",
    },
    {
      title: "layout.tsx",
      indentationLevel: 2,
      description:
        "Every Next.js route needs a layout.tsx and a page.tsx. Since this is the root layout, it wraps all the other layouts, so in this file I wrap the app content in my theme, localization, and other providers.",
      isFile: true,
      path: "src/app/layout.tsx",
    },
    {
      title: "page.tsx",
      indentationLevel: 2,
      description:
        "This renders the actual content for the route: in this case, the home route at /. To keep the router lightweight, all I do here is call a react component home.tsx, which is stored in the 'components' directory below.",
      isFile: true,
      path: "src/app/page.tsx",
    },
    {
      title: "not-found.tsx",
      indentationLevel: 2,
      description:
        "This is a simple 404 page for any invalid route. Next.js handles this functionality by default, but I created htis page so I could have a screen that was consistent with the look and feel of my app.",
      isFile: true,
      path: "src/app/not-found.tsx",
    },
    {
      title: "components",
      indentationLevel: 1,
      description:
        "This folder contains the React components used to render the various screens of my application. The directory is split into sub-directories by screen and function.",
      path: "src/components",
    },
    {
      title: "i18n",
      indentationLevel: 1,
      description:
        "This folder contains a configuration file (request.ts) used to configure my localization library. Both the directory and the file have to have that exact name.",
      path: "src/i18n",
    },
    {
      title: "types",
      indentationLevel: 1,
      description: TYPES_DESCRIPTION,
      path: "src/types",
    },
  ];

  const isPathVisible = (filePath: string | undefined): boolean => {
    if (!filePath) return true;
    const parts = filePath.split("/");
    for (let i = 1; i < parts.length; i++) {
      const ancestorPath = parts.slice(0, i).join("/");
      if (!expandedFolders.has(ancestorPath)) {
        return false;
      }
    }
    return true;
  };

  return (
    <div>
      <Typography>
        My codebase needs to be intuitive to navigate so I can easily make
        updates and modifications. It also needs to be scalable, readable, and
        follow best practices to demonstrate my competency as a developer.
      </Typography>
      <Card className="flex justify-between gap-8 sm:ml-25 sm:mr-45 mt-10 p-4">
        <div className="flex flex-col gap-2">
          {projectStructureList
            .filter((file) => isPathVisible(file.path))
            .map((file) => (
              <Box
                sx={{
                  marginLeft: 4 * file.indentationLevel,
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
                onClick={() => {
                  setSelectedFileDescription(file.description);
                  if (!file.isFile && file.path) {
                    const newExpanded = new Set(expandedFolders);
                    if (newExpanded.has(file.path)) {
                      newExpanded.delete(file.path);
                    } else {
                      newExpanded.add(file.path);
                    }
                    setExpandedFolders(newExpanded);
                  }
                }}
                key={file.title}
              >
                <Typography className="flex items-center gap-1">
                  {file.isFile ? (
                    <ArticleIcon fontSize="inherit" />
                  ) : (
                    <FolderIcon fontSize="inherit" />
                  )}
                  {file.title}
                </Typography>
              </Box>
            ))}
        </div>
        <ProjectStructureDescription description={selectedFileDescription} />
      </Card>
    </div>
  );
}
