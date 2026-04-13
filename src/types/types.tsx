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
