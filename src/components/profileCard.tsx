import { Card, CardActions, CardContent, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import Image from "next/image";
import LinkedInButton from "./linkedInButton";
import GithubButton from "./githubButton";

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
          {t("email")}
        </Typography>
        <Typography className="flex" variant="titleFont">
          {t("phone")}
        </Typography>
      </CardContent>
      <CardActions className="justify-between border">
        <LinkedInButton />
        <GithubButton />
      </CardActions>
    </Card>
  );
}
