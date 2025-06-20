export interface GlossaryEntry {
  term: string;
  slug: string;
  shortDef: string;
  category: "AI" | "Eng ML" | "Data" | "Models" | "Social" | "API" | "Predição" | "Eleitoral";
  deepLink?: string;
  references?: Array<{
    label: string;
    url: string;
  }>;
}

export const GLOSSARY: GlossaryEntry[] = [
  // Models & ML
  {
    term: "XGBoost",
    slug: "xgboost",
    shortDef: "Algoritmo de gradient boosting otimizado para velocidade e performance. Usa árvores de decisão em sequência, onde cada nova árvore corrige os erros da anterior.",
    category: "Models",
    deepLink: "/pesquisa/prediction-markets-brazil#xgboost",
    references: [{ label: "Chen & Guestrin, 2016", url: "https://arxiv.org/abs/1603.02754" }],
  },
  {
    term: "Random Forest",
    slug: "random-forest",
    shortDef: "Ensemble de árvores de decisão treinadas em subconjuntos aleatórios dos dados. A predição final é a média (regressão) ou voto majoritário (classificação) das árvores.",
    category: "Models",
    references: [{ label: "Breiman, 2001", url: "https://doi.org/10.1023/A:1010933404324" }],
  },
  {
    term: "Gradient Boosting",
    slug: "gradient-boosting",
    shortDef: "Técnica de ensemble que treina modelos sequencialmente, cada um focando nos erros residuais do anterior. Minimiza uma função de perda via gradiente descendente no espaço funcional.",
    category: "Models",
    references: [{ label: "Friedman, 2001", url: "https://doi.org/10.1214/aos/1013203451" }],
  },
  {
    term: "Brier Score",
    slug: "brier-score",
    shortDef: "Métrica que mede a acurácia de predições probabilísticas. Varia de 0 (perfeito) a 1 (pior possível). Calculada como a média dos quadrados das diferenças entre probabilidade prevista e resultado real.",
    category: "Models",
    deepLink: "/pesquisa/prediction-markets-brazil#brier-score",
  },
  // Eleitoral
  {
    term: "Seção Eleitoral",
    slug: "secao-eleitoral",
    shortDef: "Menor unidade administrativa do sistema eleitoral brasileiro. É o local físico onde a urna eletrônica está instalada. O Brasil tem mais de 470 mil seções.",
    category: "Eleitoral",
  },
  {
    term: "Zona Eleitoral",
    slug: "zona-eleitoral",
    shortDef: "Unidade administrativa que agrupa diversas seções eleitorais. Uma zona pode abranger vários municípios pequenos ou ser uma subdivisão de uma grande cidade.",
    category: "Eleitoral",
  },
  {
    term: "Quociente Eleitoral",
    slug: "quociente-eleitoral",
    shortDef: "Número mínimo de votos que um partido ou federação precisa atingir para eleger representantes no sistema proporcional. Calculado dividindo os votos válidos pelo número de vagas.",
    category: "Eleitoral",
  },
  {
    term: "Lista Aberta",
    slug: "lista-aberta",
    shortDef: "Sistema proporcional onde o eleitor vota diretamente no candidato (não apenas no partido). Os mais votados dentro dos partidos que atingem o quociente eleitoral são eleitos.",
    category: "Eleitoral",
  },
  {
    term: "FEFC",
    slug: "fefc",
    shortDef: "Fundo Especial de Financiamento de Campanha. Principal fonte de recursos públicos para campanhas eleitorais no Brasil, distribuído entre os partidos conforme critérios legais.",
    category: "Eleitoral",
  },
  {
    term: "Abstenção",
    slug: "abstencao",
    shortDef: "Percentual de eleitores aptos que não comparecem para votar. No Brasil, o voto é obrigatório para maiores de 18 e menores de 70 anos, mas a abstenção tem crescido.",
    category: "Eleitoral",
    deepLink: "/modelos/abstencao",
  },
  {
    term: "Segundo Turno",
    slug: "segundo-turno",
    shortDef: "Nova votação entre os dois candidatos mais votados quando nenhum atinge maioria absoluta (50%+1) no primeiro turno. Aplica-se a cargos executivos em municípios com mais de 200 mil eleitores.",
    category: "Eleitoral",
    deepLink: "/modelos/segundo-turno",
  },
  {
    term: "Transferência de Votos",
    slug: "transferencia-votos",
    shortDef: "Fenômeno onde eleitores de candidatos eliminados no primeiro turno migram para um dos finalistas no segundo turno. Padrões de transferência variam por região e perfil socioeconômico.",
    category: "Eleitoral",
    deepLink: "/modelos/transferencia",
  },
  // Data & Infra
  {
    term: "TSE",
    slug: "tse",
    shortDef: "Tribunal Superior Eleitoral. Autoridade máxima na gestão das eleições no Brasil e custodiante dos dados eleitorais oficiais via o Repositório de Dados Eleitorais (RDE).",
    category: "Data",
    references: [{ label: "TSE — Repositório de Dados Eleitorais", url: "https://dadosabertos.tse.jus.br" }],
  },
  {
    term: "CEPESPData",
    slug: "cepespdata",
    shortDef: "Projeto da FGV que oferece dados eleitorais curados e padronizados desde 1998. Aplica regras de negócio (filtro de candidaturas aptas) para garantir consistência longitudinal.",
    category: "Data",
    references: [{ label: "CEPESPData — FGV", url: "https://github.com/Cepesp-Fgv/cepesp-r" }],
  },
  {
    term: "electionsBR",
    slug: "electionsbr",
    shortDef: "Pacote R que automatiza download, descompressão e limpeza dos dados brutos do TSE. Resolve problemas de encoding (Latin-1/UTF-8) e fragmentação de arquivos estaduais.",
    category: "Data",
    references: [{ label: "Meireles, Silva & Costa, 2016", url: "https://electionsbr.com/novo/" }],
  },
  {
    term: "Microdados",
    slug: "microdados",
    shortDef: "Dados no nível mais granular disponível (por eleitor, candidato ou seção). Permitem análises estatísticas detalhadas impossíveis com dados agregados.",
    category: "Data",
  },
  {
    term: "ETL",
    slug: "etl",
    shortDef: "Extract, Transform, Load. Pipeline de dados que extrai informações brutas, transforma (limpa, padroniza) e carrega em um formato analítico. Essencial para dados do TSE.",
    category: "Data",
  },
  // AI & Swarm
  {
    term: "Swarm Intelligence",
    slug: "swarm-intelligence",
    shortDef: "Inteligência coletiva emergente de agentes simples interagindo localmente. Inspirada em colônias de formigas e cardumes. Aplicada a simulações eleitorais via MiroFish.",
    category: "AI",
    deepLink: "/blog/mirofish-predicao-eleitoral",
  },
  {
    term: "Multi-Agent Simulation",
    slug: "multi-agent-simulation",
    shortDef: "Técnica computacional que modela um sistema como coleção de agentes autônomos com comportamentos individuais. O comportamento global emerge das interações locais.",
    category: "AI",
    deepLink: "/blog/mirofish-predicao-eleitoral",
  },
  {
    term: "GraphRAG",
    slug: "graphrag",
    shortDef: "Retrieval-Augmented Generation baseado em grafos de conhecimento. Combina busca em grafos de entidades e relações com geração de texto via LLM para respostas contextualizadas.",
    category: "AI",
  },
  {
    term: "Prediction Market",
    slug: "prediction-market",
    shortDef: "Mercado onde participantes compram contratos vinculados a eventos futuros. O preço reflete a probabilidade implícita do evento, agregando informação via incentivos financeiros.",
    category: "Predição",
    deepLink: "/blog/prediction-markets-eleicoes-2026",
    references: [{ label: "Wolfers & Zitzewitz, 2004", url: "https://doi.org/10.1257/0895330041371321" }],
  },
  {
    term: "Wisdom of Crowds",
    slug: "wisdom-of-crowds",
    shortDef: "Princípio de que a agregação de estimativas independentes de um grupo grande tende a ser mais precisa que a estimativa de qualquer indivíduo, incluindo especialistas.",
    category: "Predição",
    references: [{ label: "Surowiecki, 2004", url: "https://en.wikipedia.org/wiki/The_Wisdom_of_Crowds" }],
  },
];

export function getGlossaryEntry(slug: string): GlossaryEntry | undefined {
  return GLOSSARY.find((entry) => entry.slug === slug);
}

export function getGlossaryByCategory(): Record<string, GlossaryEntry[]>;
export function getGlossaryByCategory(category: GlossaryEntry["category"]): GlossaryEntry[];
export function getGlossaryByCategory(category?: GlossaryEntry["category"]): GlossaryEntry[] | Record<string, GlossaryEntry[]> {
  if (category) {
    return GLOSSARY.filter((entry) => entry.category === category);
  }
  const grouped: Record<string, GlossaryEntry[]> = {};
  for (const entry of GLOSSARY) {
    if (!grouped[entry.category]) grouped[entry.category] = [];
    grouped[entry.category].push(entry);
  }
  return grouped;
}
