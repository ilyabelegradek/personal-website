import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";
import {
  DEFAULT_LOCALE,
  LOCALE_COOKIE_NAME,
} from "../constants/localeConstants";

export default getRequestConfig(async () => {
  const store = await cookies();
  const locale = store.get(LOCALE_COOKIE_NAME)?.value || DEFAULT_LOCALE;

  return {
    locale,
    messages: (await import(`../../public/strings/${locale}.json`)).default,
  };
});
