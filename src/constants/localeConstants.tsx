import { CustomLocale } from "../types/types";

export const LOCALE_COOKIE_NAME: string = "locale";

export const LOCALES: CustomLocale[] = [
  { value: "en", displayName: "english" },
  { value: "ru", displayName: "russian" },
];
export const DEFAULT_LOCALE: string = "en";
