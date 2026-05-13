import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import type { MouseEvent } from "react";
import { cn } from "@/lib/utils";

interface CapabilityCardProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  className?: string;
}

export const CapabilityCard = ({ icon: Icon, title, subtitle, className }: CapabilityCardProps) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-50, 50], [4, -4]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-50, 50], [-4, 4]), { stiffness: 200, damping: 20 });

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      className={cn(
        "glass rounded-lg p-6 group transition-colors duration-300 hover:border-[hsl(var(--accent)/0.4)]",
        className,
      )}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      <div aria-hidden="true" className="w-10 h-10 rounded-md bg-[hsl(var(--accent)/0.12)] border border-[hsl(var(--accent)/0.2)] flex items-center justify-center mb-4">
        <Icon className="w-5 h-5 text-accent" />
      </div>
      <h3 className="font-sans text-base font-semibold mb-1">{title}</h3>
      <p className="text-sm text-muted-foreground">{subtitle}</p>
    </motion.div>
  );
};

export default CapabilityCard;
