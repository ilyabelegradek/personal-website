import {
  LOCALE_COOKIE_NAME,
  DEFAULT_LOCALE,
} from "@/src/constants/localeConstants";
import { getMessages } from "next-intl/server";
import { getCookie } from "../../util/getCookie";
import { pick } from "lodash";
import { NextIntlClientProvider } from "next-intl";

export async function generateMetadata() {
  const locale = await getCookie(LOCALE_COOKIE_NAME, DEFAULT_LOCALE);
  const messages = await getMessages({ locale });
  const globalMessages = messages.Global;

  return {
    title: globalMessages.disclosures,
    description: globalMessages.disclosures_site,
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getCookie(LOCALE_COOKIE_NAME, DEFAULT_LOCALE);
  const messages = await getMessages({ locale });
  const disclosuresMessages = pick(messages, ["Global", "Disclosures"]);

  return (
    <NextIntlClientProvider messages={disclosuresMessages}>
      <div className="h-full w-full flex flex-col">{children}</div>
    </NextIntlClientProvider>
  );
}
