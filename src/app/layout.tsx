import type { Metadata } from "next";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { ThemeProvider } from "@mui/material";
import { customTheme } from "./style/theme";

export const metadata: Metadata = {
  title: "Ilya Belegradek",
  description: "About Me",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full w-full antialiased">
      <body className="h-full w-full flex flex-col">
        <AppRouterCacheProvider>
          <ThemeProvider theme={customTheme}>{children}</ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
