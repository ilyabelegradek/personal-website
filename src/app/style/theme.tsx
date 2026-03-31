"use client";

import { createTheme } from "@mui/material";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    advantage: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    advantage?: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    advantage: true;
    h3: false;
  }
}

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
    },
  },
  typography: {
    advantage: {
      fontFamily: "advantage",
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
