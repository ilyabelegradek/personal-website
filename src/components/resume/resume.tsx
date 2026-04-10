"use client";

import { Button, Card, Typography } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import { useState } from "react";
import ResumeDownloadDialog from "./resumeDownloadDialog";

export default function Resume() {
  const [showResumeDownloadDialog, setShowResumeDownloadDialog] =
    useState(false);

  return (
    <Card className="mt-5 sm:mt-20 rounded-4xl">
      <Button
        startIcon={<DownloadIcon />}
        onClick={() => setShowResumeDownloadDialog(true)}
      >
        <Typography variant="bodyFont">Resume</Typography>
      </Button>
      {showResumeDownloadDialog && (
        <ResumeDownloadDialog
          dialogOpen={showResumeDownloadDialog}
          setDialogOpen={setShowResumeDownloadDialog}
        />
      )}
    </Card>
  );
}
