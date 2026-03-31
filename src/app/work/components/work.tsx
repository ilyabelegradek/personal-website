import { Typography } from "@mui/material";

export default function Work() {
  return (
    <div className="flex flex-col">
      <Typography>{`General Motors (2020 - 2026)`} </Typography>
      <Typography>
        Android developer for Jetpack Compose Kotlin / Java app with __ monthly
        users.
      </Typography>
      <Typography>About the App</Typography>
      <Typography>
        The app is used by dealers and other internal users to submit various
        forms to the business and receive push notifications when their forms
        are processed. In addition to entering text, users can use their device
        camera to scan QR and barcodes of vehicle VINs. They can also take
        pictures and videos of vehicles and parts.
      </Typography>
      <Typography>My Responsibilites</Typography>
      <Typography>TODO</Typography>
      <Typography>Tech stack</Typography>
      <Typography> UI: Jetpack Compose, Material UI</Typography>
      <Typography></Typography>
      <Typography>CI/CD builds: Github Actions </Typography>
      <Typography>
        Test Builds: Firebase (sent out to QA and UAT testers)
      </Typography>
      <Typography>Memory Leaks: Firebase Crashlytics</Typography>
      <Typography>Authentication: Microsoft Authentication Library</Typography>
      <Typography>Configuration Files: Akamai</Typography>
      <Typography>Analytics: Adobe Analytics</Typography>
      <Typography>Story Management: Jira and Azure Boards</Typography>
      <Typography>App Deployment: Google Play </Typography>
    </div>
  );
}
