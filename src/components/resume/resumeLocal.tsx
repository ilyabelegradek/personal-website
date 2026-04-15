import Typography from "@mui/material/Typography";
import { useTranslations } from "next-intl";
import { ResumeBulletedList } from "@/src/types/types";
import {
  androidWork,
  education,
  EDUCATION_ICON,
  EMAIL_ICON,
  frameworks,
  HOME_ICON,
  infoAddress,
  misc,
  miscContinued,
  PERSONAL_ICON,
  personalProject,
  PHONE_ICON,
  programmingLanguages,
  reactWork,
  WORK_ICON,
  SKILLS_ICON,
  WEB_ICON,
} from "@/src/constants/resumeConstants";
import SvgIconLocal from "./svgIconLocal";

export default function ResumeLocal() {
  const t = useTranslations();

  return (
    <div className="flex flex-col" style={{ fontSize: "18px" }}>
      <div className="flex flex-col md:flex-row md:justify-between border-b-2 border-black mb-1 pb-1 gap-2 md:gap-0">
        <div className="flex">
          <div className="flex flex-col items-start justify-center pr-1">
            <SvgIconLocal id={HOME_ICON} />
          </div>
          <div className="flex flex-col items-start justify-center pr-1">
            {infoAddress.map((item) => (
              <Typography
                variant="titleFont"
                key={item}
                sx={{ fontSize: "14px" }}
              >
                {item}
              </Typography>
            ))}
          </div>
        </div>
        <Typography
          variant="titleFont"
          className="text-center flex-1 pt-2 pl-5 text-2xl md:text-5xl content-center"
          sx={{ fontSize: { xs: "36px", md: "40px" } }}
        >
          {t("name")}
        </Typography>
        <div
          className="flex flex-col items-end justify-center"
          style={{ fontSize: "14px" }}
        >
          <div className="flex flex-row gap-1">
            <Typography variant="titleFont">
              {process.env.NEXT_PUBLIC_EMAIL}
            </Typography>
            <SvgIconLocal id={EMAIL_ICON} />
          </div>
          <div className="flex flex-row gap-1">
            <Typography variant="titleFont">
              {process.env.NEXT_PUBLIC_PHONE}
            </Typography>
            <SvgIconLocal id={PHONE_ICON} />
          </div>
          <div className="flex flex-row gap-1 items-center">
            <div className="flex flex-col items-end">
              <Typography variant="titleFont">
                {process.env.NEXT_PUBLIC_WEBSITE}
              </Typography>
              <Typography variant="titleFont">
                {process.env.NEXT_PUBLIC_LINKEDIN_SHORT}
              </Typography>
            </div>
            <SvgIconLocal id={WEB_ICON} />
          </div>
        </div>
      </div>
      <div className="flex flex-col border-b-2 border-black mb-1 pt-1">
        <div className="flex flex-row gap-1 justify-center items-center">
          <SvgIconLocal id={WORK_ICON} />
          <Typography
            variant="titleFont"
            className="font-bold underline text-center"
          >
            {t("resume_work_title")}
          </Typography>
        </div>
        <BulletedList t={t} list={androidWork} />
        <BulletedList t={t} list={reactWork} />
      </div>
      <div className="flex flex-col border-b-2 border-black mb-1 pt-1">
        <div className="flex flex-row gap-1 justify-center items-center">
          <SvgIconLocal id={SKILLS_ICON} />

          <Typography
            variant="titleFont"
            className="font-bold underline text-center"
          >
            {t("skills")}
          </Typography>
        </div>
        <div className="flex flex-col md:flex-row mt-1 gap-2">
          <BulletedList t={t} list={programmingLanguages} dense />
          <BulletedList t={t} list={frameworks} dense />
          <BulletedList t={t} list={misc} dense />
          <BulletedList t={t} list={miscContinued} dense />
        </div>
      </div>
      <div className="flex flex-col mb-1">
        <div className="flex flex-col md:flex-row">
          <div className="flex-1 pt-1 md:border-r border-black md:pr-1 mb-2 md:mb-0">
            <div className="flex flex-row gap-1 justify-center items-center">
              <SvgIconLocal id={EDUCATION_ICON} />

              <Typography
                variant="titleFont"
                className="font-bold underline text-center pb-0.5"
              >
                {t("education_title_with_date")}
              </Typography>
            </div>
            <BulletedList t={t} list={education} />
          </div>
          <div className="flex-1 pt-1 md:pl-1">
            <div className="flex flex-row gap-1 justify-center items-center">
              <SvgIconLocal id={PERSONAL_ICON} />

              <Typography
                variant="titleFont"
                className="font-bold underline text-center pb-0.5"
              >
                {t("personal_project")}
              </Typography>
            </div>
            <BulletedList t={t} list={personalProject} />
          </div>
        </div>
      </div>
    </div>
  );
}

function BulletedList(props: {
  t: ReturnType<typeof useTranslations>;
  list: ResumeBulletedList;
  dense?: boolean;
}) {
  const { t, list, dense } = props;

  return (
    <div className="flex flex-col pl-2">
      {list.headerStringKey && (
        <Typography
          variant="titleFont"
          className="font-bold underline"
          style={{ fontSize: "16px" }}
        >
          {t(list.headerStringKey)}
        </Typography>
      )}
      {list.itemsStringKeys.map((stringKey) => (
        <Typography
          variant="titleFont"
          key={stringKey}
          className={`${dense ? "" : "mb-1"} ml-2 mr-2`}
        >
          {`• ${t(stringKey)}`}
        </Typography>
      ))}
    </div>
  );
}
