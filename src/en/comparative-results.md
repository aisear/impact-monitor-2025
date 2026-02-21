---
title: Comparative results
style: ../styles.css
toc: false
---

```js
import { html } from "npm:htl";
import { coloredUnderline, draw_result, draw_innoart, draw_dn, draw_result_zf_legend} from "../functions.js"
import { df_zufrieden } from "../data.js"
```

## Comparative results for Innosuisse’s support offers
### Satisfaction with Innosuisse's support offers is consistently high
Innosuisse's funding beneficiaries are satisfied to very satisfied with Innosuisse's innovation promotion and its implementation. The proportions of the instruments presented here are over 80%, and for ${coloredUnderline("Start-up Core Coaching","Start-up Core Coaching")} it is more than two thirds. Only a very small proportion (≤ 1%) are dissatisfied with Innosuisse's instruments.

<div style="display: grid; grid-template-columns: 1fr; column-gap: 20px; row-gap: 0px;">
  
  ${draw_result_zf_legend()}
  ${draw_result(df_zufrieden,"Innovationsprojekte mit Umsetzungspartner", false, 35)}
  ${draw_result(df_zufrieden,"Innovationsschecks", false)}
  ${draw_result(df_zufrieden,"Innovationsprojekte ohne Umsetzungspartner", false)}
  ${draw_result(df_zufrieden,"Innovation Booster", false)}
  ${draw_result(df_zufrieden,"Start-up Core Coaching", false)}
</div>

### Innosuisse promotes both incremental and radical innovations

<div>${draw_innoart("inkr_radikal", 550, 250)}</div>
<p class="comment">
Assessments of the funding recipients using a six-point evaluation scale with predefined definitions: (1) very incremental, (2) incremental innovations or (5) radical, (6) very radical innovations. 
</p> 

In the case of ${coloredUnderline("innovation projects with implementation partners","Förderung für Schweizer Innovationsprojekte")}  and ${coloredUnderline("Innovation cheques","Innovationsscheck")}, around a quarter of innovation projects pursue ****clearly incremental innovations****. These primarily involve the further development or optimisation of existing products (products, services, processes, business models, etc.).

****Radical innovations**** (27%) are funded to the same extent as incremental innovations. In contrast to incremental innovations, radical innovations strive for fundamental innovations and changes through revolutionary or radical new ideas and technologies. They account for at least a quarter of the ${coloredUnderline("projects","Förderung für Schweizer Innovationsprojekte")}  and ${coloredUnderline("innovation ideas","Innovation Booster")} across all instruments – with the exception of ${coloredUnderline("Innovation cheques","Innovationsscheck")}. Among ${coloredUnderline("start-ups in coaching","Begleitung von Start-ups")} , more than half of the start-ups aim to introduce radical innovations with their business models.

### Innovations can have a strong influence on markets

<div>${draw_innoart("disruptiv", 380, 180)}</div>
<p class="comment">
Assessments of the funding recipients using a six-point rating scale with predefined definitions: (5) disruptive innovations, (6) highly disruptive innovations.
</p> 

These should be distinguished from ****disruptive innovations****. Here, the focus is not on the degree of technological novelty, but on the revolutionary impact on the markets. Innovations are disruptive when they create completely new markets with new rules and target groups or have a strong influence on existing markets, for example through innovations that are new to the markets on an international or global scale. Both radical and incremental innovations can be disruptive.

Around a third of companies have the potential to disrupt the market with ${coloredUnderline("innovation projects with implementation partners","Förderung für Schweizer Innovationsprojekte")} and ${coloredUnderline("innovation cheques","Innovationsscheck")}. Among start-ups in ${coloredUnderline("Core Coaching","Begleitung von Start-ups")}, as many as two-thirds of start-ups pursue disruptive innovations with the business model of their newly founded company.

### Innosuisse promotes innovation diversity
The following figure also illustrates the diversity of the forms of innovation supported. Often, several innovations are pursued simultaneously, for example, when a product innovation is combined with a business model or process innovation.

Product innovations are most important in ${coloredUnderline("Start-up Core Coaching","Begleitung von Start-ups")} (88%). The shares for process innovations are between 24% and 35%. Compared to other instruments, business model innovations are most important for start-ups (17%). These are often linked to aspects of digital transformation. Innosuisse also funds social innovations. However, their share is comparatively low.

The diversity of innovation is also an expression of the fact that Innosuisse promotes science-based innovation in a bottom-up and thematically open manner.

<div>
${draw_innoart("type_1", 640, 180)}
${draw_innoart("type_2",475, 180)}
</div>

### Digital transformation is a core aspect of innovation promotion
Digitisation is aimed at important future digital technologies (blockchain, robotics, quantum computing, artificial intelligence, etc.) as well as the development of digital business models (software/platform/infrastructure as a service, big data, etc.). Both are highly relevant to the Swiss economy. The economic opportunities and the competition in terms of innovation are exceptionally high in this area.

Around 55% of the ${coloredUnderline("innovation projects","Förderung für Schweizer Innovationsprojekte")} funded by Innosuisse make a significant contribution to the digital transformation of the economy through digital technologies and/or digital business models. The application of new digital technologies is more important than the implementation of a digital business model. The importance of digitisation is significantly higher among the ${coloredUnderline("start-ups in coaching","Begleitung von Start-ups")}.

<div style="display: grid; grid-template-columns: 1fr; column-gap: 20px; row-gap: 0px; width: 800px">
  ${draw_dn("digital", "Innovationsprojekte mit UP", true, 20)}
  ${draw_dn("digital", "Innovationsschecks", false, -8)}
  ${draw_dn("digital", "Innovationsprojekte ohne UP", false, -8)}
  ${draw_dn("digital", "Start-up Core Coaching", false, -8)}
</div>
<p class="comment">Question asked: Is the project funded by Innosuisse based on new digital technologies or new digital business models? Assessment by the funding recipients using a six-point rating scale with predefined definitions: (5) strongly, (6) very strongly.</p>

### Innovation has a key role to play in the development of sustainable solutions
The support offers enable companies and organisations to test innovative approaches and technologies for the development of sustainable solutions at an early stage and to develop them to the point of implementation, whether at national or global level. Innosuisse thus makes a central and forward-looking contribution to overcoming global challenges such as energy and resource efficiency, climate change or social issues. Innovation promotion is one of the drivers of the transformation towards a sustainable business and society.

Around 60% of the ${coloredUnderline("innovation projects","Förderung für Schweizer Innovationsprojekte")} that receive funding show the potential to contribute to sustainable development, either in terms of environmental or social sustainability or both, when implemented in a specific way. For the ${coloredUnderline("start-ups in the coaching programme","Begleitung von Start-ups")}, the figures are slightly higher at 67%.

<div style="display: grid; grid-template-columns: 1fr; column-gap: 20px; row-gap: 0px; width: 800px">
  ${draw_dn("nachhaltig", "Innovationsprojekte mit UP", true, 20)}
  ${draw_dn("nachhaltig", "Innovationsschecks", false, -8)}
  ${draw_dn("nachhaltig", "Innovationsprojekte ohne UP", false, -8)}
  ${draw_dn("nachhaltig", "Start-up Core Coaching", false, -8)}
</div>

<p class="comment">Question asked: Can the project or project idea funded by Innosuisse make a contribution to environmental and/or social sustainability? Assessment by the funding recipients using a six-point rating scale with predefined definitions: (4) rather high contribution, (5) high contribution, (6) very high contribution.</p>