import hero from "@/assets/hero-portrait.jpg";
import cta from "@/assets/cta-card.jpg";
import avatar from "@/assets/avatar.jpg";

export const siteConfig = {
  name: "AVA ROSE",
  username: "@avarose",
  avatar,
  heroImage: hero,
  ctaImage: cta,
  ctaText: "Come talk to me here",
  ctaHref: "https://fanvue.com/",
  socials: [
    { name: "TikTok", href: "https://tiktok.com/" },
    { name: "Instagram", href: "https://instagram.com/" },
    { name: "Fanvue", href: "https://fanvue.com/" },
    { name: "Throne", href: "https://throne.com/" },
  ],
  links: [
    { id: "fanvue", label: "Exclusive Content 💖", href: "https://fanvue.com/", gradient: "grad-fanvue", platform: "fanvue" as const },
    { id: "throne", label: "My Wishlist ✨", href: "https://throne.com/", gradient: "grad-throne", platform: "throne" as const },
    { id: "tiktok", label: "TikTok", href: "https://tiktok.com/", gradient: "grad-tiktok", platform: "tiktok" as const },
    { id: "instagram", label: "Instagram", href: "https://instagram.com/", gradient: "grad-instagram", platform: "instagram" as const },
  ],
  media: [hero, cta, avatar, cta, hero, avatar],
};

export type SiteConfig = typeof siteConfig;
