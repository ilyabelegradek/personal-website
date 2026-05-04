import { ReactNode } from "react";

export type NavigationItem = {
  stringKey: string;
  ref: string;
  iconID: string;
};

export type ResumeBulletedList = {
  headerStringKey?: string;
  itemsStringKeys: string[];
};

export type CustomLocale = {
  value: string;
  displayName: string;
};

export type CustomRichText = {
  strKey: string;
  argumentName?: string;
  link?: string;
};

export type TableOfContentsSection = {
  titleStrKey: string;
  content: ReactNode;
  hideDivider?: boolean;
};

export type ArchitectureEntries = {
  title: string;
  description: string;
  entries: ArchitectureEntry[];
};

export type ArchitectureEntry = {
  title: string;
  descriptionPoints: string[];
  imageUrl: string;
};

export type MockFile = {
  title: string;
  indentationLevel: number;
  description: string;
  isFile?: boolean;
  path?: string;
};

export const enum ICONS {
  HOME = "home",
  EMAIL = "email",
  PHONE = "phone",
  WEB = "web",
  WORK = "work",
  SKILLS = "skills",
  EDUCATION = "education",
  PERSONAL = "personal",
  ARCHITECTURE = "architecture",
  GITHUB = "github",
  LINKEDIN = "linkedin",
  SETTINGS = "settings",
  ARTICLE = "article",
  FOLDER = "folder",
  CLOSE = "close",
  DOWNLOAD = "download",
  CHEVRONLEFT = "chevronLeft",
  CHEVRONRIGHT = "chevronRight",
}
