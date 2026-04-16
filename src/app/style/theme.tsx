"use client";

import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";

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
  const customTheme = createTheme({
    colorSchemes: {
      light: {
        palette: {
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
      },
      dark: {
        palette: {
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
          text: {
            primary: "#000000",
          },
        },
      },
    },
    cssVariables: {
      colorSchemeSelector: "class",
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
      MuiOutlinedInput: {
        styleOverrides: {
          notchedOutline: ({ theme }) => ({
            borderColor: theme.palette.mode === "dark" ? "#000000" : "#000000",
          }),
        },
      },
      MuiInputLabel: {
        styleOverrides: {
          root: ({ theme }) => ({
            color: theme.palette.mode === "dark" ? "#000000" : "#000000",
          }),
        },
      },
      MuiTab: {
        styleOverrides: {
          root: ({ theme }) => ({
            color: theme.palette.mode === "dark" ? "#444444" : "#444444",
          }),
        },
      },
    },
  });
  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
