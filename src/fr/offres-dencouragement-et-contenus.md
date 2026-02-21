---
title: Aperçu des offres d'encouragement et du contenu du suivi de l'impact
style: ../styles.css
toc: false
---

```js
import { html } from "npm:htl";
import { coloredUnderline, draw_fin_plot, draw_fin_plot_legend, n_subcluster} from "../functions.js"
```

## Aperçu des offres d'encouragement et du contenu du suivi de l'impact

L'état actuel du suivi de l'impact est tel que, pour toutes les catégories d'offres d'encouragement, il est possible de faire des déclarations sur l'efficacité et sur des comparaisons choisies, au moins pour l'offre d'encouragement la plus importante sur le plan financier. Pour les projets d'innovation pour start-up, il n'y a pas encore de projets achevés. Les lacunes actuelles (en couleur plus claire) seront progressivement comblées.
 
### Offres d'encouragement Innosuisse

```js
draw_fin_plot_legend()
```

<div style="display: grid; grid-template-columns: 1fr; column-gap: 20px; row-gap: 5px;">
  <h5 style= "margin-bottom: 0;">Projets d'entreprises avec des chercheurs</h5>
  ${draw_fin_plot("Förderung","Projekte von Unternehmen mit Forschenden",135,true)}
  <h5 style= "margin-bottom: 0;">Projets d'entreprises</h5>
  ${draw_fin_plot("Förderung","Projekte von Unternehmen", 25, false)}
  <h5 style= "margin-bottom: 0;">Projets de chercheurs</h5>
  ${draw_fin_plot("Förderung","Projekte von Forschenden", 68, false)}
  <h5 style= "margin-bottom: 0;">Aide au démarrage de projets et mise en réseau</h5>
  ${draw_fin_plot("Starthilfe für Projekte und Vernetzung",undefined, 95,false)}
  <h5 style= "margin-bottom: 0;">Accompagnement de start-up</h5>
  ${draw_fin_plot("Begleitung von Start-ups",undefined,80, false)}
</div>

<p class="comment">Source: Cockpit/PowerBI Innosuisse (2025)
<br>* Pour les instruments marqués, les résultats du suivi de l'impact sont expliqués ci-après. L'offre d'encouragement « Swiss Accelerator » (2023-2024) n'est pas mentionnée (volume d'encouragement 2023 : 111,8 millions de francs). Il s'agissait d'une mesure de remplacement limitée dans le temps en réaction à la non-association à Horizon Europe.</p>

La majeure partie des encouragements d'Innosuisse est consacrée aux ${coloredUnderline("projets d'innovation nationaux", "Förderung für Schweizer Innovationsprojekte")} et ${coloredUnderline("internationaux", "Förderung für internationale Innovationsprojekte")}. Les projets d'innovation standard entre entreprises¹ et chercheurs, dans le cadre desquels les institutions de recherche sont rémunérées principalement pour le personnel de recherche, sont les plus importants. Les entreprises et organisations participantes contribuent pour leur part à hauteur d'au moins 50 % aux coûts totaux du projet.

En outre, les entreprises sont soutenues dans le lancement de projets d'innovation par le biais de l'${coloredUnderline("Innovation Booster","Starthilfe für Projekte und Vernetzung")}, du ${coloredUnderline("mentoring","Starthilfe für Projekte und Vernetzung")}, du ${coloredUnderline("réseau Enterprise Europe Network (recherche de partenaires)","Starthilfe für Projekte und Vernetzung")} et d'autres événements. Les start-up peuvent bénéficier d'offres de ${coloredUnderline("coaching","Begleitung von Start-ups")}, de ${coloredUnderline("formation","Begleitung von Start-ups")} et d'${coloredUnderline("internationalisation","Begleitung von Start-ups")}. Les résultats du suivi de l'impact de l'Innovation Booster et du Start-up Core Coaching seront présentés ici.

Les résultats des ${coloredUnderline("projets d'innovation des chercheurs sans partenaire chargé de la mise en valeur", "Förderung für Schweizer Innovationsprojekte")} peuvent également être présentés.

L'intégration des projets d'innovation internationaux dans le suivi de l'impact est prévue pour l'année de référence 2025. Les projets dans lesquels les start-up et les PME sont directement soutenues (Projets d'innovation pour start-up et Swiss Accelerator) seront intégrés ultérieurement dans le suivi, car les projets ne sont pas encore terminés. Il en va de même pour les projets de l'Initiative Flagship.

<p class="comment">¹ Dans la suite du texte, le terme « entreprise » sera souvent utilisé comme synonyme de « partenaire chargé de la mise en valeur ». Ce n'est pas tout à fait exact, car les partenaires chargés de la mise en valeur peuvent être des PME, des grandes entreprises et des start-up, mais aussi des administrations, des organisations à but non lucratif et d'autres institutions privées ou publiques. Cependant, la grande majorité des partenaires chargés de la mise en valeur sont des entreprises (PME, grandes entreprises et start-up). Nous nous permettons donc cette simplification afin de rendre les textes plus faciles à comprendre.<p>

### Thématiques des projets innovants 2021–2023
Les projets innovants approuvés peuvent être classés en cinq thématiques différentes, qui sont également représentées dans la figure suivante en fonction des offres d'encouragement. La figure montre la part en pourcentage des thématiques dans les projets innovants approuvés en moyenne pour les années 2021–2023. Les pourcentages par instrument diffèrent parfois considérablement. 

- « Engineering » présente des pourcentages plus élevés et comparables pour les ${coloredUnderline("projets d'innovation avec partenaire chargé de la mise en valeur (37 %)","Innovationsprojekte mit Umsetzungspartner")}, les ${coloredUnderline("Chèques d'innovation","Innovationsscheck")} (32 %) et ${coloredUnderline("BRIDGE Proof of Concept","BRIDGE: Proof of Concept")} (31 %).
- Les « Life Sciences » affichent en revanche une part très élevée dans les ${coloredUnderline("projets d'innovation sans partenaire chargé de la mise en valeur","Innovationsprojekte ohne Umsetzungspartner")} (66 %) et une part supérieure à la moyenne dans les ${coloredUnderline("start-up en coaching","Start-up Core Coaching")} (38 %). C'est le domaine thématique le plus important dans le cadre de ${coloredUnderline("BRIDGE Proof of Concept","BRIDGE: Proof of Concept")} (34 %).
- Le domaine « Information and communication technologies ICT » est le plus important dans les ${coloredUnderline("start-up en coaching","Start-up Core Coaching")} (30 %).
- Les différences dans le domaine « Energy & environment » sont plus faibles et varient entre 9 % pour les ${coloredUnderline("projets d'innovation sans partenaire chargé de la mise en valeur","Innovationsprojekte ohne Umsetzungspartner")} et 17 % pour les ${coloredUnderline("projets d'innovation avec partenaire chargé de la mise en valeur","Innovationsprojekte mit Umsetzungspartner")}.
- Les « Social sciences & business management » sont les plus représentées dans les ${coloredUnderline("Chèques d'innovation","Innovationsscheck")} (21 %), sinon les pourcentages sont comparativement plus faibles.

<div>${n_subcluster()}</div>