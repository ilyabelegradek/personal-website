"use client";

import { Switch, Typography } from "@mui/material";
import { useContext } from "react";
import { ThemeContext } from "../../style/theme";

export default function Settings() {
  const themeCtx = useContext(ThemeContext);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    themeCtx.setDarkMode(event.target.checked);
  };

  return (
    <div>
      <Typography>Settings!</Typography>
      <Switch checked={themeCtx.darkMode} onChange={handleChange}></Switch>
    </div>
  );
}
