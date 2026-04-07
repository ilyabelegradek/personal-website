import { Document, Page, Text, View } from "@react-pdf/renderer";
import { resumeStyles } from "./resumeStyles";

export default function ResumePDF() {
  return (
    <Document>
      <Page size="A4" style={resumeStyles.page}>
        <View style={resumeStyles.row}>
          <View style={{ flexDirection: "column", alignItems: "flex-start" }}>
            <Text>1011 Muirfield Drive</Text>
            <Text>Marietta, GA 30068</Text>
          </View>
          <Text style={resumeStyles.name}>Ilya Belegradek</Text>
          <View style={{ flexDirection: "column", alignItems: "flex-end" }}>
            <Text>{process.env.NEXT_PUBLIC_EMAIL}</Text>
            <Text>{process.env.NEXT_PUBLIC_PHONE}</Text>
            <Text>{process.env.NEXT_PUBLIC_LINKEDIN_SHORT}</Text>
            <Text>{process.env.NEXT_PUBLIC_WEBSITE}</Text>
          </View>
        </View>
        <View style={resumeStyles.section}>
          <Text style={resumeStyles.sectionTitle}>
            Work - General Motors (2020 - 2026)
          </Text>
          <View style={resumeStyles.bulletList}>
            <Text style={resumeStyles.bulletHeader}>Android</Text>
            <Text style={resumeStyles.bulletItem}>
              • Dev lead for Jetpack Compose Kotlin and Java app with 17,000
              monthly users
            </Text>
            <Text style={resumeStyles.bulletItem}>
              • App allows internal users to submit forms, use the native device
              camera to scan VINs, take photos of vehicles, and receive push
              notifications about their submissions
            </Text>
            <Text style={resumeStyles.bulletItem}>
              • Collaborated with a team of developers, QA and UAT testers,
              product owners, and UI/UX to design, size, and develop new
              features
            </Text>
            <Text style={resumeStyles.bulletItem}>
              • Managed production incidents and communicated with end users to
              resolve individual issues
            </Text>
            <Text style={resumeStyles.bulletItem}>
              • Implemented Microsoft Authentication to comply with new security
              requirements
            </Text>
            <Text style={resumeStyles.bulletItem}>
              • Implemented Adobe Analytics reporting suite and sent out monthly
              analytics reports to leadership
            </Text>
            <Text style={resumeStyles.bulletHeader}>React</Text>
            <Text style={resumeStyles.bulletItem}>
              • Frontend developer for Nextjs microfrontend rewrite of legacy
              application
            </Text>
            <Text style={resumeStyles.bulletItem}>
              • Application allows internal users to create and modify projects
              for returning parts and to view tabulated summaries of existing
              projects
            </Text>
            <Text style={resumeStyles.bulletItem}>
              • Created reusable React components as well as screens based on
              Figma mockups
            </Text>
            <Text style={resumeStyles.bulletItem}>
              • Implemented mock Redux RTK Query API for future integration
              stories
            </Text>
          </View>
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
