import type { Metadata } from "next";
import dynamic from "next/dynamic";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import MUIThemeProvider from "./style/theme";
import { NextIntlClientProvider } from "next-intl";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import localFont from "next/font/local";
import InitColorSchemeScript from "@mui/material/InitColorSchemeScript";

const NavBar = dynamic(() => import("../components/navbar"));

export const metadata: Metadata = {
  title: "Ilya Belegradek",
  description: "About Me",
};

const gelasio = localFont({
  src: "../../public/fonts/Gelasio.ttf",
});

const ibmPlexSans = localFont({
  src: "../../public/fonts/IBMPlexSans.ttf",
});

const ptSerif = localFont({
  src: "../../public/fonts/PTSerif.ttf",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`h-full w-full antialiased ${gelasio.className} ${ibmPlexSans.className} ${ptSerif.className}`}
      suppressHydrationWarning
    >
      <body className="h-full w-full flex flex-col">
        <InitColorSchemeScript attribute="class" />
        <AppRouterCacheProvider>
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
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
