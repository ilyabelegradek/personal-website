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
}) {
  const t = useTranslations();
  const { dialogOpen, setDialogOpen } = props;

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

  return (
    <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
      <DialogContent>
        <Typography variant="titleFont">Download PDF of resume?</Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setDialogOpen(false)}>Cancel</Button>
        <Button onClick={saveResumeToPdf}>Download</Button>
      </DialogActions>
    </Dialog>
  );
}
