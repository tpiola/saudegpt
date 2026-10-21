import Image from "next/image";
export function HeroVideo() {
  return (
    <div className="relative min-h-[50vh]">
      <Image
        src="/imagens/hero-homepage.webp"
        alt="Equipe em uma farmácia"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
    </div>
  );
}
