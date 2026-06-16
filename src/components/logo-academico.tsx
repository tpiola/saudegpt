import { PillCap } from "./pill-cap";

interface LogoAcademicoProps {
  size?: number;
  className?: string;
}

export function LogoAcademico({ size = 32, className = "" }: LogoAcademicoProps) {
  return (
    <div
      className={`flex items-center justify-center rounded-full bg-gradient-to-br from-gold-500 to-gold-600 text-white shadow-lg ${className}`}
      style={{ width: size, height: size }}
    >
      <PillCap size={Math.round(size * 0.7)} className="text-white" />
    </div>
  );
}
