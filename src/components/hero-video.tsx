import Image from "next/image";
export function HeroVideo({ className = "" }: { className?: string }) {
  return (
    <Image
      src="/imagens/hero_equipe.webp"
      alt="Equipe de profissionais de saúde"
      fill
      priority
      sizes="100vw"
      className={`object-cover ${className}`}
    />
  );
}
