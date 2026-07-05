import {
  Briefcase,
  Building,
  Building2,
  GraduationCap,
  Landmark,
  Stethoscope,
  Store,
  type LucideIcon
} from "lucide-react";

const segmentIcons: Record<string, LucideIcon> = {
  Clínicas: Stethoscope,
  Hospitais: Stethoscope,
  Hotéis: Building,
  Comércios: Store,
  Escritórios: Briefcase,
  Escolas: GraduationCap,
  Empresas: Building2,
  Instituições: Landmark,
  "Ambientes corporativos": Building2
};

export function getSegmentIcon(segment: string): LucideIcon {
  return segmentIcons[segment] ?? Building2;
}
