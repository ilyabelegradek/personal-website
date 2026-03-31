import type { Metadata } from "next";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { customTheme } from "./style/theme";
import NavBar from "../components/navbar";

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
          <ThemeProvider theme={customTheme}>
            <CssBaseline />
            <main>
              <NavBar />
              {children}
            </main>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
