---
title: Vergleichende Ergebnisse
style: ../styles.css
toc: false
---

```js
import { html } from "npm:htl";
import { coloredUnderline, draw_result, draw_innoart, draw_dn, draw_result_zf_legend, draw_inkr_radikal_diverging} from "../functions.js"
import { df_zufrieden } from "../data.js"
```

## Vergleichende Ergebnisse zu Förderangeboten

### Zufriedenheit mit den Förderangeboten von Innosuisse ist durchwegs hoch
Die Fördernehmer von Innosuisse sind mit der Innovationsförderung von Innosuisse und deren Umsetzung zufrieden bis sehr zufrieden. Die Anteile der hier dargestellten Instrumente liegen über 80 %, beim ${coloredUnderline("Start-up Core Coaching","Start-up Core Coaching")} sind es knapp zwei Drittel. Nur sehr geringe Anteile (≤ 3 %) sind mit den Instrumenten von Innosuisse unzufrieden.

<div style="display: grid; grid-template-columns: 1fr; column-gap: 20px; row-gap: 0px;">
  
  ${draw_result_zf_legend()}
  ${draw_result(df_zufrieden,"Innovationsprojekte mit Umsetzungspartner", false, 35)}
  ${draw_result(df_zufrieden,"Innovationsschecks", false)}
  ${draw_result(df_zufrieden,"Innovationsprojekte ohne Umsetzungspartner", false)}
    ${draw_result(df_zufrieden,"BRIDGE Discovery", false)}
  ${draw_result(df_zufrieden,"Innovation Booster", false)}
  ${draw_result(df_zufrieden,"Start-up Core Coaching")}
</div>

### Innosuisse fördert sowohl inkrementelle wie auch radikale Innovationen

<div>${draw_inkr_radikal_diverging()}</div>
<p class="comment">
Einschätzungen der Fördernehmer anhand einer sechsstufigen Bewertungsskala mit vorgegebenen Definitionen: (1) sehr inkrementelle, (2) inkrementelle Innovationen bzw. (5) radikale, (6) sehr radikale Innovationen.
</p> 
<!-- <div>${draw_innoart("inkr_radikal", 550, 250)}</div> -->

Bei den ${coloredUnderline("Innovationsprojekten mit Umsetzungspartnern","Förderung für Schweizer Innovationsprojekte")} und den ${coloredUnderline("Innovationsschecks","Innovationsscheck")} verfolgen rund ein Viertel der Innovationsvorhaben ****klar inkrementelle Innovationen****. Hier wird primär die Weiterentwicklung oder Optimierung von Bestehendem (Produkte, Dienstleistungen, Prozesse, Geschäftsmodelle etc.) verfolgt.

****Radikale Innovationen**** (25%) werden bei der ${coloredUnderline("Projektförderung","Förderung für Schweizer Innovationsprojekte")} in gleichem Ausmass gefördert wie inkrementelle Innovationen (24%). Radikale Innovationen streben im Gegensatz zu inkrementellen Innovationen grundlegende Neuerungen und Veränderungen durch revolutionäre oder radikale neue Ideen und Technologien an. Sie machen bei allen Instrumenten – mit Ausnahme der ${coloredUnderline("Innovationsschecks","Innovationsscheck")} – mindestens ein Viertel der ${coloredUnderline("Projekte","Förderung für Schweizer Innovationsprojekte")} und ${coloredUnderline("Innovationsideen","Starthilfe für Projekte und Vernetzung")} aus. Bei den ${coloredUnderline("Start-ups","Begleitung von Start-ups")} im Coaching und den ${coloredUnderline("Forschenden","Förderung für Schweizer Innovationsprojekte")} der Discovery-Projekte verfolgen rund die Hälfte den Anspruch mit ihren Geschäftsmodellen radikale Innovationen einzuführen, nur eine Minderheit (9%) oder gar keine verfolgen klar inkrementelle Innovationen.

### Innovationen können die Märkte stark beeinflussen 

<div>${draw_innoart("disruptiv", 380, 180)}</div>
<p class="comment">
Einschätzungen der Fördernehmer anhand einer sechsstufigen Bewertungsskala mit vorgegebenen Definitionen: (5) disruptive Innovationen, (6) stark disruptive Innovationen.
</p> 

Davon zu unterscheiden sind ****disruptive Innovationen****. Hier stehen nicht der technologische Neuheitsgrad, sondern umwälzende Wirkungen auf den Märkten im Vordergrund.  Sie sind dann disruptiv, wenn sie vollständig neue Märkte mit neuen Spielregeln und Zielgruppen schaffen oder bestehende Märkte in starkem Masse beeinflussen, beispielsweise durch Neuheiten, die im internationalen oder globalen Massstab neu sind für die Märkte. Sowohl radikale als auch inkrementelle Innovationen können disruptiv sein. 

Bei den ${coloredUnderline("Innovationsprojekten mit Umsetzungspartnern","Förderung für Schweizer Innovationsprojekte")} und ${coloredUnderline("Innovationsschecks","Innovationsscheck")} haben rund ein Drittel der Unternehmen das Potenzial, den Markt disruptiv umzugestalten. Bei den ${coloredUnderline("Start-ups im Core Coaching","Begleitung von Start-ups")} verfolgen sogar rund zwei Drittel der Start-ups disruptive Innovationen mit dem Geschäftsmodell des gegründeten Unternehmens.

### Innosuisse fördert Innovationsvielfalt
Die folgende Abbildung verdeutlicht zusätzlich die Vielfalt der unterstützten Innovationsformen. Oft werden auch mehrere Innovationen gleichzeitig verfolgt, beispielsweise wenn eine Produktinnovation mit einer Geschäftsmodell- oder Prozessinnovation kombiniert wird.

Produktinnovationen sind mit Abstand die wichtigste Kategorie. Die Anteile bei Prozessinnovationen liegen zwischen 24 % und 37 %. Geschäftsmodellinnovationen sind im Vergleich mit anderen Instrumenten bei den ${coloredUnderline("Start-ups","Begleitung von Start-ups")} am bedeutendsten (17 %). Diese werden oft mit Aspekten der digitalen Transformation verbunden. Innosuisse fördert auch soziale Innovationen. Deren Anteile sind (noch) vergleichsweise tief. 

Die Innovationsvielfalt ist auch Ausdruck dessen, dass Innosuisse die wissenschaftsbasierte Innovation bottom-up und thematisch offen fördert. 

<div>
${draw_innoart("type_1", 640, 180)}
${draw_innoart("type_2",475, 180)}
</div>

### Digitale Transformation ist ein Kernaspekt bei der Innovationsförderung

Die Digitalisierung zielt sowohl auf wichtige digitale Zukunftstechnologien (Blockchain, Robotik, Quantum Computing, Künstliche Intelligenz, etc.) als auch auf die Entwicklung digitaler Geschäftsmodelle (Software, Plattform, Infrastructure as a Service, Big Data, etc.). Beide sind für die Schweizer Wirtschaft von hoher Relevanz. Die wirtschaftlichen Chancen und der Innovationswettbewerb sind in diesem Bereich ausserordentlich hoch.

Rund 55 % der von Innosuisse geförderten ${coloredUnderline("Innovationsprojekten","Förderung für Schweizer Innovationsprojekte")} tragen wesentlich zur digitalen Transformation der Wirtschaft bei, durch digitale Technologien und/oder digitalen Geschäftsmodellen. Die Anwendung von neuen digitalen Technologien ist wichtiger, als die Umsetzung eines digitalen Geschäftsmodells. Bei den ${coloredUnderline("gecoachten Start-ups","Begleitung von Start-ups")} ist die Bedeutung der Digitalisierung nochmals signifikant höher.
<div style="display: grid; grid-template-columns: 1fr; column-gap: 20px; row-gap: 0px; width: 800px">
  ${draw_dn("digital", "Innovationsprojekte mit UP", true, 20)}
  ${draw_dn("digital", "Innovationsschecks", false, -8)}
  ${draw_dn("digital", "Innovationsprojekte ohne UP", false, -8)}
    ${draw_dn("digital", "BRIDGE Discovery", false, -8)}
  ${draw_dn("digital", "Start-up Core Coaching", false, -8)}
</div>
<p class="comment">Gestellte Frage: Beruht das von Innosuisse geförderte Projekt auf neuen digitalen Technologien oder auf neuen digitalen Geschäftsmodellen? Einschätzungen der Fördernehmer anhand einer sechsstufigen Bewertungsskala mit vorgegebenen Definitionen: (5) stark, (6) sehr stark.</p>

### Innovation hat eine Schlüsselrolle bei der Entwicklung nachhaltiger Lösungen
Die Förderinstrumente ermöglichen es Unternehmen und Organisationen, frühzeitig innovative Ansätze und Technologien zur Entwicklung nachhaltiger Lösungen zu prüfen und bis zur Umsetzung zu entwickeln, sei es auf nationaler oder auf globaler Ebene. Innosuisse leistet somit zentrale und zukunftsgerichtete Beiträge zur Bewältigung globaler Herausforderungen wie der Energie- und Ressourceneffizienz, dem Klimawandel oder bei sozialen Fragen. Die Innovationsförderung ist mit eine Impulsgeberin bei der Transformation hin zu einer nachhaltigen Wirtschaft und Gesellschaft.

Rund 60 % der geförderten ${coloredUnderline("Innovationsprojekte","Förderung für Schweizer Innovationsprojekte")} zeigen bei einer konkreten Umsetzung das Potenzial einen Beitrag zur nachhaltigen Entwicklung zu leisten, entweder zur ökologischen oder sozialen nachhaltigen Entwicklung oder bei beiden Themenbereichen. Bei den ${coloredUnderline("Start-ups im Coaching","Begleitung von Start-ups")} sind die Anteile mit 67 % leicht höher. 

<div style="display: grid; grid-template-columns: 1fr; column-gap: 20px; row-gap: 0px; width: 800px">
  ${draw_dn("nachhaltig", "Innovationsprojekte mit UP", true, 20)}
  ${draw_dn("nachhaltig", "Innovationsschecks", false, -8)}
  ${draw_dn("nachhaltig", "Innovationsprojekte ohne UP", false, -8)}
    ${draw_dn("nachhaltig", "BRIDGE Discovery", false, -8)}
  ${draw_dn("nachhaltig", "Start-up Core Coaching", false, -8)}
</div>

<p class="comment">Gestellte Frage: Kann das von Innosuisse geförderte Projekt oder die Projektidee einen Beitrag zur ökologischen und/oder sozialen Nachhaltigkeit leisten? Einschätzungen der Fördernehmer anhand einer sechsstufigen Bewertungsskala mit vorgegebenen Definitionen: (4) eher hoher Beitrag, (5) hoher Beitrag, (6) sehr hoher Beitrag.</p>