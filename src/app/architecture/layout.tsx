import {
  LOCALE_COOKIE_NAME,
  DEFAULT_LOCALE,
} from "@/src/constants/localeConstants";
import { getTranslations } from "next-intl/server";
import { getCookie } from "../getCookie";

export async function generateMetadata() {
  const locale = await getCookie(LOCALE_COOKIE_NAME, DEFAULT_LOCALE);
  const t = await getTranslations({ locale });

  return {
    title: t("architecture"),
    description: t("architecture_title"),
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="h-full w-full flex flex-col">{children}</div>;
}
