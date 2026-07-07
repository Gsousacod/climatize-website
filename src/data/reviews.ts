export type Review = {
  nome: string;
  estrelas: number;
  comentario: string;
  tempoRelativo: string;
  origem: string;
  quantidadeAvaliacoesPerfil: number;
  quantidadeFotosPerfil: number;
  localGuide?: boolean;
};

// Avaliações reais do Google. Só entram aqui as que têm texto escrito —
// avaliações sem comentário (só nota) ficam de fora pra manter os cards consistentes.
export const reviews: Review[] = [
  { nome: "Junio Salomão", estrelas: 5, comentario: "Vai que o pião e bom", tempoRelativo: "Há 39 minutos", origem: "Google", quantidadeAvaliacoesPerfil: 11, quantidadeFotosPerfil: 0 },
  { nome: "Marcia Almeida", estrelas: 5, comentario: "A Climatize é sinônimo de excelência e confiabilidade em Teófilo Otoni, transformando ambientes com um atendimento impecável e serviços de altíssima qualidade.", tempoRelativo: "Há 43 minutos", origem: "Google", quantidadeAvaliacoesPerfil: 5, quantidadeFotosPerfil: 0 },
  { nome: "Walace Braun", estrelas: 5, comentario: "Experiência única, simplesmente surreal, valor acessível, sensacional.", tempoRelativo: "Há 60 minutos", origem: "Google", quantidadeAvaliacoesPerfil: 7, quantidadeFotosPerfil: 1 },
  { nome: "Catrine Gonçalves", estrelas: 5, comentario: "Excelente profissional! ✨✨✨", tempoRelativo: "Há 1 hora", origem: "Google", quantidadeAvaliacoesPerfil: 1, quantidadeFotosPerfil: 1 },
  { nome: "Amanda barreto da Silvia Nascimento 12E", estrelas: 5, comentario: "Profissionais capacitados e muito organizados , ótima experiência!", tempoRelativo: "Há 1 hora", origem: "Google", quantidadeAvaliacoesPerfil: 1, quantidadeFotosPerfil: 0 },
  { nome: "ingrid gonçalves dos santos", estrelas: 5, comentario: "Trabalho de excelente qualidade , super indico !", tempoRelativo: "Há 1 hora", origem: "Google", quantidadeAvaliacoesPerfil: 0, quantidadeFotosPerfil: 0 },
  { nome: "Pablo Oliveira", estrelas: 5, comentario: "Excelente profissional e compromisso com o cliente", tempoRelativo: "Há 1 hora", origem: "Google", quantidadeAvaliacoesPerfil: 5, quantidadeFotosPerfil: 0 },
  { nome: "Ryan Lima", estrelas: 5, comentario: "Atendimento e assistência excepcional melhor de teo sem sombra de dúvidas", tempoRelativo: "Há 2 horas", origem: "Google", quantidadeAvaliacoesPerfil: 1, quantidadeFotosPerfil: 0 },
  { nome: "MAURICIO VIANA DOS SANTOS", estrelas: 5, comentario: "Ótimo atendimento e muito profissionalismo por parte dos profissionais; recomendo!", tempoRelativo: "Há 2 horas", origem: "Google", quantidadeAvaliacoesPerfil: 3, quantidadeFotosPerfil: 0 },
  { nome: "Ana karolina virgens", estrelas: 5, comentario: "Empresa excelente! Serviço bem feito, além da equipe ser muita simpática e educada.", tempoRelativo: "Há 2 horas", origem: "Google", quantidadeAvaliacoesPerfil: 0, quantidadeFotosPerfil: 0 },
  { nome: "Cleyton Brandão", estrelas: 5, comentario: "Equipe educada e atendimento de qualidade, parabéns", tempoRelativo: "Há 2 horas", origem: "Google", quantidadeAvaliacoesPerfil: 2, quantidadeFotosPerfil: 1 },
  { nome: "lucas engenheiroeletricista", estrelas: 5, comentario: "Excelente atendimento, com prestação de serviço rápida e confiável!", tempoRelativo: "Há 2 horas", origem: "Google", quantidadeAvaliacoesPerfil: 0, quantidadeFotosPerfil: 0 },
  { nome: "Junior Santos", estrelas: 5, comentario: "Empresa ética, profissional e com um excelente atendimento.", tempoRelativo: "Há 2 horas", origem: "Google", quantidadeAvaliacoesPerfil: 0, quantidadeFotosPerfil: 0 },
  { nome: "Aniele brito", estrelas: 5, comentario: "Melhor empresa de climatização da cidade e região", tempoRelativo: "Há 2 horas", origem: "Google", quantidadeAvaliacoesPerfil: 4, quantidadeFotosPerfil: 1 },
  { nome: "Norton Porto", estrelas: 5, comentario: "Atendimento com excelência. Funcionários atenciosos e dedicados.", tempoRelativo: "Há 2 horas", origem: "Google", quantidadeAvaliacoesPerfil: 2, quantidadeFotosPerfil: 0 },
  { nome: "Gabriela Wagner", estrelas: 5, comentario: "Ótimo profissional!!!! Preço justo e deixam tudo muito limpo após a instalação do ar condicionado! Super recomendo!", tempoRelativo: "Há 3 horas", origem: "Google", quantidadeAvaliacoesPerfil: 0, quantidadeFotosPerfil: 6 },
  { nome: "Lucas Da Silva Medeiros", estrelas: 5, comentario: "Excelência em atendimento e profissionalismo!", tempoRelativo: "Há 3 horas", origem: "Google", quantidadeAvaliacoesPerfil: 1, quantidadeFotosPerfil: 0 },
  { nome: "Raylan Alves", estrelas: 5, comentario: "Trabalho impecável e de excelente qualidade, meu ar-condicionado está como novo.", tempoRelativo: "Há 3 horas", origem: "Google", quantidadeAvaliacoesPerfil: 0, quantidadeFotosPerfil: 0 },
  { nome: "Pamely Medeiros Pego", estrelas: 5, comentario: "Extremamente educados e prestativos! Me atenderam em Salto da divisa Mg, nada a reclamar! Meu Ar se encontra em perfeito estado.", tempoRelativo: "Há 3 horas", origem: "Google", quantidadeAvaliacoesPerfil: 5, quantidadeFotosPerfil: 4 },
  { nome: "Rosinere franco", estrelas: 5, comentario: "Serviço de excelência. Qualidade no atendimento. Parabéns!!", tempoRelativo: "Há 3 horas", origem: "Google", quantidadeAvaliacoesPerfil: 2, quantidadeFotosPerfil: 0 },
  { nome: "pamela julie medeiros pego", estrelas: 5, comentario: "Fiquei muito satisfeita com o trabalho da Climatize. Fizeram um serviço limpo, rápido e o atendimento foi impecável desde o primeiro contato. O ar-condicionado ficou perfeito!", tempoRelativo: "Há 3 horas", origem: "Google", quantidadeAvaliacoesPerfil: 5, quantidadeFotosPerfil: 3 },
  { nome: "Mytsurriro Shinkawa", estrelas: 5, comentario: "Referência em climatização dentro de Teófilo Otoni e região. Agradeço ao pessoal da Climatize pelo excelente trabalho prestado e pelo ótimo profissionalismo.", tempoRelativo: "Há 3 horas", origem: "Google", quantidadeAvaliacoesPerfil: 1, quantidadeFotosPerfil: 0 },
  { nome: "kelly tatyana Barreto", estrelas: 5, comentario: "Excelente equipe! Instalação impecável. Sem sujeira.", tempoRelativo: "Há 6 horas", origem: "Google", quantidadeAvaliacoesPerfil: 0, quantidadeFotosPerfil: 1 },
  { nome: "Pedro Manuel", estrelas: 5, comentario: "Profissionalismo, rapidez e um atendimento de extrema qualidade!\nEstou super satisfeito!", tempoRelativo: "Há 7 horas", origem: "Google", quantidadeAvaliacoesPerfil: 1, quantidadeFotosPerfil: 0 },
  { nome: "anthonya almeida", estrelas: 5, comentario: "Equipe organizada, com um excelente desempenho, super atendeu a minha necessidade, é um ótimo atendimento.", tempoRelativo: "Há 7 horas", origem: "Google", quantidadeAvaliacoesPerfil: 1, quantidadeFotosPerfil: 0 },
  { nome: "Luiz Cluadio Gama", estrelas: 5, comentario: "Excelente", tempoRelativo: "Há 7 horas", origem: "Google", quantidadeAvaliacoesPerfil: 0, quantidadeFotosPerfil: 0 },
  { nome: "Dailson Junio", estrelas: 5, comentario: "Excelência,qualidade e rapidez .", tempoRelativo: "Há 8 horas", origem: "Google", quantidadeAvaliacoesPerfil: 1, quantidadeFotosPerfil: 4 },
  { nome: "Matheus Barreto", estrelas: 5, comentario: "Equipe bem organizada,e ótima mão de obra", tempoRelativo: "Há 8 horas", origem: "Google", quantidadeAvaliacoesPerfil: 0, quantidadeFotosPerfil: 0 },
];

export const totalGoogleReviews = 38;
export const averageGoogleRating = 5.0;
