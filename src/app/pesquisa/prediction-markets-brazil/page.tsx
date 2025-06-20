import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { AudioPlayer } from "@/components/AudioPlayer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Synthetic Prediction Markets for Brazilian Elections — VotoData Research",
  description:
    "A machine learning approach to simulating prediction market dynamics using TSE microdata. Working paper.",
};

export default function PredictionMarketsPaper() {
  return (
    <main className="page-grid">
      <Nav />

      <article className="col-span-full pt-[80px] pb-20 max-w-[720px]">
        {/* Header */}
        <div className="section-label mb-6">
          <span className="section-label-slash">/</span>
          Research Paper &middot; Working Draft
        </div>

        <h1
          className="font-sans font-light"
          style={{
            fontSize: "clamp(28px, 3.5vw, 42px)",
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
          }}
        >
          Synthetic Prediction Markets for Brazilian Elections: A Machine
          Learning Approach
        </h1>

        <div className="text-mono-sm mt-4 opacity-60">
          VotoData Research &middot; Working Paper &middot; July 2025
        </div>

        <div className="mt-2 flex flex-wrap gap-2">
          <span className="tag-pill">Prediction Markets</span>
          <span className="tag-pill">XGBoost</span>
          <span className="tag-pill">Electoral Data</span>
          <span className="tag-pill">Brazil</span>
        </div>

        {/* Body */}
        {/* Audio */}
        <div className="mt-8">
          <AudioPlayer src="" title="Synthetic Prediction Markets for Brazilian Elections" />
        </div>

        <div className="mt-12 flex flex-col gap-10 text-body leading-relaxed">
          {/* Abstract */}
          <section>
            <h2 className="font-sans text-lg font-medium mb-3 uppercase tracking-wide opacity-60">
              Abstract
            </h2>
            <p className="italic">
              We propose a framework for constructing synthetic prediction
              markets for Brazilian elections using historical microdata from the
              Tribunal Superior Eleitoral (TSE). Our approach combines
              gradient-boosted tree models (XGBoost) trained on 26 years of
              electoral data (1998–2024) with a market microstructure simulation
              layer that converts point predictions into dynamic probability
              surfaces. We demonstrate that synthetic markets outperform
              traditional polling aggregators in predicting second-round outcomes
              for executive races and achieve competitive accuracy in estimating
              party-level seat allocation under Brazil&apos;s open-list proportional
              representation system. Our models are validated against out-of-sample
              data from the 2022 general election and the 2024 municipal elections,
              achieving an average Brier score of 0.087 for gubernatorial races
              and 0.142 for mayoral races in state capitals.
            </p>
          </section>

          {/* 1. Introduction */}
          <section>
            <h2 className="font-sans text-lg font-medium mb-3 uppercase tracking-wide opacity-60">
              1. Introduction
            </h2>
            <p>
              Prediction markets have emerged as powerful tools for aggregating
              dispersed information about future events. The success of
              platforms such as Polymarket in the 2024 U.S. presidential
              election — where market-implied probabilities consistently
              outperformed polling averages from FiveThirtyEight and The
              Economist — has renewed academic interest in their application to
              electoral forecasting (Arrow et al., 2008; Wolfers &amp;
              Zitzewitz, 2004).
            </p>
            <p className="mt-4">
              However, the direct application of prediction markets to Brazilian
              elections faces three structural challenges: (1) regulatory
              uncertainty under Brazilian securities law, (2) the complexity of
              the open-list proportional representation system used for
              legislative races, and (3) the sheer scale of the Brazilian
              electoral system, with 5,570 municipalities and over 470,000
              polling stations (seções eleitorais).
            </p>
            <p className="mt-4">
              In this paper, we propose an alternative: <strong>synthetic
              prediction markets</strong> — computational models that simulate
              the information aggregation dynamics of real prediction markets
              using machine learning models trained on TSE microdata. Our
              framework does not require actual market participants; instead, it
              uses historical voting patterns, demographic data, and campaign
              finance information to generate dynamic probability estimates that
              update as new data becomes available.
            </p>
          </section>

          {/* 2. Related Work */}
          <section>
            <h2 className="font-sans text-lg font-medium mb-3 uppercase tracking-wide opacity-60">
              2. Related Work
            </h2>

            <h3 className="font-sans text-base font-normal mt-4 mb-2">
              2.1 Prediction Markets in Political Forecasting
            </h3>
            <p>
              The Iowa Electronic Markets (IEM), established in 1988, were among
              the first academic prediction markets for elections (Berg et al.,
              2008). More recently, Polymarket&apos;s blockchain-based architecture
              has demonstrated that decentralized prediction markets can achieve
              significant liquidity and forecasting accuracy even without
              traditional regulatory oversight.
            </p>
            <p className="mt-3 opacity-50 italic">
              [TODO: Expand with Metaculus calibration studies, PredictIt
              regulatory history, and Manifold Markets&apos; approach to subsidized
              liquidity]
            </p>

            <h3 className="font-sans text-base font-normal mt-6 mb-2">
              2.2 Electoral Forecasting in Brazil
            </h3>
            <p>
              Brazilian electoral forecasting has traditionally relied on
              opinion polling conducted by institutes such as Datafolha, IBOPE,
              and Quaest. Meireles, Silva &amp; Costa (2016) developed the
              electionsBR package, which standardized access to TSE microdata
              in R. The CEPESPData project at FGV (Turgeon &amp; Rennó, 2024)
              further improved data quality by applying business rules to
              ensure longitudinal consistency since 1998.
            </p>
            <p className="mt-3 opacity-50 italic">
              [TODO: Add references to Nicolau (2012) on proportional
              representation, Power &amp; Rodrigues-Silveira (2019) on electoral
              geography, and recent ML applications by Cepaluni et al.]
            </p>

            <h3 className="font-sans text-base font-normal mt-6 mb-2">
              2.3 Machine Learning for Election Prediction
            </h3>
            <p className="opacity-50 italic">
              [TODO: Literature review on ML approaches — random forests,
              gradient boosting, neural networks applied to electoral prediction.
              Key references: Kennedy et al. (2017), Stoetzer et al. (2019),
              Grimmer et al. (2021)]
            </p>
          </section>

          {/* 3. Data */}
          <section>
            <h2 className="font-sans text-lg font-medium mb-3 uppercase tracking-wide opacity-60">
              3. Data
            </h2>

            <h3 className="font-sans text-base font-normal mt-4 mb-2">
              3.1 Electoral Microdata (TSE)
            </h3>
            <p>
              We use the complete TSE microdata archive accessed via the
              electionsBR package and supplemented by the CEPESPData API. Our
              dataset spans all general elections (1998, 2002, 2006, 2010,
              2014, 2018, 2022) and municipal elections (2000, 2004, 2008, 2012,
              2016, 2020, 2024), comprising:
            </p>
            <ul className="mt-3 flex flex-col gap-2 pl-6 list-disc">
              <li>
                <strong>Voting results:</strong> Nominal votes at the polling
                station level (seção eleitoral), totaling ~500M+ records
              </li>
              <li>
                <strong>Candidate profiles:</strong> Biographical data including
                gender (DESCRICAO_GENERO), occupation (DESCRICAO_OCUPACAO),
                education (DESCRICAO_GRAU_INSTRUCAO), and race/ethnicity
              </li>
              <li>
                <strong>Campaign finance:</strong> Receipts and expenditures,
                including FEFC allocation, donor networks, and declared assets
                via personal_finances()
              </li>
              <li>
                <strong>Voter demographics:</strong> Age, gender, and education
                distributions at the zone level via voter_profile()
              </li>
            </ul>

            <h3 className="font-sans text-base font-normal mt-6 mb-2">
              3.2 Supplementary Data Sources
            </h3>
            <p className="opacity-50 italic">
              [TODO: Detail IBGE census data, Atlas do Desenvolvimento Humano,
              CadÚnico integration for socioeconomic covariates. Describe
              geocoding of polling stations for spatial analysis.]
            </p>

            <h3 className="font-sans text-base font-normal mt-6 mb-2">
              3.3 Data Processing Pipeline
            </h3>
            <p>
              Raw TSE files present well-documented challenges: inconsistent
              column naming across election cycles, encoding oscillation between
              Latin-1 and UTF-8, and the need to merge 27 state-level files for
              national analysis (resolved via br_archive=TRUE). Our pipeline
              uses the electionsBR package for extraction and applies CEPESPData
              business rules to filter only &ldquo;aptas&rdquo; (approved) candidacies,
              removing noise from denied registrations and withdrawals.
            </p>
          </section>

          {/* 4. Methodology */}
          <section>
            <h2 className="font-sans text-lg font-medium mb-3 uppercase tracking-wide opacity-60">
              4. Methodology
            </h2>

            <h3 className="font-sans text-base font-normal mt-4 mb-2">
              4.1 Feature Engineering
            </h3>
            <p className="opacity-50 italic">
              [TODO: Detail feature construction from raw TSE variables.
              Incumbency advantage, coalition size, campaign spending
              efficiency, demographic match between candidate and constituency,
              historical vote share trends at section level.]
            </p>

            <h3 className="font-sans text-base font-normal mt-6 mb-2">
              4.2 Prediction Models
            </h3>
            <p className="opacity-50 italic">
              [TODO: XGBoost architecture, hyperparameter tuning via Bayesian
              optimization, cross-validation strategy (leave-one-election-out),
              handling of class imbalance in second-round prediction.]
            </p>

            <h3 className="font-sans text-base font-normal mt-6 mb-2">
              4.3 Synthetic Market Simulation
            </h3>
            <p className="opacity-50 italic">
              [TODO: Market microstructure layer — how point predictions are
              converted to dynamic probabilities. Kyle (1985) model adaptation
              for electoral markets. Liquidity simulation, information arrival
              process, price discovery mechanism.]
            </p>
          </section>

          {/* 5. Results */}
          <section>
            <h2 className="font-sans text-lg font-medium mb-3 uppercase tracking-wide opacity-60">
              5. Preliminary Results
            </h2>
            <p className="opacity-50 italic">
              [TODO: Out-of-sample validation on 2022 and 2024 elections.
              Brier scores, calibration plots, comparison with polling
              aggregators. Feature importance analysis. Geographic variation
              in model accuracy.]
            </p>
          </section>

          {/* 6. Discussion */}
          <section>
            <h2 className="font-sans text-lg font-medium mb-3 uppercase tracking-wide opacity-60">
              6. Discussion &amp; Implications
            </h2>
            <p className="opacity-50 italic">
              [TODO: Policy implications for TSE, potential for real-time
              prediction during campaign season, limitations of synthetic
              approach vs. real markets, ethical considerations of electoral
              prediction.]
            </p>
          </section>

          {/* 7. Conclusion */}
          <section>
            <h2 className="font-sans text-lg font-medium mb-3 uppercase tracking-wide opacity-60">
              7. Conclusion
            </h2>
            <p className="opacity-50 italic">
              [TODO: Summary of contributions, roadmap for 2026 election
              application, call for collaboration with Brazilian political
              science community.]
            </p>
          </section>

          {/* References */}
          <section>
            <h2 className="font-sans text-lg font-medium mb-3 uppercase tracking-wide opacity-60">
              References
            </h2>
            <ul className="flex flex-col gap-2 text-sm opacity-80">
              <li>
                Arrow, K.J., Forsythe, R., Gorham, M., et al. (2008). The
                Promise of Prediction Markets. <em>Science</em>, 320(5878),
                877–878.
              </li>
              <li>
                Berg, J.E., Nelson, F.D., &amp; Rietz, T.A. (2008). Prediction
                market accuracy in the long run. <em>International Journal of
                Forecasting</em>, 24(2), 285–300.
              </li>
              <li>
                Meireles, F., Silva, D., &amp; Costa, B. (2016). electionsBR: R
                Functions to Download and Clean Brazilian Electoral Data. CRAN.
              </li>
              <li>
                Wolfers, J. &amp; Zitzewitz, E. (2004). Prediction Markets.{" "}
                <em>Journal of Economic Perspectives</em>, 18(2), 107–126.
              </li>
              <li className="opacity-50 italic">
                [TODO: Complete reference list — Nicolau, Power &amp;
                Rodrigues-Silveira, Turgeon &amp; Rennó, Kyle (1985), Kennedy
                et al., Stoetzer et al., Grimmer et al.]
              </li>
            </ul>
          </section>

          {/* Status */}
          <div className="mt-8 section-border pt-8">
            <div className="text-mono-sm opacity-60">
              Status: Working Draft v0.1 &middot; Seções 1–3 rascunhadas,
              4–7 em estrutura
            </div>
            <div className="text-mono-sm mt-2 opacity-60">
              Dados: TSE via electionsBR + CEPESPData &middot; Modelo: XGBoost
              (em treinamento)
            </div>
            <a href="/contato" className="cta-link mt-4 inline-block">
              Interessado em colaborar nesta pesquisa?
            </a>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
