import type { Metadata } from "next";
import { kalam, patrickHand } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
title: "Affan Imthiyaz Ahmed | Full-Stack Developer & AI Engineer",
description:
"Portfolio of Affan Imthiyaz Ahmed, Full-Stack Developer, AI Engineer, and Product Builder. Explore projects including BillCraft, Promptly AI, Leave Management System, and AI-powered applications.",

keywords: [
"Affan Imthiyaz Ahmed",
"Affan Ahmed",
"Full Stack Developer",
"AI Engineer",
"Product Builder",
"Java Developer",
"Python Developer",
"Software Engineer",
"Portfolio",
"Web Developer",
"Agentic AI",
"Artificial Intelligence",
],

authors: [{ name: "Affan Imthiyaz Ahmed" }],

creator: "Affan Imthiyaz Ahmed",

openGraph: {
title: "Affan Imthiyaz Ahmed | Full-Stack Developer & AI Engineer",
description:
"Building intelligent software, autonomous AI systems, and scalable web applications.",
url: "https://affan-imthiyaz.netlify.app",
siteName: "Affan Imthiyaz Ahmed Portfolio",
locale: "en_US",
type: "website",
},

twitter: {
card: "summary_large_image",
title: "Affan Imthiyaz Ahmed",
description:
"Full-Stack Developer • AI Engineer • Product Builder",
},

robots: {
index: true,
follow: true,
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
> <body className="min-h-full flex flex-col bg-background text-foreground paper-grain">
{children} </body> </html>
);
}
