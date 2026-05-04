import { ArchitectureEntries, MockFile } from "../types/types";

export const performanceNextJS: ArchitectureEntries = {
  title: "arch_perf_builtin_title",
  description: "arch_perf_builtin_desc",
  entries: [
    {
      title: "arch_perf_font_title",
      descriptionPoints: [
        "arch_perf_font_desc",
        "arch_perf_font_desc1",
        "arch_perf_font_desc2",
      ],
      imageUrl: "/images/fontScreenshot.webp",
    },
    {
      title: "arch_perf_dynamic_title",
      descriptionPoints: ["arch_perf_dynamic_desc1", "arch_perf_dynamic_desc2"],
      imageUrl: "/images/dynamicScreenshot.webp",
    },
    {
      title: "arch_perf_image_title",
      descriptionPoints: ["arch_perf_image_desc1", "arch_perf_image_desc2"],
      imageUrl: "/images/imageScreenshot.webp",
    },
  ],
};

export const performanceTesting: ArchitectureEntries = {
  title: "arch_perf_testing_title",
  description: "arch_perf_testing_desc",
  entries: [
    {
      title: "arch_perf_testing_lighthouse_title",
      descriptionPoints: [
        "arch_perf_testing_lighthouse_desc1",
        "arch_perf_testing_lighthouse_desc2",
        "arch_perf_testing_lighthouse_desc3",
      ],
      imageUrl: "/images/lighthouseTesting.webp",
    },
    {
      title: "arch_perf_testing_vercel_title",
      descriptionPoints: [
        "arch_perf_testing_vercel_desc1",
        "arch_perf_testing_vercel_desc2",
        "arch_perf_testing_vercel_desc3",
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
