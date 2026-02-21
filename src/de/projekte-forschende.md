---
title: Projekte von Forschenden
style: ../styles-ch-projekte.css
toc: false
---

```js
import { html } from "npm:htl";
import { coloredUnderline, drawMiniPlot, draw_waffle, draw_results} from "../functions.js"
```

# Projekte von Forschenden

## Innovationsprojekte ohne Umsetzungspartner
<div style="display: flex;">
  <div>${drawMiniPlot("Innovationsprojekte ohne Umsetzungspartner")}</div>
  <div>${drawMiniPlot("Innovationsprojekte ohne Umsetzungspartner", false)}</div>
</div>

Innovationsprojekte ohne Umsetzungspartner zielen darauf ab, wissenschaftliche Erkenntnisse in praxisorientierte Lösungen zu überführen. Sie ermöglichen es den Forschenden, risikoreiche Projekte mit hohem Innovationspotenzial in Richtung Anwendung zu entwickeln und erste Schritte in die Umsetzung zu unternehmen. Voraussetzung für die Förderung ist ein klarer potenzieller Nutzen für die Wirtschaft oder Gesellschaft sowie die Umsetzungspotenziale für eine spätere Anwendung. 

Innovationsprojekte ohne Umsetzungspartner fördern damit anwendungsorientierte Forschungs- und Innovationsvorhaben und zielen längerfristig auf eine wirtschaftliche Umsetzung.

### Erfolgreiche Schritte in Richtung Umsetzung gemacht
Zwei Drittel der Innovationsprojekte haben die Machbarkeit erfolgreich geprüft. Jedes zweite geförderte Projekt wird mit hoher Wahrscheinlichkeit die Innovation auf dem Markt eingeführen und 4 von 10 liefern schlüssige Ergebnisse für weitere Umsetzungsschritte.

<div>${draw_results("Innovationsprojekte ohne UP", false, 450)}</div>

### Wissenschaftlicher Output ist höher als bei Projekten mit Umsetzungspartnern
Publizierte wissenschaftliche Ergebnisse sind wichtige Formen des Wissens- und Technologietransfers (WTT). Sie dienen der Weiterverbreitung der Projektergebnisse in Forschung und Anwendung und stärken den WTT. Die Dissertationen sind ein Hinweis auf die Neuartigkeit und Qualität der Forschung und damit verbundenen Risiko der (technologischen) Lösungsfindung für die Umsetzung. 

Gegenüber den Innovationsprojekten mit Umsetzungspartner ist – wie zu erwarten – der Anteil der wissenschaftlichen Ergebnisse in Fachzeitschriften und der Anteil der Dissertationen signifikant höher. Der Anteil der interdisziplinären Projekte ist ähnlich hoch, der Anteil der Projekte, die transdisziplinär sind, leicht tiefer, da weniger Akteure involviert sind.
  <div style="display: flex; gap: 15px;">
${draw_waffle("ipr_peer_review",-100)}
${draw_waffle("ipr_inter_trans",-100)}
</div>

### Innovationsprojekte ohne Umsetzungspartner sind forschungs- und umsetzungsorientiert
In fast zwei Dritteln der Projekte wurde bereits mit potenziellen Umsetzungspartnern zusammengearbeitet. Neben dem Wissens- und Technologietransfer zu etablierten Unternehmen spielen Start-ups und Spin-offs, die aus der Forschung hervorgehen, eine wichtige Rolle im WTT. In 39 % der Projekte wurde eine solche Ausgründung bereits realisiert oder ist geplant.
<div>${draw_waffle("ipr_imppartner", -85)}</div>

### Zielerreichung bei der Forschung ist hoch, bei anwendungs- und umsetzungsorientierten Zielen tiefer
Die Forschungsziele werden bei der überwiegenden Mehrheit der geförderten Projekte vollständig erreicht oder gar übertroffen. Die Zielerreichung bei der Anwendungsorientierung liegt deutlich tiefer. Dies kann ein Hinweis auf hohe Risiken für die Markteinführung sein, oder möglicherweise wird noch mehr Zeit und Ressourcen benötigt für die Lösungsentwicklung, oder die Projektträger sind weniger erfahren, eine technologische Entwicklung oder eine Lösung weiter in die Marktumsetzung zu führen.
<div style="display: flex; gap: 15px;">
${draw_waffle("ipr_research_goals",-100)}
${draw_waffle("ipr_impl_goals",-100)}
</div>

## BRIDGE Discovery
<div style="display: flex;">
  <div>${drawMiniPlot("BRIDGE: Discovery")}</div>
  <div>${drawMiniPlot("BRIDGE: Discovery", false)}</div>
</div>

BRIDGE Discovery zielt darauf ab, das Innovationspotenzial von Forschungsresultaten zu identifizieren, zu erforschen und in Anwendungen zu überführen. Das Instrument ermöglicht es erfahrenen Forschenden, wissenschaftlich exzellente Projekte mit klarer Vision einer zukünftigen Anwendung umzusetzen und die wissenschaftlichen Grundlagen für innovative Produkte, Dienstleistungen oder gesellschaftliche Lösungen zu entwickeln. Voraussetzung für die Förderung ist eine überzeugende Umsetzungsstrategie sowie ein hohes wirtschaftliches oder gesellschaftliches Potenzial.

BRIDGE Discovery fördert damit Projekte an der Schnittstelle zwischen Grundlagenforschung und angewandter Forschung und zielt längerfristig auf eine Realisierung der Innovation in Wirtschaft oder Gesellschaft.

### Ergebnisse für die Umsetzung erzielt
Im Unterschied zu den [Innovationsprojekten ohne Umsetzungspartner](#innovationsprojekte-ohne-umsetzungspartner) werden bei einer Mehrheit der Discovery-Projekte schlüssige Ergebnisse für die Umsetzung erzielt, aber nur bei einem Fünftel der Projekte wurde bereits die Machbarkeit geprüft. Bei beiden Projektarten geht rund die Hälfte der Forschenden davon aus, dass die Innovation auf dem Markt umgesetzt wird.
<div>${draw_results("BRIDGE Discovery", false, 450)}</div>

### Sehr hoher wissenschaftlicher Output
Nur in den wenigsten Fällen wird bei BRIDGE Discovery nicht auch exzellente Forschung betrieben und publiziert. Der Anteil ist bei den Discovery-Projekte noch einmal deutlich höher als bei den Innovationsprojekten ohne Umsetzungspartnern. Der Anteil der interdisziplinären Projekte ist ähnlich hoch, wie bei den Innovationsprojekten.
  <div style="display: flex; gap: 15px;">
${draw_waffle("bd_peer_review",-100)}
${draw_waffle("bd_inter_trans",-100)}
</div>

### BRIDGE Discovery Projekte sind praxisorientiert
Die Daten zeigen unterschiedliche Strategien: BRIDGE Discovery-Projekte setzen primär auf die Zusammenarbeit mit Umsetzungspartnern (76 %) statt auf Spin-offs (20 %). Bei Innovationsprojekten ohne Partner ist das Verhältnis ausgewogener (63 % Kooperation vs. 39 % Spin-off).
<div>${draw_waffle("bd_imppartner", -85)}</div>

### Die Zielerreichung ist hoch
Anders als Innovationsprojekte ohne Umsetzungspartner erreichen die meisten Discovery-Projekte nicht nur ihre forschungs-, sondern auch anwendungsorientierten Ziele vollständig oder übertreffen diese.
<div style="display: flex; gap: 15px;">
${draw_waffle("bd_research_goals",-100)}
${draw_waffle("bd_impl_goals",-100)}
</div>

## BRIDGE Proof of Concept
<div style="display: flex;">
  <div>${drawMiniPlot("BRIDGE: Proof of Concept")}</div>
  <div>${drawMiniPlot("BRIDGE: Proof of Concept", false)}</div>
  </div>
  
BRIDGE ist das gemeinsame Förderprogramm von Innosuisse und dem Schweizerischen Nationalfonds (SNF) und verbindet Grundlagenforschung und anwendungsorientierte Forschung mit der Umsetzung. Das Förderangebot BRIDGE Proof of Concept richtet sich an Nachwuchsforschende, die an der Schnittstelle von Grundlagenforschung und wissenschaftsbasierter Innovation arbeiten. Das Programm bietet ein Jahr lang Unterstützung, um Forschungsergebnisse anwendungsorientiert weiterzuentwickeln, mit dem Ziel, diese zur Marktreife zu führen und die Forschenden auf eine Karriere ausserhalb der Akademie vorzubereiten.

### BRIDGE Proof of Concept führt zu Start-ups und Spin-offs
BRIDGE Proof of Concept zeigt seine Wirkung am Anteil der Unterstützungen, die zu einer Ausgründung führen. Mehr als zwei von drei unterstützten Forschenden gründen in der Folge ein Start-up oder ein Spin-off (Start-up mit formeller IP-Lizenzierung). Das ist beinahe doppelt so hoch wie bei den Innovationsprojekten ohne Umsetzungspartner. Allerdings ist zu beachten, dass die Erhebung unterschiedlich ist. Bei den Innovationsprojekten ohne Umsetzungspartner findet die Befragung bei Projektabschluss, bei BRIDGE Proof of Concept wurde eine eigene Erhebung gemacht, welche einen sehr aktuellen Stand hat (2024) und somit einen längeren Zeitraum abdeckt.

${draw_waffle("br_spinoffs", -100)}