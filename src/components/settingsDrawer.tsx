import {
  DialogContent,
  DialogTitle,
  Drawer,
  FormControl,
  FormControlLabel,
  IconButton,
  Switch,
  Typography,
} from "@mui/material";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import CloseIcon from "@mui/icons-material/Close";

export default function SettingsDrawer(props: {
  settingsDrawerOpen: boolean;
  setSettingsDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { settingsDrawerOpen, setSettingsDrawerOpen } = props;
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
    <Drawer
      open={settingsDrawerOpen}
      onClose={() => setSettingsDrawerOpen(false)}
      anchor="right"
    >
      <DialogTitle variant="h5">
        <div className="flex items-center w-full justify-between">
          <Typography variant="titleFont">Settings</Typography>
          <IconButton onClick={() => setSettingsDrawerOpen(false)}>
            <CloseIcon />
          </IconButton>
        </div>
      </DialogTitle>
      <DialogContent dividers>
        <div className="flex gap-2">
          <LightModeIcon />
          <FormControlLabel
            control={
              <Switch checked={darkModeSwitch} onChange={handleChange}></Switch>
            }
            label="Dark Mode"
          />
          <DarkModeIcon />
        </div>
      </DialogContent>
    </Drawer>
  );
}
