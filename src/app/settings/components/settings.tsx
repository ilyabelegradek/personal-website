"use client";

import { Switch, Typography } from "@mui/material";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Settings() {
  const { theme, setTheme } = useTheme();
  const [darkModeSwitch, setDarkModeSwitch] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const darkModeStr = event.target.checked ? "dark" : "light";
    setTheme(darkModeStr);
  };

  useEffect(() => {
    setDarkModeSwitch(theme === "dark");
  }, [theme]);

  return (
    <div>
      <Typography>Settings!</Typography>
      <Switch checked={darkModeSwitch} onChange={handleChange}></Switch>
    </div>
  );
}
