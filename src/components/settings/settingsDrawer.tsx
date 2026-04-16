import Typography from "@mui/material/Typography";
import Drawer from "@mui/material/Drawer";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import DarkModeSwitch from "./darkModeSwitch";
import LanguageSelect from "./languageSelect";
import { useTranslations } from "next-intl";

export default function SettingsDrawer(props: {
  settingsDrawerOpen: boolean;
  setSettingsDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const t = useTranslations();
  const { settingsDrawerOpen, setSettingsDrawerOpen } = props;

  return (
    <Drawer
      open={settingsDrawerOpen}
      onClose={() => setSettingsDrawerOpen(false)}
      anchor="right"
    >
      <DialogTitle variant="h5">
        <div className="flex items-center w-full justify-between">
          <Typography variant="titleFont">{t("settings")}</Typography>
          <IconButton onClick={() => setSettingsDrawerOpen(false)}>
            <CloseIcon />
          </IconButton>
        </div>
      </DialogTitle>
      <DialogContent dividers>
        <div className="flex flex-col gap-5 sm:min-w-60">
          <DarkModeSwitch />
          <LanguageSelect />
        </div>
      </DialogContent>
    </Drawer>
  );
}
