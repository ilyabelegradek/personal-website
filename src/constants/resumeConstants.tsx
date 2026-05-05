import { ResumeBulletedList } from "@/src/types/types";

export const infoAddress = [
  process.env.NEXT_PUBLIC_STREET,
  process.env.NEXT_PUBLIC_CITY,
];

export const androidWork: ResumeBulletedList = {
  headerStringKey: "android",
  itemsStringKeys: [
    "android_role",
    "android_about",
    "android_work_architecture",
    "android_work_submit",
    "android_work_collab",
    "android_incidents",
    "android_google_play",
    "android_work_deployments",
    "android_msauth",
    "android_analytics",
    "android_work_build",
    "android_work_unitTests",
    "android_work_responsive",
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
    "react_work_unit_tests",
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
    "databases",
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
    "restful_apis",
  ],
};

export const education: ResumeBulletedList = {
  itemsStringKeys: [
    "education_uga_short",
    "education_major",
    "education_minor",
    "education_certificates",
    "education_gpa",
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
