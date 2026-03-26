"use client";

import { createTheme } from "@mui/material";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    advantage: React.CSSProperties;
  }

  // allow configuration using `createTheme()`
  interface TypographyVariantsOptions {
    advantage?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    advantage: true;
    h3: false;
  }
}

export const customTheme = createTheme({
  palette: {
    primary: {
      main: "#7d000a",
    },
    secondary: {
      main: "#FFFFFF",
    },
    background: {
      default: "#d7989d",
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
    MuiCard: {
      styleOverrides: {
        root: {
          background: "#d7989d",
          borderColor: "#7d000a",
          borderWidth: "1px",
        },
      },
    },
    MuiSnackbarContent: {
      styleOverrides: {
        root: {
          // background: "#d7989d",
          // color: "#7d000a",
          // borderColor: "#7d000a",
          // background: "#7d000a",
          // color: "#d7989d",
          // borderColor: "#d7989d",
          background: "#000000",
          color: "#fff",
          borderWidth: "1px",
          borderRadius: "8px",
          borderColor: "white",
        },
        message: {
          textAlign: "center",
          flexGrow: 1,
        },
      },
    },
  },
});
