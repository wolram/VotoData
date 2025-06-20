import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { AudioPlayer } from "@/components/AudioPlayer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "MiroFish + Dados do TSE: Simulação de Cenários Eleitorais com Inteligência de Enxame — VotoData",
  description:
    "Como o motor de swarm intelligence MiroFish pode criar mundos digitais paralelos com milhares de agentes-eleitores para prever resultados das eleições de 2026.",
};

export default function MirofishPost() {
  return (
    <main className="page-grid">
      <Nav />

      <article className="col-span-full pt-[80px] pb-20 max-w-[720px]">
        <div className="section-label mb-6">
          <span className="section-label-slash">/</span>
          Blog
        </div>

        <h1
          className="font-sans font-light"
          style={{
            fontSize: "clamp(32px, 4vw, 48px)",
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
          }}
        >
          MiroFish + Dados do TSE: Simulação de Cenários Eleitorais com
          Inteligência de Enxame
        </h1>

        <div className="text-mono-sm mt-4 opacity-60">
          2025.07.05 &middot; Artigo &middot; 15 min de leitura
        </div>

        <div className="mt-2 flex flex-wrap gap-2">
          <span className="tag-pill">MiroFish</span>
          <span className="tag-pill">Swarm Intelligence</span>
          <span className="tag-pill">Multi-Agent</span>
          <span className="tag-pill">Eleições 2026</span>
        </div>

        {/* Audio */}
        <div className="mt-8">
          <AudioPlayer src="" title="MiroFish + Dados do TSE: Simulação de Cenários Eleitorais" />
        </div>

        <div className="mt-12 flex flex-col gap-8 text-body leading-relaxed">
          {/* Intro */}
          <p className="text-card-body">
            E se você pudesse criar uma réplica digital do eleitorado
            brasileiro — com milhares de agentes autônomos que pensam, debatem
            e votam — e rodar centenas de simulações antes da eleição real
            acontecer? Isso não é ficção científica. É exatamente o que o
            MiroFish, o primeiro motor open source de inteligência de enxame,
            torna possível.
          </p>

          {/* Section 1 */}
          <section>
            <h2 className="font-sans text-xl font-normal mb-4">
              O que é o MiroFish?
            </h2>
            <p>
              O MiroFish é um motor de predição baseado em tecnologia
              multi-agente que constrói mundos digitais paralelos de alta
              fidelidade. A partir de informações-semente do mundo real —
              notícias, dados demográficos, sinais econômicos — ele gera
              milhares de agentes inteligentes com personalidades independentes,
              memória de longo prazo e lógica comportamental própria.
            </p>
            <p className="mt-4">
              Esses agentes interagem livremente em um ambiente social simulado,
              e o comportamento emergente do grupo revela padrões que métodos
              tradicionais não conseguem capturar. Com 48 mil stars no GitHub,
              o projeto já é usado em finanças, análise de políticas públicas,
              simulação de crises de PR e pesquisa acadêmica.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="font-sans text-xl font-normal mb-4">
              Por que Multi-Agent Simulation para Eleições?
            </h2>
            <p>
              Modelos tradicionais de predição eleitoral (regressão, XGBoost,
              redes neurais) tratam eleitores como observações independentes em
              um dataset. Mas o voto é um fenômeno social — influenciado por
              conversas, redes sociais, líderes comunitários e eventos
              inesperados.
            </p>
            <p className="mt-4">
              A simulação multi-agente captura exatamente isso:
            </p>
            <ul className="mt-4 flex flex-col gap-3 pl-6 list-disc">
              <li>
                <strong>Contágio de opinião:</strong> Como um escândalo de
                campanha se propaga em uma rede social simulada e muda
                intenções de voto
              </li>
              <li>
                <strong>Voto estratégico:</strong> Agentes que desistem do
                candidato preferido para evitar um resultado pior — dinâmica
                crítica no sistema de dois turnos brasileiro
              </li>
              <li>
                <strong>Abstenção endógena:</strong> Eleitores que decidem não
                votar com base no comportamento observado de outros agentes, não
                apenas em variáveis demográficas estáticas
              </li>
              <li>
                <strong>Efeito bandwagon:</strong> A tendência de eleitores
                indecisos gravitarem para o candidato que parece estar vencendo
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="font-sans text-xl font-normal mb-4">
              Arquitetura: TSE + MiroFish em 5 Passos
            </h2>
            <p>
              Nossa integração segue o pipeline nativo do MiroFish, alimentado
              com dados reais do TSE via API do VotoData:
            </p>

            <div className="mt-6 flex flex-col gap-6">
              <div className="flex gap-4">
                <span className="text-mono-sm opacity-40 pt-1 shrink-0">
                  01
                </span>
                <div>
                  <h3 className="font-sans text-base font-medium">
                    Graph Construction — Semente Eleitoral
                  </h3>
                  <p className="mt-1 text-sm opacity-80">
                    Extraímos o grafo de relações do ecossistema eleitoral:
                    candidatos, partidos, coligações/federações, doadores de
                    campanha e redes de influência. Dados de candidaturas,
                    financiamento e patrimônio do TSE alimentam o GraphRAG
                    do MiroFish.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="text-mono-sm opacity-40 pt-1 shrink-0">
                  02
                </span>
                <div>
                  <h3 className="font-sans text-base font-medium">
                    Environment Setup — Mundo Digital Eleitoral
                  </h3>
                  <p className="mt-1 text-sm opacity-80">
                    Geramos personas de agentes-eleitores baseadas no perfil
                    real do eleitorado (voter_profile): distribuição de idade,
                    gênero, escolaridade, ocupação por zona eleitoral. Cada
                    agente recebe uma persona calibrada com dados do IBGE
                    (renda, urbanização, IDH).
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="text-mono-sm opacity-40 pt-1 shrink-0">
                  03
                </span>
                <div>
                  <h3 className="font-sans text-base font-medium">
                    Start Simulation — Campanha Virtual
                  </h3>
                  <p className="mt-1 text-sm opacity-80">
                    Os agentes interagem em plataformas sociais simuladas,
                    discutindo propostas, reagindo a notícias injetadas
                    (debates, escândalos, pesquisas), e atualizando suas
                    intenções de voto. A memória temporal dinâmica do MiroFish
                    captura mudanças de opinião ao longo da campanha.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="text-mono-sm opacity-40 pt-1 shrink-0">
                  04
                </span>
                <div>
                  <h3 className="font-sans text-base font-medium">
                    Report Generation — Predição Eleitoral
                  </h3>
                  <p className="mt-1 text-sm opacity-80">
                    O ReportAgent do MiroFish gera relatórios detalhados:
                    projeção de votação por candidato, probabilidade de segundo
                    turno, taxa de abstenção estimada, e identificação de
                    municípios-chave (swing cities).
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="text-mono-sm opacity-40 pt-1 shrink-0">
                  05
                </span>
                <div>
                  <h3 className="font-sans text-base font-medium">
                    Deep Interaction — War Room Digital
                  </h3>
                  <p className="mt-1 text-sm opacity-80">
                    O diferencial: você pode conversar diretamente com qualquer
                    agente-eleitor da simulação. Pergunte a um eleitor
                    indeciso de Belo Horizonte por que está considerando mudar
                    de voto. Ou injete um evento (ex: denúncia de corrupção) e
                    observe como o sistema reage em tempo real.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="font-sans text-xl font-normal mb-4">
              Casos de Uso para 2026
            </h2>

            <div className="mt-4 flex flex-col gap-6">
              <div className="section-border pt-4">
                <h3 className="text-mono-sm uppercase opacity-60">
                  Para Partidos e Campanhas
                </h3>
                <p className="mt-2">
                  Teste estratégias de campanha antes de investir. Simule o
                  impacto de diferentes alocações do FEFC. Identifique quais
                  mensagens ressoam em quais segmentos do eleitorado. Rode
                  centenas de cenários de segundo turno.
                </p>
              </div>

              <div className="section-border pt-4">
                <h3 className="text-mono-sm uppercase opacity-60">
                  Para o TSE e Órgãos Públicos
                </h3>
                <p className="mt-2">
                  Preveja a demanda logística por seção eleitoral (quantas
                  urnas, mesários). Simule o impacto de mudanças na
                  legislação eleitoral antes de implementar. Antecipe zonas
                  de alta abstenção para campanhas de conscientização.
                </p>
              </div>

              <div className="section-border pt-4">
                <h3 className="text-mono-sm uppercase opacity-60">
                  Para Pesquisadores
                </h3>
                <p className="mt-2">
                  Laboratório controlado para testar hipóteses de ciência
                  política. Simule eleições contrafactuais (e se o candidato
                  X tivesse concorrido em 2018?). Estude polarização e
                  formação de bolhas em ambientes controlados.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="font-sans text-xl font-normal mb-4">
              Vantagens sobre Métodos Tradicionais
            </h2>

            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="text-mono-sm uppercase text-left border-b border-[var(--border-color-light)]">
                    <th className="py-3 pr-4">Critério</th>
                    <th className="py-3 pr-4">Pesquisas Tradicionais</th>
                    <th className="py-3 pr-4">ML (XGBoost)</th>
                    <th className="py-3">MiroFish + TSE</th>
                  </tr>
                </thead>
                <tbody className="text-body">
                  <tr className="border-b border-[var(--border-color-light)]">
                    <td className="py-3 pr-4 font-medium">Interação social</td>
                    <td className="py-3 pr-4 opacity-60">Não captura</td>
                    <td className="py-3 pr-4 opacity-60">Não captura</td>
                    <td className="py-3 font-medium">Simulada nativamente</td>
                  </tr>
                  <tr className="border-b border-[var(--border-color-light)]">
                    <td className="py-3 pr-4 font-medium">Cenários what-if</td>
                    <td className="py-3 pr-4 opacity-60">Impossível</td>
                    <td className="py-3 pr-4 opacity-60">Limitado</td>
                    <td className="py-3 font-medium">Ilimitado</td>
                  </tr>
                  <tr className="border-b border-[var(--border-color-light)]">
                    <td className="py-3 pr-4 font-medium">Explicabilidade</td>
                    <td className="py-3 pr-4">Alta</td>
                    <td className="py-3 pr-4 opacity-60">Baixa (black box)</td>
                    <td className="py-3 font-medium">Alta (converse com agentes)</td>
                  </tr>
                  <tr className="border-b border-[var(--border-color-light)]">
                    <td className="py-3 pr-4 font-medium">Custo por simulação</td>
                    <td className="py-3 pr-4 opacity-60">R$ 500k+ por pesquisa</td>
                    <td className="py-3 pr-4">Baixo</td>
                    <td className="py-3 font-medium">Baixo (open source)</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium">Dados do TSE</td>
                    <td className="py-3 pr-4 opacity-60">Não usa</td>
                    <td className="py-3 pr-4">Usa como features</td>
                    <td className="py-3 font-medium">Usa como semente do mundo</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="font-sans text-xl font-normal mb-4">
              Próximos Passos
            </h2>
            <ul className="flex flex-col gap-3 pl-6 list-disc">
              <li>
                <strong>Fork do MiroFish</strong> com adaptações para o
                sistema eleitoral brasileiro (dois turnos, lista aberta,
                quociente eleitoral)
              </li>
              <li>
                <strong>API de simulação</strong> integrada ao VotoData —
                rode cenários eleitorais via REST API
              </li>
              <li>
                <strong>Paper acadêmico</strong> comparando MiroFish vs.
                prediction markets sintéticos vs. XGBoost puro nas
                eleições de 2022 e 2024
              </li>
              <li>
                <strong>Dashboard interativo</strong> — visualize a simulação
                em tempo real com mapa do Brasil por seção eleitoral
              </li>
              <li>
                <strong>Metaculus integration</strong> — comparar calibração
                do MiroFish com forecasters humanos da plataforma
              </li>
            </ul>
          </section>

          {/* Links */}
          <div className="mt-4 section-border pt-8">
            <div className="flex flex-col gap-2">
              <a
                href="https://github.com/666ghj/MiroFish"
                className="cta-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                MiroFish no GitHub (48.3k stars)
              </a>
              <a
                href="https://deepwiki.com/666ghj/MiroFish"
                className="cta-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Documentação do MiroFish
              </a>
              <a href="/contato" className="cta-link">
                Quer rodar uma simulação para sua campanha? Fale conosco
              </a>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
