---
title: Audi A2 e-tron drivlinje
linktitle: Drivlinje
description: Audi A2 e-tron bruker MEB+-plattformen med APP350- og APP550-motorer bak, LFP- og NMC-batterier, inntil 183 kW DC-lading og toveislading med V2L og V2H.
weight: 6
---
<!-- markdownlint-disable MD033 -->

A2 e-tron er bygget på Volkswagen-konsernets **MEB+-plattform**, den oppdaterte versjonen av arkitekturen under Volkswagen ID.3 og Cupra Born. Alle versjoner er **bakhjulsdrevne** med én motor på bakakselen — det finnes ingen quattro-variant i lanseringsprogrammet.

{{< evkxfiguresized thumb="models/audi/a2_e-tron/a2_e-tron_240_kw/chassis_6d454_st.webp" width="3000" height="2121" title="Plattform og drivlinje i Audi A2 e-tron" >}}

---

## Motorer

To permanentmagnetiserte synkronmotorer dekker de fire effektnivåene:

| Motorenhet | Brukes av | Effekt | Dreiemoment |
|---|---|---:|---:|
| APP350 | 125 kW, 140 kW, 170 kW | inntil 170 kW | 350 Nm |
| APP550 | 240 kW | 240 kW | 545 Nm |

### Hva Audi endret i APP350

APP350 i A2 e-tron er en bearbeidet versjon av enheten som brukes ellers i konsernet, og Audi oppgir at den arbeider inntil **10 % mer effektivt** enn forrige utgave. Endringene er hver for seg små og til sammen avgjørende:

- **Silisiumkarbid-halvledere** i kraftelektronikken, som reduserer koblingstapene
- **0,2 mm lameller** i motoren — tynnere enn før, som reduserer jerntapene
- En **deltakoblet statorvikling**, som flytter motorens effektive arbeidsområde dit bilen faktisk befinner seg
- **Lavfriksjonsolje** i giret
- En lang **utveksling på 10,2:1**, som senker motorturtallet ved motorveifart

Særlig utvekslingen er et effektivitetsvalg. En kortere utveksling ville gitt bedre akselerasjon; den lange holder motorturtallet nede på motorveien, som er der en langdistanse-kompaktbil vinner eller taper WLTP-tallet sitt.

---

## Batterier

Tre pakker tilbys, knyttet til effektnivået:

| Batteri | Brutto | Netto | Cellekjemi | Spenning | Konfigurasjon | Brukes av |
|---|---:|---:|---|---:|---|---|
| Liten | 52 kWh | 50 kWh | LFP | 333 V | 104s2p | 125 kW |
| Middels | 61 kWh | 58 kWh | LFP | 333 V | – | 140 kW |
| Stor | 84 kWh | 79 kWh | NMC | 353 V | – | 170 kW, 240 kW |

### LFP-pakkene

De to minste pakkene bruker **litiumjernfosfat**-celler i **cell-to-pack**-konstruksjon: prismatiske celler limes direkte inn i huset i stedet for å settes sammen i moduler først. Det øker pakketettheten og senker pakkens totale høyde, som er en del av grunnen til at Audi klarte å holde bilen på 1 583 mm uten å ofre hodeplass.

LFP inneholder **verken nikkel eller kobolt**, er robust av natur og kan — i motsetning til nikkelbaserte kjemier — lades til **100 % hver dag** uten begrensningen som ellers anbefales. For en inngangsmodell som skal tilbringe mesteparten av livet på en hjemmelader er det en reell praktisk fordel.

Ladekurven til LFP er også uvanlig flat, noe som betyr at tidene på 24 og 26 minutter fra 10 til 80 % er mer representative for reelle ladestopp enn en høy topp-effekt ville vært.

### NMC-pakken

Den 84 kWh store pakken bruker **nikkel-mangan-kobolt**-celler i modulær konstruksjon. Den brukes i de to kraftigste versjonene, hever systemspenningen til 353 V og løfter DC-ladingen til 183 kW.

{{< evkxfiguresized thumb="models/audi/a2_e-tron/a2_e-tron_240_kw/chassis_75605_st.webp" width="3000" height="2121" title="Batteri og bakaksel i Audi A2 e-tron" >}}

---

## Lading

| | 52 kWh | 61 kWh | 84 kWh |
|---|---:|---:|---:|
| Maks DC-effekt | 100 kW | 105 kW | 183 kW |
| DC 10–80 % | 24 min | 26 min | 29 min |

Ladeporten sitter på **høyre side bak** med **CCS2**-kontakt for europeiske markeder. Audi har også forbedret **AC-ladeeffektiviteten til 89,6 %**, opp 1,3 prosentpoeng, gjennom endret kjøling og styringsprogramvare — en gevinst som betyr langt mer enn den høres ut som, siden AC-lading er der de fleste eiere kommer til å fylle mesteparten av energien.

### Toveislading

A2 e-tron kan sende energi tilbake ut av drivbatteriet på to måter:

- **Vehicle-to-Load (V2L)** — driver eksternt utstyr gjennom en stikkontakt i bagasjerommet eller en adapter ved ladeporten
- **Vehicle-to-Home (V2H)** — forsyner et kompatibelt hjemmeanlegg gjennom en Audi-anbefalt wallbox

V2H tilbys i første omgang i **Tyskland, Østerrike og Sveits**. V2L er tilvalg i enkelte markeder, blant dem Norge.

---

## Understell

Foran brukes **MacPherson-fjærbein**, bak et **multilink**-oppsett — den mer avanserte bakløsningen, i stedet for den torsjonsakselen enkelte MEB-biler bruker på lavere effektnivåer.

Tre understellsoppsett tilbys:

- **Komfortunderstell** — standardoppsettet, med konvensjonelle spiralfjærer og passive dempere
- **Sportsunderstell** — senket, og også oppsettet som inngår i **effektivitetspakken**
- **Understell med dempekontroll** — adaptiv demping, standard på 240 kW-versjonen og tilvalg ellers

Styringen er **lineær** som standard, med **progressiv styring** og variabel utveksling som tilvalg.

---

## Kjøremoduser og regenerering

Fire kjøremoduser kan velges: **comfort**, **balanced**, **efficiency** og **dynamic**.

Regenereringen kan justeres i **fire nivåer**. Padler bak rattet velger D1 til D3 med gradvis sterkere frirullingsbrems, og en **B-posisjon** gir enpedalskjøring der bilen bremser helt til stopp på gasspedalen alene.

A2 e-tron har også en egen kalibrering av det elektroniske stabilitetsprogrammet, utviklet spesifikt for bakhjulsdriften.

---

## Vekter og hengervekt

| | 125 kW | 140 kW | 170 kW | 240 kW |
|---|---:|---:|---:|---:|
| Egenvekt | 1 915 kg | 1 915 kg | 1 985 kg | 2 005 kg |
| Maks totalvekt | 2 400 kg | 2 400 kg | 2 400 kg | 2 400 kg |
| Nyttelast inkludert fører | 485 kg | 485 kg | – | – |

Hengervekten er **1 600 kg med brems** og **750 kg uten brems**, med **75 kg** maksimal kulevekt — tall som setter A2 e-tron foran de fleste kompakte elbiler, som ofte ikke kan trekke henger i det hele tatt.

→ [Komplette spesifikasjoner for alle fire varianter](../specifications/)
