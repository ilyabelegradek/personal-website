import { Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import { ResumeBulletedList } from "@/src/types/types";
import {
  androidWork,
  education,
  frameworks,
  infoAddress,
  misc,
  miscContinued,
  personalProject,
  programmingLanguages,
  reactWork,
} from "@/src/constants/resumeConstants";
import {
  IconResumeHome,
  IconResumeEmail,
  IconResumePhone,
  IconResumeWeb,
  IconResumeWork,
  IconResumeSkills,
  IconResumeEducation,
  IconResumePersonal,
} from "./resumeIconsLocal";

export default function ResumeLocal() {
  const t = useTranslations();

  return (
    <div className="flex flex-col p-2 font-serif text-sm">
      <div className="flex justify-between border-b-2 border-black mb-1 pb-1">
        <div className="flex flex-col items-start justify-center pr-1">
          <IconResumeHome />
        </div>
        <div className="flex flex-col items-start justify-center pr-1">
          {infoAddress.map((item) => (
            <Typography key={item} className="text-xs">
              {item}
            </Typography>
          ))}
        </div>
        <Typography
          className="text-center flex-1 pt-2 pl-5"
          sx={{ fontSize: "3rem" }}
          variant="titleFont"
        >
          {t("name")}
        </Typography>
        <div className="flex flex-col items-end justify-center">
          <div className="flex flex-row gap-1">
            <Typography className="text-xs">
              {process.env.NEXT_PUBLIC_EMAIL}
            </Typography>
            <IconResumeEmail />
          </div>
          <div className="flex flex-row gap-1">
            <Typography className="text-xs">
              {process.env.NEXT_PUBLIC_PHONE}
            </Typography>
            <IconResumePhone />
          </div>
          <div className="flex flex-row gap-1 items-center">
            <div className="flex flex-col items-end">
              <Typography className="text-xs">
                {process.env.NEXT_PUBLIC_WEBSITE}
              </Typography>
              <Typography className="text-xs">
                {process.env.NEXT_PUBLIC_LINKEDIN_SHORT}
              </Typography>
            </div>
            <IconResumeWeb />
          </div>
        </div>
      </div>
      <div className="flex flex-col border-b-2 border-black mb-1 pt-1">
        <div className="flex flex-row gap-1 justify-center items-center">
          <IconResumeWork />
          <Typography className="text-sm font-bold underline text-center">
            {t("resume_work_title")}
          </Typography>
        </div>
        <BulletedList t={t} list={androidWork} />
        <BulletedList t={t} list={reactWork} />
      </div>
      <div className="flex flex-col border-b-2 border-black mb-1 pt-1">
        <div className="flex flex-row gap-1 justify-center items-center">
          <IconResumeSkills />
          <Typography className="text-sm font-bold underline text-center">
            {t("skills")}
          </Typography>
        </div>
        <div className="flex flex-row mt-1 gap-2">
          <BulletedList t={t} list={programmingLanguages} dense />
          <BulletedList t={t} list={frameworks} dense />
          <BulletedList t={t} list={misc} dense />
          <BulletedList t={t} list={miscContinued} dense />
        </div>
      </div>
      <div className="flex flex-col mb-1">
        <div className="flex flex-row">
          <div className="flex-1 pt-1 border-r border-black pr-1">
            <div className="flex flex-row gap-1 justify-center items-center">
              <IconResumeEducation />
              <Typography className="text-sm font-bold underline text-center pb-0.5">
                {t("education_title_with_date")}
              </Typography>
            </div>
            <BulletedList t={t} list={education} />
          </div>
          <div className="flex-1 pt-1 pl-1">
            <div className="flex flex-row gap-1 justify-center items-center">
              <IconResumePersonal />
              <Typography className="text-sm font-bold underline text-center pb-0.5">
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
        <Typography className="font-bold underline">
          {t(list.headerStringKey)}
        </Typography>
      )}
      {list.itemsStringKeys.map((stringKey) => (
        <Typography
          key={stringKey}
          className={`text-xs ${dense ? "" : "mb-1"} ml-2 mr-2`}
        >
          {`• ${t(stringKey)}`}
        </Typography>
      ))}
    </div>
  );
}
