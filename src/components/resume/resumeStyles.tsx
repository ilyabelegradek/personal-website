import { StyleSheet, Font } from "@react-pdf/renderer";

Font.register({
  family: "titleFont",
  src: "/fonts/Gelasio.ttf",
});
Font.register({
  family: "bodyFont",
  src: "/fonts/IBMPlexSans.ttf",
});

export const resumeStyles = StyleSheet.create({
  page: {
    flexDirection: "column",
    padding: 8,
    fontFamily: "titleFont",
    fontSize: 12,
  },
  name: {
    fontSize: 32,
    fontWeight: 700,
    fontFamily: "titleFont",
    textAlign: "center",
    flex: 1,
  },
  infoColumn: {
    flexDirection: "column",
    alignItems: "flex-end",
  },
  section: {
    flexDirection: "column",
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 700,
    textDecoration: "underline",
    textAlign: "center",
  },
  bulletList: {
    flexDirection: "column",
    paddingLeft: 8,
  },
  bulletHeader: {
    fontWeight: 700,
    textDecoration: "underline",
  },
  bulletItem: {
    marginBottom: 4,
    marginLeft: 8,
    marginRight: 8,
  },
  boldText: {
    fontWeight: 700,
  },
  row: {
    flexDirection: "row",
  },
  workSection: {
    flexDirection: "column",
    flex: 1,
    alignItems: "flex-start",
  },
});
