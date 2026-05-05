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
}`;

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
}`;

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

export const themingDescriptionRichText: CustomRichText = {
  strKey: "arch_theming_description",
  argumentName: "mui",
  link: "https://mui.com/material-ui/",
};

export const localizationDescriptionRichText: CustomRichText = {
  strKey: "arch_localization_description",
  argumentName: "nextIntl",
  link: "https://next-intl.dev/",
};

export const codeBlocksDescriptionRichText: CustomRichText = {
  strKey: "arch_code_blocks_description",
  argumentName: "syntaxHighlighter",
  link: "https://www.npmjs.com/package/react-syntax-highlighter/",
};

export const pdfDescriptionRichText: CustomRichText = {
  strKey: "arch_pdf_description",
  argumentName: "pdfRenderer",
  link: "https://www.npmjs.com/package/@react-pdf/renderer",
};

export const drawerCodeSample = `//MUI Drawer component
import Drawer from "@mui/material/Drawer";

export default function SettingsDrawer(props: {
  settingsDrawerOpen: boolean;
  setSettingsDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { settingsDrawerOpen, setSettingsDrawerOpen } = props;

  //a settings drawer that can be toggled open and closed
  return (
    <Drawer
      open={settingsDrawerOpen}
      onClose={() => setSettingsDrawerOpen(false)}
      anchor="right"
    >
      //render any React content inside the drawer
    </Drawer>
}`;

export const tabCodeSample = `"use client";
//MUI imports
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";

import { disclosureTabList } from "@/src/constants/disclosuresConstants";
import { useTranslations } from "next-intl";
import { useState } from "react";
import PrivacyContent from "./privacyContent";
import dynamic from "next/dynamic";
const AttributionContent = dynamic(() => import("./attributionContent"));

export default function DisclosuresContent() {
  const t = useTranslations("Disclosures");
  const [disclosureTabValue, setDisclosureTabValue] = useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setDisclosureTabValue(newValue);
  };

  //render a pair of tabs and conditionally show different content based on which tab is selected
  return (
    <>
      <Tabs value={disclosureTabValue} onChange={handleChange}>
        {disclosureTabList.map((tab) => (
          <Tab label={t(tab)} key={tab} />
        ))}
      </Tabs>
      {disclosureTabValue == 0 && <PrivacyContent />}
      {disclosureTabValue == 1 && <AttributionContent />}
    </>
  );
}`;

export const themeCreationCodeSample = `//Wraps the application code in the root layout.tsx file
export default function MUIThemeProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const customTheme = createTheme({
    colorSchemes: {
    //light mode
      light: {
        palette: {
          primary: {
            main: "#2f82f7",
            contrastText: "#EDF2FA",
          },
          background: {
            default: "#e4f2ff",
            paper: "#DDE8FD",
          },
          text: {
            primary: "#0d121b",
            secondary: "#383D47",
          },
        },
      },
      //dark mode
      dark: {
        //same palette object as light mode - just with different colors
      },
    },
    cssVariables: {
    //enables manual dark mode toggling
      colorSchemeSelector: "class",
    },
    //inject my custom font to use in MUI components
    typography: {
      bodyFont: {
        fontFamily: "ibmPlexSans",
      },
    },
  });
  return (
    <ThemeProvider theme={customTheme}> 
      <CssBaseline /> 
      {children} 
    </ThemeProvider>
  );
}`;

export const pdfDescKeys = [
  "arch_pdf_desc_1",
  "arch_pdf_desc_2",
  "arch_pdf_desc_3",
  "arch_pdf_desc_4",
];

export const pdfCodeSample = `import { Document, Page, Text, View } from "@react-pdf/renderer";

export default function ResumePDF(props: {
  t: ReturnType<typeof useTranslations>;
}) {
  const { t } = props;

  return (
    <Document>
      <Page size="A4" style={resumeStyles.page}>
        <View style={resumeStyles.header}>
          <Text style={resumeStyles.name}>{t("name")}</Text>
        </View>
      </Page>
    </Document>
  )
}`;

export const pdfStyleSample = `import { StyleSheet, Font } from "@react-pdf/renderer";

//custom font support
Font.register({
  family: "titleFont",
  src: "/fonts/PTSerif.ttf",
});

export const resumeStyles = StyleSheet.create({
  page: {
    flexDirection: "column",
    padding: 8,
    fontFamily: "titleFont",
    fontSize: 11,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottom: 2,
    borderBottomColor: "black",
    borderBottomWidth: 1,
    marginBottom: 4,
    paddingBottom: 2,
  },
  name: {
    fontSize: 32,
    fontWeight: 700,
    textAlign: "center",
    flex: 1,
    paddingTop: 8,
    paddingLeft: 20,
  },
`;

export const codeBlockCodeSample = `import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function CustomCodeBlock(props: { code: string }) {
  const { code } = props;

  return (
    <SyntaxHighlighter
      language="typescript"
      style={vscDarkPlus}
      showLineNumbers={true}
      customStyle={{
        borderRadius: "8px",
        padding: "20px",
        maxWidth: "fit-content",
      }}
      wrapLongLines={true}
    >
      {code}
    </SyntaxHighlighter>
  );
}`;

export const localizationJsonSample = `{"Global": {
    "name": "Ilya Belegradek",
  },
  "Architecture": {
    "hello_world": "Hello world!",
  },`;

export const localizationConfigSample = `import { getRequestConfig } from "next-intl/server";
  import { cookies } from "next/headers";
  import {
    DEFAULT_LOCALE,
    LOCALE_COOKIE_NAME,
  } from "../constants/localeConstants";
  
  export default getRequestConfig(async () => {
    const store = await cookies();
    const locale = store.get(LOCALE_COOKIE_NAME)?.value || DEFAULT_LOCALE;
  
    return {
      locale,
      messages: (await import(\`../../public/strings/\${locale}.json\`)).default,
    };
  });`;

export const localizationProviderSample = `export default async function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    const locale = await getCookie(LOCALE_COOKIE_NAME, DEFAULT_LOCALE);
    const messages = await getMessages({ locale });
    const architectureMessages = pick(messages, ["Architecture"]);
  
    //pass only the necessary messages to the provider
    return (
      <NextIntlClientProvider messages={architectureMessages}>
        <div className="h-full w-full flex flex-col">{children}</div>
      </NextIntlClientProvider>
    );
  }`;

export const localizationStringSample = `
    const t = await getTranslations("Architecture"); //for server components

    return <Typography>{t("arch_localization_json")</Typography>
  `;
