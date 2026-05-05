import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import LinkedInButton from "./linkedInButton";
import GithubButton from "./githubButton";
import ResumeWrapper from "../resume/resumeWrapper";
import { getTranslations } from "next-intl/server";

export default async function ProfileCard() {
  const t = await getTranslations("Global");

  return (
    <Card className="mt-5 sm:mt-20 rounded-4xl">
      <CardContent className="justify-items-center border">
        <div className="rounded-full overflow-hidden h-50 w-50">
          <Image
            className="object-cover w-full h-full"
            src="/images/profile_picture.webp"
            alt="Profile picture"
            height={400}
            width={400}
            priority
          />
        </div>
        <Typography className="flex pt-5" variant="titleFont">
          {t("name")}
        </Typography>
        <Typography className="flex" variant="titleFont">
          {process.env.NEXT_PUBLIC_EMAIL}
        </Typography>
        <Typography className="flex" variant="titleFont">
          {process.env.NEXT_PUBLIC_PHONE}
        </Typography>
      </CardContent>
      <CardActions className="border">
        <div className="flex w-full justify-between">
          <LinkedInButton />
          <ResumeWrapper />
          <GithubButton />
        </div>
      </CardActions>
    </Card>
  );
}
