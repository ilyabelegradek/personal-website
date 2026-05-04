"use client";

import Typography from "@mui/material/Typography";
import { useState } from "react";
import FolderIcon from "@mui/icons-material/Folder";
import ArticleIcon from "@mui/icons-material/Article";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import ProjectStructureDescription from "./projectStructureDesciption";
import { projectStructureList } from "@/src/constants/architectureConstants";
import { useTranslations } from "next-intl";

export default function ArchitectureProjectStructure() {
  const t = useTranslations();
  const [selectedFileDescription, setSelectedFileDescription] = useState(
    "arch_default_description",
  );
  const [expandedFolders, setExpandedFolders] = useState<Set<string>>(
    new Set(),
  );

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
    <div className="mx-3 sm:mx-14">
      <Typography>{t("arch_struct_explanation")}</Typography>
      <Card className="flex flex-col gap-8 mt-10 p-4 sm:flex-row sm:justify-between">
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
                key={file.path + file.title}
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
