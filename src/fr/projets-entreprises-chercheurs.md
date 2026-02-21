---
title: Projets d'entreprises avec des chercheurs
style: ../styles-ch-projekte.css
toc: false
---

```js
import { html } from "npm:htl";
import { coloredUnderline, drawMiniPlot, draw_waffle, draw_results, leverage, kof_did_plot} from "../functions.js"
```

# Projets d'entreprises avec des chercheurs

## Projets d'innovation avec partenaire chargé de la mise en valeur
<div style="display: flex;">
  <div>${drawMiniPlot("Innovationsprojekte mit Umsetzungspartner")}</div>
  <div>${drawMiniPlot("Innovationsprojekte mit Umsetzungspartner", false)}</div>
</div>

Les projets d'innovation standard nationaux sont le principal instrument d'encouragement d'Innosuisse. Des entreprises et des organisations issues du monde économique et de la société coopèrent avec des partenaires de recherche afin de développer ensemble des produits, des services ou des processus innovants et de les commercialiser, au profit de l'économie et de la société.

Les projets sont basés sur les résultats de la recherche et du développement dans toutes les disciplines basées sur la science et présentent un degré d'innovation élevé. Les idées innovantes proviennent principalement de l'économie et de la société. Les résultats de la recherche sont mis en pratique, renforcent la compétitivité des entreprises, créent de la valeur ajoutée et des emplois et soutiennent ainsi la capacité d'innovation des entreprises et de l'économie.

Le transfert de savoir et de technologie entre la recherche, l'économie et la société est ainsi renforcé dans les deux sens.

### La majorité des projets d'innovation financés sont introduits sur le marché ou dans les entreprises

À la fin du projet, 45 % des projets soutenus sont mis en œuvre sur le marché ou dans l'organisation, ou il est prévu de les mettre en œuvre dans un délai d'un an. Environ un tiers des projets portent sur des innovations de processus qui sont mises en œuvre plus rapidement et au sein de l'organisation.

Trois ans après la fin de l'encouragement, plus de la moitié des innovations encouragées (57 %) ont été introduites ou il est prévu de les introduire dans les deux prochaines années.

Une partie des projets nécessite une période plus longue pour la mise sur le marché ou le projet d'innovation est poursuivi dans des projets de suivi. 17 % des projets d'encouragement à haut risque ont été interrompus trois ans après leur achèvement, en d'autres termes, ils ne sont pas mis en œuvre et ne sont pas poursuivis.

<div>${draw_waffle("ip_time_to_market", -100)}</div>

### L'encouragement génère des retombées économiques tangibles et significatifs sur plus de 60 % des PME
Une sélection de chiffres clés prouve l'efficacité en termes d'effets économiques qui n'auraient pas Certains chiffres clés témoignent de l'efficacité des effets économiques qui n'auraient pas pu être obtenus sans le projet soutenu. Environ un tiers des PME font état d'une croissance de l'emploi et créent ainsi de nouveaux postes hautement qualifiés. 3 entreprises sur 10 constatent une augmentation de leur chiffre d'affaires. Plus d'un quart des entreprises ont investi davantage dans la recherche et le développement (R&D), que ce soit en termes d'employés dans le domaine de la R&D ou de dépenses de R&D. 12 % des entreprises font état de réductions de coûts.

<div>${draw_results("Innovationsprojekte mit UP", false)}</div>

### Un franc d'encouragement a un effet de levier important
En moyenne, un projet d'innovation conduit à la création de près de 2,5 emplois à temps plein supplémentaires au cours des années 2021–23. En extrapolant sur les 350 projets en moyenne menés à bien au cours de cette période, entre 800 et 900 nouveaux emplois à temps plein sont ainsi créés dans les entreprises en Suisse.

<div style="font-size: 20px; font-weight: 700; max-width: 500px; padding-top: 10px; padding-bottom: 20px; text-align: center">+ 800 – 900 emplois à temps plein par an</div>

Les emplois supplémentaires créés génèrent directement de la valeur ajoutée pour les entreprises. L'effet de levier de l'encouragement est considérable : chaque franc d'encouragement rapporte à l'économie environ quatre francs de valeur ajoutée, mesurés trois ans après l'encouragement et cumulés sur trois années supplémentaires. Les autres effets multiplicateurs indirects au sein des entreprises, par exemple les dépenses supplémentaires pour les prestations préalables des entreprises, ne sont pas pris en compte ici. En outre, les résultats présentés dans ce rapport montrent que les effets de l'encouragement de l'innovation vont bien au-delà des effets économiques immédiats <a href="/_file/data/methodik-volkswirtschaft-innosuisse-ebp.pdf" target="_blank">(EBP, 2025)</a>.

<div>${leverage()}</div>

<div class="card" style="max-width: 640px">
<h4>Une étude scientifique démontre l'impact direct de l'ecouragement de l'innovation sur les ventes et l'emploi</h4>

Les résultats du KOF Centre de recherches conjoncturelles de l'ETH Zurich montrent que l'encouragement de projets d'innovation augmente en moyenne de **21 %** les **ventes** des entreprises participantes au cours des cinq années suivantes. La comparaison porte sur des entreprises suisses qui n'ont pas reçu ou demandé d'encouragement d'Innosuisse, mais qui présentent des caractéristiques similaires, telles que les dépenses de recherche et développement, le niveau de formation de la main-d'œuvre ou l'environnement concurrentiel.

L'étude montre également les effets sur l'**emploi**. Par rapport aux entreprises qui ne bénéficient pas d'un encouragement, les entreprises ayant des projets d'innovation soutenus par Innosuisse ont créé en moyenne **18 %** d'emplois supplémentaires en cinq ans. Les effets positifs sur les ventes et sur l'emploi se renforcent avec le temps.

Avec cette étude, le KOF a apporté la preuve scientifique du lien entre l'encouragement de l'innovation en Suisse et son impact. Les chercheurs du KOF ont choisi une approche méthodologique reconnue par la communauté scientifique internationale et qui présente le moins de biais possible. L'approche dite « différence des différences » compare les entreprises qui bénéficient de l'encouragement d'Innosuisse avec des entreprises similaires qui n'en bénéficient pas.

Les résultats confirment les impacts économiques de l'encouragement de projets par Innosuisse présentés dans le suivi de l'impact.

<div style="font-size: 12px;">
Quelle: 
<ul>
    <li>
        <a href="https://www.innosuisse.admin.ch/de/publication?id=veYrGjAgZwmP" target="_blank">
            Résumé des résultats (présentation en anglais)
        </a>
    </li>
    <li>
        <a href="https://backend.innosuisse.admin.ch/proxy/api/media-library/ObC24vgQ0CMW/download?key=2024/12/09/e8c11134-2e13-4758-a968-1143b9d9e56f.pdf&type=mediaFile&mimeType=application%2Fpdf&filename=2024_KOF%20Study_Funding%20R%26D%20Cooperation_Executive%20Su" target="_blank">
            Résumé exécutif de l'article (en anglais)
        </a>
    </li>
    <li>
        <a href="https://www.research-collection.ethz.ch/handle/20.500.11850/708831" target="_blank">
            Article scientifique (en anglais) : Hulfeld F., Spescha, A., Wörter, M. (2024) : Funding R&D Cooperation Between Firms and Universities - The Effectiveness of the Innosuisse Model. KOF Working Paper
        </a>
    </li>
</ul>
</div>

<div class="card" style="background-color: white">${kof_did_plot(0)}</div>
<div class="card" style="background-color: white">${kof_did_plot(1)}</div>
</div>

### Innosuisse soutient des nouveautés sur le marché mondial et les innovations disruptives
33 % des projets d'innovation soutenus visent à développer des nouveautés pour le marché international et mondial. Les entreprises suisses bénéficient ainsi d'un soutien pour devenir ou rester compétitives à l'échelle internationale. En outre, environ 32 % des projets soutenus ont le potentiel d'influencer fortement ou de redéfinir les marchés grâce à des innovations disruptives.
  <div style="display: flex; gap: 40px;">
  ${draw_waffle("ip_new_to_market", -85)}
  ${draw_waffle("ip_disruptive", -85)}
  </div>

### La majorité des entreprises atteignent ou dépassent les objectifs du projet
La majorité des partenaires de projet impliqués ont entièrement atteint, voire dépassé leurs objectifs. Seule une petite partie des projets soutenus n'ont pas entièrement atteint ou n'ont pas atteint les objectifs fixés. Les projets innovants sont associés à des risques technologiques considérables et à des impondérables lors de la mise en œuvre sur le marché. Ces risques potentiels élevés soulignent la nécessité d'un encouragement public pour soutenir le transfert de savoir et de technologie, car les projets d'innovation ne seraient pas réalisés sans encouragement.

Les faibles effets d’aubaine de l'encouragement le confirment : seules 4 % des entreprises déclarent qu'elles auraient réalisé le projet sous la même forme sans le soutien d'Innosuisse. 16 % l'auraient réalisé sous une forme modifiée ou réduite.
  <div style="display: flex; gap: 15px;">
  <div>${draw_waffle("ip_project_goals",-70, 20)}</div>
  <div>${draw_waffle("ip_mitnahme",-70,5)}</div>
  </div>


### L'encouragement d'Innosuisse renforce le transfert de savoir et de technologie (TST) à long terme
Les projets d'innovation encouragent et renforcent le TST et la coopération entre les entreprises et la recherche. Sept entreprises sur dix indiquent que le financement de projets a accéléré et renforcé leurs activités de recherche et développement. La coopération et le TST avec la recherche sont durables à long terme : près de la moitié des entreprises travaillent toujours avec leurs partenaires de recherche trois ans après la fin du projet. 13 % d'entre elles recrutent même du personnel de recherche ayant participé au projet, renforçant ainsi leur base interne de connaissances et d'innovation à long terme.

  <div style="display: flex; gap: 15px;">
    ${draw_waffle("ip_wtt",-100)}
    ${draw_waffle("ip_researchpartner",-100)}
</div>

### Les résultats des projets sont basés sur la science
L'output scientifique généré par les projets est remarquable. Plus de la moitié des projets donnent lieu à des co-publications entre les partenaires chargés de la mise en valeur et les partenaires de recherche. Au niveau international, la Suisse occupe la première place dans ce domaine, qui est important pour les indices d'innovation ([Commission européenne, 2025](https://projects.research-and-innovation.ec.europa.eu/en/statistics/performance-indicators/european-innovation-scoreboard/eis#/eis/indicators/3.2?country_scope=all&highlight=CH) & [OMPI, 2025](https://www.wipo.int/gii-ranking/en/switzerland/section/economy-profile)). Les projets d'innovation y contribuent. Le solide positionnement international en matière de transfert de savoir et de technologie est également mis en évidence par les résultats d'une étude du SEFRI ([SEFRI, 2023](https://www.sbfi.admin.ch/sbfi/de/home/dienstleistungen/publikationen/publikationsdatenbank/wtt-endbericht-2023.html)).

62 % des partenaires de recherche publient leurs résultats scientifiques dans une revue spécialisée avec comité de lecture. Dans 21 % des projets financés, des thèses sont rédigées, en plus des nombreux travaux de bachelor et de master. Ces chiffres témoignent de l'ancrage scientifique solide des projets d'innovation et montrent également l'importance des projets pour la recherche et la contribution à la promotion de la relève scientifique. La qualité scientifique est très élevée et la diffusion des résultats des projets est ainsi assurée.
<div>${draw_waffle("ip_peer_pub", -100)}</div>

### Innosuisse permet de réaliser des projets à haut risque et interdisciplinaires
L'encouragement d'Innosuisse permet de soutenir principalement des projets complexes, à haut risque et interdisciplinaires. Les projets interdisciplinaires intègrent des connaissances, des méthodes et des technologies issues de différentes disciplines afin de développer ensemble des solutions innovantes à des problèmes complexes. Les projets transdisciplinaires impliquent en outre activement dans le processus de recherche des acteurs non universitaires issus de la société, de la politique, de l'économie et de la pratique, afin de résoudre ensemble des problèmes d'importance sociale et de générer des connaissances applicables dans la pratique. La proportion de 24 % de projets d'innovation radicale donne une indication du degré de risque des projets d'innovation. 
<div style="display: flex; gap: 10px;">
<div>${draw_waffle("ip_inter_trans", -70)}</div>
<div>${draw_waffle("ip_radikal_inkr", -70)}</div>
</div>

### Les entreprises sont majoritairement à l'origine des projets d'innovation et transforment les résultats de la recherche en valeur ajoutée
Le transfert de savoir et de technologie entre le partenaire chargé de la mise en valeur et le partenaire de recherche est réciproque. Les entreprises développent des idées d'innovation à haut risque pour la recherche et le développement et obtiennent des résultats concrets de la recherche pour leur mise en œuvre et leur valorisation sur les marchés (voir [la section sur les effets économiques](#l-encouragement-genere-des-retombees-economiques-tangibles-et-significatifs-sur-plus-de-60-des-pme)).
<div>${draw_waffle("ip_impuls",-117)}</div>

### Les projets Innosuisse sont un succès pour les partenaires de recherche et de mise en œuvre

Les projets à haut risque doivent aussi pouvoir échouer, que ce soit en raison de risques technologiques ou de risques liés à la mise en œuvre de l'idée de projet sur le marché. Dans ce contexte, le taux de réussite légèrement inférieur des partenaires chargés de la mise en valeur n'est pas inquiétant. Le fait que près des trois quarts des partenaires de recherche considèrent les projets comme un succès témoigne de la grande qualité scientifique de ces derniers.

La différence entre les taux de réussite est compréhensible : pour les partenaires de recherche, la qualité scientifique et le transfert des connaissances issues de la recherche pour l'économie et la société sont prioritaires, tandis que pour les entreprises, l'application dans la pratique économique et la création de valeur sur les marchés sont également essentielles. Dans ce contexte, l'encouragement d'Innosuisse ne peut que créer des conditions importantes pour atteindre les résultats escomptés.

<div>${draw_waffle("ip_success", -85)}</div>

## Chèque d'innovation

<div style="display: flex;">
  <div>${drawMiniPlot("Innovationsscheck")}</div>
  <div>${drawMiniPlot("Innovationsscheck", false)}</div>
</div>

Le Chèque d'innovation offre aux PME et aux start-up un encouragement à bas seuil pour leur permettre de faire leurs premiers pas dans la coopération avec des partenaires de recherche. L'objectif est de réaliser des études de faisabilité et de marché ainsi que des clarifications technologiques qui peuvent servir de base à d'éventuels projets d'innovation ultérieurs. L'encouragement s'adresse également aux entreprises sans ou avec peu d'expérience en matière de recherche, afin de valider les idées d'innovation à un stade précoce. La condition préalable est qu'un partenaire de recherche soit impliqué et que le projet présente un contenu clairement innovant.

### La coopération avec des partenaires de recherche est examinée et les idées d'innovation sont développées
Avec le Chèque d'innovation, les entreprises participantes ont l'intention d'obtenir des résultats concrets et utilisables, de tester et de développer leur idée d'innovation et d'examiner la possibilité de collaborer avec un partenaire de recherche. Plus des deux tiers (69 %) des Chèques d'innovation visent à préparer un projet d'innovation auprès d'Innosuisse.

La coopération est testée avec succès dans presque tous les cas. 61 % des entreprises ont testé et développé avec succès leur idée d'innovation et ont pleinement atteint cet objectif. Environ 42 % des chèques permettent d'obtenir des résultats concrets et directement exploitables. Environ la moitié des Chèques d'innovation aboutissent à la préparation réussie d'un projet d'innovation auprès d'Innosuisse.

<div>${draw_results("Innovationsscheck", true, 400)}</div>

### Les idées de projets sont suivies
Les idées d'innovation sont pertinentes pour les PME, c'est pourquoi elles sont poursuivies même après l'encouragement. Plus d'un quart des entreprises lancent un projet d'innovation Innosuisse après avoir reçu un Chèque d'innovation ou prévoient de le faire.

<div>${draw_waffle("is_ideas",-50,10)}</div>

### Des partenariats nouveaux et durables avec la recherche
Le Chèque d'innovation est un important catalyseur pour le transfert de savoir et de technologie et la coopération avec la recherche. Plus de la moitié des entreprises participantes peuvent désormais être initiées au transfert de savoir et de technologie avec la recherche. En outre, 71 % des PME sont satisfaites ou très satisfaites des services fournis par les partenaires de recherche.

Les Chèques d'innovation apportent ainsi des avantages importants aux entreprises au-delà de la fin du projet. La grande majorité des PME continuent de travailler avec leur partenaire de recherche même après la fin du projet. Cela renforce la culture de l'innovation dans l'entreprise à long terme et pérennise le transfert de savoir et de technologie.
 
<div style="display: flex; gap: 40px;">
${draw_waffle("is_connection", -85)}
${draw_waffle("is_wtt", -85)} 
</div>

### L'atteinte des objectifs est élevée et des idées d'innovation qui n'auraient pas été abordées autrement sont mises en œuvre
Deux tiers des PME atteignent complètement ou dépassent les objectifs fixés avec les Chèques d'innovation. Cet encouragement facile d'accès et simple permet ainsi de vérifier la faisabilité des idées d'innovation et renforce la mise en œuvre ultérieure d'idées d'innovation incrémentales et radicales.

Les effets d’aubaine montrent que les Chèques d'innovation permettent d’explorer des idées qui n’auraient pas vu le jour autrement. Seules 6 % des PME déclarent qu'elles auraient examiné l'idée d'innovation sous une forme similaire même sans encouragement. 22 % l'auraient examinée sous une forme légèrement modifiée.

<div style="display: flex; gap: 15px;">
${draw_waffle("is_project_goals",  -100, 17)}
${draw_waffle("is_mitnahme", -100, 10)}
</div>