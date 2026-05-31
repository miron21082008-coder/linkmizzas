import hero from "@/assets/hero-portrait.jpg";
import cta from "@/assets/cta-card.jpg";
import avatar from "@/assets/avatar.jpg";

export const siteConfig = {
  name: "AVA ROSE",
  username: "@mizzas",
  avatar,
  heroImage: hero,
  ctaImage: cta,
  ctaText: "Come talk to me here",
  ctaHref: "https://www.fanvue.com/mizzas",
  socials: [
    { name: "TikTok", href: "https://www.tiktok.com/@mizzas_dyor?_r=1&_t=ZS-96ojAvcSajy" },
    { name: "Instagram", href: "https://www.instagram.com/mizzas.dyor" },
    { name: "Fanvue", href: "https://www.fanvue.com/mizzas" },
  ],
  links: [
    { id: "fanvue", label: "Exclusive Content 💖", href: "https://www.fanvue.com/mizzas", gradient: "grad-fanvue", platform: "fanvue" as const },
    { id: "tiktok", label: "TikTok", href: "https://www.tiktok.com/@mizzas_dyor?_r=1&_t=ZS-96ojAvcSajy", gradient: "grad-tiktok", platform: "tiktok" as const },
    { id: "instagram", label: "Instagram", href: "https://www.instagram.com/mizzas.dyor", gradient: "grad-instagram", platform: "instagram" as const },
  ],
  media: [hero, cta, avatar, cta, hero, avatar],
};

export type SiteConfig = typeof siteConfig;
