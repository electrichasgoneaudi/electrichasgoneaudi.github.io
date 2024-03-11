---
title: Audi Q8 e-tron ombordlader
linktitle: Ombordlader
description: Audi Q8 e-tron har en innbygget ombordlader for vekselstrømlading.
weight: 5
---
<!-- markdownlint-disable MD033 -->

Den innebygde ombordladeren er ansvarlig for å konvertere fra vekselstrøm til likestrøm (AC til DC).

Standard ombordlader støtter opptil 11KW AC-lading

I USA har ladeporten en [J1772-kontakt](https://en.wikipedia.org/wiki/SAE_J1772) for å koble til bilen, mens den i Europa har en [Type 2-kontakt](https://wikipedia.org/wiki/Type_2_connector).

<figure>
    <a href="https://media.electrichasgoneaudi.net/multimedia/models/e-tron/technology/onboardcharger/chargeport_left.jpg">
        <img src="https://media.electrichasgoneaudi.net/multimedia/models/e-tron/technology/onboardcharger/chargeport_lefts.jpg"
        alt="Type 2 Ladeport" title="Type 2 Ladeport">
    </a>
    <figcaption><h4>Type 2 Ladeport</h4></figcaption>
</figure>

For å lade bilen fra AC trenger du en Wallbox å koble til eller [ladesystemet som kan kobles til hjemmekontakten](../chargesystem).

### Ekstra ladeport

Du kan bestille en ekstra ladeport på passasjersiden. Denne kan kun brukes til AC lading.

Dette er alternativ ID **JS1**


<figure>
    <a href="https://media.electrichasgoneaudi.net/multimedia/models/e-tron/technology/onboardcharger/chargeport_right.jpg">
        <img src="https://media.electrichasgoneaudi.net/multimedia/models/e-tron/technology/onboardcharger/chargeport_rights.jpg"
        alt="Ytterligere ladeport på passasjersiden" title="Ytterligere ladeport på passasjersiden">
    </a>
    <figcaption><h4>Ytterligere ladeport på passasjersiden</h4></figcaption>
</figure>

### 22KW ombordlader

Du kan bestille en ekstra ladeenhet til bilen (AX5). Dette gir bilen 22KW total ladekapasitet på 400Volt 32A 3-fase tilkobling.

Du må bestille den ekstra porten **JS1** og [Audi Charging System Connect](../../technology/chargingsystem/#e-tron-charging-system-connect) **NW2**

### Elektrisk drivenhet

I illustrasjonen under ser du plasseringen av ladeenhetene.

<figure>
    <a href="https://media.electrichasgoneaudi.net/multimedia/models/e-tron/technology/onboardcharger/electricdrivetrain.jpg">
        <img src="https://media.electrichasgoneaudi.net/multimedia/models/e-tron/technology/onboardcharger/electricdrivetrains.jpg"
        alt="Elektrisk drivlinje med standard og optiell laderplassering" title="Elektrisk drivlinje med standard og optiell laderplassering">
    </a>
    <figcaption><h4>Elektrisk drivlinje med standard og optiell laderplassering</h4></figcaption>
</figure>

Bare AC-lading går gjennom laderen. For DC-lading er CCS-porten direkte koblet til batteriet.

<figure>
    <a href="https://media.electrichasgoneaudi.net/multimedia/models/e-tron/technology/onboardcharger/wiringdiagram.jpg">
        <img src="https://media.electrichasgoneaudi.net/multimedia/models/e-tron/technology/onboardcharger/wiringdiagrams.jpg"
        alt="Ladeport/laderkabling" title="Ladeport/laderkabling">
    </a>
    <figcaption><h4>Ladeport/laderkabling</h4></figcaption>
</figure>


<figure>
    <a href="https://media.electrichasgoneaudi.net/multimedia/models/e-tron/technology/onboardcharger/charger.jpg">
        <img src="https://media.electrichasgoneaudi.net/multimedia/models/e-tron/technology/onboardcharger/chargers.jpg"
        alt="Ombordladeren" title="Ombordladeren">
    </a>
    <figcaption><h4>Ombordladeren</h4></figcaption>
</figure>

### Kapasitet basert på nettverk/uttak

| Tilkobling | Plugg | kapasitet | lader 100 % e-tron 55 |
| ------| ------| ---- |------- |
| 230V | Standard stikkontakt | 1,8kW | 50,5 timer |
| 400V 32A 3-fase | Rød industri | 22KW | 4,5 timer |
| 400V 16A 3-fase | Rød industri | 11KW | 9 timer |
| 230V 32A 1fase | Blå industri | 7,2KW | 11,5 timer |
| 230V 16A 1fase | Blå industri | 3,6KW | 23 timer |

### LED Indicators

<figure>
    <a href="https://media.electrichasgoneaudi.net/multimedia/models/e-tron/technology/onboardcharger/ledlights.jpg">
        <img src="https://media.electrichasgoneaudi.net/multimedia/models/e-tron/technology/onboardcharger/ledlightss.jpg"
        alt="Led Lights" title="Led Lights">
    </a>
    <figcaption><h4>Led Lights</h4></figcaption>
</figure>

<figure>
    <a href="https://media.electrichasgoneaudi.net/multimedia/models/e-tron/technology/onboardcharger/ledoverview.jpg">
        <img src="https://media.electrichasgoneaudi.net/multimedia/models/e-tron/technology/onboardcharger/ledoverviews.jpg"
        alt="LED codes" title="LED codes">
    </a>
    <figcaption><h4>LED codes</h4></figcaption>
</figure>


{{<children description="true" />}}
