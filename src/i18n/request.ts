import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";

export default getRequestConfig(async () => {
  const store = await cookies();
  const locale = store.get("locale")?.value || "en";

  return {
    locale,
    messages: (await import(`../../public/strings/${locale}.json`)).default,
  };
});
