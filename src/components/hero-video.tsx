import Image from "next/image";

interface HeroVideoProps {
  className?: string;
}

export function HeroVideo({ className = "" }: HeroVideoProps) {
  return (
    <div className={`absolute inset-0 z-0 overflow-hidden ${className}`} aria-hidden="true">
      <Image
        src="/hero/equipe-farmacia.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,14,12,0.92),rgba(2,14,12,0.58)_48%,rgba(2,14,12,0.82))]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_26%,rgba(92,179,100,0.22),transparent_34%),radial-gradient(circle_at_24%_78%,rgba(214,110,15,0.16),transparent_28%)]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#020e0c] to-transparent" />
    </div>
  );
}
