import type { Metadata } from "next";
import { kalam, patrickHand } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Affan's Portfolio",
  description: "Personal portfolio of Affan, a CSBS engineering student aspiring to be an SDE.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${kalam.variable} ${patrickHand.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground paper-grain">
        {children}
      </body>
    </html>
  );
}