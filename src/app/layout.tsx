import type { Metadata } from "next";
import { kalam, patrickHand } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://affan-imthiyaz.netlify.app"),

  title:
    "Affan Imthiyaz Ahmed | Full-Stack Developer, AI Engineer & Product Builder",

  description:
    "Portfolio of Affan Imthiyaz Ahmed showcasing Full-Stack Development, AI Engineering, Java, Python, NVIDIA Nemotron projects, AI-powered applications, and scalable web solutions.",

  keywords: [
    "Affan Imthiyaz Ahmed",
    "Affan Ahmed",
    "Full Stack Developer",
    "AI Engineer",
    "Product Builder",
    "Software Engineer",
    "Java Developer",
    "Python Developer",
    "Web Developer",
    "Agentic AI",
    "Artificial Intelligence",
    "NVIDIA Nemotron",
    "Portfolio",
  ],

  authors: [{ name: "Affan Imthiyaz Ahmed" }],
  creator: "Affan Imthiyaz Ahmed",
  publisher: "Affan Imthiyaz Ahmed",

  openGraph: {
    title:
      "Affan Imthiyaz Ahmed | Full-Stack Developer, AI Engineer & Product Builder",
    description:
      "Building intelligent software, autonomous AI systems, and scalable web applications.",
    url: "https://affan-imthiyaz.netlify.app",
    siteName: "Affan Imthiyaz Ahmed Portfolio",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Affan Imthiyaz Ahmed | Full-Stack Developer & AI Engineer",
    description:
      "Building intelligent software, autonomous AI systems, and scalable web applications.",
  },

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://affan-imthiyaz.netlify.app",
  },
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