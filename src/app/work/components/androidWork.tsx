import ExpandableList from "@/src/components/expandableList";
import ExpandableSection from "@/src/components/expandableSection";
import { Typography } from "@mui/material";

export default function AndroidWork() {
  const responsibilitesList = [
    "Collaborated with a team of developers and a UI / UX lead to design, size, and develop new features",
    "Updated existing functionality based on new business needs",
    "Fixed bugs discovered by QA and UAT testers",
    "Troubleshooted production incidents",
    "Addressed tech debt and security vulnerabilities",
    "Sent out monthly analytics reports to leadership",
  ];

  const techStackList = [
    "UI: Jetpack Compose, Material UI",
    "IDE: Android Studio",
    "CI/CD builds: Github Actions ",
    "QA and UAT Test Builds: Firebase",
    "Memory Leaks: Firebase Crashlytics",
    "Authentication: Microsoft Authentication Library",
    "Test Automation: Browserstack",
    "Configuration Files: Akamai",
    "Analytics: Adobe Analytics",
    "Story Management: Jira and Azure Boards",
    "Incident Management: ServiceNow",
    "App Deployment: Google Play",
  ];

  return (
    <div className="flex flex-col gap-5 sm:flex-row sm:flex-wrap">
      <ExpandableSection title="About">
        <Typography>
          Android developer for Jetpack Compose Kotlin and Java app with __
          monthly users deployed in the United States, Canada, Mexico,
          Australia, New Zealand, and Egypt.
        </Typography>
        <Typography>
          The app is used by dealers and other internal users to submit various
          forms to the business and receive push notifications when their forms
          are processed. In addition to entering text, users can use their
          device camera to scan QR and barcodes of vehicle VINs. They can also
          take pictures and videos of vehicles and parts.
        </Typography>
      </ExpandableSection>
      <ExpandableSection title="Responsibilities">
        <ExpandableList listItems={responsibilitesList} />
      </ExpandableSection>
      <ExpandableSection title="Tech Stack">
        <ExpandableList listItems={techStackList} />
      </ExpandableSection>
    </div>
  );
}
