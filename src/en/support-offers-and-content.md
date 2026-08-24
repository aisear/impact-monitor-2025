---
title: Overview of support offers and content of the impact monitoring
style: ../styles.css
toc: false
---

```js
import { html } from "npm:htl";
import { draw_fin_plot, n_subcluster} from "../functions.js"
```

# Overview of support offers and content

The current status of the impact monitoring is structured in such a way that at least for the financially most significant support offer in each category of funding offers, statements can be made on the effectiveness and selected comparisons. The current gaps (without *) will be closed step by step.
 
## Funding of Innovation Projects

<div style="display: grid; grid-template-columns: 1fr; column-gap: 20px; row-gap: 5px;">
  <h5 style= "margin-bottom: 0;">Projects by companies with researchers</h5>
  ${draw_fin_plot("Förderung von Innovationsprojekten","Projekte von Unternehmen mit Forschenden",115,true, width)}
  <h5 style= "margin-bottom: 0;">Projects by companies</h5>
  ${draw_fin_plot("Förderung von Innovationsprojekten","Projekte von Unternehmen", 25, false, width)}
  <h5 style= "margin-bottom: 0;">Projects by researchers</h5>
  ${draw_fin_plot("Förderung von Innovationsprojekten","Projekte von Forschenden", 70, false, width)}
</div>

## Advisory and Networking

<div style="display: grid; grid-template-columns: 1fr; column-gap: 20px; row-gap: 5px;">
  <h5 style= "margin-bottom: 0;">Knowledge and Network</h5>
  ${draw_fin_plot("Beratung und Vernetzung","Wissen und Netzwerke",55,false, width)}
  <h5 style= "margin-bottom: 0;">Innovation Management and Advisory</h5>
  ${draw_fin_plot("Beratung und Vernetzung","Innovationsmanagement und Beratung",55, false, width)}
</div>

<p class="comment">Source: Cockpit/PowerBI Innosuisse (2025)
<br>* The results of the impact monitoring for the highlighted instruments are presented subsequently. The 'Swiss Accelerator' funding programme is not listed (approved funding per year, ⌀ 2023–25: CHF 57.4 million). It was a temporary replacement measure (2023–24) in response to the non-association with Horizon Europe.</p>.

The majority of Innosuisse funding goes to national and international innovation projects. The greatest importance is attached here to standard innovation projects between companies¹ and researchers, in which the research institutions are primarily compensated for the remuneration of research staff. The participating companies and organisations, for their part, contribute 40–60% of the total project costs.

In addition, companies are supported in initiating innovation projects by means of Innovation Boosters, mentoring, the Enterprise Europe Network (partner search), and other events. Start-ups can benefit from coaching, training and internationalisation offers. The results of the impact monitoring of the Innovation Boosters and Start-up Core Coaching are presented here.

Results can also be presented for innovation projects by researchers without implementation partners.

The inclusion of international innovation projects in the impact monitoring is planned for the 2025 reporting year. The projects in which start-ups and SMEs are directly supported (Start-up innovation projects and Swiss Accelerator) will be integrated into the monitoring at a later date, as none of the projects have yet been completed. This applies equally to the Flagship Initiative projects.

<p class="comment">¹ In the following, 'company' is often used as a synonym for 'implementation partner'. This is not entirely precise because the implementation partners can include companies as well as administrations, non-profit organisations and other private or public institutions. However, the vast majority of implementation partners are companies (SMEs, large companies and start-ups), which is why we are taking the liberty of simplifying here in order to make the texts easier to understand.<p>

## Thematic areas of the innovation projects 2023–2025
The approved innovation projects can be categorised into five different thematic areas, which are also shown in the chart below, broken down by support offers. The figure shows the percentage of funding allocated to each thematic area, averaged over the years 2023–2025. The shares differ by instrument, sometimes significantly.

- <span class="text-cat-1">Engineering</span> is the leading thematic area in Innovation projects with implementation partner (39%) and reaches comparably high shares in BRIDGE Discovery (38%) and BRIDGE Proof of Concept (33%). It is least present in Start-up Coaching (14%) and in Innovation projects without implementation partner (16%).
- <span class="text-cat-2">Life Sciences</span> account for a very high proportion of Innovation projects without implementation partners (71%) and also the largest thematic area in BRIDGE Discovery (44%), BRIDGE Proof of Concept (37%) and Start-up Coaching (34%). Their share is lowest in the Innovation cheque (16%).
- The differences for '<span class="text-cat-3">Energy & environment</span>' are smaller, ranging from 4% in Innovation projects without implementation partner to 17% in Start-up Coaching.
- <span class="text-cat-4">Information and communication technologies (ICT)</span> carry the most weight in Start-up Coaching (27%) and in the Innovation cheque (22%), and the least in BRIDGE Discovery (6%).
- <span class="text-cat-5">Social sciences & business management'</span> are most strongly represented in the innovation cheque (22%); in every other support offer the share is 8% or lower.

<div>${n_subcluster(width)}</div>
