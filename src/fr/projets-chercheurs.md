---
title: Projets de chercheurs
style: ../styles-ch-projekte.css
toc: false
---

```js
import { html } from "npm:htl";
import { coloredUnderline, drawMiniPlot, draw_waffle, draw_results} from "../functions.js"
```

# Projets de chercheurs

## Projets d'innovation sans partenaire chargé de la mise en valeur
<div style="display: flex;">
  <div>${drawMiniPlot("Innovationsprojekte ohne Umsetzungspartner")}</div>
  <div>${drawMiniPlot("Innovationsprojekte ohne Umsetzungspartner", false)}</div>
</div>

Les projets d'innovation sans partenaire chargé de la mise en valeur visent à transformer les découvertes scientifiques en solutions pratiques. Ils permettent aux chercheurs de développer des projets à haut risque et à fort potentiel d'innovation en vue de leur application et de faire les premiers pas vers leur mise en œuvre. La condition préalable à l'encouragement est un bénéfice potentiel clair pour l'économie ou la société ainsi que des possibilités de mise en œuvre pour une application ultérieure.

Les projets d'innovation sans partenaire chargé de la mise en valeur soutiennent ainsi des projets de recherche et d'innovation axés sur l'application et visent à long terme une mise en œuvre économique.

### Des étapes réussies vers la mise en œuvre
Les deux tiers des projets d'innovation ont démontré leur faisabilité avec succès. Un projet subventionné sur deux a de fortes chances d'introduire l'innovation sur le marché et 4 sur 10 fournissent des résultats concluants pour la suite de la mise en œuvre.

<div>${draw_results("Innovationsprojekte ohne UP", false, 450)}</div>

### L'output scientifique est plus élevé que pour les projets avec des partenaires chargés de la mise en valeur
Les résultats scientifiques publiés sont des formes importantes de transfert de savoir et de technologie (TST). Ils servent à diffuser les résultats du projet dans la recherche et l'application et renforcent le TST. Les thèses sont une indication de la nouveauté et de la qualité de la recherche et du risque associé à la recherche de solutions (technologiques) pour la mise en œuvre. 

Par rapport aux projets d'innovation avec partenaire chargé de la mise en valeur, la part des résultats scientifiques publiés dans des revues spécialisées et la part des thèses de doctorat sont, comme on pouvait s'y attendre, nettement plus élevées. La part des projets interdisciplinaires est similaire, la part des projets transdisciplinaires est légèrement inférieure, car moins d'acteurs sont impliqués.
  <div style="display: flex; gap: 15px;">
${draw_waffle("ipr_peer_review",-100)}
${draw_waffle("ipr_inter_trans",-100)}
</div>

#### Les projets d'innovation sans partenaire chargé de la mise en valeur sont axés sur la recherche et la mise en œuvre.
Dans près des deux tiers des projets, une collaboration avec des partenaires potentiels pour la mise en œuvre a déjà été engagée. Outre le transfert de savoir et de technologie vers des entreprises établies, les start-up et les spin-off issues de la recherche jouent un rôle important dans le TST. Dans 39 % des projets, un tel essaimage a déjà été réalisé ou est prévu.
<div>${draw_waffle("ipr_imppartner", -85)}</div>

### L'atteinte des objectifs est élevée dans le domaine de la recherche, mais plus faible dans le domaine de l'application et de la mise en œuvre.
Les objectifs de recherche sont entièrement atteints, voire dépassés, dans la grande majorité des projets financés. L'atteinte des objectifs en matière d'application est nettement plus faible. Cela peut indiquer des risques élevés pour la mise sur le marché, ou peut-être que davantage de temps et de ressources sont nécessaires pour développer des solutions, ou encore que les porteurs de projets soient moins expérimentés pour mener un développement technologique ou une solution plus loin dans la mise en œuvre sur le marché.
<div style="display: flex; gap: 15px;">
${draw_waffle("ipr_research_goals",-100,15)}
${draw_waffle("ipr_impl_goals",-100,10)}
</div>

## BRIDGE Proof of Concept
<div style="display: flex;">
  <div>${drawMiniPlot("BRIDGE Proof of Concept")}</div>
  <div>${drawMiniPlot("BRIDGE Proof of Concept", false)}</div>
  </div>
  
BRIDGE est le programme de financement commun d'Innosuisse et du Fonds national suisse (FNS). Il associe la recherche fondamentale et la recherche appliquée à la mise en œuvre. L'offre d'encouragement BRIDGE Proof of Concept s'adresse aux jeunes chercheurs qui travaillent à l'interface entre la recherche fondamentale et l'innovation basée sur la science. Le programme offre un soutien d'un an pour développer les résultats de la recherche en vue d'une application pratique, dans le but de les commercialiser et de préparer une carrière en dehors du monde universitaire.

### BRIDGE Proof of Concept mène à la création de start-up et de spin-off
BRIDGE Proof of Concept montre son efficacité à travers la part des soutiens qui aboutissent à une création d'entreprise. Plus de deux chercheurs sur trois ayant bénéficié d'un soutien créent par la suite une start-up ou un spin-off (start-up avec octroi de licence de propriété intellectuelle formelle). Ce chiffre est presque deux fois plus élevé que pour les projets d'innovation sans partenaire chargé de la mise en valeur. Il convient toutefois de noter que l'enquête est différente. Pour les projets d'innovation sans partenaire chargé de la mise en valeur, l'enquête a lieu à la fin du projet, tandis que pour BRIDGE Proof of Concept, une enquête distincte a été réalisée, qui est très actuelle (2024) et couvre donc une période plus longue.
  
${draw_waffle("br_spinoffs", -115)}