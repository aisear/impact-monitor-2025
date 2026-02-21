---
title: Projects by companies with researchers
style: ../styles-ch-projekte.css
toc: false
---

```js
import { html } from "npm:htl";
import { coloredUnderline, drawMiniPlot, draw_waffle, draw_results, leverage, kof_did_plot} from "../functions.js"
```

# Projects by companies with researchers

## Innovation projects with implementation partners
<div style="display: flex;">
  <div>${drawMiniPlot("Innovationsprojekte mit Umsetzungspartner")}</div>
  <div>${drawMiniPlot("Innovationsprojekte mit Umsetzungspartner", false)}</div>
</div>

The national standard innovation projects are Innosuisse's most important funding instrument. Companies and organisations from business and society work together with research partners to jointly develop innovative products, services or processes and launch them on the market for the benefit of the economy and society.

The projects are based on the results of research and development in all science-based disciplines and have a high degree of innovation. The innovative ideas come mainly from business and society. The research results achieved are transferred into practice, strengthen the competitive position of companies, create added value and jobs, and thus support the innovative capacity of companies and the economy.

This strengthens knowledge and technology transfer between research, business and society in both directions.

### The majority of funded innovation projects are introduced to the market or within the company

Upon completion, 45% of the funded projects have been implemented on the market or in the organisation, or it is planned to implement them within a year. Around a third of the projects pursue process innovations, which are implemented comparatively faster.

Three years after the funding ended, more than half of the funded innovations (57%) had been introduced or there are plans to introduce them in the next two years.

Some of the projects require a longer period of time to be introduced to the market or the innovation project is continued in follow-up projects. 17% of the high-risk funded projects were abandoned three years after completion; in other words, they are not being implemented and are not being continued.

<div>${draw_waffle("ip_time_to_market", -100)}</div>

### Funding achieves measurable and significant economic effects in over 60% of SMEs
Selected key figures prove the effectiveness in terms of economic effects that would not have occurred without the funded project. Around one third of the SMEs report an increase in employment, creating new, highly skilled jobs. Three out of ten companies report an increase in sales. More than a quarter of the companies have invested more in research and development (R&D), either in R&D employees or in R&D spending. 12% of the companies report cost savings.

<div>${draw_results("Innovationsprojekte mit UP", false)}</div>

### Great leverage of one franc in funding
On average, an innovation project leads to almost 2.5 additional full-time positions in the reporting years 2021–23. Extrapolated to the 350 projects completed on average during this period, between 800 and 900 new full-time positions will be created at companies in Switzerland.

<div style="font-size: 20px; font-weight: 700; max-width: 500px; padding-top: 10px; padding-bottom: 20px; text-align: center">+ 800 – 900 full-time positions per year</div>

The additional jobs created lead directly to value creation in the companies. The leverage effect of the funding is considerable: each franc of funding brings the economy around four francs of value creation, measured three years after the funding and aggregated for three further years. Further indirect multiplier effects in the companies, for example through additional spending on inputs by the companies, are not included here. When the indirect effects are included, the multiplier is estimated to be around CHF 11. The results presented in this report also show that the impact of innovation promotion extends far beyond the immediate economic effects <a href="/_file/data/methodik-volkswirtschaft-innosuisse-ebp.pdf" target="_blank">(EBP, 2025)</a>.

<div>${leverage()}</div>

<div class="card" style="max-width: 640px">
<h4>Scientific study proves direct impact of innovation promotion on sales and employment</h4>

Results from the KOF Swiss Economic Institute at ETH Zurich show that funding for innovation projects increases the **sales** of the participating companies by an average of **21%** over the following five years. The comparison is based on Swiss companies that have not received or applied for funding from Innosuisse, but which otherwise have similar characteristics, such as spending on research and development, the level of education of the workforce or the competitive environment.

The study also shows the impact on **employment**. Compared to companies without funding, companies with Innosuisse innovation projects created an average of **18%** more jobs within five years. The positive impact on both sales and employment increases over time.

With this study, the KOF has provided scientific proof of the link between innovation promotion in Switzerland and its impact. The KOF researchers chose a methodological approach that is recognised by the international research community and that is as unbiased as possible. The so-called ‘difference-in-differences’ approach compares companies that receive Innosuisse funding with similar companies that have not received funding.

The results confirm the economic impacts of Innosuisse project funding presented in the impact monitoring.


<div style="font-size: 12px;">
Source: 
<ul>
    <li>
        <a href="https://www.innosuisse.admin.ch/de/publication?id=veYrGjAgZwmP" target="_blank">
            Summary of the results
        </a>
    </li>
    <li>
        <a href="https://backend.innosuisse.admin.ch/proxy/api/media-library/ObC24vgQ0CMW/download?key=2024/12/09/e8c11134-2e13-4758-a968-1143b9d9e56f.pdf&type=mediaFile&mimeType=application%2Fpdf&filename=2024_KOF%20Study_Funding%20R%26D%20Cooperation_Executive%20Su" target="_blank">
            Executive summary of the article
        </a>
    </li>
    <li>
        <a href="https://www.research-collection.ethz.ch/handle/20.500.11850/708831" target="_blank">
            Scientific article: Hulfeld F., Spescha, A., Wörter, M. (2024): Funding R&D Cooperation Between Firms and Universities – The Effectiveness of the Innosuisse Model. KOF Working Paper
        </a>
    </li>
</ul>
</div>

<div class="card" style="background-color: white">${kof_did_plot(0)}</div>
<div class="card" style="background-color: white">${kof_did_plot(1)}</div></div>

### Innosuisse supports world market firsts and disruptive innovations
33% of the funded innovation projects aim to develop innovations for the international and global market. Swiss companies are thus supported in becoming or remaining internationally competitive. In addition, around 32% of the projects funded have the potential to significantly influence or redefine markets with disruptive innovations.
  <div style="display: flex; gap: 40px;">
  ${draw_waffle("ip_new_to_market", -70)}
  ${draw_waffle("ip_disruptive", -70)}
  </div>

### Companies either meet or exceed their project goals
The majority of the project partners involved have fully achieved or even exceeded their goals. Only a small proportion of the funded projects have not fully achieved or have not achieved the set goals. Innovation projects involve considerable technological risks and uncertainties in terms of market implementation. These high-risk potentials underline the need for public funding to support knowledge and technology transfer, as the innovation projects would not be carried out without funding.

This is confirmed by the low level of windfall effects in funding: only 4% of companies state that they would have carried out the project in the same way without Innosuisse's support. 16% would have carried it out in a modified or reduced form.

  <div style="display: flex; gap: 15px;">
  <div>${draw_waffle("ip_project_goals",-70, 20)}</div>
  <div>${draw_waffle("ip_mitnahme",-70,5)}</div>
  </div>


### Innosuisse funding also strengthens knowledge and technology transfer (KTT) in the long term
KTT and cooperation between companies and research is promoted and strengthened by innovation projects. Seven out of ten companies state that the project funding has accelerated and strengthened their research and development. The cooperation and KTT with research are stable in the long term: almost half of the companies are still working with their research partners three years after the end of the project. 13% even take on research staff who were involved in the project, thus strengthening their internal knowledge and innovation base in the long term.

  <div style="display: flex; gap: 15px;">
    ${draw_waffle("ip_wtt",-85)}
    ${draw_waffle("ip_researchpartner",-85)}
</div>

### Project results are based on science
The scientific output generated by the projects is remarkable. More than half of the projects result in co-publications between implementation and research partners. Internationally, Switzerland ranks first in this metric, which is important for the innovation indices ([European Commission, 2025](https://projects.research-and-innovation.ec.europa.eu/en/statistics/performance-indicators/european-innovation-scoreboard/eis#/eis/indicators/3.2?country_scope=all&highlight=CH) & [WIPO, 2025](https://www.wipo.int/gii-ranking/en/switzerland/section/economy-profile)). The innovation projects contribute to this. The strong international positioning in knowledge and technology transfer is also shown by the results of a study by the SBFI ([SBFI, 2023](https://www.sbfi.admin.ch/sbfi/de/home/dienstleistungen/publikationen/publikationsdatenbank/wtt-endbericht-2023.html)).

62% of research partners publish their scientific results in a peer-reviewed journal. In 21% of the funded projects, dissertations are written, in addition to a large number of bachelor's and master's theses. These figures demonstrate the strong scientific basis of the innovation projects and also show the importance of the projects for the research side and the contribution to the promotion of young scientists. The scientific quality is very high and the further dissemination of the project results is ensured.
<div>${draw_waffle("ip_peer_pub", -70)}</div>

### Innosuisse enables high-risk and interdisciplinary projects
Innosuisse funding is used to support more complex and higher-risk projects, as well as interdisciplinary projects. Interdisciplinary projects integrate knowledge, methods and technologies from different disciplines to jointly develop novel solutions to complex problems. Transdisciplinary projects also actively involve non-academic stakeholders from society, politics, business and practice in the research process in order to jointly solve socially relevant problems and generate practical knowledge. The 24% share of radical innovation projects indicates the degree of risk involved in innovation projects. 
<div style="display: flex; gap: 10px;">
<div>${draw_waffle("ip_inter_trans", -55)}</div>
<div>${draw_waffle("ip_radikal_inkr", -55)}</div>
</div>

### Companies provide the majority of the impetus for the innovation projects and turn the research results into value added
The knowledge and technology transfer between implementation partners and research partners is reciprocal. The companies develop high-risk innovation ideas for research and development and receive concrete research results for their implementation and commercialisation on the markets (see [section on economic effects](#funding-achieves-measurable-and-significant-economic-effects-in-over-60-of-smes)).
<div>${draw_waffle("ip_impuls",-100)}</div>

### Innosuisse projects are successful for both research and implementation partners

High-risk projects must also be allowed to fail, whether due to technological risks or risks in implementing the project idea on the market. Against this background, the slightly lower success rate among implementation partners is not worrying. The fact that almost three quarters of research partners rate the projects as a success speaks for the scientifically high quality of the projects.

The difference between the success rates is understandable: for the research partners, the scientific quality and the transfer of research knowledge to business and society are at the forefront, while for the companies, practical application and value creation in the markets are also essential. In this respect, Innosuisse funding can only help to create favourable conditions for successful market entry.

<div>${draw_waffle("ip_success", -70)}</div>

## Innovation cheques

<div style="display: flex;">
  <div>${drawMiniPlot("Innovationsscheck")}</div>
  <div>${drawMiniPlot("Innovationsscheck", false)}</div>
</div>

Innovation cheques offer SMEs and start-ups low-threshold funding to enable them to take their first steps in working with research partners. The aim is to carry out feasibility and market studies and technological clarifications that can serve as a basis for possible later innovation projects. The funding is also aimed at companies with little or no research experience, in order to validate innovation ideas at an early stage. The prerequisite is that a research partner is involved and that the project has a clear innovative content.

### Cooperation with research partners is examined and innovation ideas are further developed
The companies involved intend to use the innovation cheque to achieve concrete and usable results, to test and further develop their innovation idea, and to test collaboration with a research partner. More than two-thirds (69%) of innovation cheques are aimed at preparing an innovation project at Innosuisse.

In almost all cases, the collaboration is successfully tested. 61% of companies have successfully tested and further developed their innovation idea and fully achieved this goal. Concrete and directly usable results are achieved for around 42% of cheques. About half of the Innovation cheques lead to the successful preparation of an innovation project at Innosuisse.

<div>${draw_results("Innovationsscheck", true, 400)}</div>

### Project ideas continue to be pursued after completion
The innovation ideas are relevant for SMEs, which is why they are pursued after funding has ended. More than a quarter of the companies start an Innosuisse innovation project after completing the Innovation cheque or plan to do so.

<div>${draw_waffle("is_ideas",-55,10)}</div>

### New and lasting partnerships with research
The Innovation cheque is an important initial catalyst for knowledge and technology transfer and for cooperation with research. More than half of the companies involved can be introduced to knowledge and technology transfer with research. In addition, 71% of SMEs are satisfied or very satisfied with the services provided by their research partners.

Innovation cheques thus provide important benefits for companies beyond the completion of the project. The vast majority of SMEs continue to work with their research partner after the project has ended. This strengthens the innovation culture in the company in the long term and consolidates the knowledge and technology transfer.
 
<div style="display: flex; gap: 40px;">
${draw_waffle("is_connection", -70)}
${draw_waffle("is_wtt", -70)} 
</div>

### The achievement of objectives is high and innovation ideas are implemented that would not otherwise have been tackled.
Two-thirds of SMEs either fully achieve or exceed the set targets with the Innovation cheques. This low-threshold and uncomplicated funding thus supports the examination of the feasibility of innovation ideas and strengthens the further implementation of incremental and radical innovation ideas.

The low level of windfall gains shows that Innovation cheques enable ideas to be tested that would otherwise not have been considered in day-to-day business. Only 6% of SMEs state that they would have tested the innovation idea in a similar way even without funding. 22% would have tested it in a slightly different way.

<div style="display: flex; gap: 15px;">
${draw_waffle("is_project_goals",  -85, 17)}
${draw_waffle("is_mitnahme", -85, 10)}
</div>