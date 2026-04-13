import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Typography,
} from "@mui/material";
import { pdf } from "@react-pdf/renderer";
import ResumePDF from "./resumePDF";
import { useTranslations } from "next-intl";

export default function ResumeDownloadDialog(props: {
  dialogOpen: boolean;
  setDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setLocalResumeDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const t = useTranslations();
  const { dialogOpen, setDialogOpen, setLocalResumeDialogOpen } = props;

  async function saveResumeToPdf() {
    const blob = await pdf(<ResumePDF t={t} />).toBlob();
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.setAttribute("download", "Ilya_Belegradek_Resume.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setDialogOpen(false);
  }

  function viewLocalCopy() {
    setDialogOpen(false);
    setLocalResumeDialogOpen(true);
  }

  return (
    <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
      <DialogContent>
        <Typography variant="titleFont">{t("resume_download_pdf")}</Typography>
      </DialogContent>
      <DialogActions>
        <div className="flex flex-col w-full">
          <Button
            onClick={saveResumeToPdf}
            variant="outlined"
            className="w-full"
          >
            {t("download")}
          </Button>
          <Button onClick={viewLocalCopy} variant="outlined" className="w-full">
            {"View Local Copy"}
          </Button>
          <Button
            onClick={() => setDialogOpen(false)}
            variant="outlined"
            className="w-full"
          >
            {t("cancel")}
          </Button>
        </div>
      </DialogActions>
    </Dialog>
  );
}
