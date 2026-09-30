---
translation_status: machine
title: "Chargeur de bord pour véhicule électrique électrique Q8"
linktitle: "Chargeur embarqué"
description: "Audi Q8 e-tron dispose d'un chargeur embarqué pour recharger les niveaux 1 et 2."
weight: 5
---
<!-- markdownlint-disable MD033 -->

Le chargeur embarqué est responsable de la conversion de la courant alternatif en courant continu.

Le chargeur embarqué standard jusqu'à 11KW charge AC

Aux Etats-Unis, le port de recharge a [J1772 connector](https://en.wikipedia.org/wiki/SAE_J1772) pour se connecter à la voiture, alors qu'en Europe il a une [Type 2 connector](https://en.wikipedia.org/wiki/Type_2_connector).

<figure>
    <a href="https://media.evkx.net/ehga/models/e-tron/technology/onboardcharger/chargeport_left.webp">
        <img src="https://media.evkx.net/ehga/models/e-tron/technology/onboardcharger/chargeport_lefts.webp"
        class="img-fluid" alt="Type 2 Chargeport" title="Type 2 Chargeport">
    </a>
    <figcaption><h4>Port de charge de type 2</h4></figcaption>
</figure>

Pour charger la voiture à partir de AC, vous avez besoin d'un Wallbox pour se connecter à ou le [charging system that can connect to the domestic outlet](../chargingsystem).

### Port de charge optionnel

Vous pouvez commander un port de recharge supplémentaire du côté passager. C'est l'option ID **JS1**

<figure>
    <a href="https://media.evkx.net/ehga/models/e-tron/technology/onboardcharger/chargeport_right.webp">
        <img src="https://media.evkx.net/ehga/models/e-tron/technology/onboardcharger/chargeport_rights.webp"
        class="img-fluid" alt="Additional passenger side charge port" title="Additional passenger side charge port">
    </a>
    <figcaption><h4>Port supplémentaire de charge latérale pour les passagers</h4></figcaption>
</figure>

### Chargeur facultatif 22KW

Vous pouvez commander une unité de recharge supplémentaire pour la voiture (AX5). Cela donne la capacité de recharge de la voiture 22KW sur 400Volt 32A 3 phases de connexion.

Vous devez commander le port supplémentaire **JS1** et le [Audi Charging System Connect](/fr/models/e-tron/technology/chargingsystem/#e-tron-charging-system-connect) **NW2**

### Unité d'entraînement électrique

Dans l'illustration ci-dessous, vous voyez l'emplacement des unités de charge.

<figure>
    <a href="https://media.evkx.net/ehga/models/e-tron/technology/onboardcharger/electricdrivetrain.webp">
        <img src="https://media.evkx.net/ehga/models/e-tron/technology/onboardcharger/electricdrivetrains.webp"
        class="img-fluid" alt="Electric drive train with standard and optional charger location" title="Electric drive train with standard and optional charger location">
    </a>
    <figcaption><h4>Train électrique avec emplacement de chargeur standard et optionnel</h4></figcaption>
</figure>

Seule la charge AC passe par le chargeur. Pour la charge DC, le port CCS est directement connecté à la batterie.

<figure>
    <a href="https://media.evkx.net/ehga/models/e-tron/technology/onboardcharger/wiringdiagram.webp">
        <img src="https://media.evkx.net/ehga/models/e-tron/technology/onboardcharger/wiringdiagrams.webp"
        class="img-fluid" alt="Chargport/charger wiring" title="Chargport/charger wiring">
    </a>
    <figcaption><h4>Câbles de charge/chargeur</h4></figcaption>
</figure>

<figure>
    <a href="https://media.evkx.net/ehga/models/e-tron/technology/onboardcharger/charger.webp">
        <img src="https://media.evkx.net/ehga/models/e-tron/technology/onboardcharger/chargers.webp"
        class="img-fluid" alt="The onboard charger" title="The onboard charger">
    </a>
    <figcaption><h4>Le chargeur embarqué</h4></figcaption>
</figure>

### Capacité basée sur le réseau / sortie

| Connexion | Plug  | capacité | charge 100% e-tron 55 |
| ------| ------| ---- |------- |
| 120Volt | Niveau 1 | 1,2kW |  76 heures |
| 240Volt | NEMA 14-50 pour le pays | 9,6kW |  9,5 heures |
| 230Volt | Type de maison F | 1,8kW |  50,5 heures |
| 400V 32A 3phase | Rouge Industriel |  22KW | 4,5 heures |
| 400V 16A 3phase | Rouge Industriel |  11KW | 9 heures |
| 230V 32A 1phase | Bleu Industriel |  7,2KW | 11,5 heures |
| 230V 16A 1phase | Bleu Industriel |  3,6KW | 23 heures |

### Indicateurs DEL

<figure>
    <a href="https://media.evkx.net/ehga/models/e-tron/technology/onboardcharger/ledlights.webp">
        <img src="https://media.evkx.net/ehga/models/e-tron/technology/onboardcharger/ledlightss.webp"
        class="img-fluid" alt="Led Lights" title="Led Lights">
    </a>
    <figcaption><h4>Lumières à LED</h4></figcaption>
</figure>

<figure>
    <a href="https://media.evkx.net/ehga/models/e-tron/technology/onboardcharger/ledoverview.webp">
        <img src="https://media.evkx.net/ehga/models/e-tron/technology/onboardcharger/ledoverviews.webp"
        class="img-fluid" alt="LED codes" title="LED codes">
    </a>
    <figcaption><h4>Codes DEL</h4></figcaption>
</figure>
