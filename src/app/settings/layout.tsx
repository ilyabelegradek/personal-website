import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Settings",
  description: "Site Settings",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="h-full w-full flex flex-col">{children}</div>;
}
