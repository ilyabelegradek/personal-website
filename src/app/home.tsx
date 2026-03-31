import { Typography } from "@mui/material";
import Image from "next/image";
import ProfileCard from "../components/profileCard";

export default function Home() {
  return (
    <div>
      <main className="flex flex-1 flex-col w-full h-full justify-center items-center">
        <ProfileCard />
      </main>
    </div>
  );
}
