---
title: Aperçu des offres d'encouragement et du contenu du suivi de l'impact
style: ../styles.css
toc: false
---

```js
import { html } from "npm:htl";
import { draw_fin_plot, n_subcluster} from "../functions.js"
```

# Aperçu des offres d'encouragement et du contenu

L'état actuel du suivi de l'impact est tel que, pour toutes les catégories d'offres d'encouragement, il est possible de faire des déclarations sur l'efficacité et sur des comparaisons choisies, au moins pour l'offre d'encouragement la plus importante sur le plan financier. Pour les projets d'innovation pour start-up, il n'y a pas encore de projets achevés. Les lacunes actuelles (sans *) seront progressivement comblées.
 
## Encouragement des projets d'innovation

<div style="display: grid; grid-template-columns: 1fr; column-gap: 20px; row-gap: 5px;">
  <h5 style= "margin-bottom: 0;">Projets d'entreprises avec des chercheurs</h5>
  ${draw_fin_plot("Förderung von Innovationsprojekten","Projekte von Unternehmen mit Forschenden",115,true, width)}
  <h5 style= "margin-bottom: 0;">Projets d'entreprises</h5>
  ${draw_fin_plot("Förderung von Innovationsprojekten","Projekte von Unternehmen", 25, false, width)}
  <h5 style= "margin-bottom: 0;">Projets de chercheurs</h5>
  ${draw_fin_plot("Förderung von Innovationsprojekten","Projekte von Forschenden", 70, false, width)}
</div>

## Conseil et mise en réseau

<div style="display: grid; grid-template-columns: 1fr; column-gap: 20px; row-gap: 5px;">
  <h5 style= "margin-bottom: 0;">Savoir et réseaux</h5>
  ${draw_fin_plot("Beratung und Vernetzung","Wissen und Netzwerke",55,false, width)}
  <h5 style= "margin-bottom: 0;">Gestion de l'innovation et conseil</h5>
  ${draw_fin_plot("Beratung und Vernetzung","Innovationsmanagement und Beratung",55, false, width)}
</div>

<p class="comment">Source: Cockpit/PowerBI Innosuisse (2025)
<br>* Pour les instruments marqués, les résultats du suivi de l'impact sont expliqués ci-après. L'offre d'encouragement « Swiss Accelerator » n'est pas mentionnée (fonds accordés par an, ⌀ 2023–25: 57,4 millions de francs). Il s'agissait d'une mesure de remplacement limitée dans le temps (2023–24) en réaction à la non-association à Horizon Europe.</p>

La majeure partie des encouragements d'Innosuisse est consacrée aux projets d'innovation nationaux et internationaux. Les projets d'innovation standard entre entreprises¹ et chercheurs, dans le cadre desquels les institutions de recherche sont rémunérées principalement pour le personnel de recherche, sont les plus importants. Les entreprises et organisations participantes contribuent pour leur part à hauteur de 40–60 % aux coûts totaux du projet.

En outre, les entreprises sont soutenues dans le lancement de projets d'innovation par le biais de l'Innovation Booster, du mentoring, du réseau Enterprise Europe Network (recherche de partenaires) et d'autres événements. Les start-up peuvent bénéficier d'offres de coaching, de formation et d'internationalisation. Les résultats du suivi de l'impact de l'Innovation Booster et du Start-up Core Coaching seront présentés ici.

Les résultats des projets d'innovation des chercheurs sans partenaire chargé de la mise en valeur peuvent également être présentés.

L'intégration des projets d'innovation internationaux dans le suivi de l'impact est prévue pour l'année de référence 2025. Les projets dans lesquels les start-up et les PME sont directement soutenues (Projets d'innovation pour start-up et Swiss Accelerator) seront intégrés ultérieurement dans le suivi, car les projets ne sont pas encore terminés. Il en va de même pour les projets de l'Initiative Flagship.

<p class="comment">¹ Dans la suite du texte, le terme « entreprise » sera souvent utilisé comme synonyme de « partenaire chargé de la mise en valeur ». Ce n'est pas tout à fait exact, car les partenaires chargés de la mise en valeur peuvent être des PME, des grandes entreprises et des start-up, mais aussi des administrations, des organisations à but non lucratif et d'autres institutions privées ou publiques. Cependant, la grande majorité des partenaires chargés de la mise en valeur sont des entreprises (PME, grandes entreprises et start-up). Nous nous permettons donc cette simplification afin de rendre les textes plus faciles à comprendre.<p>

## Thématiques des projets innovants 2023–2025
Les projets innovants approuvés peuvent être classés en cinq thématiques différentes, qui sont également représentées dans la figure suivante en fonction des offres d'encouragement. Le graphique présente la part en pourcentage des fonds allouées à chaque thématiques, en moyenne sur la période 2023–25. Les pourcentages diffèrent par instrument, parfois considérablement. 

- « <span class="text-cat-1">Engineering</span>  » est le domaine thématique dominant dans les projets d'innovation avec un partenaire de mise en œuvre (39 %) et représente une part relativement élevée dans BRIDGE Discovery (38 %) et BRIDGE Proof of Concept (33 %). C'est dans l'accompagnement des start-ups (14 %) et dans les projets d’innovation sans partenaire de mise en œuvre (16 %) qu'elle est la moins présente.
- Les « <span class="text-cat-2">Life Sciences</span>  » représentent une très forte proportion des projets d’innovation sans partenaire de mise en œuvre (71 %) et constituent également le domaine thématique le plus important dans BRIDGE Discovery (44 %), BRIDGE Proof of Concept (37 %) et Start-up Coaching (34 %). Leur part est la plus faible dans le Chèque d’innovation (16 %).
- Les écarts pour le domaine « <span class="text-cat-3">Energy & environment</span> » sont plus faibles, allant de 4 % dans les projets d’innovation sans partenaire de mise en œuvre à 17 % dans le Start-up Coaching.
- Le domaine « <span class="text-cat-4">Information and communication technologies ICT</span>  » occupe la plus grande place dans le Start-up Coaching (27 %) et dans le Chèque d’innovation (22 %), et la plus faible dans BRIDGE Discovery (6 %).
- Les « <span class="text-cat-5">Social sciences & business management</span>  » sont les plus fortement représentées dans le Chèque d’innovation (22 %) ; dans tous les autres programmes de soutien, leur part est de 8 % ou moins.

<div>${n_subcluster(width)}</div>
