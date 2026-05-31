import { motion } from "framer-motion";
import { SiTiktok, SiInstagram } from "react-icons/si";
import { Heart, Sparkles, ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

type Platform = "fanvue" | "throne" | "tiktok" | "instagram";

const icons: Record<Platform, ReactNode> = {
  fanvue: <Heart className="h-5 w-5" />,
  throne: <Sparkles className="h-5 w-5" />,
  tiktok: <SiTiktok className="h-5 w-5" />,
  instagram: <SiInstagram className="h-5 w-5" />,
};

interface Props {
  label: string;
  href: string;
  gradient: string;
  platform: Platform;
  index: number;
}

export function LinkButton({ label, href, gradient, platform, index }: Props) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.05 * index }}
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={`${gradient} group relative flex h-[70px] w-full items-center justify-between rounded-full px-6 text-base font-semibold text-white shadow-soft transition-shadow hover:shadow-glow`}
    >
      <span className="flex items-center gap-3">
        <span className="grid h-10 w-10 place-items-center rounded-full bg-white/15 backdrop-blur-sm">
          {icons[platform]}
        </span>
        <span className="tracking-wide">{label}</span>
      </span>
      <ArrowUpRight className="h-5 w-5 opacity-70 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      <span className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-inset ring-white/20" />
    </motion.a>
  );
}
