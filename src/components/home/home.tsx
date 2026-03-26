import { Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <main className="flex flex-1 flex-col w-full h-full justify-center items-center">
        <div className="rounded-full overflow-hidden h-50 w-50 mt-20">
          <Image
            className="object-cover w-full h-full"
            src="/images/profile_picture.webp"
            alt="Profile picture"
            height={400}
            width={400}
            priority
          />
        </div>
        <Typography className="flex" variant="advantage">
          ILYA BELEGRADEK
        </Typography>
        <Link href={"/skills"}>My Skills</Link>
      </main>
    </div>
  );
}
