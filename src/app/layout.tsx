import dynamic from "next/dynamic";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import MUIThemeProvider from "./style/theme";
import { NextIntlClientProvider } from "next-intl";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import localFont from "next/font/local";
import InitColorSchemeScript from "@mui/material/InitColorSchemeScript";
import { getTranslations } from "next-intl/server";
import {
  LOCALE_COOKIE_NAME,
  DEFAULT_LOCALE,
} from "../constants/localeConstants";
import { getCookie } from "./getCookie";

const NavBar = dynamic(() => import("../components/navigation/navbar"));

export async function generateMetadata() {
  const locale = await getCookie(LOCALE_COOKIE_NAME, DEFAULT_LOCALE);
  const t = await getTranslations({ locale });

  return {
    title: t("name"),
    description: t("about-me"),
  };
}

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
