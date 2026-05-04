import { ArchitectureEntries, MockFile } from "../types/types";

export const performanceNextJS: ArchitectureEntries = {
  title: "Next.js Built-In Components",
  description:
    "Next.js provides several components with various optimizations built in.",
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

export const performanceTesting: ArchitectureEntries = {
  title: "Performance Testing",
  description:
    "To measure my performance in a more objective way than manual testing, I used the following tools:",
  entries: [
    {
      title: "Lighthouse",
      descriptionPoints: [
        "Google Chrome has a built-in performance test.",
        "Tested on both desktop and mobile devices.",
        "Mobile tests will throttle your network to simulate a real user on their phone.",
      ],
      imageUrl: "/images/lighthouseTesting.webp",
    },
    {
      title: "Vercel Speed Insights",
      descriptionPoints: [
        "Provided by Vercel - the creators of Next.js and the hosting provider I used to deploy my website",
        "Injected in the root layout.tsx file, tracks anonymized speed statistics of real users",
        "Good to see how the website is actually performing in production",
      ],
      imageUrl: "/images/vercelTesting.webp",
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

export const TYPES_DESCRIPTION = "types_description";
export const typesDescriptionList = [
  "arch_types_desc_title",
  "arch_types_desc_ind",
  "arch_types_desc_desc",
  "arch_types_desc_isFile",
  "arch_types_desc_path",
];

export const projectStructureList: MockFile[] = [
  {
    title: ProjectDir.public,
    indentationLevel: 0,
    description: "arch_public_description",
    path: "public",
  },
  {
    title: ProjectDir.fonts,
    indentationLevel: 1,
    description: "arch_fonts_description",
    path: "public/fonts",
  },
  {
    title: ProjectDir.icons,
    indentationLevel: 1,
    description: "arch_icons_description",
    path: "public/icons",
  },
  {
    title: ProjectDir.images,
    indentationLevel: 1,
    description: "arch_images_description",
    path: "public/images",
  },
  {
    title: ProjectDir.strings,
    indentationLevel: 1,
    description: "arch_strings_description",
    path: "public/strings",
  },
  {
    title: ProjectDir.src,
    indentationLevel: 0,
    description: "arch_src_description",
    path: "src",
  },
  {
    title: ProjectDir.app,
    indentationLevel: 1,
    description: "arch_app_description",
    path: "src/app",
  },
  {
    title: ProjectDir.architecture,
    indentationLevel: 2,
    description: "arch_app_architecture_description",
    path: "src/app/architecture",
  },
  {
    title: ProjectDir.disclosures,
    indentationLevel: 2,
    description: "arch_app_disclosures_description",
    path: "src/app/disclosures",
  },
  {
    title: ProjectDir.favicon,
    indentationLevel: 2,
    description: "arch_favicon_description",
    isFile: true,
    path: "src/app/favicon.ico",
  },
  {
    title: ProjectDir.layout,
    indentationLevel: 2,
    description: "arch_layout_description",
    isFile: true,
    path: "src/app/layout.tsx",
  },
  {
    title: ProjectDir.page,
    indentationLevel: 2,
    description: "arch_page_description",
    isFile: true,
    path: "src/app/page.tsx",
  },
  {
    title: ProjectDir.notFound,
    indentationLevel: 2,
    description: "arch_notfound_description",
    isFile: true,
    path: "src/app/not-found.tsx",
  },
  {
    title: ProjectDir.components,
    indentationLevel: 1,
    description: "arch_components_description",
    path: "src/components",
  },
  {
    title: ProjectDir.architecture,
    indentationLevel: 2,
    description: "arch_components_architecture_description",
    path: "src/components/architecture",
  },
  {
    title: ProjectDir.projectStructure,
    indentationLevel: 3,
    description: "arch_projectstructure_description",
    path: "src/components/architecture/architectureProjectStructure.tsx",
    isFile: true,
  },
  {
    title: ProjectDir.constants,
    indentationLevel: 1,
    description: "arch_constants_description",
    path: "src/constants",
  },
  {
    title: ProjectDir.constants_arch,
    indentationLevel: 2,
    description: "arch_constants_arch_description",
    path: "src/constants/architectureConstants.tsx",
    isFile: true,
  },
  {
    title: ProjectDir.i18n,
    indentationLevel: 1,
    description: "arch_i18n_description",
    path: "src/i18n",
  },
  {
    title: ProjectDir.style,
    indentationLevel: 1,
    description: "arch_style_description",
    path: "src/style",
  },
  {
    title: ProjectDir.globals,
    indentationLevel: 2,
    description: "arch_globals_description",
    path: "src/style/globals.css",
    isFile: true,
  },
  {
    title: ProjectDir.theme,
    indentationLevel: 2,
    description: "arch_theme_description",
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
    title: ProjectDir.util,
    indentationLevel: 1,
    description: "arch_util_description",
    path: "src/util",
  },
  {
    title: ProjectDir.package,
    indentationLevel: 0,
    description: "arch_package_description",
    path: "",
    isFile: true,
  },
];
