import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contato — VotoData",
};

export default function ContatoLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
