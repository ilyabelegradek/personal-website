import { Document, Page, Text, View } from "@react-pdf/renderer";
import { resumeStyles } from "./resumeStyles";
import { useTranslations } from "next-intl";
import { ResumeBulletedList } from "@/src/types/types";
import {
  androidWork,
  education,
  frameworks,
  infoAddress,
  infoItems,
  misc,
  personalProject,
  programmingLanguages,
  reactWork,
} from "@/src/constants/resumeConstants";

export default function ResumePDF(props: {
  t: ReturnType<typeof useTranslations>;
}) {
  const { t } = props;

  return (
    <Document>
      <Page size="A4" style={resumeStyles.page}>
        <View style={resumeStyles.header}>
          <View style={resumeStyles.infoColumnStart}>
            {infoAddress.map((item) => (
              <Text style={resumeStyles.infoItem} key={item}>
                {item}
              </Text>
            ))}
          </View>
          <Text style={resumeStyles.name}>{t("name")}</Text>
          <View style={resumeStyles.infoColumn}>
            {infoItems.map((item) => (
              <Text style={resumeStyles.infoItem} key={item}>
                {item}
              </Text>
            ))}
          </View>
        </View>
        <View style={resumeStyles.section}>
          <Text style={resumeStyles.sectionTitle}>
            {t("resume_work_title")}
          </Text>
          <BulletedList t={t} list={androidWork} />
          <BulletedList t={t} list={reactWork} />
        </View>
        <View style={resumeStyles.section}>
          <Text style={resumeStyles.sectionTitle}>Skills</Text>
          <View style={resumeStyles.skillsRow}>
            <BulletedList t={t} list={programmingLanguages} dense />
            <BulletedList t={t} list={frameworks} dense />
            <BulletedList t={t} list={misc} dense />
          </View>
        </View>
        <View style={resumeStyles.bottomSection}>
          <View style={resumeStyles.row}>
            <View style={resumeStyles.educationSection}>
              <Text style={resumeStyles.sectionTitle}>
                {t("education_title")}
              </Text>
              <BulletedList t={t} list={education} />
            </View>
            <View style={resumeStyles.projectSection}>
              <Text style={resumeStyles.sectionTitle}>
                {t("personal_project")}
              </Text>
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
