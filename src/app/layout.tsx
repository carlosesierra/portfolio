import type { Metadata } from "next";
import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteName, siteUrlObject } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: siteUrlObject,
  title: {
    default: "Carlos Sierra | Senior Front-End Engineer",
    template: "%s | Carlos Sierra",
  },
  description:
    "Frontend portfolio scaffold for Carlos Sierra, focused on recruiter-friendly case studies, CV content, and modern React delivery.",
  authors: [{ name: "Carlos Sierra", url: siteUrlObject }],
  applicationName: "Carlos Sierra Portfolio",
  creator: "Carlos Sierra",
  keywords: [
    "Carlos Sierra",
    "Senior Front-End Engineer",
    "Next.js portfolio",
    "React",
    "TypeScript",
    "Tailwind CSS",
  ],
  openGraph: {
    title: "Carlos Sierra | Senior Front-End Engineer",
    description:
      "Recruiter-facing portfolio with project case studies, CV content, and frontend engineering highlights.",
    locale: "en_AU",
    siteName,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Carlos Sierra | Senior Front-End Engineer",
    description:
      "Recruiter-facing portfolio with project case studies, CV content, and frontend engineering highlights.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased" data-scroll-behavior="smooth">
      <body className="min-h-screen bg-background text-foreground selection:bg-accent/20 selection:text-foreground">
        <div className="relative flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
