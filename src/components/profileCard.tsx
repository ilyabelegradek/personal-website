import { Card, CardContent, Typography } from "@mui/material";
import Image from "next/image";

export default function ProfileCard() {
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
        <Typography className="flex" variant="gelasio">
          ILYA BELEGRADEK
        </Typography>
        <Typography className="flex">ilyushabelegradek@gmail.com</Typography>
        <Typography className="flex" variant="ibmPlexSans">
          ilyushabelegradek@gmail.com
        </Typography>

        <Typography className="flex" variant="gelasio">
          678-643-4464
        </Typography>
      </CardContent>
    </Card>
  );
}
