import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skills",
  description: "About Me",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="h-full w-full flex flex-col">{children}</div>;
}
