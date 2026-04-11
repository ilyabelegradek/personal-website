import { Document, G, Page, Path, Svg, Text, View } from "@react-pdf/renderer";
import { resumeStyles } from "./resumeStyles";
import { useTranslations } from "next-intl";
import { ResumeBulletedList } from "@/src/types/types";
import {
  androidWork,
  education,
  frameworks,
  infoAddress,
  misc,
  miscContinued,
  personalProject,
  programmingLanguages,
  reactWork,
} from "@/src/constants/resumeConstants";
import {
  IconResumeHome,
  IconResumeEmail,
  IconResumePhone,
  IconResumeWeb,
  IconResumeWork,
  IconResumeSkills,
  IconResumeEducation,
  IconResumePersonal,
} from "./resumeIcons";

export default function ResumePDF(props: {
  t: ReturnType<typeof useTranslations>;
}) {
  const { t } = props;

  return (
    <Document>
      <Page size="A4" style={resumeStyles.page}>
        <View style={resumeStyles.header}>
          <View style={resumeStyles.infoColumnStart}>
            <IconResumeHome />
          </View>
          <View style={resumeStyles.infoColumnStart}>
            {infoAddress.map((item) => (
              <Text style={resumeStyles.infoItem} key={item}>
                {item}
              </Text>
            ))}
          </View>
          <Text style={resumeStyles.name}>{t("name")}</Text>
          <View style={resumeStyles.infoColumn}>
            <View style={resumeStyles.iconRow}>
              <Text style={resumeStyles.infoItem}>
                {process.env.NEXT_PUBLIC_EMAIL}
              </Text>
              <IconResumeEmail />
            </View>
            <View style={resumeStyles.iconRow}>
              <Text style={resumeStyles.infoItem}>
                {process.env.NEXT_PUBLIC_PHONE}
              </Text>
              <IconResumePhone />
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
              <IconResumeWeb />
            </View>
          </View>
        </View>
        <View style={resumeStyles.section}>
          <View style={resumeStyles.iconRowCentered}>
            <IconResumeWork />
            <Text style={resumeStyles.sectionTitle}>
              {t("resume_work_title")}
            </Text>
          </View>
          <BulletedList t={t} list={androidWork} />
          <BulletedList t={t} list={reactWork} />
        </View>
        <View style={resumeStyles.section}>
          <View style={resumeStyles.iconRowCentered}>
            <IconResumeSkills />
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
                <IconResumeEducation />
                <Text style={resumeStyles.sectionTitlePaddingBottom}>
                  {t("education_title_with_date")}
                </Text>
              </View>
              <BulletedList t={t} list={education} />
            </View>
            <View style={resumeStyles.projectSection}>
              <View style={resumeStyles.iconRowCentered}>
                <IconResumePersonal />
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
