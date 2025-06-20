export interface Reference {
  id: string;
  authors: string;
  year: number;
  title: string;
  publication?: string;
  url?: string;
  doi?: string;
}

export const REFERENCES: Record<string, Reference> = {
  chen2016: {
    id: "chen2016",
    authors: "Chen, T. & Guestrin, C.",
    year: 2016,
    title: "XGBoost: A Scalable Tree Boosting System",
    publication: "Proceedings of the 22nd ACM SIGKDD",
    url: "https://arxiv.org/abs/1603.02754",
  },
  wolfers2004: {
    id: "wolfers2004",
    authors: "Wolfers, J. & Zitzewitz, E.",
    year: 2004,
    title: "Prediction Markets",
    publication: "Journal of Economic Perspectives, 18(2), 107–126",
    doi: "10.1257/0895330041371321",
  },
  arrow2008: {
    id: "arrow2008",
    authors: "Arrow, K.J., Forsythe, R., Gorham, M., et al.",
    year: 2008,
    title: "The Promise of Prediction Markets",
    publication: "Science, 320(5878), 877–878",
  },
  berg2008: {
    id: "berg2008",
    authors: "Berg, J.E., Nelson, F.D., & Rietz, T.A.",
    year: 2008,
    title: "Prediction market accuracy in the long run",
    publication: "International Journal of Forecasting, 24(2), 285–300",
  },
  meireles2016: {
    id: "meireles2016",
    authors: "Meireles, F., Silva, D., & Costa, B.",
    year: 2016,
    title: "electionsBR: R Functions to Download and Clean Brazilian Electoral Data",
    publication: "CRAN",
    url: "https://electionsbr.com/novo/",
  },
  breiman2001: {
    id: "breiman2001",
    authors: "Breiman, L.",
    year: 2001,
    title: "Random Forests",
    publication: "Machine Learning, 45(1), 5–32",
    doi: "10.1023/A:1010933404324",
  },
  friedman2001: {
    id: "friedman2001",
    authors: "Friedman, J.H.",
    year: 2001,
    title: "Greedy function approximation: A gradient boosting machine",
    publication: "Annals of Statistics, 29(5), 1189–1232",
    doi: "10.1214/aos/1013203451",
  },
  surowiecki2004: {
    id: "surowiecki2004",
    authors: "Surowiecki, J.",
    year: 2004,
    title: "The Wisdom of Crowds",
    publication: "Doubleday",
  },
  nicolau2012: {
    id: "nicolau2012",
    authors: "Nicolau, J.",
    year: 2012,
    title: "Sistemas Eleitorais",
    publication: "Editora FGV",
  },
  power2019: {
    id: "power2019",
    authors: "Power, T.J. & Rodrigues-Silveira, R.",
    year: 2019,
    title: "Mapping Ideological Preferences in Brazilian Elections",
    publication: "Brazilian Political Science Review",
  },
};

export function getReference(id: string): Reference | undefined {
  return REFERENCES[id];
}

export function getReferencesByIds(ids: string[]): Reference[] {
  return ids.map((id) => REFERENCES[id]).filter(Boolean);
}
