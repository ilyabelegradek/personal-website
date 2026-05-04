import { Document, Page, Text, View } from "@react-pdf/renderer";
import { resumeStyles } from "./resumeStyles";
import { useTranslations } from "next-intl";
import { ResumeBulletedList } from "@/src/types/types";
import {
  androidWork,
  education,
  EDUCATION_ICON,
  EMAIL_ICON,
  frameworks,
  HOME_ICON,
  infoAddress,
  misc,
  miscContinued,
  PERSONAL_ICON,
  personalProject,
  PHONE_ICON,
  programmingLanguages,
  reactWork,
  SKILLS_ICON,
  WEB_ICON,
  WORK_ICON,
} from "@/src/constants/resumeConstants";
import { SvgIconPDF } from "./svgIconPDF";

export default function ResumePDF(props: {
  t: ReturnType<typeof useTranslations>;
  tGlobal: ReturnType<typeof useTranslations>;
}) {
  const { t, tGlobal } = props;

  return (
    <Document>
      <Page size="A4" style={resumeStyles.page}>
        <View style={resumeStyles.header}>
          <View style={resumeStyles.infoColumnStart}>
            <SvgIconPDF id={HOME_ICON} />
          </View>
          <View style={resumeStyles.infoColumnStart}>
            {infoAddress.map((item) => (
              <Text style={resumeStyles.infoItem} key={item}>
                {item}
              </Text>
            ))}
          </View>
          <Text style={resumeStyles.name}>{tGlobal("name")}</Text>
          <View style={resumeStyles.infoColumn}>
            <View style={resumeStyles.iconRow}>
              <Text style={resumeStyles.infoItem}>
                {process.env.NEXT_PUBLIC_EMAIL}
              </Text>
              <SvgIconPDF id={EMAIL_ICON} />
            </View>
            <View style={resumeStyles.iconRow}>
              <Text style={resumeStyles.infoItem}>
                {process.env.NEXT_PUBLIC_PHONE}
              </Text>
              <SvgIconPDF id={PHONE_ICON} />
            </View>
            <View style={resumeStyles.iconRowCentered}>
              <View style={resumeStyles.infoColumn}>
                <Text style={resumeStyles.infoItem}>
                  {process.env.NEXT_PUBLIC_WEBSITE}
                </Text>
                <Text style={resumeStyles.infoItem}>
                  {process.env.NEXT_PUBLIC_LINKEDIN_SHORT}
                </Text>
              </View>
              <SvgIconPDF id={WEB_ICON} />
            </View>
          </View>
        </View>
        <View style={resumeStyles.section}>
          <View style={resumeStyles.iconRowCentered}>
            <SvgIconPDF id={WORK_ICON} />
            <Text style={resumeStyles.sectionTitle}>
              {t("resume_work_title")}
            </Text>
          </View>
          <BulletedList t={t} list={androidWork} />
          <BulletedList t={t} list={reactWork} />
        </View>
        <View style={resumeStyles.section}>
          <View style={resumeStyles.iconRowCentered}>
            <SvgIconPDF id={SKILLS_ICON} />
            <Text style={resumeStyles.sectionTitle}>{t("skills")}</Text>
          </View>
          <View style={resumeStyles.skillsRow}>
            <BulletedList t={t} list={programmingLanguages} dense />
            <BulletedList t={t} list={frameworks} dense />
            <BulletedList t={t} list={misc} dense />
            <BulletedList t={t} list={miscContinued} dense />
          </View>
        </View>
        <View style={resumeStyles.bottomSection}>
          <View style={resumeStyles.row}>
            <View style={resumeStyles.educationSection}>
              <View style={resumeStyles.iconRowCentered}>
                <SvgIconPDF id={EDUCATION_ICON} />
                <Text style={resumeStyles.sectionTitlePaddingBottom}>
                  {t("education_title_with_date")}
                </Text>
              </View>
              <BulletedList t={t} list={education} />
            </View>
            <View style={resumeStyles.projectSection}>
              <View style={resumeStyles.iconRowCentered}>
                <SvgIconPDF id={PERSONAL_ICON} />
                <Text style={resumeStyles.sectionTitlePaddingBottom}>
                  {t("personal_project")}
                </Text>
              </View>
              <BulletedList t={t} list={personalProject} />
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
}

function BulletedList(props: {
  t: ReturnType<typeof useTranslations>;
  list: ResumeBulletedList;
  dense?: boolean;
}) {
  const { t, list, dense } = props;

  return (
    <View style={resumeStyles.bulletList}>
      {list.headerStringKey && (
        <Text style={resumeStyles.bulletHeader}>{t(list.headerStringKey)}</Text>
      )}
      {list.itemsStringKeys.map((stringKey) => (
        <Text
          style={dense ? resumeStyles.bulletItemDense : resumeStyles.bulletItem}
          key={stringKey}
        >
          {`• ${t(stringKey)}`}
        </Text>
      ))}
    </View>
  );
}
