import {
  LOCALE_COOKIE_NAME,
  DEFAULT_LOCALE,
} from "@/src/constants/localeConstants";
import { getMessages } from "next-intl/server";
import { getCookie } from "../../util/getCookie";
import pick from "lodash/pick";
import { NextIntlClientProvider } from "next-intl";

export async function generateMetadata() {
  const locale = await getCookie(LOCALE_COOKIE_NAME, DEFAULT_LOCALE);
  const messages = await getMessages({ locale });
  const architectureMessages = messages.Architecture;

  return {
    title: architectureMessages.architecture,
    description: architectureMessages.arch_title,
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getCookie(LOCALE_COOKIE_NAME, DEFAULT_LOCALE);
  const messages = await getMessages({ locale });
  const architectureMessages = pick(messages, ["Architecture"]);

  return (
    <NextIntlClientProvider messages={architectureMessages}>
      <div className="h-full w-full flex flex-col">{children}</div>
    </NextIntlClientProvider>
  );
}
