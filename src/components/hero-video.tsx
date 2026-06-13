import Image from "next/image";

interface HeroVideoProps {
  className?: string;
}

export function HeroVideo({ className = "" }: HeroVideoProps) {
  return (
    <div className={`absolute inset-0 z-0 overflow-hidden ${className}`} aria-hidden="true">
      <Image
        src="imagens/hero_surgeons.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        quality={90}
        className="object-cover object-center scale-[1.02] transition-transform duration-[8s] ease-out"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#020e0c]/95 via-[#020e0c]/75 to-[#020e0c]/90" />
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="absolute -left-32 -top-32 h-[600px] w-[600px] rounded-full bg-[#1c7a5f]/25 blur-[120px]" />
      <div className="absolute -bottom-24 right-0 h-[400px] w-[500px] rounded-full bg-[#f08a1d]/15 blur-[100px]" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#020e0c] to-transparent" />
      <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-[#020e0c]/50 to-transparent" />
    </div>
  );
}
