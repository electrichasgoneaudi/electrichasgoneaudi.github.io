---
title: "Batteriesystem"
linktitle: "Batteriesystem"
description: "Das Batteriesystem ist die Kombination vieler Zellen und anderer Steuerelektronik zu einer vollständigen Batterie, um das EV mit Strom zu versorgen."
weight: 3
---
<!-- markdownlint-disable MD033 -->
Heute wird dies am häufigsten mit Cell-to-Module-Konstruktion erreicht: Zellen werden in Module gruppiert, die dann zu einem Batteriepack zusammengebaut werden.

Die Cell-to-Pack-Konstruktion entfernt herkömmliche Module und integriert Zellen direkt in die Packung. Cell-to-Body-Designs gehen noch einen Schritt weiter, indem sie die Batteriestruktur zu einem Teil der Fahrzeugkarosserie machen.

Ein typischer Akkupack besteht aus Modulen, die mehrere Zellen enthalten.

## Module

Module sind eine Kombination von Zellen. Die Anzahl der Zellen in einem Modul variiert.

<figure>
    <a href="https://media.evkx.net/ehga/technology/battery/batterysystem/module_lg_pouch.webp">
        <img src=""https://media.evkx.net/ehga/technology/battery/batterysystem/module_lg_pouch.webp"
        class="img-fluid" alt="LG battery module" title="LG battery module">
    </a>
    <figcaption><h4>LG Batteriemodul</h4></figcaption>
</figure>

### Architektur

Die Zellen innerhalb eines Moduls können auf unterschiedliche Weise verbunden werden.

- Serielle Verbindung gibt eine höhere Spannung
- Parallelschaltung ergibt eine höhere Kapazität.

#### Beispiel 1

Unten sehen Sie, wie Module des Audi e-tron 55 sind. Es gibt 12 Zellen pro Modul. Sie sind in 3 Gruppen zusammengefasst, in denen 4 Zellen parallel geschaltet sind. Dann werden diese Gruppen in Serie geschaltet, was eine 3 serielle 4 parallele Konfiguration (3s4p) ergibt. Mit 60 AH für jede Zelle und einer Nennspannung von 3,66 Volt hat dieses Modul eine Kapazität von 240 AH und 11 Volt.

![Battery](/models/e-tron/drivetrain/battery/95kwhconnection.drawio.svg "3s4p connection")

#### Beispiel 2

Im Folgenden sehen Sie, wie Module des Audi e-tron 50 sind. Es gibt 12 Zellen pro Modul. Sie werden in 4 Gruppen zusammengefasst, in denen 2 Zellen parallel geschaltet sind. Dann werden diese Gruppen in Serie geschaltet, was eine 4 serielle 2 parallele Konfiguration (3s4p) ergibt. Mit 60 AH für jede Zelle und einer Nennspannung von 3,66 Volt hat dieses Modul eine Kapazität von 180 AH und 14,666 Volt.

![Battery](/models/e-tron/drivetrain/battery/71kwhconnection.drawio.svg "4s3p connection")

### Audi-Module

| Modul | Anzahl der Zellen | Konfitüre | Kapazität AH | Nennspannung | kWh |
|-----|-----|-----|------|------|
|e-tron 55 | 12 | 3S4P | 240AH | 11 Volt | 2,640 kWh |
|e-tron 50 | 12 | 4s3p | 180AH | 14,666 Volt | 2,640 kWh |
|e-tron GT | 12 | 6s2p | 129.2AH | 21,909 Volt | 2,830kWh |
|Q4 e-tron | 24 | 8s3p | 234AH | 29,16 Volt | 6,825kWh |

## Packungen

Batteriepakete bestehen aus mehreren Modulen, die in einer Konstruktion platziert sind, die sie schützen und ihnen optimale Bedingungen geben soll. Unten sehen Sie einen Akkupack von Audi e-tron GT.

<figure>
    <a href="https://media.evkx.net/ehga/technology/battery/batterysystem/batterypack_e-tron-gt.webp">
        <img src=""https://media.evkx.net/ehga/technology/battery/batterysystem/batterypack_e-tron-gts.webp"
        class="img-fluid" alt="Batteriepack mit 33 Modulen" title="Batteriepack mit 33 Modulen">
    </a>
    <figcaption><h4>Batteriepack mit 33 Modulen</h4></figcaption>
</figure>

Typischerweise wird das Paket am Boden des Autos platziert.

### Audi Batteriepacks

Heute verwenden alle Audi-Modelle die Cell2Module-Technologie

#### Konfiguration des Batteriepakets

|  | Zelltyp | Zellen | Module | Spannung | Zellwand | Bruttoobergrenze |
|-----|------|-----|-----|------|-----|-----|
| [e-tron 55](/models/e-tron/drivetrain/battery/#battery-audi-e-tron-55) | LGXN2.1 | 432 | 36 | 396 | 108s4p | 95 kWh |
| [e-tron 55*3](/models/e-tron/drivetrain/battery/#battery-audi-e-tron-55) | Samsung | 432 | 36 | 396 | 108s4p | 95 kWh |
| [e-tron 50](/models/e-tron/drivetrain/battery/#battery-audi-e-tron-50) | Samsung | 324 | 27 | 396 | 108s3p | 71 kWh |
| [e-tron GT](/models/e-tron-gt/drivetrain/battery/) | E66A | 396 | 33 | 723 | 196s2p | 93,4 kWh |
| [RS e-tron GT](/models/e-tron-gt/drivetrain/battery/) | E66A | 396 | 33 | 723 | 196s2p | 93,4 kWh |
| [Q4 e-tron 50](/models/q4-e-tron/drivetrain/battery/#battery-q4-40-e-tron-and-q4-50-e-tron) |LGX E78 | 288 | 12 | 350 |96s3p | 82 kWh |
| [Q4 e-tron 40](/models/q4-e-tron/drivetrain/battery/#battery-q4-40-e-tron-and-q4-50-e-tron) |LGX E78 | 288 | 12 | 350 |96s3p | 82 kWh |
| [Q4 e-tron 35](/models/q4-e-tron/drivetrain/battery/#battery-q4-35) | LGX E78|  196 | 9 | 350 | 96s2p | 55 kWh |
| [Q6 e-tron](/models/q6-e-tron/drivetrain/battery/)*1 | LGX E78?|  392? | 16? | 700? | 192s2p? | 110 kWh? |
| A6 e-tron *2 | LGX E78?|  392? | 16? | 700? | 192s2p? | 110 kWh? |

#### Leistung des Batteriepacks

In der Tabelle unten sehen Sie die Packungsleistung. Sehen Sie, wie Q4 eine höhere Dichte hat, sogar die Zelle selbst hat keine bessere Dichte.

|  | Bruttokapazität | Nettokapazität | Maximale DC-Aufladung | Gewicht | kWh/kg |
|-----|------|-----|-----|------|-----|
| [e-tron 55](/models/e-tron/drivetrain/battery/#battery-audi-e-tron-55) | 95kWh | 86,5 kWh | 150kW | 699 kg | 0.136 |
| [e-tron 55*3](/models/e-tron/drivetrain/battery/#battery-audi-e-tron-55) | 95kWh | 86,5 kWh | 150kW | 699 kg | 0.136 |
| [e-tron 50](/models/e-tron/drivetrain/battery/#battery-audi-e-tron-50) | 71kWh | 64.7kWh | 125kW | 580 | 0.122 |
| [e-tron GT](/models/e-tron-gt/drivetrain/battery/) | 93,4 kWh | 83,7 kWh | 270kW | 630 kg | 0.148 |
| [RS e-tron GT](/models/e-tron-gt/drivetrain/battery/) | 93,4 kWh | 83,7 kWh | 270kW | 630 kg | 0.148 |
| [Q4 e-tron 50](/models/q4-e-tron/drivetrain/battery/#battery-q4-40-e-tron-and-q4-50-e-tron) | 82kWh | 77kWh | 125kW | 493 kg | 0.188 |
| [Q4 e-tron 40](/models/q4-e-tron/drivetrain/battery/#battery-q4-40-e-tron-and-q4-50-e-tron) | 82kWh | 77kWh | 125kW | 493 kg | 0.188 |
| [Q4 e-tron 35](/models/q4-e-tron/drivetrain/battery/#battery-q4-35) | 55kWh | 52kWh | 100kW | 344 kg | 0.160 |
| [Q8 50 e-tron](/models/q8-e-tron/drivetrain/battery/#battery-audi-e-tron-55) | 95kWh | 89kWh | 150kW | 699 kg | 0.136 |
| [Q8 55 e-tron / SQ8](/models/q8-e-tron/drivetrain/battery/#battery-audi-e-tron-55) | 114kWh | 104Wh | 170kW | 727 kg | 0.157 |



*1 Audi Q6 Details sind noch nicht bestätigt.

*2 Audi A6 Details sind noch nicht bestätigt.

*3 Ab Januar 2021 nutzt Audi Samsung-Zellen auf e-tron 55

## Was kommt als nächstes für Audi?

Das Problem bei dem heutigen Ansatz mit Cell2Modules ist, dass die Energiedichte auf dem Batteriesystem viel geringer ist als auf der Zellebene, was auf alle Strukturelemente in einer Batterie zurückzuführen ist, die einem Batteriepack keinen Energiegehalt hinzufügen.

Die Konstruktion von Zellen zu Packungen kann inaktives Baumaterial reduzieren, indem Zellen direkt in die Packung und nicht in separate Module eingebracht werden, was die Energiedichte auf Packungsebene verbessern und das Gewicht reduzieren kann, aber die Umsetzung und die Vorteile variieren zwischen den Herstellern und den Batteriedesigns.

Am 15. März 2021 stellte der Volkswagen Konzern auf dem Power Day seine Batteriestrategie vor, die in folgendem Material wiedergegeben wird und nicht als aktueller Audi-Modell-Launchplan zu lesen ist.

<figure>
    <a href="https://media.evkx.net/ehga/technology/battery/batterysystem/cell2pack.webp">
        <img src=""https://media.evkx.net/ehga/technology/battery/batterysystem/cell2packs.webp"
        class="img-fluid" alt="Volkswagen Cell2Pack technology" title="Volkswagen Cell2Pack technology">
    </a>
    <figcaption><h4>Volkswagen Cell2Pack-Technologie</h4></figcaption>
</figure>

<figure>
    <a href="https://media.evkx.net/ehga/technology/battery/batterysystem/cell2packcomparison.webp">
        <img src=""https://media.evkx.net/ehga/technology/battery/batterysystem/cell2packcomparisons.webp"
        class="img-fluid" alt="Volkswagen Cell2Pack Vergleich" title="Volkswagen Cell2Pack Vergleich">
    </a>
    <figcaption><h4>Vergleich Volkswagen Cell2Pack</h4></figcaption>
</figure>

Sehen Sie sich die komplette Präsentation an.

{{< youtube UQZ8KmCItF8 >}}
