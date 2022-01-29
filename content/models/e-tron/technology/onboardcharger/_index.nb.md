---
title: Audi e-tron ombordlader
linktitle: Ombordlader
description: Audi e-tron har en innbygget ombordlader for vekselstrømlading.
weight: 5
---

Den innebygde ombordladeren er ansvarlig for å konvertere fra vekselstrøm til likestrøm (AC til DC).

Standard ombordlader støtter opptil 11KW AC-lading

I USA har ladeporten en [J1772-kontakt](https://en.wikipedia.org/wiki/SAE_J1772) for å koble til bilen, mens den i Europa har en [Type 2-kontakt](https://no) .wikipedia.org/wiki/Type_2_connector).

![Ladeport](chargeport_left.jpg "Type 2 Ladeport")

For å lade bilen fra AC trenger du en Wallbox å koble til eller [ladesystemet som kan kobles til hjemmekontakten](../chargesystem).

### Ekstra ladeport

Du kan bestille en ekstra ladeport på passasjersiden. Denne kan kun brukes til AC lading.

Dette er alternativ ID **JS1**

![Passasjer ladeport](chargeport_right.jpg "Ytterligere ladeport på passasjersiden")

### 22KW ombordlader

Du kan bestille en ekstra ladeenhet til bilen (AX5). Dette gir bilen 22KW total ladekapasitet på 400Volt 32A 3-fase tilkobling.

Du må bestille den ekstra porten **JS1** og [Audi Charging System Connect](../../technology/chargingsystem/#e-tron-charging-system-connect) **NW2**

### Elektrisk drivenhet

I illustrasjonen under ser du plasseringen av ladeenhetene.

![Elektrisk stasjon](electricdrivetrain.jpg "Elektrisk drivverk med standard og optiell laderplassering")

 Bare AC-lading går gjennom laderen. For DC-lading er CCS-porten direkte koblet til batteriet.

![Wiring](wiringdiagram.jpg "Ladeport/laderkabling")

### Kapasitet basert på nettverk/uttak

| Tilkobling | Plugg | kapasitet | lader 100 % e-tron 55 |
| ------| ------| ---- |------- |
| 230V | Standard stikkontakt | 1,8kW | 50,5 timer |
| 400V 32A 3-fase | Rød industri | 22KW | 4,5 timer |
| 400V 16A 3-fase | Rød industri | 11KW | 9 timer |
| 230V 32A 1fase | Blå industri | 7,2KW | 11,5 timer |
| 230V 16A 1fase | Blå industri | 3,6KW | 23 timer |

### LED Indicators

![LED](ledlights.jpg "Led Lights")

![LED](ledoverview.jpg "LED codes")

{{% children description="true" depth="1" %}}
