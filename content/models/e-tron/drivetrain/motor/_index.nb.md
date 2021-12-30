---
title: Audi e-tron elektriske motorer & setup
linktitle: Motorer
description: Audi e-tron har kraftige elektriske motorer og var den første elbilen som hadde en tremotorkonfigurasjon. Audi e-tron har 3 forskjellige motorkonfigurasjoner.
weight: 7
---

### Motorkonfigurasjon

De har designet to [induksjonsmotorer](https://en.wikipedia.org/wiki/Induction_motor) (asynkrone motorer) som brukes i de 3 forskjellige konfigurasjonene.

Audi e-tron 50 quattro, e-tron 55 quattro og e-tron S bruker de samme motorene, men i forskjellig konfigurasjon.

Det er en med 247Nm dreiemoment kalt 250 og en med 314Nm dreiemoment kalt 320.
De brukes i forskjellige konfigurasjoner på de forskjellige modellene.

På e-tron 50 på e-tron 55 har de 250 foran med parallell (APA250) aksel og 320 bak med koaksial aksel (ATA320). I e-tron S har de 320 foran (APA320) og to 250 bak (ATA250)

![bilde](motorconfig_1.png "Motorkonfigurasjon")

Tabellen nedenfor oppsummerer ytelsen for versjonen


| | APA250 | ATA320 | APA320 | 2 x ATA250 |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| Strøm | 125 kW | 140kW | 129kW | 205 kW |
| Kraft m/boost | 135 kW | 165 kW | 157 kW | 276 kW |
| Dreiemoment | 247 Nm | 314 Nm| 314 Nm | 494 Nm |
| Dreiemoment m/boost | 309 Nm | 355 Nm| 355 Nm | 618 Nm |

![bilde](motorperformance.png "Tall for elektrisk motor")

## Oppsett av drivverksmotor

### Audi e-tron 55 & Audi e-tron 50 motoroppsett

For både e-tron 50 og e-tron 55 bruker Audi drivenheten AKA320 bak. Dette er en drivenhet med 314nm dreiemoment (355nm med boost på e-tron 55) og den har en koaksial konfigurasjon på akslene (aksler går gjennom enheten)

Motorene har en 2-trinns plantaery girdifferensial

![Frontmotor ](front_motor_schematics.jpg "Elektrisk motor foran med kraftelektronikk")

![Bakmotor ](rear_motor_schematics.jpg "Bakmotor med kraftelektronikk")

![Bakmotor ](drivetrain55_50.jpg "e-tron 50/55 drivverk med elektriske motorer")

### Audi e-tron 60S

I e-tron S-modellen har Audi flyttet bakmotoren fra e-tron 50 og e-tron 55 til fronten og tatt to frontmotorer og kombinert dem sammen på bakakselen.

2 x 138 kW boosteffekt / 2 x 70kW kontinuerlig effekt / 2 trinn, 1 gir / væskekjølt

Totalt 155 kg.

![Bakmotor ](rear_motordual_schematics.jpg "Bakmotor med kraftelektronikk")

![Bakmotor ](rear_motordual_schematics_2.jpg "Bakmotor med kraftelektronikk")

![image](motorschematicsdual.jpg "Doble motorer")

![image](motorschematicsdual_2.jpg "Doble motorer")

![Bakmotor ](drivetrains.jpg "e-trons drivverk med elektriske motorer")

Denne tekniske animasjonen viser den totale akseldriften som er satt opp i Audi e-tron S.

{{< youtube flR291q-OdA >}}

Animasjon av drivverkkonstruksjonen, dobbelmotoren og kjølevæskekretsen til Audi e-tron S Sportback.

{{< youtube H_BFX4es66E >}}

### Avkjøling

Hver motor har flytende statorkjøling, lagerplatekjøling og rotorintern kjøling som Audi e-tron maksimal termisk robusthet under alle driftsforhold.

![bilde](motorkjøling_1.png)

![bilde](motorkjøling_2.png)

![image](motorcooling_3.png)

Dette diagrammet viser hvordan rotorens indre kjøling bidrar til å holde temperaturen lav.

![image](motorcooling_4.png)

Denne animasjonen viser kjølingen og varmespredningen til twin-coax-stasjonen.

{{< youtube YXaR8RSU2Sw >}}

### Bremsegjenvinning: effekt på opptil 265 kW

Under bremsing utfører de elektriske motorene retardasjoner alene opp til rundt 0,3 g, det vil si det store flertallet av alle bremsinger i hverdagskjøring. De hydrauliske hjulbremsene aktiveres kun når føreren bremser svært kraftig. Overgangen er nesten umerkelig, og rekreasjon forblir aktiv nesten opp til en stillstand. Hvis begge elektriske motorer er involvert i bremsegjenvinning for å sikre håndteringsstabilitet, kan de gjenvinne opptil 275 kW effekt. I alle kjøresituasjoner – det være seg full akselerasjon, dynamisk håndtering, frikjøring eller restitusjon av bremser – forblir Audi e-tron urokkelig stabil fordi kontrollsystemene for bremser, fjæring, driv og kraftelektronikk er tett sammenkoblet og jobber raskt sammen.

### Differensial og elektrisk dreiemomentvektor

I tillegg til elektrisk firehjulsdrift er Audi e-tron S utstyrt med elektrisk dreiemomentvektor:

Av hensyn til effektiviteten gir de bakre elektriske motorene i Audi e-tron S og e-tron S Sportback fremdrift ved normal kjøring. Den fremre elektriske motoren er strømløs, men blinker i gang når sjåføren krever mer effekt, eller prediktivt før skli oppstår ved kjøring på glatte veier eller svinger i høy hastighet. Denne elektriske firehjulsdriften blir nå forbedret med elektrisk dreiemomentvektor på bakakselen: Hver av de to elektriske motorene sender sine dreiemomenter direkte til hjulet via en girkasse; det er ikke lenger en mekanisk differensial.

Takket være de elektriske motorenes spontanitet skjer elektrisk dreiemomentvektoring, det vil si fordelingen av dreiemomentet mellom bakhjulene, i løpet av millisekunder. Tidsforskyvningen sammenlignet med et mekanisk system er kortere med en faktor på fire.

Den kan også klare betydelig høyere dreiemoment: Når sjåføren akselererer ut av et hjørne i en sportslig hastighet, utsettes det ytre bakhjulet for 220 Nm (162,3 lb-ft) mer enn det indre hjulet. På grunn av girforholdet er forskjellen ved hjulene rundt 2100 Nm (1548,9 lb-ft). Giringsmomentet som genereres støtter styreegenskapene og kurveradiusen kan beholdes med en mindre styrevinkel. Elektrisk dreiemomentvektor byr også på store styrker med tanke på ren trekkraft: Hvis et av bakhjulene står på svært glatt underlag under akselerasjon, f.eks. en flekk med is eller grus, får den ikke noe dreiemoment. Nesten alt dreiemomentet overføres til hjulet som har sterkere trekkraft.

En forutsetning for den høye hastigheten og presisjonen som den elektriske firehjulsdriften og den elektriske dreiemomentvektoren fungerer med, er den nære koblingen av følgende kontrollenheter: elektronisk stabiliseringskontroll (ESC), drivkontrollenhet (ASG), elektronisk chassisplattform (ECP), og kontrollenhetene til ytelseselektronikken, som gir ut spenningspulser opptil 10 000 ganger per sekund. Alle programvarefunksjoner, bortsett fra ESC, er Audis interne utviklinger som drar nytte av merkets rundt 40 års erfaring med quattro.

ECP er hjernen blant kontrollenhetene: Den gir det avgjørende bidraget til styringen av firehjulsdriften og elektrisk dreiemomentvektor. Den beregner den ideelle fordelingen av langsgående og tverrgående dreiemoment på grunnlag av dataene fra sensorene som kontinuerlig informerer den om bilens kjøreforhold og førerens forespørsel. En av oppgavene er hjulselektiv dreiemomentkontroll: Ved den dynamiske grensen bremses det ubelastede forhjulet på innsiden av kurven litt via hjulbremsen. Dette mindre, nesten umerkelige inngrepet forhindrer slip og gjør håndteringen enda mer smidig og nøytral.

{{< youtube lAr-SZcb5tI >}}

{{< youtube buKN2-faawA >}}

{{% children description="true" depth="1" %}}
