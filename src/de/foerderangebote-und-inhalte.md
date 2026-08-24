---
title: Überblick Förderangebote und Inhalte des Wirkungsmonitorings
style: ../styles.css
toc: false
---

```js
import { html } from "npm:htl";
import { draw_fin_plot, n_subcluster} from "../functions.js"
```

# Förderangebote und Inhalte

Der gegenwärtige Stand des Wirkungsmonitorings ist so aufgebaut, dass in allen Förderangebotskategorien mindestens zum jeweils finanziell gewichtigsten Förderangebot Aussagen zur Wirksamkeit und zu ausgewählten Vergleichen gemacht werden können. Die gegenwärtigen Lücken (ohne *) werden schrittweise geschlossen werden. 
 
## Förderung von Innovationsprojekten

<div style="display: grid; grid-template-columns: 1fr; column-gap: 20px; row-gap: 5px;">
  <h5 style="margin-bottom: 0;">Projekte von Unternehmen mit Forschenden</h5>
  ${draw_fin_plot("Förderung von Innovationsprojekten","Projekte von Unternehmen mit Forschenden",115,true, width)}
  <h5 style="margin-bottom: 0;">Projekte von Unternehmen</h5>
  ${draw_fin_plot("Förderung von Innovationsprojekten","Projekte von Unternehmen", 25, false, width)}
  <h5 style="margin-bottom: 0;">Projekte von Forschenden</h5>
  ${draw_fin_plot("Förderung von Innovationsprojekten","Projekte von Forschenden", 70, false, width)}
</div>

## Beratung und Vernetzung

<div style="display: grid; grid-template-columns: 1fr; column-gap: 20px; row-gap: 5px;">
  <h5 style="margin-bottom: 0;">Wissen und Netzwerke</h5>
  ${draw_fin_plot("Beratung und Vernetzung","Wissen und Netzwerke",55,false, width)}
  <h5 style="margin-bottom: 0;">Innovationsmanagement und Beratung</h5>
  ${draw_fin_plot("Beratung und Vernetzung","Innovationsmanagement und Beratung",55, false, width)}
</div>

<p class="comment">Quelle: Cockpit/PowerBI Innosuisse (2026)
<br>* Für die markierten Instrumente werden in der Folge die Ergebnisse aus dem Wirkungsmonitoring erläutert. Das Förderangebot «Swiss Accelerator» wird nicht aufgeführt (bewilligte Mittel pro Jahr ⌀ 2023–2025: 57.4 Mio. Fr.). Es war eine zeitlich beschränkte Ersatzmassnahme (2023–2024) in Reaktion auf die Nichtassoziation an Horizon Europe.</p>

Der Grossteil der Förderung von Innosuisse fliesst in die nationalen und internationalen Innovationsprojekte. Die höchste Bedeutung kommt hier den Standard-Innovationsprojekten zwischen Unternehmen¹ und Forschenden zu, in welchen die Forschungsinstitutionen primär für die Entlohnung des Forschungspersonals entgolten werden. Die beteiligten Unternehmen und Organisationen tragen Ihrerseits 40–60 % an die gesamten Projektkosten bei.

Flankierend dazu werden Unternehmen mittels Innovation Booster, Mentoring, Enterprise Europe Network (Partnersuche) und weiteren Veranstaltung in der Initiierung von Innovationsprojekten unterstützt. Start-ups können von Coaching-, Trainings- und Internationalisierungsangeboten profitieren. Hier werden die Ergebnisse des Wirkungsmonitoring der Innovation Booster und des Start-up Core Coaching präsentiert.

Bei den Innovationsprojekten von Forschenden ohne Umsetzungspartner und dem BRIDGE Programme können ebenfalls Ergebnisse präsentiert werden.

Die Aufnahme der BRIDGE Proof of Concept-Projekte, der internationalen Innovationsprojekte, der Flagship Initiative und der Start-up Innovationsprojekte in das Wirkungsmonitoring ist für das Berichtsjahr 2027 vorgesehen.

<p class="comment">¹ In der Folge wird «Unternehmen» vielfach als Synonym für «Umsetzungspartner» verwendet. Das ist nicht ganz präzise, weil die Umsetzungspartner sowohl KMU, Grossunternehmen und Start-ups, wie auch Verwaltungen, Non-Profit-Organisationen und andere private oder öffentliche Institutionen umfassen können. Allerdings besteht die grosse Mehrheit der Umsetzungspartner aus Unternehmen (KMU, Grossunternehmen und Start-ups), darum erlauben wir uns diese Vereinfachung hier, um damit die Texte einfacher lesbar zu machen.<p>

## Themengebiete der Innovationsvorhaben 2023–2025
Die bewilligten Innovationsvorhaben lassen sich in fünf verschiedene Themengebiete gliedern, welche in der nachfolgenden Abbildung zusätzlich nach Förderangeboten dargestellt sind. Die Abbildung zeigt den prozentualen Anteil der Fördermittel, die den einzelnen Themengebiete im Durchschnitt der Jahre 2023–2025 zugewiesen wurden. Die Anteile nach Instrumenten unterscheiden sich zum Teil deutlich. 

- «<span class="text-cat-1">Engineering</span>» ist das führende Themengebiet bei Innovationsprojekten mit Umsetzungspartner (39 %) und macht einen vergleichsweise hohen Anteil bei BRIDGE Discovery (38 %) und BRIDGE Proof of Concept (33 %) aus. Am wenigsten verbreitet ist es beim Start-up-Coaching (14 %) und bei Innovationsprojekten ohne Umsetzungspartner (16 %).
- «<span class="text-cat-2">Life Sciences</span>» machen einen sehr hohen Anteil der Innovationsprojekte ohne Umsetzungspartner aus (71 %) und sind zudem das grösste Themengebiet bei BRIDGE Discovery (44 %), BRIDGE Proof of Concept (37 %) und beim Start-up Coaching (34 %). Am tiefsten ist ihr Anteil beim Innovationsscheck (16 %).
- Die Unterschiede bei «<span class="text-cat-3">Energy & environment</span>» sind geringer und reichen von 4 % bei Innovationsprojekten ohne Umsetzungspartner bis zu 17 % beim Start-up Coaching.
- «<span class="text-cat-4">Information and communication technologies (ICT)</span>» haben das grösste Gewicht im Start-up Coaching (27 %) und im Innovationscheck (22 %) sowie das geringste in BRIDGE Discovery (6 %). 
- «<span class="text-cat-5">Social sciences & business management</span>» sind im Innovationsscheck am stärksten vertreten (22 %); in jedem anderen Förderangebot liegt der Anteil bei 8 % oder darunter.

<div>${(n_subcluster(width))}</div>
