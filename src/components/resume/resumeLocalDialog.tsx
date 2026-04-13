import {
  Dialog,
  DialogContent,
  Typography,
  DialogTitle,
  IconButton,
} from "@mui/material";
import { useTranslations } from "next-intl";
import CloseIcon from "@mui/icons-material/Close";
import ResumeLocal from "./resumeLocal";

export default function ResumeLocalDialog(props: {
  dialogOpen: boolean;
  setDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const t = useTranslations();
  const { dialogOpen, setDialogOpen } = props;

  return (
    <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
      <DialogTitle>
        <div className="flex items-center w-full justify-between">
          <Typography variant="titleFont">{t("resume")}</Typography>
          <IconButton onClick={() => setDialogOpen(false)}>
            <CloseIcon />
          </IconButton>
        </div>
      </DialogTitle>
      <DialogContent>
        <ResumeLocal />
      </DialogContent>
    </Dialog>
  );
}
