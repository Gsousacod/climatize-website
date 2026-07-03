import {
  ClipboardCheck,
  Fan,
  FileText,
  LifeBuoy,
  ShieldCheck,
  Sparkles,
  ThermometerSun,
  Wrench
} from "lucide-react";

export const services = [
  {
    title: "Manutenção preventiva de ar-condicionado",
    description: "Serviço planejado para evitar falhas, melhorar o desempenho dos equipamentos e prolongar sua vida útil.",
    icon: ClipboardCheck
  },
  {
    title: "Manutenção corretiva de ar-condicionado",
    description: "Atendimento técnico para identificação e correção de falhas, buscando restaurar o funcionamento adequado dos equipamentos.",
    icon: Wrench
  },
  {
    title: "Instalação de equipamentos",
    description: "Instalação de sistemas de ar-condicionado com cuidado técnico, segurança e atenção às necessidades do ambiente.",
    icon: ThermometerSun
  },
  {
    title: "Higienização de ar-condicionado",
    description: "Limpeza e higienização dos equipamentos para contribuir com a qualidade do ar e o bom funcionamento do sistema.",
    icon: Sparkles
  },
  {
    title: "PMOC - Plano de Manutenção, Operação e Controle",
    description: "Elaboração e acompanhamento do PMOC para empresas que precisam manter controle técnico e organização das manutenções.",
    icon: ShieldCheck
  },
  {
    title: "Relatórios técnicos",
    description: "Registro organizado dos serviços executados, facilitando o acompanhamento, controle e tomada de decisão.",
    icon: FileText
  },
  {
    title: "Atendimento empresarial",
    description: "Soluções de climatização para empresas, clínicas, hospitais, hotéis, comércios e instituições.",
    icon: Fan
  },
  {
    title: "Suporte técnico especializado",
    description: "Apoio técnico para demandas preventivas, corretivas e acompanhamento dos sistemas de climatização.",
    icon: LifeBuoy
  }
];
