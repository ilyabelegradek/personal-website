"use client";

import { IconButton, Snackbar, Typography } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import { useState } from "react";

const email = "ilyushabelegradek@gmail.com";

export default function EmailCopyIcon() {
  const [copyText, setCopyText] = useState("");

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopyText("Email Copied!");
  };

  return (
    <>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="email"
        onClick={copyEmailToClipboard}
      >
        <EmailIcon />
      </IconButton>
      {copyText !== "" && (
        <Snackbar
          anchorOrigin={{ horizontal: "center", vertical: "bottom" }}
          open={copyText !== ""}
          onClose={() => setCopyText("")}
          message={<Typography>{copyText}</Typography>}
          sx={{
            left: "50%",
            transform: "translateX(-50%)",
            minWidth: "unset",
            width: "fit-content",
            height: "fit-content",
          }}
          autoHideDuration={2500}
        />
      )}
    </>
  );
}
