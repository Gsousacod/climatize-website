import { Instagram, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { CookiePreferencesLink } from "@/components/cookies/CookiePreferencesLink";
import { company, navItems } from "@/data/company";
import { services } from "@/data/services";

export function Footer() {
  return (
    <footer className="bg-climatize-darkBlue text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_1fr_1fr] lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white p-2">
              <Image
                src={company.logo}
                alt="Logo da Climatize Soluções em Ar Condicionado"
                width={48}
                height={48}
                className="h-full w-full object-contain rounded-full"
              />
            </span>
            <div>
              <p className="font-heading font-bold">{company.name}</p>
              <p className="text-sm text-blue-100">
                {company.city} - {company.state}
              </p>
            </div>
          </div>
          <p className="mt-5 max-w-sm leading-7 text-blue-50">
            Soluções profissionais em climatização, manutenção, instalação,
            higienização e PMOC para empresas, comércios e instituições.
          </p>
        </div>

        <div>
          <h2 className="font-heading text-base font-bold">Links rápidos</h2>
          <div className="mt-4 grid gap-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-blue-50 transition hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className="font-heading text-base font-bold">Serviços</h2>
          <div className="mt-4 grid gap-3">
            {services.slice(0, 5).map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="text-sm text-blue-50 transition hover:text-white"
              >
                {service.title}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className="font-heading text-base font-bold">Contato</h2>
          <div className="mt-4 grid gap-3 text-sm text-blue-50">
            <a
              href={company.instagramUrl}
              className="flex items-center gap-2 transition hover:text-white"
            >
              <Instagram size={17} />
              {company.instagram}
            </a>
            <span className="flex items-center gap-2">
              <MapPin size={17} />
              {company.city} - {company.state}
            </span>
            <span className="flex items-center gap-2">
              <Phone size={17} />
              Telefone: {company.phone || "a definir"}
            </span>
            <span className="flex items-center gap-2">
              <Mail size={17} />
              E-mail: {company.email || "a definir"}
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-2 border-t border-white/10 px-5 py-5 text-center text-sm text-blue-100 sm:flex-row sm:gap-4">
        <span>
          © Climatize Soluções em Ar Condicionado. Todos os direitos reservados.
        </span>
        <span className="hidden sm:inline">·</span>
        <CookiePreferencesLink />
      </div>
    </footer>
  );
}
