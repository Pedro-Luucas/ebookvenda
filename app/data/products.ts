export interface Product {
  id: string;
  title: string;
  slug: string;
  description: string;
  longDescription: string;
  price: number; // em centavos
  coverImage: string;
  author: string;
  pages: number;
  format: string;
  category: string;
}

export const products: Product[] = [
  {
    id: "1",
    title: "Dominando Vendas: O Guia Completo",
    slug: "dominando-vendas",
    description:
      "Aprenda as técnicas mais eficazes para fechar negócios e aumentar suas vendas exponencialmente.",
    longDescription:
      "Este ebook é o guia definitivo para quem deseja dominar a arte das vendas. Com mais de 200 páginas de conteúdo prático, você aprenderá desde técnicas de prospecção até estratégias avançadas de fechamento. Inclui estudos de caso reais, scripts de vendas testados e exercícios práticos para aplicar no seu dia a dia.",
    price: 4990,
    coverImage: "/covers/dominando-vendas.svg",
    author: "Carlos Mendes",
    pages: 220,
    format: "PDF + EPUB",
    category: "Vendas",
  },
  {
    id: "2",
    title: "Persuasão e Influência em Vendas",
    slug: "persuasao-influencia",
    description:
      "Descubra os gatilhos mentais e técnicas de persuasão que os melhores vendedores utilizam.",
    longDescription:
      "Baseado em anos de pesquisa em psicologia comportamental, este ebook revela os segredos da persuasão aplicada às vendas. Aprenda a usar gatilhos mentais como escassez, autoridade e prova social para influenciar decisões de compra de forma ética e eficaz.",
    price: 3990,
    coverImage: "/covers/persuasao-influencia.svg",
    author: "Ana Beatriz Silva",
    pages: 180,
    format: "PDF + EPUB",
    category: "Persuasão",
  },
  {
    id: "3",
    title: "Vendas B2B: Estratégias para Grandes Negócios",
    slug: "vendas-b2b",
    description:
      "Estratégias comprovadas para vendas corporativas e negociações de alto valor.",
    longDescription:
      "Se você trabalha com vendas B2B, este ebook é indispensável. Aprenda a navegar ciclos de venda longos, lidar com múltiplos decisores e construir propostas de valor irresistíveis para empresas. Inclui templates de apresentação e modelos de proposta comercial.",
    price: 5990,
    coverImage: "/covers/vendas-b2b.svg",
    author: "Roberto Almeida",
    pages: 250,
    format: "PDF + EPUB",
    category: "B2B",
  },
  {
    id: "4",
    title: "Cold Calling que Funciona",
    slug: "cold-calling",
    description:
      "Transforme ligações frias em oportunidades quentes com scripts e técnicas testadas.",
    longDescription:
      "Pare de ter medo do telefone! Este ebook traz um método passo a passo para fazer cold calls eficazes. Com scripts prontos para usar, técnicas para passar pela secretária, e estratégias para agendar reuniões com decisores. Acompanha áudios de exemplo de ligações reais.",
    price: 2990,
    coverImage: "/covers/cold-calling.svg",
    author: "Marcos Oliveira",
    pages: 150,
    format: "PDF + EPUB",
    category: "Prospecção",
  },
  {
    id: "5",
    title: "Funil de Vendas Digital",
    slug: "funil-vendas-digital",
    description:
      "Construa funis de vendas automatizados que convertem visitantes em clientes 24/7.",
    longDescription:
      "Aprenda a criar funis de vendas digitais completos, desde a captura de leads até o pós-venda. Este ebook cobre landing pages, email marketing, automação, remarketing e métricas essenciais. Ideal para quem quer escalar vendas usando o poder do marketing digital.",
    price: 4490,
    coverImage: "/covers/funil-vendas.svg",
    author: "Juliana Costa",
    pages: 200,
    format: "PDF + EPUB",
    category: "Marketing Digital",
  },
  {
    id: "6",
    title: "Negociação de Alto Impacto",
    slug: "negociacao-alto-impacto",
    description:
      "Domine a arte da negociação e nunca mais perca um negócio por preço.",
    longDescription:
      "A negociação é uma habilidade fundamental para qualquer vendedor. Neste ebook, você aprenderá técnicas avançadas de negociação usadas em Harvard, adaptadas para o mercado brasileiro. Descubra como criar valor, lidar com objeções e chegar ao sim sem sacrificar sua margem.",
    price: 3490,
    coverImage: "/covers/negociacao.svg",
    author: "Fernando Santos",
    pages: 170,
    format: "PDF + EPUB",
    category: "Negociação",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function formatPrice(priceInCents: number): string {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(priceInCents / 100);
}
