import { brandContent } from "@/content/brand";
import type { Project } from "@/data/projects";
import { absoluteUrl, siteName, siteUrl } from "@/lib/site";

type JsonLdValue = Record<string, unknown>;

function getSameAsUrls() {
  return brandContent.navigation
    .map((item) => item.href)
    .filter((href) => href.startsWith("https://"));
}

export function serializeJsonLd(data: JsonLdValue | JsonLdValue[]) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export function getHomeJsonLd() {
  return [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: siteName,
      url: siteUrl,
      inLanguage: "en-AU",
    },
    {
      "@context": "https://schema.org",
      "@type": "Person",
      name: brandContent.name,
      jobTitle: brandContent.role,
      url: siteUrl,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Melbourne",
        addressCountry: "AU",
      },
      sameAs: getSameAsUrls(),
      knowsAbout: [
        "Frontend engineering",
        "React",
        "Next.js",
        "TypeScript",
        "UI systems",
        "Responsive frontend development",
      ],
    },
  ] satisfies JsonLdValue[];
}

export function getProjectJsonLd(project: Project) {
  const projectUrl = absoluteUrl(`/projects/${project.slug}`);
  const image = project.heroImage ? absoluteUrl(project.heroImage) : undefined;

  return [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: siteUrl,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Projects",
          item: absoluteUrl("/#projects"),
        },
        {
          "@type": "ListItem",
          position: 3,
          name: project.title,
          item: projectUrl,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      name: project.title,
      headline: project.tagline,
      description: project.summary,
      url: projectUrl,
      mainEntityOfPage: projectUrl,
      image,
      author: {
        "@type": "Person",
        name: brandContent.name,
        url: siteUrl,
      },
      creator: {
        "@type": "Person",
        name: brandContent.name,
        url: siteUrl,
      },
      publisher: {
        "@type": "Person",
        name: brandContent.name,
        url: siteUrl,
      },
      about: project.focus,
      keywords: [...project.stack, ...project.focus].join(", "),
      inLanguage: "en-AU",
    },
  ] satisfies JsonLdValue[];
}

