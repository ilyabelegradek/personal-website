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
    "android_work_submit",
    "android_work_collab",
    "android_incidents",
    "android_google_play",
    "android_msauth",
    "android_analytics",
    "android_work_build",
    "android_work_unitTests",
    "android_work_notifications",
    "android_work_responsive",
    "android_work_accessibility",
  ],
};

export const reactWork: ResumeBulletedList = {
  headerStringKey: "react",
  itemsStringKeys: [
    "react_role",
    "react_about",
    "react_work_screens",
    "react_work_forms",
    "react_work_api",
  ],
};

export const programmingLanguages: ResumeBulletedList = {
  headerStringKey: "programming_languages",
  itemsStringKeys: [
    "kotlin",
    "java",
    "typescript",
    "javascript",
    "html",
    "css",
    "swift",
  ],
};

export const frameworks: ResumeBulletedList = {
  headerStringKey: "frameworks",
  itemsStringKeys: [
    "react_react_native",
    "jetpack_compose",
    "nodejs",
    "expressjs",
    "mobx",
    "mongodb",
    "adobe_assurance",
  ],
};

export const misc: ResumeBulletedList = {
  headerStringKey: "misc",
  itemsStringKeys: [
    "jira",
    "azure_boards",
    "akamai",
    "github_actions",
    "misc_languages",
  ],
};

export const miscContinued: ResumeBulletedList = {
  itemsStringKeys: [
    "firebase",
    "microsoft_office",
    "postman_insomnia",
    "android_studio",
    "visual_studio",
    "shell_scripts",
    "ai",
  ],
};

export const education: ResumeBulletedList = {
  itemsStringKeys: [
    "education_uga",
    "education_major",
    "education_minor",
    "education_certificates",
    "education_gpa",
    "education_honors",
  ],
};

export const personalProject: ResumeBulletedList = {
  itemsStringKeys: [
    "personal_project_about",
    "personal_project_theme",
    "personal_project_resume",
    "personal_project_translations",
  ],
};

/*
supporting multiple regions
*/
