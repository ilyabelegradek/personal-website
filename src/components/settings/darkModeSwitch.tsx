import { useColorScheme } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useTranslations } from "next-intl";
import { StyledSwitch } from "../reusable/styledSwitch";

export default function DarkModeSwitch() {
  const { mode, setMode } = useColorScheme();
  if (!mode) {
    return null;
  }
  const t = useTranslations();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const darkModeStr = event.target.checked ? "dark" : "light";
    setMode(darkModeStr);
  };

  return (
    <div className="flex flex-col items-center w-full">
      <FormControlLabel
        control={
          <StyledSwitch checked={mode !== "light"} onChange={handleChange} />
        }
        sx={{ marginLeft: 0, marginRight: 0 }}
        label={t("theme")}
      />
    </div>
  );
}
