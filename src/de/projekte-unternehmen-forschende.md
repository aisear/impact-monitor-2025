---
title: Projekte von Forschenden mit Unternehmen
style: ../styles-ch-projekte.css
toc: false
---

```js
import { html } from "npm:htl";
import { coloredUnderline, drawMiniPlot, draw_waffle, draw_results, leverage, kof_did_plot} from "../functions.js"
import { df_waffle, df_ergebnisse } from "../data.js"
```

# Projekte von Unternehmen mit Forschenden

## Innovationsprojekte mit Umsetzungspartner
<div style="display: flex;">
  <div>${drawMiniPlot("Innovationsprojekte mit Umsetzungspartner")}</div>
  <div>${drawMiniPlot("Innovationsprojekte mit Umsetzungspartner", false)}</div>
</div>

Die nationalen Standard-Innovationsprojekte sind das wichtigste Förderinstrument von Innosuisse. Unternehmen und Organisationen aus Wirtschaft und Gesellschaft kooperieren mit Forschungspartnern, um gemeinsam innovative Produkte, Dienstleistungen oder Prozesse zu entwickeln und auf den Markt zu führen, zum Nutzen von Wirtschaft und Gesellschaft. 

Die Projekte basieren auf Ergebnissen von Forschung und Entwicklung in allen wissenschaftsbasierten Disziplinen und weisen einen hohen Innovationsgrad auf. Die innovativen Ideen stammen mehrheitlich aus der Wirtschaft und Gesellschaft. Die erzielten Forschungsergebnisse werden in die Praxis überführt, stärken die Wettbewerbsposition der Unternehmen, schaffen Wertschöpfung und Arbeitsplätze und unterstützen damit die Innovationsfähigkeit der Unternehmen und der Volkswirtschaft. 

Der Wissens- und Technologietransfer zwischen der Forschung sowie der Wirtschaft und Gesellschaft wird damit in beiden Richtungen gestärkt.

### Mehrheit der geförderten Innovationsprojekte wird auf dem Markt oder im Unternehmen eingeführt

Bei Projektabschluss sind 45 % der geförderten Projekte auf dem Markt oder in der Organisation umgesetzt oder es ist geplant diese innerhalb eines Jahres umzusetzen. Rund ein Drittel der Projekte verfolgen Prozessinnovationen, die vergleichsweise schneller und in der Organisation umgesetzt werden.

Drei Jahre nach Abschluss der Förderung sind über die Hälfte der geförderten Innovationen (57 %) eingeführt oder es ist geplant diese in den nächsten zwei Jahren einzuführen.

Ein Teil der Projekte benötigt einen längeren Zeitraum für die Markteinführung oder das Innovationsprojekt wird in Folgeprojekten weitergeführt. 17 % der risikoreichen Förderprojekte sind drei Jahre nach Abschluss abgebrochen worden, mit anderen Worten sie werden nicht umgesetzt und auch nicht weitergeführt.

<div>${draw_waffle("ip_time_to_market", -117)}</div>

### Förderung erzielt bei über 60 % der KMU messbare und massgebliche wirtschaftliche Effekte
Ausgewählte Kennzahlen belegen die Wirksamkeit hinsichtlich ökonomischer Effekte, welche ohne das geförderte Projekt nicht entstanden wären. Rund ein Drittel der KMU berichtet über ein Wachstum der Beschäftigung und schafft damit neue hochqualifizierte Arbeitsstellen. 3 von 10 Unternehmen stellen eine Umsatzsteigerung fest. Über ein Viertel der Unternehmen hat mehr in Forschung und Entwicklung (F&E) investiert, sei es in Beschäftigte im F&E-Bereich oder höhere F&E-Ausgaben getätigt. Uber Kosteneinsparungen berichten 12 % der Unternehmen.

<div>${draw_results("Innovationsprojekte mit UP", false)}</div>

### Grosse Hebelwirkung eines Förderfrankens
Ein Innovationsprojekt führt im Durchschnitt der Berichtsjahre 2021–23 zu knapp 2.5 zusätzlichen Vollzeitstellen. Hochgerechnet auf die in diesem Zeitraum durchschnittlich 350 abgeschlossenen Projekte, werden somit bei den Unternehmen in der Schweiz zwischen 800 und 900 neue Vollzeitstellen geschaffen.

<div style="font-size: 20px; font-weight: 700; max-width: 500px; padding-top: 10px; padding-bottom: 20px; text-align: center">+ 800 – 900 Vollzeitstellen pro Jahr</div>

Die zusätzlich geschaffenen Arbeitsstellen führen direkt zu Wertschöpfung bei den Unternehmen. Die Hebelwirkung der Förderung ist beachtlich: Jeder Förderfranken bringt der Wirtschaft rund vier Wertschöpfungsfranken, gemessen drei Jahre nach der Förderung und summiert für drei weitere Jahre. Weitere indirekte Multiplikatoreffekte bei den Unternehmen, zum Beispiel über zusätzliche Ausgaben für Vorleistungen der Unternehmen, sind hier nicht eingerechnet. Mit den indirekten Effekten wird der Multiplikator auf rund 11 Franken geschätzt. Zudem verdeutlichen die in diesem Bericht präsentierten Ergebnisse, dass die Auswirkungen der Innovationsförderung weit über die unmittelbaren wirtschaftlichen Effekte hinausgehen <a href="/_file/data/methodik-volkswirtschaft-innosuisse-ebp.pdf" target="_blank">(EBP, 2025)</a>.

<div>${leverage()}</div>

<div class="card" style="max-width: 640px">
<h4>Wissenschaftliche Studie belegt direkte Wirkung von Innovationsförderung auf Umsatz und Beschäftigung</h4>

Ergebnisse der Konjunkturforschungsstelle (KOF) der ETH Zürich zeigen, dass die Förderung von Innovationsprojekten den **Umsatz** der beteiligten Unternehmen in den darauffolgenden fünf Jahren um durchschnittlich **21 %** steigert. Der Vergleich bezieht sich auf Schweizer Unternehmen, die keine Förderung von Innosuisse erhalten oder beantragt haben, aber ansonsten ähnliche Merkmale aufweisen, wie zum Beispiel Ausgaben für Forschung und Entwicklung, Bildungsstand der Belegschaft oder Wettbewerbsumfeld. 

Die Studie weist auch die Auswirkungen auf die **Beschäftigung** nach. Im Vergleich zu Unternehmen ohne Förderung haben Firmen mit Innovationsprojekten innerhalb von fünf Jahren durchschnittlich **18 %** mehr Stellen geschaffen. 
Die positiven Auswirkungen sowohl auf Umsatz als auch auf Beschäftigung verstärken sich im Laufe der Zeit.

Mit dieser Studie hat die KOF einen wissenschaftlichen Nachweis des Zusammenhangs zwischen Innovationsförderung in der Schweiz und ihrer Wirkung erbracht. Dabei wählten die Forschenden der KOF einen in der internationalen Forschungsgemeinschaft anerkannten methodischen Ansatz mit möglichst geringen Verzerrungen. Der sogenannte «Differenz-von-Differenzen-Ansatz» vergleicht Unternehmen, die Förderung von Innosuisse erhalten, mit ähnlichen Unternehmen ohne Förderung. 

Die Ergebnisse bestätigen die im Wirkungsmonitoring dargestellten ökonomischen Wirkungen der Projektförderung von Innosuisse.

<div style="font-size: 12px;">
Quelle: 
<ul>
    <li>
        <a href="https://www.innosuisse.admin.ch/de/publication?id=veYrGjAgZwmP" target="_blank">
            Zusammenfassung der Ergebnisse (Präsentation auf Englisch)
        </a>
    </li>
    <li>
        <a href="https://backend.innosuisse.admin.ch/proxy/api/media-library/ObC24vgQ0CMW/download?key=2024/12/09/e8c11134-2e13-4758-a968-1143b9d9e56f.pdf&type=mediaFile&mimeType=application%2Fpdf&filename=2024_KOF%20Study_Funding%20R%26D%20Cooperation_Executive%20Su" target="_blank">
            Executive Summary des Artikels (auf Englisch)
        </a>
    </li>
    <li>
        <a href="https://www.research-collection.ethz.ch/handle/20.500.11850/708831" target="_blank">
            Wissenschaftlicher Artikel (auf Englisch): Hulfeld F., Spescha, A., Wörter, M. (2024): Funding R&D Cooperation Between Firms and Universities – The Effectiveness of the Innosuisse Model. KOF Working Paper
        </a>
    </li>
</ul>
</div>

<div class="card" style="background-color: white">${kof_did_plot(0)}</div>
<div class="card" style="background-color: white">${kof_did_plot(1)}</div>
</div>

### Innosuisse unterstützt Weltmarktneuheiten und disruptive Innovationen
33 % der geförderten Innovationsprojekte zielen darauf ab, Neuheiten für den internationalen und globalen Markt zu entwickeln. Schweizer Unternehmen werden damit unterstützt international wettbewerbsfähig zu werden oder zu bleiben. Zusätzlich haben rund 32 % der geförderten Projekte das Potenzial mit disruptiven Innovationen die Märkte stark zu beeinflussen oder neu zu definieren.
  <div style="display: flex; gap: 40px;">
  ${draw_waffle("ip_new_to_market", -70)}
  ${draw_waffle("ip_disruptive", -70)}
  </div>

### Unternehmen erreichen die Projektziele mehrheitlich oder übertreffen diese
Die Mehrheit der beteiligten Projektpartner haben ihre Ziele vollständig erreicht oder sogar übertroffen. Nur ein kleiner Teil der geförderten Projekte hat die gesteckten Ziele nicht vollständig oder nicht erreicht. Innovationsvorhaben sind mit erheblichen technologischen Risiken und Unwägbarkeiten bei der Markumsetzung verbunden. Diese hohen Risikopotenziale unterstreichen die Notwendigkeit der öffentlichen Förderung, um den Wissens- und Technologietransfer zu unterstützen, da die Innovationsprojekte ohne Förderung nicht durchgeführt würden. 

Dies belegen die tiefen Mitnahmeeffekte bei der Förderung: Nur 4 % der Unternehmen geben an, dass sie das Projekt auch ohne die Unterstützung von Innosuisse in derselben Form durchgeführt hätten. 16 % hätten es in veränderter oder reduzierter Form durchgeführt.
  <div style="display: flex; gap: 15px;">
  <div>${draw_waffle("ip_project_goals",-85)}</div>
  <div>${draw_waffle("ip_mitnahme",-85,10)}</div>
  </div>


### Innosuisse-Förderung stärkt den Wissens- und Technologietransfer (WTT) auch langfristig
Der WTT und die Zusammenarbeit zwischen den Unternehmen und der Forschung wird durch die Innovationsprojekte gefördert und gestärkt. 7 von 10 Unternehmen geben an, dass die Projektförderung ihre Forschung und Entwicklung beschleunigt und gestärkt hat. Die Zusammenarbeit und der WTT mit der Forschung ist langfristig beständig: Fast die Hälfte der Unternehmen arbeitet drei Jahre nach Projektabschluss immer noch mit den Forschungspartnern zusammen. 13 % übernehmen sogar Forschungspersonal, das am Projekt beteiligt war und stärken somit ihre interne Wissens- und Innovationsbasis langfristig.

  <div style="display: flex; gap: 15px;">
    ${draw_waffle("ip_wtt",-115)}
    ${draw_waffle("ip_researchpartner",-115)}
</div>

### Projektergebnisse sind wissenschaftlich verankert
Der wissenschaftliche Output, der durch die Projekte entsteht, ist bemerkenswert. Aus über der Hälfte der Projekte entstehen Ko-Publikationen zwischen Umsetzungs- und Forschungspartnern. International belegt die Schweiz in dieser – für die Innovationsindizes wichtigen – Metrik den Spitzenplatz ([European Commission, 2025](https://projects.research-and-innovation.ec.europa.eu/en/statistics/performance-indicators/european-innovation-scoreboard/eis#/eis/indicators/3.2?country_scope=all&highlight=CH) & [WIPO, 2025](https://www.wipo.int/gii-ranking/en/switzerland/section/economy-profile)). Die Innovationsprojekte leisten dazu einen Beitrag. Die starke internationale Positionierung beim Wissens- und Technologietransfer zeigt auch die Ergebnisse einer Studie des SBFI ([SBFI, 2023](https://www.sbfi.admin.ch/sbfi/de/home/dienstleistungen/publikationen/publikationsdatenbank/wtt-endbericht-2023.html)).

62 % der Forschungspartner publizieren ihre wissenschaftlichen Ergebnisse in einer Fachzeitschrift mit Peer-Review. In 21 % der geförderten Projekte werden Dissertationen geschrieben, zusätzlich zur Vielzahl an Bachelor- und Masterarbeiten. Diese Zahlen belegen die starke wissenschaftliche Verankerung der Innovationsprojekte und zeigen auch die Bedeutung der Projekte für die Forschungsseite und den Beitrag zur wissenschaftlichen Nachwuchsförderung. Die wissenschaftliche Qualität ist sehr hoch und die Weiterverbreitung der Projektergebnisse wird dadurch sichergestellt.
<div>${draw_waffle("ip_peer_pub", -100)}</div>

### Innosuisse-Förderung ermöglicht risikoreiche und interdisziplinäre Projekte
Mit der Innosuisse-Förderung werden mehrheitlich komplexere und risikoreichere und auch interdisziplinäre Projekte unterstützt. Interdisziplinäre Projekte integrieren Wissen, Methoden und Technologien aus verschiedenen Fachrichtungen um gemeinsam neuartige Lösungen für komplexe Probleme zu entwickeln. Transdisziplinäre Projekte beziehen zusätzlich nicht-akademische Akteure aus Gesellschaft, Politik, Wirtschaft und Praxis aktiv in den Forschungsprozess ein, um gemeinsam gesellschaftlich relevante Probleme zu lösen und praxistaugliches Wissen zu generieren. Einen Hinweis auf den Risikograd der Innovationsprojekte zeigt sich im Anteil von 24 % an radikalen Innovationsprojekten. 
<div style="display: flex; gap: 10px;">
<div>${draw_waffle("ip_inter_trans", -70)}</div>
<div>${draw_waffle("ip_radikal_inkr", -70)}</div>
</div>

### Unternehmen geben mehrheitlich die Impulse für die Innovationsprojekte und setzen die Forschungsergebnisse in Wertschöpfung um

Der Wissens- und Technologietransfer zwischen Umsetzungspartner und Forschungspartner ist wechselseitig. Die Unternehmen entwickeln risikoreiche Innovationsideen für die Forschung und Entwicklung und erhalten konkrete Ergebnisse aus der Forschung für ihre Umsetzung und die Inwertsetzung auf den Märkten (vgl. [Abschnitt zu den ökonomischen Effekten](https://observablehq.com/@ecosystem-monitor/wirkungsmonitoring#cell-808)).
<div>${draw_waffle("ip_impuls",-115)}</div>

### Innosuisse-Projekte sind für Forschungs- und Umsetzungspartner erfolgreich

Risikoreiche Projekte müssen auch scheitern können, sei es wegen technologischen Risken oder Risiken bei der Umsetzung der Projektidee auf dem Markt. Vor diesem Hintergrund ist die etwas tiefere Erfolgsquote bei den Umsetzungspartnern nicht beunruhigend. Für die wissenschaftlich hohe Qualität der Projekte spricht, dass fast drei Viertel der Forschungspartner die Projekte als Erfolg einschätzen.

Der Unterschied zwischen den Erfolgsquoten ist nachvollziehbar: Für die Forschungspartner steht die wissenschaftliche Qualität und auch der Transfer des Forschungswissens für Wirtschaft und Gesellschaft im Vordergrund, für die Unternehmen ist zudem die Anwendung in der wirtschaftlichen Praxis und die Wertschöpfung auf den Märkten essenziell. Hier kann die Innosuisse-Förderung mit den erzielten Ergebnissen der Projektförderung nur wichtige Voraussetzungen dazu schaffen.

<div>${draw_waffle("ip_success", -85)}</div>

## Innovationsscheck

<div style="display: flex;">
  <div>${drawMiniPlot("Innovationsscheck")}</div>
  <div>${drawMiniPlot("Innovationsscheck", false)}</div>
</div>

Der Innovationsscheck bietet KMU und Start-ups eine niederschwellige Förderung, um erste Schritte in der Zusammenarbeit mit Forschungspartnern zu ermöglichen. Ziel ist es, Machbarkeits- und Marktstudien sowie technologische Abklärungen durchzuführen, die als Grundlage für mögliche spätere Innovationsprojekte dienen können. Die Förderung richtet sich auch an Unternehmen ohne oder mit wenig Forschungserfahrung, um Innovationsideen frühzeitig zu validieren. Voraussetzung ist, dass ein Forschungspartner eingebunden wird und das Vorhaben einen klaren Innovationsgehalt aufweist.

### Zusammenarbeit mit Forschungspartnern wird geprüft und Innovationsideen weiterentwickelt
Die beteiligten Unternehmen beabsichtigen mit dem Innovationsscheck, bereits konkrete und nutzbare Ergebnisse zu erzielen, ihre Innovationsidee zu testen und weiterzuentwickeln sowie die Zusammenarbeit mit einem Forschungspartner zu prüfen. Mehr als zwei Drittel (69 %) der Innovationsschecks zielen darauf ab, ein Innovationsprojekt bei Innosuisse vorzubereiten.

Die Zusammenarbeit wird in nahezu allen Fällen erfolgreich geprüft. 61 % der Unternehmen haben ihre Innovationsidee erfolgreich getestet und weiterentwickelt. Bei rund 42 % der Schecks werden konkrete und direkt nutzbare Ergebnisse erzielt. Die Hälfte der Innovationsschecks führt dazu, dass ein Innovationsprojekt bei Innosuisse erfolgreich vorbereitet wird.

<div>${draw_results("Innovationsscheck", true, 350)}</div>

### Projektideen werden weiterverfolgt
Die Innovationsideen sind relevant für die KMU, darum werden sie auch nach der Förderung weiterverfolgt. Mehr als ein Viertel der Unternehmen startet nach Abschluss des Innovationsschecks ein Innosuisse-Innovationsprojekt oder plant dies zu tun. 

<div>${draw_waffle("is_ideas",-50,10)}</div>

### Neue und beständige Partnerschaften mit der Forschung
Der Innovationscheck ist ein wichtiger Initialzünder für den Wissens- und Technologietransfer und die Zusammenarbeit mit der Forschung. Über die Hälfte der beteiligten Unternehmen kann neu an den Wissens- und Technologietransfer mit der Forschung herangeführt werden. Zusätzlich sind 71&nbsp;% der KMU zufrieden oder sehr zufrieden mit den Leistungen der Forschungspartner.

Die Innovationsschecks stiften somit wichtige Nutzen für die Unternehmen über den Projektabschluss hinaus. Die grosse Mehrheit der KMU arbeiten auch nach dem Abschluss noch mit ihrem Forschungspartner zusammen. Damit wird die Innovationskultur im Unternehmen langfristig gestärkt und der Wissens- und Technologietransfer verstetigt.
 
<div style="display: flex; gap: 40px;">
${draw_waffle("is_connection", -85)}
${draw_waffle("is_wtt", -85)} 
</div>

### Zielerreichung ist hoch und es werden Innovationsideen umgesetzt, die sonst nicht angegangen worden wären
Zwei Drittel der KMU erreichen die gesetzten Ziele mit den Innovationsschecks vollständig oder übertreffen sie. Diese niederschwellige und unkomplizierte Förderung unterstützt damit die Prüfung der Machbarkeit der Innovationsideen und stärkt die weitere Umsetzung von inkrementellen und radikalen Innovationsideen.

Die geringen Mitnahmeeffekte zeigen, dass mit den Innovationsschecks Ideen geprüft werden können, die ansonsten im Tagesgeschäft keinen Platz gehabt hätten. Nur 6 % der KMU geben an, dass sie die Innovationsidee auch ohne Förderung in einer ähnlichen Form geprüft hätten. 22 % hätten sie in leicht veränderter Form geprüft.
    <div style="display: flex; gap: 15px;">
${draw_waffle("is_project_goals", -85)}
${draw_waffle("is_mitnahme", -85, 5)}
</div>