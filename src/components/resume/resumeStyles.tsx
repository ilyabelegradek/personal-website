import { StyleSheet, Font } from "@react-pdf/renderer";

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
  infoColumnStart: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    paddingRight: 4,
  },
  infoColumn: {
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  infoItem: {
    fontSize: 10,
  },
  iconRow: {
    flexDirection: "row",
    gap: 4,
  },
  iconRowCentered: {
    flexDirection: "row",
    gap: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  section: {
    flexDirection: "column",
    borderBottom: 2,
    borderBottomColor: "black",
    borderBottomWidth: 1,
    marginBottom: 4,
    paddingTop: 4,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 700,
    textDecoration: "underline",
    textAlign: "center",
  },
  sectionTitlePaddingBottom: {
    fontSize: 14,
    fontWeight: 700,
    textDecoration: "underline",
    textAlign: "center",
    paddingBottom: 2,
  },
  bottomSection: {
    flexDirection: "column",
    marginBottom: 4,
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
  bulletItemDense: {
    marginLeft: 8,
    marginRight: 8,
  },
  boldText: {
    fontWeight: 700,
  },
  row: {
    flexDirection: "row",
  },
  column: {
    flexDirection: "column",
  },
  skillsRow: {
    flexDirection: "row",
    marginTop: 4,
    marginBottom: 4,
    gap: 8,
  },
  workSection: {
    flexDirection: "column",
    flex: 1,
    alignItems: "flex-start",
  },
  educationSection: {
    flex: 1,
    paddingTop: 4,
    borderRight: 1,
    borderRightWidth: 1,
    borderRightColor: "black",
    paddingRight: 4,
  },
  projectSection: { flex: 1, paddingTop: 4, paddingLeft: 4 },
});
