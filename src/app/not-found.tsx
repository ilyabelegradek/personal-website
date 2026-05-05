import Typography from "@mui/material/Typography";
import { getMessages } from "next-intl/server";
import {
  LOCALE_COOKIE_NAME,
  DEFAULT_LOCALE,
} from "../constants/localeConstants";
import { getCookie } from "../util/getCookie";

export default async function NotFound() {
  const locale = await getCookie(LOCALE_COOKIE_NAME, DEFAULT_LOCALE);
  const messages = await getMessages({ locale });
  const errorMessages = messages.Error;

  return (
    <div className="flex flex-col w-full h-[80vh] items-center justify-center text-center">
      <Typography variant="titleFont">{errorMessages.error_404}</Typography>
    </div>
  );
}
