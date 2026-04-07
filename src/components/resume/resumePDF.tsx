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
          <Text>Android dev lead for Jetpack Compose Kotlin and Java app</Text>
          <Text>
            Collaborated with a team of developers, QA and UAT testers, product
            owners, and UI/UX to design, size, and develop new features
          </Text>
          <Text>
            Maintained existing codebase by troubleshooting production
            incidents, addressing tech debt, and fixing security vulnerabilities
          </Text>
          <Text>
            App allows internal users to submit forms, use the native device
            camera to scan VINs, take photos of vehicles, and receive push
            notifications about their submissions
          </Text>
          <Text>
            Frontend React developer for Nextjs rewrite of legacy application
          </Text>
          <Text>
            Implemented screens in a ground-up rewrite using a microfrontend
            architecture
          </Text>
          <Text>
            Application allows internal users to create and modify projects for
            returning parts and to view tabulated summaries of existing projects
          </Text>
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
