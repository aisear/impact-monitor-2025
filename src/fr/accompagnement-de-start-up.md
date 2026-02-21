---
title: Accompagnement de start-up
style: ../styles-ch-startup.css
toc: false
---

```js
import { html } from "npm:htl";
import { coloredUnderline, drawMiniPlot, draw_waffle, draw_results, drawMiniPlot1, su_vza, su_vza_legend} from "../functions.js"
```

# Accompagnement de start-up
## Start-up Coaching

<div style="display: flex;">
  <div>${drawMiniPlot("Start-up Coaching")}</div>
  <div>${drawMiniPlot1()}</div>
  <div>${drawMiniPlot("Start-up Coaching", false)}</div>
</div>

<p style="font-size: 10px; color: #828282;">Le montant en mio. de francs et le total des coachings se rapportent au Start-up Coaching dans son ensemble (Initial, Core et Scale-up Coaching). Dans la dernière illustration, seul le nombre de Core Coachings est indiqué.</p>

Le coaching d'Innosuisse s'adresse aux start-up basées sur la science et présentant un fort potentiel d'innovation et de croissance. Il propose des offres de soutien individuelles et thématiques adaptées aux différentes phases de création d'entreprise et aux besoins spécifiques.

Les offres de coaching d'Innosuisse renforcent l'agilité et les compétences de l'équipe fondatrice, de la consolidation de l'idée commerciale et des modèles d'entreprise au développement de stratégies de croissance sur les marchés internationaux, en passant par le financement. Les start-up bénéficient d'un vaste réseau de coachs (plus de 200), qui apportent à la fois une expertise générale en matière de start-up et des connaissances parfois très spécialisées dans des domaines tels que le financement, le marketing, les technologies ou les questions de propriété. Les trois phases garantissent également que chaque start-up bénéficie d'un soutien ciblé et complet.

- L'****Initial Coaching**** (jusqu'à 12 mois) aide les créatrices et créateurs et d'entreprise à valider leur idée commerciale et à développer un premier modèle d'entreprise prometteur. L'Initial Coaching est obligatoire pour accéder au Core Coaching.
- Le ****Core Coaching**** (jusqu'à 36 mois) se concentre sur le développement du modèle d'entreprise, la préparation de la mise sur le marché et le développement de stratégies pour prendre pied sur les marchés.
- Dans le ****Scale-up Coaching**** (jusqu'à 24 mois), l'accent est mis sur le positionnement à long terme et le développement des start-up sur les marchés internationaux. Les start-up reçoivent également un soutien pour trouver des investisseurs et mettre en œuvre leur stratégie de croissance. Le Scale-up Coaching est sélectif et s'adresse aux start-up à fort potentiel de croissance.
- ****Start-up Camps et salons internationaux**** : l'internationalisation fait l'objet d'une attention particulière. Les start-up bénéficiant du Core Coaching et du Scale-up Coaching ont la possibilité de participer à des camps internationaux, qui sont proposés dans plus de dix « start-up hotspots » dynamiques à travers le monde. En outre, le programme offre également la possibilité de participer à des salons internationaux de premier plan. Ces deux mesures renforcent les réseaux internationaux, facilitent l'accès aux marchés internationaux et aident à mieux exploiter le potentiel de développement.

Cette largeur, la structure modulaire et la flexibilité du coaching le distinguent de la multitude d'autres offres en comparaison nationale et internationale.

Une grande partie des start-up coachées sont des entreprises issues de la recherche (spin-off), qui renforcent l'interface entre les derniers résultats scientifiques et le transfert de savoir et de technologie vers le marché. De nombreuses start-up en coaching poursuivent ainsi des idées commerciales, des technologies ou des modèles commerciaux révolutionnaires.

Au cours des dix dernières années, les start-up ont gagné en importance. L'écosystème dynamique des start-up constitue l'un des atouts majeurs du « système d'innovation suisse ». Grâce à des services de coaching sur mesure et complets, ce potentiel est exploité pour être mis en œuvre et déployé sur les marchés, afin de créer des emplois hautement qualifiés et de nouveaux potentiels de valeur ajoutée en Suisse.

Le Core Coaching chez Innosuisse est la phase centrale du Start-up Coaching, au cours de laquelle une start-up développe ses capacités et structures fondamentales pour un succès, une expansion et une croissance durables. Les résultats suivants se réfèrent au Core Coaching.

### Les start-up trouvent que le Core Coaching est utile pour leur développement
Le Core Coaching couvre un large éventail de sujets, qui sont spécifiquement adaptés aux besoins des start-up. Dans le tableau ci-dessous, les sujets sont classés par ordre décroissant de pertinence pour les start-up (voir les pourcentages en gris clair). Le tableau montre la proportion de start-up soutenues qui considèrent le Core Coaching comme utile ou très utile dans les domaines pertinents.

Le domaine le plus important pour le coaching, « développement du modèle d’entreprise » (94 %), affiche également la plus forte proportion de start-up qui jugent le soutien utile (81 %). Les conseils en matière de la levée de capitaux, également très importants (91 %), ont été jugés utile par deux tiers des start-up (66 %). Le soutien à l'entrée sur le marché a été évalué de manière similaire (65 %). L'évaluation du soutien apporté à l'échelle du modèle d'entreprise a été un peu plus faible (55 %), ce qui indique probablement que de nombreuses start-up ne sont pas encore en phase d'échelle réelle à la fin du coaching.

<div>${draw_results("Start-up Core Coaching", true, 280)}</div>

### Les attentes des start-up vis-à-vis du coaching sont satisfaites
Environ quatre start-up sur cinq ayant bénéficié du coaching confirment que le Core Coaching a apporté une contribution importante dans au moins un domaine pertinent (78 %), cette contribution étant jugée « favorable » ou « très favorable ». La proportion de start-up dont les attentes ont été majoritairement satisfaites est tout aussi élevée, avec 84 %.

Pour environ la moitié des start-up, le coaching a apporté une contribution significative dans au moins trois domaines importants de la création d'entreprise (54 %). La proportion de start-up dont les attentes ont été entièrement satisfaites, voire dépassées, est presque aussi élevée (48 %).

<div style="display: flex; gap: 15px;">
    ${draw_waffle("scc_support", -100)}
    ${draw_waffle("scc_expection", -100)}
</div>

### Les start-up poursuivent des idées commerciales radicales et disruptives ayant un impact sur les marchés internationaux
Par rapport aux projets d'innovation, les start-up poursuivent généralement des innovations et des modèles commerciaux plus radicaux. Seules quelques-unes d'entre elles mettent clairement en œuvre des innovations et des modèles commerciaux incrémentaux. La majorité d'entre elles visent également à réaliser des innovations disruptives et à transformer considérablement le marché ou même à créer de nouveaux marchés grâce à leurs innovations. La proportion de start-up qui développent une nouveauté mondiale ou une nouveauté pour les marchés internationaux est donc élevée (77 %).

<div style="display: flex; gap: 10px;">
    ${draw_waffle("scc_radikal_inkr", -70)}
    ${draw_waffle("scc_new_to_market", -70)}
</div>

### Les start-up réussissent leur entrée sur le marché – la rentabilité prend plus de temps
Un facteur décisif pour la survie et la croissance des start-up est l'entrée concrète sur le marché, afin de faire évoluer le modèle d'affaires par la suite. À la fin du coaching, environ 80 % des jeunes entreprises ont pu lancer leur innovation sur le marché. La prochaine étape est la rentabilité, lorsque la start-up commence à réaliser des bénéfices. Environ une start-up sur dix est déjà dans cette situation à la fin du coaching. Trois ans plus tard, c'est déjà le cas de près d'une start-up sur trois.

<div style="display: flex; gap: 40px;">
 ${draw_waffle("scc_market", -85)}
 ${draw_waffle("scc_profitable", -85)}
</div>

### Les start-up en coaching lèvent des fonds avec succès
Pour les start-up, la levée de fonds est une condition essentielle pour poursuivre leur idée commerciale et se développer sur les marchés. La recherche et le développement ainsi que la mise sur le marché d'une innovation nécessitent des investissements importants, c'est pourquoi la levée de fonds est un thème central du programme de coaching d'Innosuisse. À la fin du programme, 22 % des start-up coachées avaient levé plus de 5 millions de francs de nouveaux capitaux. Pour deux tiers des start-up, le coaching a [directement contribué](#les-start-up-trouvent-que-le-core-coaching-est-utile-pour-leur-developpement) à la levée de fonds.

<div>${draw_waffle("scc_capital", -55)}</div>

### Trois ans après le coaching, les start-up ont créé plus de onze emplois à temps plein
Pour les start-up, la croissance est un indicateur clé de succès. Trois ans après la fin du programme de coaching, les start-up ont créé en moyenne plus de onze emplois à temps plein supplémentaires. Environ la moitié d'entre elles se trouvent en Suisse. Il apparaît que l'entrée sur le marché et une croissance durable ne se produisent souvent que plus tard, en particulier pour les start-up dans le domaine des « Life Sciences » et celles qui proposent des innovations à haut risque.
<div>
${su_vza()}
${su_vza_legend()}
</div>

### Le coaching reflète et renforce la diversité de l'écosystème
La proportion de fondatrices dans les start-up ayant bénéficié d'un coaching est de 17 %. Les équipes de fondateurs comptent 35 % de femmes, et cette tendance est à la hausse. En outre, les équipes de fondateurs sont très cosmopolites : 67 % des start-up ont au moins un fondateur de nationalité étrangère, et au total, 43 % des équipes de fondateurs sont composées de membres étrangers en moyenne. Cela souligne le caractère international de la scène des start-up suisses.

Sur le plan thématique, le secteur des start-up se concentre fortement sur le domaine des «Life Sciences», y compris les technologies médicales et les soins de santé (38 %) et les TIC (30 %), voir [offres d'encouragement et contenus](offres-dencouragement-et-contenus#thematiques-des-projets-innovants-2021-2023). En même temps, les autres domaines de la technologie et de l'innovation sont également diversifiés et largement représentés. Les observations suivantes montrent en outre que les spin-off et les entreprises issues directement de la recherche et des universités revêtent une grande importance. Leur caractère international joue un rôle essentiel.

Cette diversité des start-up soutenues contribue de manière significative à la dynamique économique et technologique de l'écosystème des start-up et au renforcement de l'économie suisse.

<div style="display: flex; gap: 10px;">
    ${draw_waffle("scc_gender", -85)}
    ${draw_waffle("scc_foreign", -85)}
    </div>

### De nombreuses start-up trouvent leur origine dans la recherche
La moitié des start-up qui ont recours au Core Coaching d'Innosuisse ont vu le jour dans une université ou un institut de recherche. Environ une start-up sur trois est un spin-off qui souhaite exploiter commercialement la propriété intellectuelle issue de travaux de recherche et qui a réglé cela par contrat. Deux start-up sur trois indiquent qu'elles ont déjà protégé leur propriété intellectuelle par un brevet ou qu'elles prévoient de le faire dans un avenir proche.

<div style="display: flex; gap: 10px;">
${draw_waffle("scc_start_spin", -85)}
${draw_waffle("scc_patent", -85)}