import {
  LOCALE_COOKIE_NAME,
  DEFAULT_LOCALE,
} from "@/src/constants/localeConstants";
import { getCookie } from "@/src/util/getCookie";
import { pick } from "lodash";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import dynamic from "next/dynamic";

const Resume = dynamic(() => import("./resume"));

export default async function resumeWrapper() {
  const locale = await getCookie(LOCALE_COOKIE_NAME, DEFAULT_LOCALE);
  const messages = await getMessages({ locale });
  const resumeMessages = pick(messages, ["Global", "Resume"]);

  return (
    <NextIntlClientProvider messages={resumeMessages}>
      <Resume />
    </NextIntlClientProvider>
  );
}
