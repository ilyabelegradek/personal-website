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
            main: "#2f82f7",
            contrastText: "#EDF2FA",
          },
          secondary: {
            main: "#00c2cd",
          },
          background: {
            default: "#e4f2ff",
            paper: "#DDE8FD",
          },
          text: {
            primary: "#0d121b",
            secondary: "#383D47",
          },
          divider: "#D1D8E5",
          info: {
            main: "#008ecc",
          },
        },
      },
      dark: {
        palette: {
          primary: {
            main: "#2f82f7",
            contrastText: "#EDF2FA",
          },
          secondary: {
            main: "#00c2cd",
          },
          background: {
            default: "#050c1e",
            paper: "#020511",
          },
          text: {
            primary: "#dae2ef",
            secondary: "#BEC4D0",
          },
          divider: "#010207",
          info: {
            main: "#008ecc",
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
    },
  });
  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
