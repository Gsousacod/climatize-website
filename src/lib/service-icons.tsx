import {
  ClipboardCheck,
  FileText,
  ShieldCheck,
  Sparkles,
  ThermometerSun,
  Wrench
} from "lucide-react";

export const serviceIcons = {
  clipboardCheck: ClipboardCheck,
  wrench: Wrench,
  thermometerSun: ThermometerSun,
  sparkles: Sparkles,
  shieldCheck: ShieldCheck,
  fileText: FileText
};

export type ServiceIconName = keyof typeof serviceIcons;

export function getServiceIcon(icon: ServiceIconName) {
  return serviceIcons[icon];
}
