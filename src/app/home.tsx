"use client";

import dynamic from "next/dynamic";

const ProfileCard = dynamic(
  () => import("../components/profileCard/profileCard"),
  { ssr: false },
);
const Statement = dynamic(() => import("../components/statement"), {
  ssr: false,
});

export default function Home() {
  return (
    <div>
      <main className="flex flex-1 flex-col sm:flex-row w-full h-full justify-center items-center sm:items-start mb-15">
        <ProfileCard />
        <Statement />
      </main>
    </div>
  );
}
