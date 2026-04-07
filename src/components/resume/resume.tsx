"use client";

import { Button, Card, Typography } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import { pdf } from "@react-pdf/renderer";
import ResumePDF from "./resumePDF";
import { useState } from "react";
import ResumeDownloadDialog from "./resumeDownloadDialog";

export default function Resume() {
  // async function saveResumeToPdf() {
  //   const blob = await pdf(<ResumePDF />).toBlob();
  //   const link = document.createElement("a");
  //   link.href = URL.createObjectURL(blob);
  //   link.setAttribute("download", "Ilya_Belegradek_Resume.pdf");
  //   document.body.appendChild(link);
  //   link.click();
  //   document.body.removeChild(link);
  // }

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
