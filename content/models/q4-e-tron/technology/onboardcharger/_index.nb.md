---
title: Ombordlader
linktitle: Ombordlader
description: Audi Q4 e-tron har ombordlader for vekselstrømlading.
weight: 5
---
<!-- markdownlint-disable MD033 -->

Den innebygde laderen er ansvarlig for å konvertere AC til DC.

Det er to versjoner av den innebygde laderen. Laderen i Q4 35 støtter 7,2KW AC-lading (KB2) mens 40/45 og 50 støtter 11KW AC-lading (KB3)

I USA har ladeporten en [J1772-kontakt](https://en.wikipedia.org/wiki/SAE_J1772) for å koble til bilen, mens den i Europa har en [Type 2-kontakt](https://no) .wikipedia.org/wiki/Type_2_connector).

<figur>
    <a href="https://media.evkx.net/ehga/models/q4-e-tron/technology/onboardcharger/chargeport_right.webp">
        <img src="https://media.evkx.net/ehga/models/q4-e-tron/technology/onboardcharger/chargeport_rights.webp" class="img-fluid" alt="Type 2 Chargeport" title="Type 2 Chargeport">
    </a>
    <figcaption><h4>Type 2-ladeport</h4></figcaption>
</figur>

For å lade bilen fra AC trenger du en Wallbox å koble til eller [ladesystemet som kan kobles til hjemmekontakten](../chargesystem).

### Elektrisk drivenhet

I illustrasjonen under ser du plasseringen av ladeenhetene.

<figur>
    <a href="https://media.evkx.net/ehga/models/q4-e-tron/technology/onboardcharger/electricdrivetrain.webp">
        <img src="https://media.evkx.net/ehga/models/q4-e-tron/technology/onboardcharger/electricdrivetrains.webp" class="img-fluid" alt="Elektrisk drivlinje med ladeport og AC-lader" title="Elektrisk drivlinje med ladeport og AC-lader">
    </a>
    <figcaption><h4>Elektrisk drivlinje med ladeport og AC-lader</h4></figcaption>
</figur>

 Bare AC-lading går gjennom laderen. For DC-lading er CCS-porten direkte koblet til batteriet.

### Kapasitet basert på nettverk/uttak

| Tilkobling | Plugg | kapasitet | lader 100 % Q4 e-tron 50 |
| ------| ------| ---- |------- |
| 120V | Nivå 1 Innenlandsk NEMA 5-20 | 1,2kW | 64 timer |
| 240V | Innenriks NEMA 14-50 | 9,6kW | 8 timer |
| 230V | Innenriks type F | 1,8kW | 42 timer |
| 400V 16A 3-fase | Rød industri | 11KW | 7 timer |
| 230V 32A 1fase | Blå industri | 7,2KW | 10,7 timer |
| 230V 16A 1fase | Blå industri | 3,6KW | 21.4 timer |

{{<children description="true" />}}
