import type { Metadata } from "next";

const SITE_NAME = "Alston Hsu";

/**
 * Per-page metadata. The root layout's title template appends the site name
 * to the page title, so only the page-specific part is passed here. Open
 * Graph tags are set explicitly because a page-level `openGraph` replaces the
 * layout's rather than merging with it.
 */
export function pageMetadata({
  title,
  description,
}: {
  title: string;
  description: string;
}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title: `${title} | ${SITE_NAME}`,
      description,
      type: "website",
      siteName: SITE_NAME,
    },
  };
}
