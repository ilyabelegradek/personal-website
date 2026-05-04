import { ArchitectureEntries, MockFile } from "../types/types";

export const performanceNextJS: ArchitectureEntries = {
  title: "Next.js Built-In Components",
  entries: [
    {
      title: "Font",
      descriptionPoints: [
        "Bundled with static assets, improving privacy and performance",
        "Preloaded fonts prevent flashes of unstyled text",
        "No layout shift - fallback font has same font size",
      ],
      imageUrl: "/images/fontScreenshot.webp",
    },
    {
      title: "Dynamic Imports",
      descriptionPoints: [
        "Load javascript modules and React components only when they're needed",
        "Reduces first contentful paint time",
      ],
      imageUrl: "/images/dynamicScreenshot.webp",
    },
    {
      title: "Image",
      descriptionPoints: [
        "Only loads images when they enter the viewport - leads to faster page loading",
        "Prevents layout shift while images are loading",
      ],
      imageUrl: "/images/imageScreenshot.webp",
    },
  ],
};

const enum ProjectDir {
  public = "public",
  fonts = "fonts",
  icons = "icons",
  images = "images",
  strings = "strings",
  src = "src",
  app = "app",
  architecture = "architecture",
  disclosures = "disclosures",
  favicon = "favicon.ico",
  layout = "layout.tsx",
  page = "page.tsx",
  notFound = "not-found.tsx",
  components = "components",
  projectStructure = "architectureProjectStructure.tsx",
  constants = "constants",
  constants_arch = "architectureConstants.tsx",
  i18n = "i18n",
  style = "style",
  globals = "globals.css",
  theme = "theme.tsx",
  types = "types",
  util = "util",
  package = "package.json",
}

export const TYPES_DESCRIPTION = "TYPES_DESCRIPTION";

export const projectStructureList: MockFile[] = [
  {
    title: ProjectDir.public,
    indentationLevel: 0,
    description:
      "The Next.js convention is that anything in the public folder can be referenced anywhere in the codebase starting from the base url /. This is a good place to keep static files.",
    path: "public",
  },
  {
    title: ProjectDir.fonts,
    indentationLevel: 1,
    description:
      "Here I store all the font files I use in the application as .ttf files. Because they're in 'public', I can access them anywhere in the app.",
    path: "public/fonts",
  },
  {
    title: ProjectDir.icons,
    indentationLevel: 1,
    description:
      "Here I store a sprite file containing SVG icons used by my downloadable resume.",
    path: "public/icons",
  },
  {
    title: ProjectDir.images,
    indentationLevel: 1,
    description:
      "This folder contains all the images used in my app. This makes it easy for Next.js's Image components to access them - and for me to find them if I need to make an update.",
    path: "public/images",
  },
  {
    title: ProjectDir.strings,
    indentationLevel: 1,
    description:
      "This directory stores localization files for each language: en.json, ru.json, etc. If I want to support a new language, I simply add a new json file here.",
    path: "public/strings",
  },
  {
    title: ProjectDir.src,
    indentationLevel: 0,
    description:
      "Next.js supports the common pattern of placing application code in a 'src' directory to separate it from configuration files (generally in the root directory).",
    path: "src",
  },
  {
    title: ProjectDir.app,
    indentationLevel: 1,
    description:
      "This is the folder used by the Next.js app router. Every route in the site has to be declared in this directory.",
    path: "src/app",
  },
  {
    title: ProjectDir.architecture,
    indentationLevel: 2,
    description:
      "This is the folder for the /architecture route - the screen that you're on now! It has its own layout.tsx and page.tsx.",
    path: "src/app/architecture",
  },
  {
    title: ProjectDir.disclosures,
    indentationLevel: 2,
    description:
      "This is the folder for the /disclosures route - which you can view by opening the settings in the top right and clicking on the 'Disclosures' link. It also has its own layout.tsx and page.tsx.",
    path: "src/app/disclosures",
  },
  {
    title: ProjectDir.favicon,
    indentationLevel: 2,
    description:
      "The icon you see on the browser tab. Next.js convention dictates this icon is placed in the app/ directory.",
    isFile: true,
    path: "src/app/favicon.ico",
  },
  {
    title: ProjectDir.layout,
    indentationLevel: 2,
    description:
      "Every Next.js route needs a layout.tsx and a page.tsx. Since this is the root layout, it wraps all the other layouts, so in this file I wrap the app content in my theme, localization, and other providers.",
    isFile: true,
    path: "src/app/layout.tsx",
  },
  {
    title: ProjectDir.page,
    indentationLevel: 2,
    description:
      "This renders the actual content for the route: in this case, the home route at /. To keep the router lightweight, all I do here is call a react component home.tsx, which is stored in the 'components/home/' directory below.",
    isFile: true,
    path: "src/app/page.tsx",
  },
  {
    title: ProjectDir.notFound,
    indentationLevel: 2,
    description:
      "This is a simple 404 page for any invalid route. Next.js handles this functionality by default, but I created this page so I could have a screen that was consistent with the look and feel of my app.",
    isFile: true,
    path: "src/app/not-found.tsx",
  },
  {
    title: ProjectDir.components,
    indentationLevel: 1,
    description:
      "This folder contains the React components used to render the various screens of my application. The directory is split into sub-directories by screen and function.",
    path: "src/components",
  },
  {
    title: ProjectDir.architecture,
    indentationLevel: 2,
    description:
      "For example, this folder contains all the React components specifically for the architecture screen - the screen you're on now.",
    path: "src/components/architecture",
  },
  {
    title: ProjectDir.projectStructure,
    indentationLevel: 3,
    description:
      "And this file is the specific React Component for the project structure you're viewing now. There are different files for each of the different sections on this screen - given relevant names so it's easy to find and modify them when needed.",
    path: "src/components/architecture/architectureProjectStructure.tsx",
    isFile: true,
  },
  {
    title: ProjectDir.constants,
    indentationLevel: 1,
    description:
      "This folder contains constant variables and lists used throughout the project, split into separate files by functionality. For example, my resume uses resumeConstants.tsx.",
    path: "src/constants",
  },
  {
    title: ProjectDir.constants_arch,
    indentationLevel: 2,
    description:
      "This file has all the constants used on the screen you're on now. For example, this project structure, an array of MockFile (see the 'types' directory), is defined here. If I wanted to display another folder, I'd add it to the array.",
    path: "src/constants/architectureConstants.tsx",
    isFile: true,
  },
  {
    title: ProjectDir.i18n,
    indentationLevel: 1,
    description:
      "This folder contains a configuration file (request.ts) used to configure my localization library. Both the directory and the file have to have that exact name.",
    path: "src/i18n",
  },
  {
    title: ProjectDir.style,
    indentationLevel: 1,
    description:
      "This folder contains the theming logic for my application. If I need to globally change the look and feel of the site, I will go here.",
    path: "src/style",
  },
  {
    title: ProjectDir.globals,
    indentationLevel: 2,
    description:
      "This is a stlying file that needs to be imported in the root directory. Since I'm using MUI and Tailwind for my theming, all I'm doing in this file is importing the tailwind library.",
    path: "src/style/globals.css",
    isFile: true,
  },
  {
    title: ProjectDir.theme,
    indentationLevel: 2,
    description:
      "In this file, I configure my MUI theme (mainly the light and dark palettes) and I return a ThemeProvider that is wrapped around my application in the root layout.tsx file.",
    path: "src/style/theme.tsx",
    isFile: true,
  },
  {
    title: ProjectDir.types,
    indentationLevel: 1,
    description: TYPES_DESCRIPTION,
    path: "src/types",
  },
  {
    title: ProjectDir.package,
    indentationLevel: 0,
    description:
      "Various configuration files are placed into the root directory. For example, this file has all the third party npm dependencies that get installed when you run 'npm install'.",
    path: "",
    isFile: true,
  },
];
