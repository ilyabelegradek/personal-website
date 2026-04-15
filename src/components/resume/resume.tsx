"use client";

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
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
