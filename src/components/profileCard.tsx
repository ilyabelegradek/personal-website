import { Card, CardContent, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function ProfileCard() {
  const t = useTranslations();

  return (
    <Card className="mt-20 rounded-4xl">
      <CardContent className="justify-items-center">
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
    </Card>
  );
}
