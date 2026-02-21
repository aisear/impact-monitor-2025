---
title: Aide au démarrage de projets et mise en réseau
style: ../styles-ch-starthilfe.css
toc: false
---

```js
import { html } from "npm:htl";
import { coloredUnderline, drawMiniPlot, draw_waffle, draw_results, ib_toipis} from "../functions.js"
```

# Aide au démarrage de projets et mise en réseau
## Innovation Booster
<div style="display: flex;">
  <div>${drawMiniPlot("Innovation Booster")}</div>
  <div>${drawMiniPlot("Innovation Booster", false)}</div>
  </div>
  <p class = "comment">Contrairement aux autres mini-graphiques, ce graphique ne présente pas les montants accordés, mais les montants investis ou les Innovation Booster actifs.</p>

Les Innovation Booster soutenus par Innosuisse se concentrent chacun sur un thème d'innovation spécifique. Ils couvrent un large éventail de thèmes, allant de l'intelligence artificielle au tourisme en passant par la technologie alimentaire.

En 2023, Innosuisse a soutenu 17 Innovation Booster actifs dans différents domaines thématiques. À l'automne 2023, 8 autres Innovation Booster ont été approuvés pour les années 2024-2027. Ils ont démarré en janvier 2024. L'encouragement des Innovation Booster soutenus en 2021 s'achèvera fin 2024. Les résultats présentés ici sont basés sur des données de suivi existantes dans un horizon d'impact plus court.

Les Innovation Booster développent des idées d'innovation nouvelles et radicales et les testent dans le cadre d'un processus d'innovation ouvert et basé sur un réseau, avec une culture d'innovation ouverte. Les partenaires des réseaux soutenus sont issus du monde de la recherche, de l'économie et de la société. L'accent est mis sur la phase initiale de génération et de test d'idées, en utilisant des méthodes expérimentales telles que le « design thinking » et la « co-création ».

Le développement d'idées d'innovation testées avec succès, y compris dans le cadre de projets d'innovation encouragés, est un objectif central de l'Innovation Booster. Cela permet de promouvoir des innovations durables et basées sur la science, et d'apporter une valeur ajoutée concrète et des avantages concurrentiels aux partenaires chargés de la mise en valeur et au système d'innovation suisse.

### Les Innovation Booster renforcent les compétences des participants en matière d'innovation
Les Innovation Booster ont pour objectif de développer des idées d'innovation nouvelles et radicales pendant la phase de défi, afin de tester leur faisabilité et leur potentiel en termes de demande et d'orientation utilisateur lors d'une phase ultérieure d'examen des idées.

La grande majorité des personnes interrogées (81 %) confirment que leur participation à un Innovation Booster leur a permis d'accroître leurs capacités et leurs compétences en matière de développement et de test d'idées radicales.

<div>${draw_waffle("ib_capabilities", -115, 0)}</div>

### Les idées d'innovation radicales issues des Innovation Booster sont poursuivies, également avec l'encouragement d'Innosuisse
Deux tiers des idées innovantes soutenues sont poursuivies après la fin du financement, souvent avec de nouvelles approches et une orientation plus radicale. De 2022–24, les Innovation Booster ont permis d'accorder en moyenne 31 Chèques d'innovation et 25 projets d'innovation par an. Avec un Chèque d'innovation, l'idée est à nouveau approfondie avec un partenaire de recherche pour en vérifier la faisabilité. Dans le cas des projets d'innovation, les idées d'innovation sont scientifiquement ancrées et poursuivies afin d'être mises en œuvre à long terme.
<div style="display: flex; column-gap: 20px;">
<div> ${draw_waffle("ib_continued", -85)}</div>
<div>${ib_toipis()}</div>