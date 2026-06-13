import Image from "next/image";

interface LogoAcademicoProps {
  size?: number;
  className?: string;
}

export function LogoAcademico({ size = 32, className = "" }: LogoAcademicoProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-full ${className}`}
      style={{ width: size, height: size }}
    >
      <Image
        src="/imagens/logo_estudante.webp"
        alt="SaúdeGPT"
        fill
        className="object-cover"
        sizes={`${size}px`}
        priority
      />
    </div>
  );
}
