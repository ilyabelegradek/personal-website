"use client";

import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useTheme } from "next-themes";
import { useEffect, useMemo, useState } from "react";

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

  //https://coolors.co/palette/03045e-0077b6-00b4d8-90e0ef-caf0f8
  //https://coolors.co/palette/f7b267-f79d65-f4845f-f27059-f25c54
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
