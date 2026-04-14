import type { Metadata } from "next";
import dynamic from "next/dynamic";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import MUIThemeProvider from "./style/theme";
import { NextIntlClientProvider } from "next-intl";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const NavBar = dynamic(() => import("../components/navbar"));

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
    <html
      lang="en"
      className="h-full w-full antialiased"
      suppressHydrationWarning
    >
      <body className="h-full w-full flex flex-col">
        <AppRouterCacheProvider>
          <NextThemesProvider attribute="class" storageKey="darkMode">
            <MUIThemeProvider>
              <NextIntlClientProvider>
                <main>
                  <Analytics />
                  <NavBar />
                  {children}
                  <SpeedInsights />
                </main>
              </NextIntlClientProvider>
            </MUIThemeProvider>
          </NextThemesProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
