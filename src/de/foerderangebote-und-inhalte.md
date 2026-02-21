---
title: Überblick Förderangebote und Inhalte des Wirkungsmonitorings
style: ../styles.css
toc: false
---

```js
import { html } from "npm:htl";
import { coloredUnderline, draw_fin_plot, draw_fin_plot_legend, n_subcluster} from "../functions.js"
```

## Überblick Förderangebote und Inhalte des Wirkungsmonitorings

Der gegenwärtige Stand des Wirkungsmonitorings ist so aufgebaut, dass in allen Förderangebotskategorien mindestens zum jeweils finanziell gewichtigsten Förderangebot Aussagen zur Wirksamkeit und zu ausgewählten Vergleichen gemacht werden können. Die gegenwärtigen Lücken (in aufgehellter Farbe) werden schrittweise geschlossen werden (vgl. Kapitel [Weiterentwicklung des Wirkungsmonitorings](methodische-grundlagen#weiterentwicklung-des-wirkungsmonitorings)). 
 
### Innosuisse Förderangebote

```js
draw_fin_plot_legend()
```

<div style="display: grid; grid-template-columns: 1fr; column-gap: 20px; row-gap: 5px;">
  <h5 style= "margin-bottom: 0;">Projekte von Unternehmen mit Forschenden</h5>
  ${draw_fin_plot("Förderung","Projekte von Unternehmen mit Forschenden",135,true)}
  <h5 style= "margin-bottom: 0;">Projekte von Unternehmen</h5>
  ${draw_fin_plot("Förderung","Projekte von Unternehmen", 25, false)}
  <h5 style= "margin-bottom: 0;">Projekte von Forschenden</h5>
  ${draw_fin_plot("Förderung","Projekte von Forschenden", 68, false)}
  <h5 style= "margin-bottom: 0;">Starthilfe für Projekte und Vernetzung</h5>
  ${draw_fin_plot("Starthilfe für Projekte und Vernetzung",undefined, 68,false)}
  <h5 style= "margin-bottom: 0;">Begleitung von Start-ups</h5>
  ${draw_fin_plot("Begleitung von Start-ups",undefined,96, false)}
</div>

<p class="comment">Quelle: Cockpit/PowerBI Innosuisse (2025)
<br>* Für die markierten Instrumente werden in der Folge die Ergebnisse aus dem Wirkungsmonitoring erläutert. Das Förderangebot «Swiss Accelerator» (2023-2024) wird nicht aufgeführt (Fördervolumen 2023: 111.8 Mio. Fr.). Es war eine zeitlich beschränkte Ersatzmassnahme in Reaktion auf die Nichtassoziation an Horizon Europe.</p>

Der Grossteil der Förderung von Innosuisse fliesst in die ${coloredUnderline("nationalen", "Förderung für Schweizer Innovationsprojekte")} und ${coloredUnderline("internationalen Innovationsprojekte", "Förderung für internationale Innovationsprojekte")}. Die höchste Bedeutung kommt hier den Standard-Innovationsprojekten zwischen Unternehmen¹ und Forschenden zu, in welchen die Forschungsinstitutionen primär für die Entlohnung des Forschungspersonals entgolten werden. Die beteiligten Unternehmen und Organisationen tragen Ihrerseits mindestens 50% an die gesamten Projektkosten bei.

Flankierend dazu werden Unternehmen mittels ${coloredUnderline("Innovation Booster","Starthilfe für Projekte und Vernetzung")}, ${coloredUnderline("Mentoring","Starthilfe für Projekte und Vernetzung")}, ${coloredUnderline("Enterprise Europe Network (Partnersuche)","Starthilfe für Projekte und Vernetzung")} und weiteren Veranstaltung in der Initiierung von Innovationsprojekten unterstützt. Start-ups können von ${coloredUnderline("Coaching-, Trainings- und Internationalisierungsangeboten","Begleitung von Start-ups")} profitieren. Hier werden die Ergebnisse des Wirkungsmonitoring der Innovation Booster und des Start-up Core Coaching präsentiert.

Bei den Innovationsprojekten von Forschenden ohne Umsetzungspartner können ebenfalls Ergebnisse präsentiert werden.

Die Aufnahme der internationalen Innovationsprojekte in das Wirkungsmonitoring ist für das Berichtsjahr 2025 vorgesehen.
Die Projekte, in welchen die Start-ups und KMUs direkt unterstützt werden (Start-up Innovationsprojekte und Swiss Accelerator) werden zu einem späteren Zeitpunkt in das Monitoring integriert, da die Projekte noch nicht abgeschlossen sind. Dies gilt in gleicher Form für die Projekte der Flagship Initiative.

<p class="comment">¹ In der Folge wird «Unternehmen» vielfach als Synonym für «Umsetzungspartner» verwendet. Das ist nicht ganz präzise, weil die Umsetzungspartner sowohl KMU, Grossunternehmen und Start-ups, wie auch Verwaltungen, Non-Profit-Organisationen und andere private oder öffentliche Institutionen umfassen können. Allerdings besteht die grosse Mehrheit der Umsetzungspartner aus Unternehmen (KMU, Grossunternehmen und Start-ups), darum erlauben wir uns diese Vereinfachung hier, um damit die Texte einfacher verständlich zu machen.<p>

### Themengebiete der Innovationsvorhaben 2021–2023
Die bewilligten Innovationsvorhaben lassen sich in fünf verschiedene Themengebiete gliedern, welche in der nachfolgenden Abbildung zusätzlich nach Förderangeboten dargestellt sind. Die Abbildung zeigt den prozentualen Anteil der Themengebiete an den bewilligten Innovationsvorhaben im Durchschnitt der Jahre 2021–2023. Die prozentualen Anteile nach Instrumenten unterscheiden sich zum Teil deutlich. 

- «Engineering» weist bei den ${coloredUnderline("Innovationsprojekten mit Umsetzungspartnern","Innovationsprojekte mit Umsetzungspartner")} (37 %), den ${coloredUnderline("Innovationsschecks","Innovationsscheck")} (32 %) und bei ${coloredUnderline("BRIDGE Proof of Concept","BRIDGE: Proof of Concept")} (31 %) höhere und vergleichbare Anteile auf. 
- «Life Sciences» hingegen zeigen einen sehr hohen Anteil bei den ${coloredUnderline("Innovationsprojekten ohne Umsetzungspartner","Innovationsprojekte ohne Umsetzungspartner")} (66 %) und einen überdurchschnittlichen Anteil bei den ${coloredUnderline("Start-ups im Coaching","Start-up Core Coaching")} (38 %). Bei ${coloredUnderline("BRIDGE Proof of Concept","BRIDGE: Proof of Concept")} ist es der wichtigste Themenbereich (34 %).
- Dem Bereich «Information and communication technologies ICT» kommt bei den ${coloredUnderline("Start-ups im Coaching","Start-up Core Coaching")} das grösste Gewicht zu (30 %). 
- Die Unterschiede bei «Energy & environment» sind geringer und bewegen sich zwischen 9 % bei den ${coloredUnderline("Innovationsprojekten ohne Umsetzungspartner","Innovationsprojekte ohne Umsetzungspartner")} und 17 % bei den ${coloredUnderline("Innovationsprojekten mit Umsetzungspartnern","Innovationsprojekte mit Umsetzungspartner")}. 
- «Social sciences & business management» sind bei den ${coloredUnderline("Innovationsschecks","Innovationsscheck")} (21 %) am stärksten vertreten, ansonsten sind die Anteile vergleichsweise geringer.

<div>${(n_subcluster())}</div>