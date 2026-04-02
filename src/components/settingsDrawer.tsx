import {
  DialogContent,
  DialogTitle,
  Drawer,
  IconButton,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import DarkModeSwitch from "./darkModeSwitch";

export default function SettingsDrawer(props: {
  settingsDrawerOpen: boolean;
  setSettingsDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { settingsDrawerOpen, setSettingsDrawerOpen } = props;

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
        <DarkModeSwitch />
      </DialogContent>
    </Drawer>
  );
}
