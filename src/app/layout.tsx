import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";
import { company } from "@/data/company";
import { AnalyticsLoader } from "@/components/cookies/AnalyticsLoader";
import { CookieConsentBanner } from "@/components/cookies/CookieConsentBanner";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { StructuredData } from "@/components/StructuredData";

const sora = Sora({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.climatize.com.br"),
  title: "Climatize Soluções em Ar Condicionado em Teófilo Otoni",
  description:
    "Manutenção, instalação, higienização e PMOC de ar-condicionado para empresas, clínicas, hospitais e hotéis em Teófilo Otoni, Vale do Jequitinhonha e Vale do Mucuri.",
  keywords: [
    "ar-condicionado em Teófilo Otoni",
    "empresa de ar-condicionado em Teófilo Otoni",
    "climatização no Vale do Jequitinhonha",
    "climatização no Vale do Mucuri",
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
    "suporte técnico em ar-condicionado",
  ],
  openGraph: {
    title: "Climatize Soluções em Ar Condicionado em Teófilo Otoni",
    description:
      "Manutenção, instalação, higienização e PMOC para empresas em Teófilo Otoni, Vale do Jequitinhonha e Vale do Mucuri.",
    url: "https://www.climatize.com.br",
    siteName: company.name,
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: company.logo,
        width: 1200,
        height: 630,
        alt: "Logo da Climatize Soluções em Ar Condicionado",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Climatize Soluções em Ar Condicionado em Teófilo Otoni",
    description:
      "Soluções profissionais em climatização, manutenção, instalação, higienização e PMOC.",
    images: [company.logo],
  },
  icons: {
    icon: { url: "/favicon.png", type: "image/png" },
    apple: { url: "/apple-touch-icon.png" },
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className={`${sora.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">
        <AnalyticsLoader />
        <StructuredData />
        <Header />
        {children}
        <Footer />
        <FloatingWhatsApp />
        <CookieConsentBanner />
      </body>
    </html>
  );
}
