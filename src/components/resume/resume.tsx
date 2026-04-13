"use client";

import { Button, Card, Typography } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import { useState } from "react";
import ResumeDownloadDialog from "./resumeDownloadDialog";
import { useTranslations } from "next-intl";
import ResumeLocalDialog from "./resumeLocalDialog";

export default function Resume() {
  const t = useTranslations();
  const [showResumeDownloadDialog, setShowResumeDownloadDialog] =
    useState(false);
  const [showResumeLocalDialog, setShowResumeLocalDialog] = useState(false);

  return (
    <>
      <Button
        startIcon={<DownloadIcon />}
        onClick={() => setShowResumeDownloadDialog(true)}
        variant="outlined"
      >
        <Typography variant="bodyFont">{t("resume")}</Typography>
      </Button>
      {showResumeDownloadDialog && (
        <ResumeDownloadDialog
          dialogOpen={showResumeDownloadDialog}
          setDialogOpen={setShowResumeDownloadDialog}
          setLocalResumeDialogOpen={setShowResumeLocalDialog}
        />
      )}
      {showResumeLocalDialog && (
        <ResumeLocalDialog
          dialogOpen={showResumeLocalDialog}
          setDialogOpen={setShowResumeLocalDialog}
        />
      )}
    </>
  );
}
