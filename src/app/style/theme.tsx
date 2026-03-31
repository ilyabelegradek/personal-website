"use client";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { createContext, useEffect, useState } from "react";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    gelasio: React.CSSProperties;
    ibmPlexSans: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    gelasio?: React.CSSProperties;
    ibmPlexSans?: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    gelasio: true;
    ibmPlexSans: true;
  }
}

export const ThemeContext = createContext({
  darkMode: true,
  setDarkMode: (darkModeSetting: boolean) => {},
});

export default function ThemeContextProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isDarkMode, setIsDarkMode] = useState(true);

  function onSetDarkMode(darkModeSetting: boolean) {
    localStorage.setItem("darkMode", JSON.stringify(darkModeSetting));
    setIsDarkMode(darkModeSetting);
  }

  useEffect(() => {
    setIsDarkMode(localStorage.getItem("darkMode") === "true");
  }, []);

  const contextValue = {
    darkMode: isDarkMode,
    setDarkMode: onSetDarkMode,
  };

  //https://coolors.co/palette/03045e-0077b6-00b4d8-90e0ef-caf0f8
  //https://coolors.co/palette/f7b267-f79d65-f4845f-f27059-f25c54
  const customTheme = createTheme({
    palette: isDarkMode
      ? {
          primary: {
            main: "#03045e",
          },
          secondary: {
            main: "#0077b6",
          },
          background: {
            default: "#caf0f8",
            paper: "#90E0EF",
          },
        }
      : {
          primary: {
            main: "#F25C54",
          },
          secondary: {
            main: "#F79D65",
          },
          background: {
            default: "#F7B267",
            paper: "#F4845F",
          },
        },
    typography: {
      gelasio: {
        fontFamily: "gelasio",
      },
      ibmPlexSans: {
        fontFamily: "ibmPlexSans",
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 8,
          },
        },
      },
    },
  });

  return (
    <ThemeContext.Provider value={contextValue}>
      <ThemeProvider theme={customTheme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
}
