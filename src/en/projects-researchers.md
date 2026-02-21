---
title: Projects by researchers
style: ../styles-ch-projekte.css
toc: false
---

```js
import { html } from "npm:htl";
import { coloredUnderline, drawMiniPlot, draw_waffle, draw_results} from "../functions.js"
```

# Projects by researchers
## Innovation projects without implementation partner
<div style="display: flex;">
  <div>${drawMiniPlot("Innovationsprojekte ohne Umsetzungspartner")}</div>
  <div>${drawMiniPlot("Innovationsprojekte ohne Umsetzungspartner", false)}</div>
</div>

The aim of innovation projects without implementation partners is to transfer scientific findings into practical solutions. They enable researchers to develop high-risk projects with a high potential for innovation towards application and to take the first steps towards implementation. A prerequisite for funding is a clear potential benefit for the economy or society as well as the potential for implementation for a later application.

Innovation projects without implementation partners thus promote application-oriented research and innovation projects and aim for commercial implementation in the longer term.

### Successful steps towards implementation
Two thirds of the innovation projects have successfully demonstrated feasibility. Every second funded project is highly likely to introduce the innovation to the market, and 4 out of 10 deliver conclusive results for further implementation steps.

<div>${draw_results("Innovationsprojekte ohne UP", false, 450)}</div>

### Scientific output is higher than in projects with implementation partners
Published scientific results are an important form of knowledge and technology transfer (KTT). They serve to disseminate project results in research and application and strengthen KTT. The dissertations are an indication of the novelty and quality of the research and the associated risk of finding a (technological) solution for implementation. 

As expected, the share of results published in scientific journals and the share of dissertations is significantly higher for innovation projects with implementation partners. The share of interdisciplinary projects is similarly high, and the share of transdisciplinary projects is slightly lower because fewer actors are involved.

<div style="display: flex; gap: 15px;">
${draw_waffle("ipr_peer_review",-70)}
${draw_waffle("ipr_inter_trans",-70)}
</div>

#### Innovation projects without implementation partners are research- and implementation-oriented.
in almost two-thirds of the projects , cooperation with potential implementation partners was already underway. In addition to the transfer of knowledge and technology to established companies, start-ups and spin-offs emerging from research play an important role in KTT. In 39% of the projects, such a spin-off has already been founded or is planned.

<div>${draw_waffle("ipr_imppartner", -70)}</div>

### Achievement of objectives is high in research, but lower for application- and implementation-oriented objectives.
The research objectives are fully achieved or even exceeded in the vast majority of funded projects. The achievement of objectives in terms of application orientation is significantly lower. This may be an indication of high risks for market launch, or possibly more time and resources are needed to develop solutions, or the project partners are less experienced in taking a technological development or solution further towards market implementation.

<div style="display: flex; gap: 15px;">
${draw_waffle("ipr_research_goals",-70,5)}
${draw_waffle("ipr_impl_goals",-70,5)}
</div>

## BRIDGE Proof of Concept
<div style="display: flex;">
  <div>${drawMiniPlot("BRIDGE Proof of Concept")}</div>
  <div>${drawMiniPlot("BRIDGE Proof of Concept", false)}</div>
  </div>
  
BRIDGE is the joint funding programme of Innosuisse and the Swiss National Science Foundation (SNSF) and combines basic and application-oriented research with implementation. BRIDGE Proof of Concept is aimed at young researchers working at the interface between basic research and science-based innovation. The programme offers one year of support to further develop research results in an application-oriented way, with the aim of bringing them to market maturity and preparing the researchers for a career outside academia.

### BRIDGE Proof of Concept leads to start-ups and spin-offs
The impact of BRIDGE Proof of Concept is reflected in the proportion of funding that leads to new companies. More than two out of three researchers supported go on to found a start-up or spin-off (start-up with formal IP licensing). This is almost double the rate for innovation projects without implementation partners. However, it should be noted that the survey is different. For innovation projects without implementation partners, the survey is conducted at the end of the project. For BRIDGE Proof of Concept, a separate survey was conducted that is very up to date (2024) and thus covers a longer period of time.
  
${draw_waffle("br_spinoffs", -100)}