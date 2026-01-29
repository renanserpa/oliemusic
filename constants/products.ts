
export interface FAQItem {
  question: string;
  answer: string;
}

export interface ProductDetail {
  id: string;
  slug: string;
  title: string;
  headline: string;
  description: string;
  longDescription: string;
  benefits: string[];
  price: string;
  oldPrice: string;
  image: string;
  checkoutLink: string;
  category: 'familia' | 'professor' | 'escola';
  faq: FAQItem[];
}

export const PRODUCTS: ProductDetail[] = [
  {
    id: 'p1',
    slug: 'combo-maestro-kids',
    title: 'Combo Maestro Kids',
    headline: 'O Arsenal Definitivo para Professores de Musicalização',
    description: 'Mais de 230 atividades em PDF para musicalização infantil.',
    longDescription: 'O arsenal definitivo para professores. Inclui Bingo das Notas, Dominó de Acordes e o método alinhado à BNCC. Economize horas de planejamento e encante seus alunos com materiais de alta qualidade visual e pedagógica.',
    benefits: [
      "Acesso vitalício", 
      "Material 100% pronto para imprimir", 
      "Bônus: Manual do Ouvido Musical",
      "Jogos Pedagógicos Exclusivos",
      "Suporte via Comunidade Olie"
    ],
    price: '47,00',
    oldPrice: '97,00',
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&h=600&fit=crop',
    checkoutLink: 'https://pay.kiwify.com.br/seu-link-aqui',
    category: 'professor',
    faq: [
      { question: 'Como recebo o material?', answer: 'Imediatamente após a confirmação do pagamento, você receberá um e-mail com o link de download de todos os arquivos em PDF.' },
      { question: 'As atividades são alinhadas à BNCC?', answer: 'Sim, todos os materiais foram estruturados seguindo as competências e habilidades propostas pela BNCC para a educação infantil e fundamental.' }
    ]
  },
  {
    id: 'p2',
    slug: 'apostila-master-violao',
    title: 'Apostila Master de Violão',
    headline: 'Do Zero ao Solo com a Metodologia Serpa-Híbrida',
    description: 'Do iniciante ao avançado com a Metodologia Serpa-Híbrida.',
    longDescription: 'A apostila oficial usada pelo Prof. Renan Serpa. São 237 páginas de conteúdo estruturado, cifras, tablaturas e a lógica do GCM Maestro para quem quer aprender violão de forma sólida e divertida.',
    benefits: [
      "Teoria e Prática Integradas", 
      "Diagramas de Acordes de fácil leitura", 
      "Repertório Rockstar",
      "Trilha de aprendizagem passo a passo",
      "Acesso a vídeos de apoio"
    ],
    price: '97,00',
    oldPrice: '197,00',
    image: 'https://images.unsplash.com/photo-1510915363646-e62f7bb21ee5?w=800&h=600&fit=crop',
    checkoutLink: 'https://pay.kiwify.com.br/seu-link-aqui',
    category: 'familia',
    faq: [
      { question: 'Para quem é esta apostila?', answer: 'Para alunos iniciantes que nunca pegaram no violão e também para quem já toca e deseja organizar seus estudos com um método profissional.' },
      { question: 'A apostila é física?', answer: 'Este é um produto digital de alta resolução. Você pode imprimir ou usar em seu tablet ou computador.' }
    ]
  },
  {
    id: 'p3',
    slug: 'revolucao-phygital',
    title: 'Treinamento: A Revolução Phygital',
    headline: 'O Guia Estratégico para o Ensino Híbrido de Música',
    description: 'Apresentação completa e guia para implementar o ensino híbrido.',
    longDescription: 'Baseado no ecossistema GCM Maestro, este treinamento ensina donos de escolas e professores particulares a eliminarem o "Vale da Morte" da evasão de alunos através da gamificação e da tecnologia phygital.',
    benefits: [
      "Roteiro de 20 Slides (PDF)", 
      "Guia de Implementação Passo a Passo", 
      "Estratégia de Retenção de Alunos",
      "Modelos de precificação para aulas híbridas",
      "Acesso à mentoria GCM Maestro"
    ],
    price: '197,00',
    oldPrice: '397,00',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop',
    checkoutLink: 'https://pay.kiwify.com.br/seu-link-aqui',
    category: 'escola',
    faq: [
      { question: 'O que é o conceito Phygital?', answer: 'É a união do Physical (Físico) com o Digital. No nosso caso, é unir o instrumento real com o software GCM Maestro para potencializar resultados.' },
      { question: 'Vou aprender a usar o software GCM?', answer: 'Sim, este treinamento é a porta de entrada para dominar todas as funcionalidades do GCM Maestro na sua instituição.' }
    ]
  }
];
