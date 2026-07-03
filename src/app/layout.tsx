import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { company } from "@/data/company";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { StructuredData } from "@/components/StructuredData";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.climatize.com.br"),
  title: "Climatize Soluções em Ar Condicionado | Manutenção, PMOC e Climatização em Teófilo Otoni - MG",
  description: "A Climatize Soluções em Ar Condicionado oferece manutenção preventiva e corretiva, instalação, higienização e PMOC para empresas, clínicas, hospitais, hotéis e comércios em Teófilo Otoni e região.",
  keywords: [
    "ar-condicionado em Teófilo Otoni",
    "empresa de ar-condicionado em Teófilo Otoni",
    "manutenção de ar-condicionado",
    "manutenção preventiva de ar-condicionado",
    "manutenção corretiva de ar-condicionado",
    "PMOC",
    "plano de manutenção operação e controle",
    "higienização de ar-condicionado",
    "instalação de ar-condicionado",
    "climatização empresarial",
    "climatização comercial",
    "climatização para empresas",
    "climatização para clínicas",
    "climatização para hospitais",
    "climatização para hotéis",
    "qualidade do ar",
    "manutenção de climatização",
    "suporte técnico em ar-condicionado"
  ],
  openGraph: {
    title: "Climatize Soluções em Ar Condicionado",
    description: "Manutenção, instalação, higienização e PMOC para empresas em Teófilo Otoni e região.",
    url: "https://www.climatize.com.br",
    siteName: company.name,
    locale: "pt_BR",
    type: "website",
    images: [{ url: company.logo, width: 1200, height: 630, alt: "Logo da Climatize Soluções em Ar Condicionado" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Climatize Soluções em Ar Condicionado",
    description: "Soluções profissionais em climatização, manutenção, instalação, higienização e PMOC.",
    images: [company.logo]
  },
  icons: {
    icon: company.logo
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">
        <StructuredData />
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
