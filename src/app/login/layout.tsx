import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menu",
};

export default function MenuLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
