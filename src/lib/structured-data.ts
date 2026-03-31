import { brandContent } from "@/content/brand";
import type { Project } from "@/data/projects";
import { absoluteUrl, siteName, siteUrl } from "@/lib/site";

type JsonLdValue = Record<string, unknown>;

const websiteId = absoluteUrl("/#website");
const personId = absoluteUrl("/#person");

function getSameAsUrls() {
  return brandContent.navigation
    .map((item) => item.href)
    .filter((href) => href.startsWith("https://"));
}

export function serializeJsonLd(data: JsonLdValue | JsonLdValue[]) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export function getPersonJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": personId,
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
  } satisfies JsonLdValue;
}

export function getHomeJsonLd() {
  return [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": websiteId,
      name: siteName,
      url: siteUrl,
      inLanguage: "en-AU",
      publisher: {
        "@id": personId,
      },
    },
    getPersonJsonLd(),
  ] satisfies JsonLdValue[];
}

export function getCvJsonLd() {
  const cvUrl = absoluteUrl("/cv");

  return [
    {
      "@context": "https://schema.org",
      "@type": "ProfilePage",
      "@id": `${cvUrl}#profile-page`,
      url: cvUrl,
      name: `CV | ${brandContent.name}`,
      description:
        "Curriculum vitae page with experience, skills, project references, and recruiter-friendly summary content.",
      inLanguage: "en-AU",
      mainEntity: {
        "@id": personId,
      },
      about: {
        "@id": personId,
      },
      isPartOf: {
        "@id": websiteId,
      },
    },
    getPersonJsonLd(),
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
      "@id": `${projectUrl}#creative-work`,
      name: project.title,
      headline: project.tagline,
      description: project.summary,
      url: projectUrl,
      mainEntityOfPage: projectUrl,
      image,
      author: {
        "@id": personId,
      },
      creator: {
        "@id": personId,
      },
      publisher: {
        "@id": personId,
      },
      about: project.focus,
      keywords: [...project.stack, ...project.focus].join(", "),
      inLanguage: "en-AU",
      isPartOf: {
        "@id": websiteId,
      },
    },
    getPersonJsonLd(),
  ] satisfies JsonLdValue[];
}
