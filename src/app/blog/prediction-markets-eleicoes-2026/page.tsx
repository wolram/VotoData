import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { AudioPlayer } from "@/components/AudioPlayer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prediction Markets e as Eleições Brasileiras de 2026 — VotoData",
  description:
    "Como plataformas como Polymarket podem revolucionar a previsão eleitoral no Brasil. Análise comparativa com pesquisas tradicionais e modelos de ML.",
};

export default function PredictionMarketsPost() {
  return (
    <main className="page-grid">
      <Nav />

      <article className="col-span-full pt-[80px] pb-20 max-w-[720px]">
        {/* Header */}
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
          Prediction Markets e as Eleições Brasileiras de 2026
        </h1>

        <div className="text-mono-sm mt-4 opacity-60">
          2025.07.01 &middot; Artigo &middot; 12 min de leitura
        </div>

        <div className="mt-2 flex flex-wrap gap-2">
          <span className="tag-pill">Predição</span>
          <span className="tag-pill">Polymarket</span>
          <span className="tag-pill">Eleições 2026</span>
        </div>

        {/* Audio */}
        <div className="mt-8">
          <AudioPlayer src="" title="Prediction Markets e as Eleições Brasileiras de 2026" />
        </div>

        {/* Body */}
        <div className="mt-12 flex flex-col gap-8 text-body leading-relaxed">
          <p className="text-card-body">
            Em novembro de 2024, a Polymarket se tornou manchete global ao prever
            com precisão o resultado da eleição presidencial americana — superando
            agregadores de pesquisas como o FiveThirtyEight e o RealClearPolitics.
            A pergunta inevitável: esse modelo funciona para o Brasil?
          </p>

          {/* Section 1 */}
          <section>
            <h2 className="font-sans text-xl font-normal mb-4">
              O que são Prediction Markets?
            </h2>
            <p>
              Mercados de predição são plataformas onde participantes compram e
              vendem contratos vinculados a eventos futuros. O preço de cada
              contrato reflete a probabilidade implícita do evento ocorrer,
              agregando informação dispersa de milhares de agentes econômicos com
              incentivos financeiros reais — o que a teoria econômica chama de
              <em> wisdom of crowds</em>.
            </p>
            <p className="mt-4">
              A Polymarket, construída sobre blockchain (Polygon), permite que
              qualquer pessoa no mundo aposte em resultados binários. Em 2024,
              movimentou mais de US$ 3,5 bilhões em volume de negociação nas
              eleições americanas.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="font-sans text-xl font-normal mb-4">
              Por que prediction markets superaram as pesquisas em 2024?
            </h2>
            <p>
              Três fatores estruturais explicam a vantagem:
            </p>
            <ul className="mt-4 flex flex-col gap-3 pl-6 list-disc">
              <li>
                <strong>Skin in the game:</strong> Diferentemente de pesquisas
                de opinião (onde o entrevistado não tem custo ao mentir),
                participantes de mercados de predição arriscam dinheiro real.
                Isso filtra ruído e viés de desejabilidade social.
              </li>
              <li>
                <strong>Atualização contínua:</strong> Pesquisas tradicionais
                capturam um snapshot temporal. Mercados de predição atualizam
                preços em tempo real, incorporando notícias, debates e escândalos
                instantaneamente.
              </li>
              <li>
                <strong>Agregação de informação diversa:</strong> Um trader pode
                ter informação privilegiada sobre mobilização em um swing state,
                outro sobre turnout de jovens. O mercado agrega tudo isso em um
                único preço.
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="font-sans text-xl font-normal mb-4">
              O desafio brasileiro: adaptação ao contexto local
            </h2>
            <p>
              Aplicar prediction markets ao Brasil exige considerar
              particularidades do sistema eleitoral:
            </p>
            <ul className="mt-4 flex flex-col gap-3 pl-6 list-disc">
              <li>
                <strong>Sistema proporcional de lista aberta:</strong> Diferente
                dos EUA (winner-takes-all), o Brasil usa quociente eleitoral
                para cargos legislativos. Prever quem se elege deputado é
                exponencialmente mais complexo.
              </li>
              <li>
                <strong>Dois turnos:</strong> A possibilidade de segundo turno
                para cargos executivos cria uma dinâmica de voto estratégico que
                mercados precisam precificar.
              </li>
              <li>
                <strong>5.570 municípios:</strong> A fragmentação geográfica
                exige liquidez em milhares de mercados simultâneos — algo que
                plataformas globais como Polymarket não oferecem.
              </li>
              <li>
                <strong>Regulação:</strong> A CVM e o Banco Central ainda não
                regulamentaram prediction markets no Brasil. A Lei 14.790/2023
                (apostas esportivas) pode servir de precedente.
              </li>
            </ul>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="font-sans text-xl font-normal mb-4">
              Nossa abordagem: mercados sintéticos com dados do TSE
            </h2>
            <p>
              Na VotoData, estamos construindo <strong>mercados de predição
              sintéticos</strong> — modelos que simulam a dinâmica de preços de
              um prediction market usando dados reais do TSE como inputs:
            </p>
            <ul className="mt-4 flex flex-col gap-3 pl-6 list-disc">
              <li>
                Histórico de votação por seção eleitoral (1998–2024)
              </li>
              <li>
                Perfil sociodemográfico do eleitorado (idade, escolaridade, gênero)
              </li>
              <li>
                Financiamento de campanha e patrimônio declarado
              </li>
              <li>
                Dados do IBGE (PIB per capita, IDH, urbanização)
              </li>
            </ul>
            <p className="mt-4">
              O modelo combina XGBoost para predição de abstenção e votação
              nominal com uma camada de <em>market microstructure</em> que
              simula como traders racionais precificariam cada candidatura.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="font-sans text-xl font-normal mb-4">
              Eleições 2026: o que já sabemos
            </h2>
            <p>
              Com base nos dados históricos processados pela VotoData, algumas
              tendências estruturais já são observáveis:
            </p>
            <ul className="mt-4 flex flex-col gap-3 pl-6 list-disc">
              <li>
                Abstenção nas capitais tem crescido 2-3 pontos percentuais por
                ciclo desde 2014
              </li>
              <li>
                O FEFC concentra recursos em candidatos com maior patrimônio
                declarado, criando um efeito Matthew eleitoral
              </li>
              <li>
                A transferência de votos entre primeiro e segundo turno segue
                padrões geográficos previsíveis em 78% dos municípios analisados
              </li>
              <li>
                Cotas de gênero resultam em eleição efetiva de mulheres em
                apenas 15% dos casos — indicando preenchimento formal de listas
              </li>
            </ul>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="font-sans text-xl font-normal mb-4">
              Próximos passos
            </h2>
            <p>
              Nas próximas semanas, publicaremos:
            </p>
            <ul className="mt-4 flex flex-col gap-3 pl-6 list-disc">
              <li>
                <strong>Paper:</strong>{" "}
                <em>
                  &ldquo;Synthetic Prediction Markets for Brazilian Elections:
                  A Machine Learning Approach&rdquo;
                </em>{" "}
                — artigo acadêmico com metodologia completa
              </li>
              <li>
                <strong>API:</strong> Endpoint de predições em tempo real para
                eleições 2026
              </li>
              <li>
                <strong>Dashboard:</strong> Visualização interativa dos mercados
                sintéticos por estado e município
              </li>
              <li>
                <strong>Metaculus:</strong> Análise comparativa com a plataforma
                de forecasting e suas metodologias de calibração
              </li>
            </ul>
          </section>

          {/* CTA */}
          <div className="mt-8 section-border pt-8">
            <p className="text-mono-sm">
              Quer acesso antecipado aos modelos de predição para 2026?
            </p>
            <a href="/contato" className="cta-link mt-2 inline-block">
              Fale com a equipe VotoData
            </a>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
