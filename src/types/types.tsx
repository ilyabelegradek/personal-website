import { ReactNode } from "react";

export type NavigationItem = {
  stringKey: string;
  ref: string;
  icon: React.ReactNode;
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
  entries: ArchitectureEntry[];
};

export type ArchitectureEntry = {
  title: string;
  descriptionPoints: string[];
  imageUrl: string;
};

export type MockFile = {
  title: string;
  isFile?: boolean;
  level: number;
  description: string;
};
