---
title: Starthilfe für Projekte und Vernetzung
style: ../styles-ch-starthilfe.css
toc: false
---

```js
import { html } from "npm:htl";
import { coloredUnderline, drawMiniPlot, draw_waffle, draw_results, ib_toipis} from "../functions.js"
```

# Starthilfe für Projekte und Vernetzung
## Innovation Booster
<div style="display: flex;">
  <div>${drawMiniPlot("Innovation Booster")}</div>
  <div>${drawMiniPlot("Innovation Booster", false)}</div>
  </div>
  <p class = "comment">Im Unterschied zu den anderen Mini-Graphiken, werden hier nicht die bewilligten, sondern die investierten Beträge bzw. die aktiven Innovation Booster dargestellt.</p>

Die von Innosuisse geförderten Innovation Booster fokussieren jeweils auf ein bestimmtes Innovationsthema. Sie sind thematisch breit aufgestellt, von der künstlichen Intelligenz über Tourismus bis hin zu Foodtech.

2023 unterstützte Innosuisse 17 aktive Innovation Booster in verschiedenen Themenbereichen. Im Herbst 2023 wurden weitere 8 Innovation Booster für die Jahre 2024-2027 bewilligt. Sie starteten im Januar 2024. Die Förderung der 2021 von geförderten Innovation Booster wird Ende 2024 abgeschlossen. Die hier präsentierten Ergebnisse beruhen auf bestehenden Monitoring-Daten in einem kürzeren Wirkungshorizont. 

Die Innovation Booster entwickeln neue und radikale Innovationsideen und prüfen diese in einem offenen, netzwerkbasierten Innovationsprozess mit einer offenen Innovationskultur. Die Partner der geförderten Netzwerke kommen aus dem Forschungsumfeld, der Wirtschaft und der Gesellschaft. Der Fokus der Förderung liegt in der frühen Phase der Ideenfindung und -prüfung, wobei experimentelle Methoden wie «Design Thinking» und «Co-Creation» zum Einsatz kommen. 

Die Weiterentwicklung von erfolgreich getesteten Innovationsideen, auch im Rahmen von geförderten Innovationsprojekten ist 
ein zentrales Wirkungsziel der Innovation Booster. Damit werden wissenschaftsbasierte und nachhaltige Innovationen gefördert und den Umsetzungspartnern und dem Innovationsystem Schweiz konkreter Mehrwert und Wettbewerbsvorteile verschafft.

### Innovation Booster stärken die Innovationskompetenzen der Teilnehmenden
Die Innovation Booster haben zum Ziel in der Challenge-Phase neue und auch radikale Innovationsideen zu entwickeln, um diese in einer weiteren Phase der Ideenprüfung auf Machbarkeit und Potenziale hinsichtlich Nachfrage und Nutzerorientierung zu testen.

Die grosse Mehrheit der Befragten (81 %) bestätigt, dass sie aufgrund ihrer Teilnahme an einem Innovation Booster ihre Fähigkeiten und Kompetenz zum Entwickeln und Testen von radikalen Ideen erhöhen konnten.

<div>${draw_waffle("ib_capabilities", -115, 0)}</div>

### Radikale Innovationsideen aus den Innovation Booster werden weitergeführt, auch bei der Innosuisse-Förderung
Zwei Drittel der geförderten Innovationsideen werden nach Abschluss der Förderung weiterverfolgt, oft mit neuen Lösungsansätzen und auch radikalerer Ausrichtung. Die Innovation Booster haben 2022–24 durchschnittlich zu 31 bewilligten Innovationschecks und 25 bewilligten Innovationsprojekten pro Jahr geführt. Mit einem Innovationsscheck wird die Idee nochmals vertieft mit einem Forschungspartner hinsichtlich Machbarkeit geprüft, bei den Innovationsprojekten werden die Innovationsideen, wissenschaftlich verankert, weiterverfolgt um sie langfristig in die Umsetzung zu führen.
<div style="display: flex; column-gap: 20px;">
<div> ${draw_waffle("ib_continued", -100)}</div>
<div>${ib_toipis()}</div></div>

<div class="card" style="max-width: 640px">
<h3>Evaluation belegt Wirkung der Innovation Booster</h3>

Die Wirkungsevaluation von Ecoplan ([2025](https://www.innosuisse.admin.ch/de/publication?id=TpGqSBI8N6Cl)) hat aufgezeigt, dass die Innovation Booster langfristige Innovationspartnerschaften, das Innovations-Knowhow und die Entwicklung neuer Ideen in vielfältigen Themenbereichen stärken. Die Zusammenarbeit und die nutzerorientierten Problemanalysen sind ihre Alleinstellungmerkmale. Diese werden künftig noch mehr Bedeutung erhalten.
<table style="border-collapse: collapse; width: 100%;">
  <tr>
    <td style="border: none; width: 50%;">
    <h4>Radikalere Ideen</h4>
    Die Unternehmen und Organisationen entwickeln radikale Ideen, die Probleme auf neuartige Weise lösen.
<div> ${draw_waffle("ib_radical", -115)}</div></td>
    <td style="border: none; width: 50%;">
    <h4>Vergrösserte Netzwerke</h4>
    Die Unternehmen und Organisationen erweitern ihr Netzwerk über ihr bestehendes Umfeld hinaus.
<div> ${draw_waffle("ib_new_contacts", -100)}</div></td>
  </tr>
    </tr>
</table>
<table style="border-collapse: collapse; width: 100%;">
  <tr>
    <td style="border: none; width: 50%;">
    <h4>Gestärkte Lernkultur</h4>
    Die Unternehmen und Organisationen übernehmen neues Know-how zu Innovationsmethoden und eine Kultur des Lernens und Fehlermachens.
<div> ${draw_waffle("ib_learning_effects", -100)}</div></td>
    <td style="border: none; width: 50%;"></td>
  </tr>
</table>





</div>
