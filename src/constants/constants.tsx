import { ResumeBulletedList } from "@/src/types/types";

export const infoAddress = [
  process.env.NEXT_PUBLIC_STREET,
  process.env.NEXT_PUBLIC_CITY,
];

export const infoItems = [
  process.env.NEXT_PUBLIC_EMAIL,
  process.env.NEXT_PUBLIC_PHONE,
  process.env.NEXT_PUBLIC_WEBSITE,
  process.env.NEXT_PUBLIC_LINKEDIN_SHORT,
];

export const androidWork: ResumeBulletedList = {
  headerStringKey: "android",
  itemsStringKeys: [
    "android_role",
    "android_about",
    "android_work_collab",
    "android_incidents",
    "android_msauth",
    "android_analytics",
  ],
};

export const reactWork: ResumeBulletedList = {
  headerStringKey: "react",
  itemsStringKeys: [
    "react_role",
    "react_about",
    "react_work_screens",
    "react_work_api",
  ],
};

export const schoolworkList = [
  "education_major",
  "education_minor",
  "education_cert_new_media",
  "education_cert_data_science",
  "education_gpa",
  "education_honors",
];
