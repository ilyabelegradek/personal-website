import { CustomRichText, MockFile } from "../types/types";

export const serverComponentsDescriptionKeys = [
  "arch_perf_server_desc",
  "arch_perf_server_desc2",
  "arch_perf_server_desc3",
];

export const serverComponentCode = `//SERVER COMPONENT
export default async function ProfileCard() {
  const t = await getTranslations("Global");

  return (
    <Card className="mt-5 sm:mt-20 rounded-4xl">
      <CardContent className="justify-items-center border">
        <div className="rounded-full overflow-hidden h-50 w-50">
          <Image
            className="object-cover w-full h-full"
            src="/images/profile_picture.webp"
            alt="Profile picture"
            height={400}
            width={400}
            priority
          />
        </div>
        <Typography className="flex pt-5" variant="titleFont">
          {t("name")}
        </Typography>
        <Typography className="flex" variant="titleFont">
          {process.env.NEXT_PUBLIC_EMAIL}
        </Typography>
        <Typography className="flex" variant="titleFont">
          {process.env.NEXT_PUBLIC_PHONE}
        </Typography>
      </CardContent>
      <CardActions className="border">
        <div className="flex w-full justify-between">
          <LinkedInButton />
          <ResumeWrapper /> //CLIENT COMPONENT
          <GithubButton />
        </div>
      </CardActions>
    </Card>
  );
}
`;

export const muiNextjsIntegrationCode = `
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full w-full antialiased"
      suppressHydrationWarning
    >
      <body className="h-full w-full flex flex-col">
        <AppRouterCacheProvider> //PROVIDER
          <main>
            {children}
          </main>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
`;

export const nextintlCodeSample = `
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getCookie(LOCALE_COOKIE_NAME, DEFAULT_LOCALE);
  const messages = await getMessages({ locale });
  const architectureMessages = pick(messages, ["Architecture"]);
  //on the client, you would use the useTranslations() hook instead

  return (
    <NextIntlClientProvider messages={architectureMessages}>
      <div className="h-full w-full flex flex-col">{children}</div>
    </NextIntlClientProvider>
  );
}`;

export const fontDescriptionKeys = [
  "arch_perf_font_desc",
  "arch_perf_font_desc1",
  "arch_perf_font_desc2",
];

export const fontCode = `const ptSerif = localFont({ 
  src: "../../public/fonts/PTSerif.ttf",
});`;

export const dynamicImportDescriptionKeys = [
  "arch_perf_dynamic_desc1",
  "arch_perf_dynamic_desc2",
  "arch_perf_dynamic_desc3",
];

export const dynamicImportCode = `const SettingsDrawer = dynamic(() => import("../settings/settingsDrawer"));`;

export const imageDescriptionsKeys = [
  "arch_perf_image_desc1",
  "arch_perf_image_desc2",
  "arch_perf_image_desc3",
];

export const imageTypescriptCode = `<div className="rounded-full overflow-hidden h-50 w-50">
  <Image
    className="object-cover w-full h-full"
    src="/images/profile_picture.webp"
    alt="Profile picture"
    height={400}
    width={400}
    priority
  />
</div>`;

export const speedInsightDescriptionKeys = [
  "arch_perf_testing_vercel_desc1",
  "arch_perf_testing_vercel_desc2",
  "arch_perf_testing_vercel_desc3",
];

export const lighthouseDescriptionKeys = [
  "arch_perf_testing_lighthouse_desc1",
  "arch_perf_testing_lighthouse_desc2",
  "arch_perf_testing_lighthouse_desc3",
];

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

export const localizationDescriptionRichText: CustomRichText = {
  strKey: "arch_localization_description",
  argumentName: "nextIntl",
  link: "https://next-intl.dev/",
};
