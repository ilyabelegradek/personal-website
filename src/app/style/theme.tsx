"use client";

import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useTheme } from "next-themes";
import { useEffect, useMemo, useState } from "react";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    titleFont: React.CSSProperties;
    bodyFont: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    titleFont?: React.CSSProperties;
    bodyFont?: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    titleFont: true;
    bodyFont: true;
  }
}

export default function MUIThemeProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setTheme(localStorage.getItem("darkMode") ?? "dark");
    setMounted(true);
  }, [setTheme]);

  const customTheme = useMemo(
    () =>
      createTheme({
        palette:
          theme === "dark"
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
                  main: "#7B4A1F",
                },
                secondary: {
                  main: "#D97B4A",
                },
                background: {
                  default: "#FEF9F3",
                  paper: "#F5E6D3",
                },
              },
        typography: {
          titleFont: {
            fontFamily: "gelasio",
          },
          bodyFont: {
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
      }),
    [theme],
  );

  if (!mounted) {
    return <div style={{ visibility: "hidden" }}>{children}</div>;
  }

  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
