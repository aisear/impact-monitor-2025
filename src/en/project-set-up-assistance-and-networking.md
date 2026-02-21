---
title: Project set-up assistance and networking
style: ../styles-ch-starthilfe.css
toc: false
---

```js
import { html } from "npm:htl";
import { coloredUnderline, drawMiniPlot, draw_waffle, draw_results, ib_toipis} from "../functions.js"
```

# Project set-up assistance and networking
## Innovation Booster
<div style="display: flex;">
  <div>${drawMiniPlot("Innovation Booster")}</div>
  <div>${drawMiniPlot("Innovation Booster", false)}</div>
  </div>
  <p class = "comment">In contrast to the other mini-charts, these charts show the amounts invested rather than the amounts approved, and the active rather than the approved Innovation Boosters.</p>

The Innovation Boosters funded by Innosuisse each focus on a specific innovation topic. They cover a wide range of topics, from artificial intelligence to tourism and food tech.

In 2023, Innosuisse supported 17 active Innovation Boosters in various thematic areas. In autumn 2023, a further eight Innovation Boosters were approved for the period 2024–2027. They started in January 2024. Funding for the Innovation Boosters supported in 2021 will be completed by the end of 2024. The results presented here are based on existing monitoring data with a shorter impact horizon.

The Innovation Boosters develop new and radical innovation ideas and test them in an open, network-based innovation process with an open innovation culture. The partners of the funded networks come from research, business and society. The focus of the funding is on the early phase of idea generation and testing, using experimental methods such as design thinking and co-creation.

A key objective of the Innovation Boosters is to further develop successfully tested innovation ideas, including within the framework of funded innovation projects. This promotes science-based and sustainable innovations and provides implementation partners and the Swiss innovation system with concrete added value and competitive advantages.

### Innovation Boosters strengthen the innovation skills of the participants
The aim of the Innovation Boosters is to develop new and radical innovation ideas during the challenge phase, which are then tested for feasibility and potential in terms of demand and user orientation in a further phase of idea testing.

The vast majority of respondents (81%) confirm that their participation in an Innovation Booster has increased their ability and competence to develop and test radical ideas.

<div>${draw_waffle("ib_capabilities", -100, 0)}</div>

### Radical innovation ideas from the Innovation Boosters are pursued further, including with Innosuisse funding
Two-thirds of the innovation ideas that receive funding are pursued further after the funding period ends, often with new approaches and even more radical orientations. In 2022–24, the Innovation Boosters led to an average of 31 approved Innovation cheques and 25 approved innovation projects per year. With an Innovation cheque, the idea is examined in more detail with a research partner in terms of feasibility. In the case of innovation projects, the innovation ideas are pursued in a scientifically sound manner with the aim of implementing them in the long term.

<div style="display: flex; column-gap: 20px;">
<div> ${draw_waffle("ib_continued", -85)}</div>
<div>${ib_toipis()}</div>