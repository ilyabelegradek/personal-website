import dynamic from "next/dynamic";
import "../style/globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import MUIThemeProvider from "../style/theme";
import { NextIntlClientProvider } from "next-intl";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import localFont from "next/font/local";
import InitColorSchemeScript from "@mui/material/InitColorSchemeScript";
import { getMessages } from "next-intl/server";
import {
  LOCALE_COOKIE_NAME,
  DEFAULT_LOCALE,
} from "../constants/localeConstants";
import { getCookie } from "../util/getCookie";
import pick from "lodash/pick";

const NavBar = dynamic(() => import("../components/navigation/navbar"));

export async function generateMetadata() {
  const locale = await getCookie(LOCALE_COOKIE_NAME, DEFAULT_LOCALE);
  const messages = await getMessages({ locale });
  const globalMessages = messages.Global;

  return {
    title: globalMessages.name,
    description: globalMessages.about_me,
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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getCookie(LOCALE_COOKIE_NAME, DEFAULT_LOCALE);
  const messages = await getMessages({ locale });
  const homeMessages = pick(messages, ["Global", "Home"]);

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
            <NextIntlClientProvider messages={homeMessages}>
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
