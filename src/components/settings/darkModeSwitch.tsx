import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { FormControlLabel } from "@mui/material";
import { useTranslations } from "next-intl";
import { StyledSwitch } from "../styledSwitch";

export default function DarkModeSwitch() {
  const { theme, setTheme } = useTheme();
  const [darkModeSwitch, setDarkModeSwitch] = useState(false);
  const t = useTranslations();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const darkModeStr = event.target.checked ? "dark" : "light";
    setTheme(darkModeStr);
  };

  useEffect(() => {
    setDarkModeSwitch(theme === "dark");
  }, [theme]);

  return (
    <div className="flex flex-col items-center">
      <FormControlLabel
        control={
          <StyledSwitch checked={darkModeSwitch} onChange={handleChange} />
        }
        label={t("theme")}
      />
    </div>
  );
}
