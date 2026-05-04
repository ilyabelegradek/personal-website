import Typography from "@mui/material/Typography";
import Drawer from "@mui/material/Drawer";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import DarkModeSwitch from "./darkModeSwitch";
import LanguageSelect from "./languageSelect";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useTheme } from "@mui/material";

export default function SettingsDrawer(props: {
  settingsDrawerOpen: boolean;
  setSettingsDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const t = useTranslations("Home");
  const tGlobal = useTranslations("Global");

  const { settingsDrawerOpen, setSettingsDrawerOpen } = props;
  const theme = useTheme();

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
          <Link
            href={"/disclosures"}
            className="w-full justify-center flex"
            onClick={() => setSettingsDrawerOpen(false)}
          >
            <Typography
              variant="titleFont"
              className="underline"
              style={{ color: theme.palette.primary.main }}
              fontSize={"20px"}
            >
              {tGlobal("disclosures")}
            </Typography>
          </Link>
        </div>
      </DialogContent>
    </Drawer>
  );
}
