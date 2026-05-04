import Typography from "@mui/material/Typography";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import { useTranslations } from "next-intl";
import CloseIcon from "@mui/icons-material/Close";
import ResumeLocal from "./resumeLocal";

export default function ResumeLocalDialog(props: {
  dialogOpen: boolean;
  setDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const t = useTranslations("Resume");
  const tGlobal = useTranslations("Global");

  const { dialogOpen, setDialogOpen } = props;

  return (
    <Dialog
      open={dialogOpen}
      onClose={() => setDialogOpen(false)}
      fullWidth
      maxWidth="lg"
      sx={{
        "& .MuiDialog-paper": {
          maxWidth: { xs: "95vw", sm: "90vw" },
        },
      }}
    >
      <DialogTitle>
        <div className="flex items-center w-full justify-between">
          <Typography variant="titleFont">{tGlobal("resume")}</Typography>
          <IconButton onClick={() => setDialogOpen(false)}>
            <CloseIcon />
          </IconButton>
        </div>
      </DialogTitle>
      <DialogContent dividers sx={{ overflow: "auto" }}>
        <ResumeLocal />
      </DialogContent>
    </Dialog>
  );
}
