import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { pdf } from "@react-pdf/renderer";
import ResumePDF from "./resumePDF";
import { useTranslations } from "next-intl";
import DownloadIcon from "@mui/icons-material/Download";

export default function ResumeDownloadDialog(props: {
  dialogOpen: boolean;
  setDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setLocalResumeDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const t = useTranslations("Resume");
  const tGlobal = useTranslations("Global");
  const { dialogOpen, setDialogOpen, setLocalResumeDialogOpen } = props;

  async function saveResumeToPdf() {
    const blob = await pdf(<ResumePDF t={t} tGlobal={tGlobal} />).toBlob();
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
        <div className="flex flex-col w-full gap-2">
          <Button
            startIcon={<DownloadIcon />}
            onClick={saveResumeToPdf}
            variant="outlined"
            className="w-full"
            size="large"
          >
            {t("download")}
          </Button>
          <Button
            onClick={viewLocalCopy}
            variant="outlined"
            className="w-full"
            size="large"
          >
            {t("resume_local")}
          </Button>
          <Button
            onClick={() => setDialogOpen(false)}
            variant="outlined"
            className="w-full"
            size="large"
          >
            {t("cancel")}
          </Button>
        </div>
      </DialogActions>
    </Dialog>
  );
}
