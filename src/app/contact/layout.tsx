import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contato",
};

export default function MenuLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
