import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { FormControlLabel, styled, Switch } from "@mui/material";
import { useTranslations } from "next-intl";

const StyledSwitch = styled(Switch)(({}) => ({
  width: 93,
  height: 51,
  padding: 10.5,
  "& .MuiSwitch-switchBase": {
    margin: 1,
    padding: 0,
    transform: "translateX(9px)",
    "&.Mui-checked": {
      "& .MuiSwitch-thumb": {
        backgroundColor: "#03045e",
      },
      color: "#fff",
      transform: "translateX(33px)",
      "& .MuiSwitch-thumb:before": {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="0 0 30 30"><path fill="${encodeURIComponent(
          "#fff",
        )}" d="M6.3 3.75l-1.05 2.7-2.7 1.05 2.7 1.05 1.05 2.7 0.9-2.7L9.45 7.5l-2.85-1.05-0.9-2.7zm22.5 12.45a10.05 10.05 0 11-9.9-9.9 8.7 8.7 0 009.9 9.9z"/></svg>')`,
      },
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: "#0077b6",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: "#F25C54",
    width: 48,
    height: 48,
    "&::before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="0 0 30 30"><path fill="${encodeURIComponent(
        "#fff",
      )}" d="M13.9575 2.5005V5.625h2.0835V2.5005h-2.085zm-7.0605 2.925l-1.473 1.473L7.635 9.108l1.473-1.473-2.2095-2.2095zm16.203 0L20.8905 7.635l1.473 1.473 2.2095-2.2095-1.473-1.473zM15 7.7085a7.308 7.308 0 00-7.293 7.29A7.308 7.308 0 0015 22.293 7.308 7.308 0 0022.29 15 7.308 7.308 0 0015 7.7085zm0 2.0835A5.193 5.193 0 0120.2065 15a5.193 5.193 0 01-5.2195 5.208A5.193 5.193 0 019.7905 15 5.193 5.193 0 0115 9.792zM2.4975 13.9575v2.085h3.1245v-2.085H2.499zm21.8745 0v2.085h3.126v-2.085h-3.126zM7.635 20.892L5.424 23.1l1.473 1.473 2.2095-2.2095-1.473-1.473zm14.73 0l-1.473 1.473 2.2095 2.2095 1.473-1.473-2.2095-2.2095zM13.9575 24.375v3.1245h2.0835V24.375h-2.085z"/></svg>')`,
    },
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    backgroundColor: "#F79D65",
    borderRadius: 15,
  },
}));

export default function DarkModeSwitch() {
  const { theme, setTheme } = useTheme();
  const [darkModeSwitch, setDarkModeSwitch] = useState(false);
  const t = useTranslations();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const darkModeStr = event.target.checked ? "dark" : "light";
    setTheme(darkModeStr);
  };

  useEffect(() => {
    setDarkModeSwitch(theme === "dark");
  }, [theme]);

  return (
    <div className="flex flex-col items-center">
      <FormControlLabel
        control={
          <StyledSwitch checked={darkModeSwitch} onChange={handleChange} />
        }
        label={t("theme")}
      />
    </div>
  );
}
