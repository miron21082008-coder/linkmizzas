import { useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SiTiktok, SiInstagram } from "react-icons/si";
import { Heart, Crown } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { LinkButton } from "./LinkButton";

const socialIcon = (name: string) => {
  switch (name) {
    case "TikTok": return <SiTiktok className="h-4 w-4" />;
    case "Instagram": return <SiInstagram className="h-4 w-4" />;
    case "Fanvue": return <Heart className="h-4 w-4" />;
    case "Throne": return <Crown className="h-4 w-4" />;
    default: return null;
  }
};

export function LinkSite() {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 600], [0, 150]);
  const heroScale = useTransform(scrollY, [0, 600], [1, 1.15]);
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0.3]);

  useEffect(() => { document.documentElement.classList.add("dark"); }, []);

  return (
    <main className="relative mx-auto max-w-xl px-4 pb-24 sm:px-6">
      {/* HERO */}
      <section className="relative -mx-4 h-[100svh] overflow-hidden sm:-mx-6 sm:rounded-b-[40px]">
        <motion.div
          style={{ y: heroY, scale: heroScale, opacity: heroOpacity }}
          className="absolute inset-0"
        >
          <img
            src={siteConfig.heroImage}
            alt={`${siteConfig.name} portrait`}
            width={1024}
            height={1536}
            className="h-full w-full object-cover object-center"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-background" />
        <div className="pointer-events-none absolute -left-20 top-1/3 h-80 w-80 rounded-full bg-fuchsia-500/20 blur-3xl animate-float-glow" />
        <div className="pointer-events-none absolute -right-20 bottom-20 h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl animate-float-glow" />

        {/* Top-right avatar */}
        <motion.a
          href="#links"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="absolute right-5 top-5 z-10 block h-12 w-12 overflow-hidden rounded-full ring-2 ring-white/30 shadow-glow"
          aria-label="Profile"
        >
          <img src={siteConfig.avatar} alt="" width={48} height={48} className="h-full w-full object-cover" />
        </motion.a>

        {/* Centered content */}
        <div className="relative z-10 flex h-full flex-col items-center justify-end pb-16 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            style={{ fontFamily: "var(--font-display)" }}
            className="text-balance text-5xl font-bold tracking-tight text-white drop-shadow-lg sm:text-6xl"
          >
            {siteConfig.name}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-3 text-sm font-medium tracking-widest text-white/70"
          >
            {siteConfig.username}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-6 flex items-center gap-2"
          >
            {siteConfig.socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.name}
                className="glass grid h-11 w-11 place-items-center rounded-full text-white/90 transition hover:scale-110 hover:text-white hover:shadow-glow"
              >
                {socialIcon(s.name)}
              </a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA CARD */}
      <motion.a
        href={siteConfig.ctaHref}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="group relative mt-8 block overflow-hidden rounded-[28px] shadow-card"
      >
        <div className="aspect-[5/4] w-full overflow-hidden">
          <img
            src={siteConfig.ctaImage}
            alt={siteConfig.ctaText}
            loading="lazy"
            width={1280}
            height={896}
            className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-6">
          <div className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium uppercase tracking-widest text-white/90">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-fuchsia-400" /> Live now
          </div>
          <p
            style={{ fontFamily: "var(--font-display)" }}
            className="mt-3 text-2xl font-semibold text-white sm:text-3xl"
          >
            {siteConfig.ctaText}
          </p>
        </div>
      </motion.a>

      {/* LINKS */}
      <section id="links" className="mt-8 flex flex-col gap-4">
        {siteConfig.links.map((link, i) => (
          <LinkButton key={link.id} {...link} index={i} />
        ))}
      </section>

      <footer className="mt-16 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} {siteConfig.name}
      </footer>
    </main>
  );
}
