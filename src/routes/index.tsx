import { createFileRoute } from "@tanstack/react-router";
import { LinkSite } from "@/components/LinkSite";
import { siteConfig } from "@/lib/site-config";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${siteConfig.name} — All my links` },
      { name: "description", content: `Follow ${siteConfig.name} (${siteConfig.username}) on TikTok, Instagram, Fanvue, and Throne. Exclusive content, wishlist, and more.` },
      { property: "og:title", content: `${siteConfig.name} — All my links` },
      { property: "og:description", content: `Follow ${siteConfig.name} everywhere. Exclusive content & more.` },
      { property: "og:type", content: "profile" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@600;700;800&display=swap" },
    ],
  }),
  component: Index,
});

function Index() {
  return <LinkSite />;
}
