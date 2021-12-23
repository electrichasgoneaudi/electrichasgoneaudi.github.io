---
title: Audi e-tron batteri
linktitle: Batteri
description: Audi e-tron leveres med to forskjellige batteristørrelser. 95kWh og 71kWh.
weight: 7
---

## Celleteknologi

Audi/Volkswagen har en flerleverandørstrategi på celler. Det betyr at Audi bruker forskjellige leverandører av litium-ion-celler for forskjellige batterier.

Leverandørene har også endret seg siden e-tron hadde verdenspremiere

### LG Chem

Cellen som ble brukt på e-tron 55 før januar 2021 er LG Chem E66A. Celletypen er [LG Pouch Cell](https://www.youtube.com/watch?v=Q2Lczd7MjGc) produsert i [Polen](https://www.google.no/maps/search/lg+chem+ polen/@51.0183429,16.8906359,995m/data=!3m1!1e3).

|Spes. | Verdi |
|-----|------|
| Produsent | LG Chem |
| Modell | LGX N2.1 |
| Nominell kapasitet |60 Ah |
| Nominell spenning | 3,666666 V |
| Nominell energi | 219 907 Wh |
| Tykkelse| 16,5 mm |
| Bredde | 100 mm |
| Høyde | 330 mm |
| Volum | 0,544500 |
| Vekt | 820 g |
| Volumetrisk energitetthet | 403 Wh/L |
| Gravimetrisk energitetthet | 268 Wh/kg |
| Kjemi | [NCM 622](https://en.wikipedia.org/wiki/Lithium-ion_battery) |

![Audi](lgchenx21.jpg "LGX N2.1 60AH posecelle fra LG Chem")

![LG batterimodul](lgmodule.jpg "Batterimodul med 12 LG Chem-poseceller")

### Samsung SDI

For 71kWh-batteriet som brukes på Audi e-tron 50, har Audi brukt Samsung SDI-celler siden starten.
Cellene er produsert av Samsung SDI i [Budapest, Ungarn](https://www.google.com/maps/place/Samsung+SDI+Hungary+Zrt./@47.6765476,19.168821,2130m/data=!3m1!1e3 !4m5!3m4!1s0x0:0x45db42011a2687d9!8m2!3d47.6779532!4d19.170087)
De er av typen [Samsung Prismatic](https://www.samsungsdi.com/automotive-battery/products/prismatic-lithium-ion-battery-cell.html)

Etter januar 2021 byttet Audi ut battericellene på e-tron 55-batterier med [Samsung SDI-celler](https://www.electrive.net/2020/07/23/audi-chef-duesmann-sieht-batterie-probleme-beim -e-tron-als-geloest/). Dette antas hovedsakelig å være fordi LG fokuserte på andre celler til andre VAG-biler.

|Spes. | Verdi |
|-----|------|
| Produsent | Samsung SDI|
| Modell | |
| Nominell kapasitet |60 Ah |
| Nominell spenning | 3,666666 V |
| Nominell energi | 219 907 Wh |
| Tykkelse| ? |
| Bredde | ? |
| Høyde | ? |
| Volum | ? |
| Vekt | ? g |
| Volumetrisk energitetthet | ? Wh/L |
| Gravimetrisk energitetthet | ? Wh/kg |
| Kjemi | [NCM 622](https://en.wikipedia.org/wiki/Lithium-ion_battery) |

![e-tron 50 batteri](etron50battery.jpg "e-tron batterimodul med Samsung prismatisk celle og 71 kWh batteripakke")

![bilde](samsungcells.png "Samsung prismatiske celler")

## Batteripakker

Foreløpig er Audi e-tron tilgjengelig med 2 forskjellige batteripakkestørrelser. Det forventes at fra [2023-modellen](/models/e-tron/mychanges/) vil det bli lagt til en større pakke.

### 95kWh batteri

Batteriet til Audi e-tron 55/e-tron 60S er totalt på 95kWh og med en nominell spenning på 396 volt.

Den består av 36 moduler med 12 celler hver som gir totalt 432.

Cellene i hver modul er koblet sammen i 4p3s-konfigurasjon. Det betyr at 4 og 4 celler er gruppert parallelt og
deretter koblet i serie.

![95 kWh-modul](95kwhconnection.drawio.svg "Tilkoblingsskjema 95kWh-modul med 4p3s-konfigurasjon")

Siden hver celle er på 60ah gir hver parallellgruppe en kapasitet på 240Ah. (4 x 60ah)

Når 36 moduler som dette er koblet i serie er den nominelle spenningen 396 volt.

396volt * 240ah = 95 040 watt-timer (Wh) eller 95 kWh (kilo watt-timer)

Hver modul er på 11 Volt og har en kapasitet på 240 x 11 = 2640 Wh eller 2,64 kWh.

Hver modul veier ca 13 kg.

![bilde](lgmodule.jpg "Modul med LG-posecelle")

Total batterivekt er 1532,2 lb (699,99 kg)

For modeller produsert før uke 47 i 2019 er tilgjengelig batteri 83,6 kWh. Denne har delenummer 1 AX2.
For modeller produsert etter det er bufferen redusert slik at tilgjengelig kapasitet er 86,5 kWh, noe som øker rekkevidden med 3,4 %.

### 71kWh batteri

Batteriet til Audi e-tron 50 er på totalt 71 kWh og ble laget for å støtte en billigere e-tron.

Den har totalt 27 moduler med 12 celler hver som gir totalt 324 celler. Det er ingen tilfeldighet at den har 27 moduler.

En viktig faktor var at den må ha samme nominelle spenning på 396 volt.

Dette var mulig ved å endre batteriarkitekturen fra 4 celler parallelt til 3 celler parallelt.

![95 kWh-modul](71kwhconnection.drawio.svg "Tilkoblingsskjema 71kWh-modul med 3p4s-konfigurasjon")

Siden hver celle er på 60ah gir hver parallellgruppe en kapasitet på 180Ah. (3 x 60ah)

Når 27 moduler som denne er koblet i serie er den nominelle spenningen 396 volt.

396volt * 180ah = 71 280 watt-timer (Wh) eller 71 kWh (kilo watt-timer)

Hver modul er på 14.666 Volt og har en kapasitet på 14.666 x 14.666 = 2640 Wh eller 2.64 kWh.

![bilde](prismaticcellmodule.jpg "Modul med 12 60Ah prismatiske celler fra e-golf.")

## Batterihus

Batteriet på 71kWh består av 27 moduler og alle er plassert i samme "etasje".

![71kWh batteri](batterycase50.jpg "71kWh batteri for e-tron 50 med 27 moduler")

De fleste av batterihusdelene gjenbrukes med det større 95kWh-batteriet.
De 95 kWh bruker en annen etasje under baksetene for å få plass til de 36 modulene.

![bilde](batterycase95kwh.jpg "Batteripakke 95kWh med 36 moduler inkludert 5 i andre etasje")

![bilde](batterycasing.jpg "95kWh batteripakke")

Diagrammet nedenfor viser hvordan e-tron 50 / e-tron Sportback 50 har færre moduler.

Det er iverksatt sofistikerte tiltak for å beskytte høyspentbatteriet til Audi e tron. En sterk omsluttende ramme av støpte aluminiumsnoder og ekstruderte seksjoner, pluss en aluminiumsplate på 3,5 millimeter (0,1 tommer) tykk beskytter mot skade fra ulykker eller fortauskanter. Innvendig forsterker en ramme-lignende aluminiumsstruktur batterisystemet. Også
består av ekstruderte seksjoner, og holder cellemodulene som en typekasse.

![Crash structure](crashstructure.jpg "Integrert krasjstruktur av litium-ion-batteriet")

Inkludert huset med sine sofistikerte kollisjonsstrukturer som består av 47 prosent ekstruderte aluminiumsseksjoner, 36 prosent aluminiumsplate og 17 prosent pressstøpte aluminiumsdeler, veier batterisystemet rundt 700 kilo. Den er boltet til karosseristrukturen til Audi e-tron på 35 punkter. Dette øker vridningsstivheten med 27 prosent og bidrar til det høye sikkerhetsnivået til Audi e-tron, det samme gjør kjølesystemet festet til utsiden av batterihuset. Sammenlignet med en konvensjonell SUV, tilbyr Audi e-tron 45 prosent høyere vridningsstivhet, en nøkkelparameter for presis håndtering og akustisk komfort

## Termisk styring

Batteripakkene er laget for å gi høy ytelse over et stort område av temperatur- og ladenivåer.

Et kjølesystem av flate ekstruderte aluminiumsseksjoner delt jevnt inn i små kammer har som oppgave å opprettholde batteriets høyytelsesdrift over lang tid.

 Varme utveksles mellom cellene og kjølesystemet under dem via en termisk ledende gel presset under hver cellemodul. I det som er en spesielt effektiv løsning, overfører gelen spillvarmen jevnt til kjølevæsken via batterihuset.

 ![Cooling](cooling_1.jpg "Kjøling av litium-ion-batteriet via kjøleren")

Batteriet og alle dets parametere, som ladestatus, strømutgang og termisk styring, administreres av den eksterne batteristyringskontrolleren (BMC). Denne er plassert i passasjercellen på høyre A-stolpe på Audi e-tron. BMC kommuniserer både med kontrollenhetene til de elektriske motorene og cellemodulkontrollerne (CMC), som hver overvåker strømmen, spenningen og temperaturen til modulene.

![Batteri koblingsboks](batteryjunctionbox.jpg "Batteri koblingsboks")

Batterikoblingsboksen (BJB), som høyspentreléene og sikringene er integrert i, er det elektriske grensesnittet til kjøretøyet. Innelukket i et støpt aluminiumshus, er den plassert i den fremre delen av batterisystemet. Datautveksling mellom BMC, CMC og BJB skjer via et separat bussystem.

{{< youtube gzXjFpA8N7U >}}

## Ladeytelse

Audi e-tron 55/S og Audi e-tron 50 er en av de raskest ladede elbilene på markedet.

For 71kWh-batteriet er maks ladehastighet 125kW

![bilde](chargespeed50.png "batteri")

For 95kWh-batteriet er maks ladehastighet 150kW.

![bilde](chargespeed55.png "Ladekurve 55")

[Diagramm fra FASTNED](https://support.fastned.nl/hc/en-gb/articles/360000815988-Charging-with-an-Audi-e-tron)

Det er flere biler med høyere topphastighet på lading, men den jevnt høye ytelsen fra lav SOC til høy SOC gjør den totalt sett raskere enn de fleste andre biler.

[Ladekurve](chargingcurve.jpg "e-tron 55 ladekurve sammenlignet med konkurrentene")

Se videosammenligning nedenfor.

{{< youtube -3IF26OoKJ0 >}}

I kaldt vær vil den typiske ladehastigheten bli lavere i begynnelsen til temperaturen kommer opp. Audi e-tron forvarmer ikke batteriet før lading.

{{% children description="true" depth="1" %}}
