---
translation_status: machine
title: "Chargeur embarqué Audi e-tron GT"
linktitle: "Chargeur embarqué"
description: "Audi e-tron GT et Audi RS e-tron GT disposent d'un chargeur embarqué pour recharger les niveaux 1 et 2."
weight: 5
---
<!-- markdownlint-disable MD033 -->
Le chargeur embarqué est responsable de la conversion de la courant alternatif du mur en courant continu utilisé dans la batterie.

Le chargeur embarqué standard peut être chargé jusqu'à 11KW AC.

Audi e-tron GT et Audi RS e-tron GT ont des ports de recharge des deux côtés des voitures.

Aux Etats-Unis, les ports de recharge ont [J1772 connector](https://en.wikipedia.org/wiki/SAE_J1772) pour se connecter à la voiture, alors qu'en Europe il a une [Type 2 connector](https://en.wikipedia.org/wiki/Type_2_connector).

Le port latéral du conducteur ne prend en charge que la charge en courant alternatif, tandis que le port latéral du passager prend en charge la charge en courant alternatif et en courant continu.

<figure>
    <a href="https://media.evkx.net/ehga/models/e-tron-gt/technology/onboardcharger/chargeport_right.webp">
        <img src="https://media.evkx.net/ehga/models/e-tron-gt/technology/onboardcharger/chargeport_rights.webp"
        class="img-fluid" alt="Passenger side charge port with Type 2 CCS port supporting AC and DC charging" title="Passenger side charge port with Type 2 CCS port supporting AC and DC charging">
    </a>
    <figcaption><h4>Port de recharge côté passager avec port CCS de type 2 supportant la recharge AC et DC</h4></figcaption>
</figure>

<figure>
    <a href="https://media.evkx.net/ehga/models/e-tron-gt/technology/onboardcharger/chargeport_left2.webp">
        <img src="https://media.evkx.net/ehga/models/e-tron-gt/technology/onboardcharger/chargeport_left2s.webp"
        class="img-fluid" alt="Driver charge port with only Type 2 port for AC charging" title="Driver charge port with only Type 2 port for AC charging">
    </a>
    <figcaption><h4>Port de charge du conducteur avec seulement port de type 2 pour recharge en courant alternatif</h4></figcaption>
</figure>

Pour charger la voiture à partir de AC, vous avez besoin d'un Wallbox pour se connecter à ou le [charging system that can connect to the domestic outlet](../chargingsystem).

### Chargeur facultatif 22KW

Vous pouvez commander une unité de recharge supplémentaire pour la voiture (AX5). Cela donne à la voiture 22KW capacité de recharge sur une connexion de 400Volt 32A 3 phases.

Option Id **KB4**

### Unité d'entraînement électrique

Dans l'illustration ci-dessous, vous voyez l'emplacement des unités de charge.

<figure>
    <a href="https://media.evkx.net/ehga/models/e-tron-gt/technology/onboardcharger/electricdrivetrain.webp">
        <img src="https://media.evkx.net/ehga/models/e-tron-gt/technology/onboardcharger/electricdrivetrains.webp"
        class="img-fluid" alt="Electric drive train with the charger location" title="Electric drive train with the charger location">
    </a>
    <figcaption><h4>Train électrique avec emplacement du chargeur</h4></figcaption>
</figure>

 Seule la charge AC passe par le chargeur. Pour la charge DC, le port CCS est directement connecté à la batterie.

### Capacité basée sur le réseau / sortie

| Connexion | Plug  | capacité | charge 100% e-tron GT |
| ------| ------| ---- |------- |
| 120Volt | Niveau 1 | 1,2kW |  76 heures |
| 240Volt | NEMA 14-50 pour le pays | 9,6kW |  9,5 heures |
| 230Volt | Type de maison F | 1,8kW |  50,5 heures |
| 400V 32A 3phase | Rouge Industriel |  22KW | 4,5 heures |
| 400V 16A 3phase | Rouge Industriel |  11KW | 9 heures |
| 230V 32A 1phase | Bleu Industriel |  7,2KW | 11,5 heures |
| 230V 16A 1phase | Bleu Industriel |  3,6KW | 23 heures |


{{<children description="true" />}}
