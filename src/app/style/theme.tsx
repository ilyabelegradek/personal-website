"use client";

import { createTheme } from "@mui/material";

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

//https://coolors.co/palette/03045e-0077b6-00b4d8-90e0ef-caf0f8
export const customTheme = createTheme({
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
