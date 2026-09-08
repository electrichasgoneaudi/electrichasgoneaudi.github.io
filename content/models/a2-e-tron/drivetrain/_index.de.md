---
title: "Audi A2 e-tron Antrieb"
linktitle: "Antrieb"
description: "Der Audi A2 e-tron nutzt die MEB+-Plattform mit APP350- und APP550-Heckmotoren, LFP- und NMC-Batterien, bis zu 183 kW DC-Ladeleistung und bidirektionales Laden per V2L und V2H."
weight: 6
translation_status: manual
---
<!-- markdownlint-disable MD033 -->

Der A2 e-tron steht auf der **MEB+-Plattform** des Volkswagen-Konzerns, der aktualisierten Version der Architektur unter Volkswagen ID.3 und Cupra Born. Alle Versionen sind **Hecktriebler** mit einem Motor an der Hinterachse — eine quattro-Variante gibt es zum Marktstart nicht.

{{< evkxfiguresized thumb="models/audi/a2_e-tron/a2_e-tron_240_kw/chassis_6d454_st.webp" width="3000" height="2121" title="Plattform und Antrieb des Audi A2 e-tron" >}}

---

## Motoren

Zwei permanenterregte Synchronmaschinen decken die vier Leistungsstufen ab:

| Antriebseinheit | Eingesetzt in | Leistung | Drehmoment |
|---|---|---:|---:|
| APP350 | 125 kW, 140 kW, 170 kW | bis zu 170 kW | 350 Nm |
| APP550 | 240 kW | 240 kW | 545 Nm |

### Was Audi an der APP350 geändert hat

Die APP350 im A2 e-tron ist eine überarbeitete Version der andernorts im Konzern eingesetzten Einheit, und Audi gibt an, dass sie bis zu **10 % effizienter** arbeitet als die vorherige Auslegung. Die Änderungen sind einzeln klein und zusammen entscheidend:

- **Siliziumkarbid-Halbleiter** in der Leistungselektronik, die die Schaltverluste senken
- **0,2 mm dünne Bleche** im Motor — dünner als zuvor, was die Eisenverluste reduziert
- Eine **im Dreieck geschaltete Statorwicklung**, die den effizienten Betriebsbereich dorthin verschiebt, wo das Auto tatsächlich unterwegs ist
- **Reibungsarmes Getriebeöl**
- Eine lange **Übersetzung von 10,2:1**, die die Motordrehzahl bei Autobahntempo senkt

Vor allem die Übersetzung ist eine Effizienzentscheidung. Eine kürzere Übersetzung würde die Beschleunigung verbessern; die lange hält die Motordrehzahl auf der Autobahn niedrig — und dort gewinnt oder verliert ein Langstrecken-Kompaktwagen seinen WLTP-Wert.

---

## Batterien

Drei Batterien stehen zur Wahl, gekoppelt an die Leistungsstufe:

| Batterie | Brutto | Netto | Zellchemie | Spannung | Konfiguration | Eingesetzt in |
|---|---:|---:|---|---:|---|---|
| Klein | 52 kWh | 50 kWh | LFP | 333 V | 104s2p | 125 kW |
| Mittel | 61 kWh | 58 kWh | LFP | 333 V | – | 140 kW |
| Groß | 84 kWh | 79 kWh | NMC | 353 V | – | 170 kW, 240 kW |

### Die LFP-Batterien

Die beiden kleineren Batterien nutzen **Lithium-Eisenphosphat**-Zellen in **Cell-to-Pack**-Bauweise: Prismatische Zellen werden direkt in das Gehäuse eingeklebt, statt zuvor zu Modulen zusammengefasst zu werden. Das erhöht die Packungsdichte und senkt die Gesamthöhe der Batterie — ein Teil der Erklärung dafür, wie Audi das Auto bei 1.583 mm Höhe halten konnte, ohne Kopffreiheit zu opfern.

LFP enthält **weder Nickel noch Kobalt**, ist von Natur aus langlebig und lässt sich — anders als nickelbasierte Chemien — **täglich auf 100 % laden**, ohne die sonst empfohlene Ladegrenze. Für ein Einstiegsmodell, das den Großteil seines Lebens an einer heimischen Wallbox verbringen wird, ist das ein echter praktischer Vorteil.

Die Ladekurve von LFP ist zudem ungewöhnlich flach, weshalb die Zeiten von 24 und 26 Minuten für 10 bis 80 % realen Ladestopps näherkommen, als eine hohe Spitzenleistung es täte.

### Die NMC-Batterie

Die 84-kWh-Batterie nutzt **Nickel-Mangan-Kobalt**-Zellen in modularer Bauweise. Sie versorgt die beiden stärksten Versionen, hebt die Systemspannung auf 353 V und die DC-Ladeleistung auf 183 kW.

{{< evkxfiguresized thumb="models/audi/a2_e-tron/a2_e-tron_240_kw/chassis_75605_st.webp" width="3000" height="2121" title="Batterie und Hinterachse des Audi A2 e-tron" >}}

---

## Laden

| | 52 kWh | 61 kWh | 84 kWh |
|---|---:|---:|---:|
| Max. DC-Leistung | 100 kW | 105 kW | 183 kW |
| DC 10–80 % | 24 min | 26 min | 29 min |

Der Ladeanschluss sitzt **hinten rechts** mit **CCS2**-Stecker für europäische Märkte. Audi hat außerdem den **AC-Ladewirkungsgrad auf 89,6 %** verbessert, ein Plus von 1,3 Prozentpunkten, erreicht durch überarbeitete Kühlung und Steuerungssoftware — ein Gewinn, der mehr bedeutet, als er klingt, denn über AC-Laden bringen die meisten Besitzer den größten Teil der Energie ins Auto.

### Bidirektionales Laden

Der A2 e-tron kann Energie auf zwei Wegen aus der Antriebsbatterie zurückgeben:

- **Vehicle-to-Load (V2L)** — versorgt externe Geräte über eine Steckdose im Gepäckraum oder einen Adapter am Ladeanschluss
- **Vehicle-to-Home (V2H)** — speist über eine von Audi empfohlene Wallbox in eine kompatible Hausinstallation ein

V2H wird zunächst in **Deutschland, Österreich und der Schweiz** angeboten. V2L ist in einigen Märkten, darunter Norwegen, eine separate Option.

---

## Fahrwerk

Vorn arbeiten **MacPherson-Federbeine**, hinten eine **Mehrlenkerachse** — die aufwendigere Lösung statt der Verbundlenkerachse, die manche MEB-Modelle in niedrigeren Leistungsstufen nutzen.

Drei Fahrwerksauslegungen stehen zur Wahl:

- **Komfortfahrwerk** — die Serienauslegung mit konventionellen Schraubenfedern und passiven Dämpfern
- **Sportfahrwerk** — tiefergelegt und zugleich Bestandteil des **Effizienzpakets**
- **Fahrwerk mit Dämpferregelung** — adaptive Dämpfung, serienmäßig in der 240-kW-Version und sonst optional

Die Lenkung ist serienmäßig **linear** ausgelegt, eine **Progressivlenkung** mit variabler Übersetzung ist optional erhältlich.

---

## Fahrmodi und Rekuperation

Vier Fahrmodi stehen zur Wahl: **comfort**, **balanced**, **efficiency** und **dynamic**.

Die Rekuperation ist in **vier Stufen** einstellbar. Wippen hinter dem Lenkrad wählen D1 bis D3 mit zunehmend stärkerer Segelverzögerung, eine **B-Stellung** ermöglicht das Ein-Pedal-Fahren, bei dem das Auto allein über das Fahrpedal bis zum Stillstand verzögert.

Der A2 e-tron erhält außerdem eine eigens für den Heckantrieb entwickelte Abstimmung der elektronischen Stabilitätskontrolle.

---

## Gewichte und Anhängelast

| | 125 kW | 140 kW | 170 kW | 240 kW |
|---|---:|---:|---:|---:|
| Leergewicht | 1.915 kg | 1.915 kg | 1.985 kg | 2.005 kg |
| Zulässiges Gesamtgewicht | 2.400 kg | 2.400 kg | 2.400 kg | 2.400 kg |
| Zuladung inkl. Fahrer | 485 kg | 485 kg | – | – |

Die Anhängelast beträgt **1.600 kg gebremst** und **750 kg ungebremst** bei **75 kg** maximaler Stützlast — Werte, mit denen der A2 e-tron vor den meisten kompakten Elektroautos liegt, die häufig überhaupt keine Anhängelast bieten.

→ [Vollständige Spezifikationen für alle vier Varianten](../specifications/)
