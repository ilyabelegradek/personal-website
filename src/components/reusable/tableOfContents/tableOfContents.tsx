"use client";

import { useTranslations } from "next-intl";
import useGetVisibleSections from "./useGetVisibleSections";
import Card from "@mui/material/Card";
import { Link } from "@mui/material";

export default function TableOfContents(props: { allIDs: string[] }) {
  const t = useTranslations("Architecture");
  const { allIDs } = props;

  const { activeIDs } = useGetVisibleSections(allIDs);

  return (
    <Card
      className="fixed xs:top-32 sm:top-16 left-0 h-screen w-30 sm:w-50 overflow-y-auto shadow-lg"
      style={{
        borderRight: 1,
        borderColor: "divider",
      }}
    >
      <nav className="sm:p-4">
        <ul className="space-y-2">
          {allIDs.map((sectionID) => {
            return (
              <li key={sectionID}>
                <Link
                  href={`#${sectionID}`}
                  // onClick={(e) => {
                  //   e.preventDefault();
                  //   const element = document.getElementById(sectionID);
                  //   if (element) {
                  //     element.scrollIntoView({
                  //       behavior: "smooth",
                  //       block: "start",
                  //     });
                  //   }
                  // }}
                  underline="none"
                  className="block px-3 py-2 rounded-md transition-colors"
                  sx={{
                    scrollBehavior: "smooth",
                    ...(activeIDs.includes(sectionID)
                      ? {
                          backgroundColor: "primary.main",
                          color: "primary.contrastText",
                          fontWeight: "medium",
                        }
                      : {
                          "&:hover": {
                            backgroundColor: "action.hover",
                            color: "text.primary",
                          },
                        }),
                  }}
                >
                  {t(sectionID)}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </Card>
  );
}
