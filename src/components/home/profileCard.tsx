import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useTranslations } from "next-intl";
import dynamic from "next/dynamic";
import Image from "next/image";
import LinkedInButton from "./linkedInButton";
import GithubButton from "./githubButton";
const Resume = dynamic(() => import("../resume/resume"));

export default function ProfileCard() {
  const t = useTranslations();

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
        <div className="flex flex-col w-full">
          <div className="flex justify-between">
            <LinkedInButton />
            <Resume />
            <GithubButton />
          </div>
        </div>
      </CardActions>
    </Card>
  );
}
