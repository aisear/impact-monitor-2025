---
title: Résultats comparatifs
style: ../styles.css
toc: false
---

```js
import { html } from "npm:htl";
import { coloredUnderline, draw_result, draw_innoart, draw_dn, draw_result_zf_legend} from "../functions.js"
import { df_zufrieden } from "../data.js"
```

## Résultats comparatifs des offres d'encouragement

### La satisfaction est élevée pour toutes les offres d'encouragement d'Innosuisse examinées
Les bénéficiaires de l'encouragement d'Innosuisse sont satisfaits, voire très satisfaits, de l'encouragement de l'innovation et de sa mise en œuvre. La part des instruments présentés ici est supérieure à 80 %, et pour le ${coloredUnderline("Start-up Core Coaching","Start-up Core Coaching")}, elle dépasse les deux tiers. Seule une très faible proportion (≤ 1 %) n'est pas satisfaite des instruments d'Innosuisse.

<div style="display: grid; grid-template-columns: 1fr; column-gap: 20px; row-gap: 0px;">
  
  ${draw_result_zf_legend()}
  ${draw_result(df_zufrieden,"Innovationsprojekte mit Umsetzungspartner", false, 35)}
  ${draw_result(df_zufrieden,"Innovationsschecks", false)}
  ${draw_result(df_zufrieden,"Innovationsprojekte ohne Umsetzungspartner", false)}
  ${draw_result(df_zufrieden,"Innovation Booster", false)}
  ${draw_result(df_zufrieden,"Start-up Core Coaching")}
</div>

### Innosuisse encourage les innovations tant incrémentales que radicales

<div>${draw_innoart("inkr_radikal", 550, 250)}</div>
<p class="comment">
Appréciations des bénéficiaires de l'encouragement sur la base d'une échelle d'évaluation à six niveaux avec des définitions prédéfinies : (1) innovations très incrémentales, (2) innovations incrémentales ou (5) innovations radicales, (6) innovations très radicales.
</p> 

Parmi les ${coloredUnderline("projets d'innovation avec partenaires chargés de la mise en valeur","Förderung für Schweizer Innovationsprojekte")} et les ${coloredUnderline("chèques d'innovation","Innovationsscheck")}, environ un quart des projets innovants poursuivent ****clairement des innovations incrémentales****. Dans ce cas, l'objectif principal est de développer ou d'optimiser ce qui existe déjà (produits, services, processus, modèles commerciaux, etc.).

Les ****innovations radicales**** (27 %) sont encouragées dans le cadre de la ${coloredUnderline("promotion de projets","Förderung für Schweizer Innovationsprojekte")} dans la même mesure que les innovations incrémentales. Contrairement aux innovations incrémentales, les innovations radicales visent des innovations et des changements fondamentaux grâce à des idées et des technologies nouvelles, révolutionnaires ou radicales. Elles représentent au moins un quart des ${coloredUnderline("projets","Förderung für Schweizer Innovationsprojekte")} et des ${coloredUnderline("idées d'innovation","Starthilfe für Projekte und Vernetzung")} pour tous les instruments, à l'exception des ${coloredUnderline("chèques d'innovation","Innovationsscheck")}. Parmi les ${coloredUnderline("start-up","Begleitung von Start-ups")} accompagnées, plus de la moitié ont pour ambition d'introduire des innovations radicales dans leur modèle d'entreprise.

### Les innovations peuvent avoir une forte influence sur les marchés

<div>${draw_innoart("disruptiv", 380, 180)}</div>
<p class="comment">
Appréciations des bénéficiaires de l'encouragement sur la base d'une échelle d'évaluation à six niveaux avec des définitions prédéfinies : (5) innovations de rupture, (6) innovations fortement disruptives.
</p> 

Les ****innovations disruptives**** sont à distinguer de ces dernières.  Ici, ce n'est pas le degré de nouveauté technologique qui est au premier plan, mais l'impact révolutionnaire sur les marchés. Elles sont disruptives lorsqu'elles créent des marchés entièrement nouveaux avec de nouvelles règles du jeu et de nouveaux groupes cibles ou lorsqu'elles influencent fortement les marchés existants, par exemple par des innovations qui sont nouvelles pour les marchés à l'échelle internationale ou mondiale. Tant les innovations radicales qu'incrémentales peuvent être disruptives.

Parmi les ${coloredUnderline("projets d'innovation avec des partenaires chargés de la mise en valeur","Förderung für Schweizer Innovationsprojekte")} et les ${coloredUnderline("chèques d'innovation","Förderung für Schweizer Innovationsprojekte")}, environ un tiers des entreprises ont le potentiel de transformer le marché de manière disruptive. Parmi les start-up du programme ${coloredUnderline("Core Coaching","Begleitung von Start-ups")}, environ deux tiers des start-up poursuivent même des innovations disruptives avec le modèle commercial de l'entreprise fondée.

### Innosuisse encourage la diversité de l'innovation
Le graphique suivant illustre également la diversité des formes d'innovation soutenues. Il arrive souvent que plusieurs innovations soient poursuivies simultanément, par exemple lorsqu'une innovation de produit est combinée à une innovation de modèle d'entreprise ou de processus.

Les innovations de produits sont les plus importantes dans le cadre du ${coloredUnderline("Start-up Core Coaching","Begleitung von Start-ups")} (88 %). Les parts des innovations de processus se situent entre 24 % et 35 %. Les innovations de modèles d'entreprise sont les plus importantes pour les start-up par rapport aux autres instruments (17 %). Elles sont souvent associées à des aspects de la transformation numérique. Innosuisse encourage également les innovations sociales. Cependant, leur part est relativement faible.

La diversité des innovations est également le reflet du fait qu'Innosuisse encourage l'innovation basée sur la science de manière « bottom-up » et sans restriction thématique.

<div>
${draw_innoart("type_1", 640, 180)}
${draw_innoart("type_2",475, 180)}
</div>

### La transformation numérique est un aspect central de l'encouragement de l'innovation
La numérisation vise à la fois les technologies numériques d'avenir (blockchain, robotique, informatique quantique, intelligence artificielle, etc.) et le développement de modèles d'entreprise numériques (logiciels/plateformes/infrastructure en tant que service, mégadonnées, etc.). Ces deux aspects sont d'une grande importance pour l'économie suisse. Les opportunités économiques et la concurrence en matière d'innovation sont extrêmement élevées dans ce domaine.

Environ 55 % des ${coloredUnderline("projets d'innovation","Förderung für Schweizer Innovationsprojekte")} soutenus par Innosuisse contribuent de manière significative à la transformation numérique de l'économie, grâce aux technologies numériques et/ou aux modèles d'entreprise numériques. L'application de nouvelles technologies numériques est plus importante que la mise en œuvre d'un modèle d'entreprise numérique. Pour les ${coloredUnderline("start-up en coaching","Begleitung von Start-ups")}, l'importance de la numérisation est encore plus significative.

<div style="display: grid; grid-template-columns: 1fr; column-gap: 20px; row-gap: 0px; width: 800px">
  ${draw_dn("digital", "Innovationsprojekte mit UP", true, 20)}
  ${draw_dn("digital", "Innovationsschecks", false, -8)}
  ${draw_dn("digital", "Innovationsprojekte ohne UP", false, -8)}
  ${draw_dn("digital", "Start-up Core Coaching", false, -8)}
</div>
<p class="comment">Question posée : le projet encouragé par Innosuisse repose-t-il sur de nouvelles technologies numériques ou sur de nouveaux modèles commerciaux numériques ? Appréciations des bénéficiaires de l'encouragement sur la base d'une échelle d'évaluation à six niveaux avec des définitions prédéfinies : (5) fortement, (6) très fortement.</p>

### L'innovation a un rôle clé à jouer dans le développement de solutions durables
Les instruments d'encouragement permettent aux entreprises et aux organisations de tester à un stade précoce des approches et des technologies innovantes pour développer des solutions durables et de les mettre en œuvre, que ce soit au niveau national ou mondial. Innosuisse apporte ainsi une contribution essentielle et tournée vers l'avenir pour relever les défis mondiaux tels que l'efficacité énergétique et l'utilisation efficace des ressources, le changement climatique ou les questions sociales. L'encouragement de l'innovation est un moteur de la transformation vers une économie et une société durable.

Environ 60 % des ${coloredUnderline("projets d'innovation","Förderung für Schweizer Innovationsprojekte")} soutenus montrent, lorsqu'ils sont mis en œuvre concrètement, qu'ils ont le potentiel de contribuer au développement durable, soit au développement durable environnemental, soit au développement durable social, soit aux deux. Pour les ${coloredUnderline("start-up en coaching","Begleitung von Start-ups")}, les proportions sont légèrement plus élevées, avec 67 %.

<div style="display: grid; grid-template-columns: 1fr; column-gap: 20px; row-gap: 0px; width: 800px">
  ${draw_dn("nachhaltig", "Innovationsprojekte mit UP", true, 20)}
  ${draw_dn("nachhaltig", "Innovationsschecks", false, -8)}
  ${draw_dn("nachhaltig", "Innovationsprojekte ohne UP", false, -8)}
  ${draw_dn("nachhaltig", "Start-up Core Coaching", false, -8)}
</div>

<p class="comment">Question posée : le projet ou l'idée de projet encouragé par Innosuisse peut-il contribuer à la durabilité écologique et/ou sociale ? Appréciations des bénéficiaires de l'encouragement sur la base d'une échelle d'évaluation à six niveaux avec des définitions prédéfinies : (4) contribution plutôt élevée, (5) contribution élevée, (6) contribution très élevée.</p>