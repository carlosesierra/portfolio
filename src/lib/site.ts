export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://carlosesierra.com.au";

export const siteUrlObject = new URL(siteUrl);
export const siteName = "Carlos Sierra Portfolio";

export function absoluteUrl(path = "/") {
  return new URL(path, siteUrlObject).toString();
}

