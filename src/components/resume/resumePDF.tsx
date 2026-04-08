import { Document, Page, Text, View } from "@react-pdf/renderer";
import { resumeStyles } from "./resumeStyles";
import { useTranslations } from "next-intl";
import { ResumeBulletedList } from "@/src/types/types";
import { androidWork, infoAddress, infoItems, reactWork } from "./constants";

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
          <Text style={resumeStyles.sectionTitle}>
            Education - University of Georgia (2016 - 2020)
          </Text>
        </View>
        <View style={resumeStyles.section}>
          <Text style={resumeStyles.sectionTitle}>Skills</Text>
          <View style={resumeStyles.row}>
            <Text style={resumeStyles.boldText}>Programming Languages:</Text>
            <Text>Kotlin, Java, Typescript, HTML, CSS</Text>
          </View>
        </View>
      </Page>
    </Document>
  );
}

function BulletedList(props: {
  t: ReturnType<typeof useTranslations>;
  list: ResumeBulletedList;
}) {
  const { t, list } = props;

  return (
    <View style={resumeStyles.bulletList}>
      <Text style={resumeStyles.bulletHeader}>{t(list.headerStringKey)}</Text>
      {list.itemsStringKeys.map((stringKey) => (
        <Text style={resumeStyles.bulletItem} key={stringKey}>
          {t(stringKey)}
        </Text>
      ))}
    </View>
  );
}
