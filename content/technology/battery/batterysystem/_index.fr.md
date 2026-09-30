---
translation_status: machine
title: "Système de batterie"
linktitle: "Système de batterie"
description: "Le système de batterie est la combinaison de nombreuses cellules et d'autres électroniques de contrôle à une batterie complète pour alimenter l'EV."
weight: 3
---
<!-- markdownlint-disable MD033 -->
Aujourd'hui, c'est le plus souvent avec la construction de cellules à modules : les cellules sont regroupées en modules, qui sont ensuite assemblées en batterie.

La construction de cellules à emballages élimine les modules conventionnels et intègre les cellules directement dans le pack. Les conceptions de cellules à corps vont plus loin en faisant de la structure de la batterie une partie de la carrosserie du véhicule.

Un pack de batterie typique est constitué de modules contenant plusieurs cellules.

## Modules

Les modules sont une combinaison de cellules. Le nombre de cellules dans un module varie.

<figure>
    <a href="https://media.evkx.net/ehga/technology/battery/batterysystem/module_lg_pouch.webp">
        <img src="https://media.evkx.net/ehga/technology/battery/batterysystem/module_lg_pouch.webp"
        class="img-fluid" alt="LG battery module" title="LG battery module">
    </a>
    <figcaption><h4>Module de batterie LG</h4></figcaption>
</figure>

### Architecture

Les cellules à l'intérieur d'un module peuvent être connectées de différentes manières.

- La connexion en série donne une tension plus élevée
- La connexion parallèle donne une capacité plus élevée.

#### Exemple 1

Ci-dessous vous voyez comment sont les modules sur l'E-tron 55 Audi. Il y a 12 cellules par module. Elles sont regroupées en 3 groupes où 4 cellules sont reliées en parallèle. Ensuite, ces groupes sont connectés en série lui donnant une configuration parallèle 3 série 4 (3s4p). Avec 60AH pour chaque cellule et une tension nominale de 3,66 volts, ce module a une capacité de 240AH et 11 volts.

![Battery](/fr/models/e-tron/drivetrain/battery/95kwhconnection.drawio.svg%20%223s4p%20connection%22)

#### Exemple 2

Ci-dessous vous voyez comment sont les modules sur l'E-tron 50 Audi. Il y a 12 cellules par module. Elles sont regroupées en 4 groupes où 2 cellules sont reliées en parallèle. Ensuite, ces groupes sont connectés en série lui donnant une configuration parallèle 4 série 2 (3s4p). Avec 60AH pour chaque cellule et une tension nominale de 3,66 volts, ce module a une capacité de 180AH et 14.666 volts.

![Battery](/fr/models/e-tron/drivetrain/battery/71kwhconnection.drawio.svg%20%224s3p%20connection%22)

### Modules Audi

| Module | Nombre de cellules | Config | Capacité AH | Tension nominale | kWh |
|-----|-----|-----|------|------|
|e-tron 55 | 12 | 3s4p | 240AH | 11 volts | 2,640 kWh |
|É-tron 50 | 12 | 4s3p | - 180 heures | 14,666 volts | 2,640 kWh |
|e-tron GT | 12 | 6s2p | 129,2AH | 21.909 volts | 2,830kWh |
|T4 e-tron | 24 | 8s3p | ÊTRE | 29.16 volts | 6,825kWh |

## Boîtes

Les batteries sont constituées de plusieurs modules placés dans une construction qui est créée pour les protéger et leur donner des conditions optimales. Ci-dessous vous voyez un pack de batteries d'Audi e-tron GT.

<figure>
    <a href="https://media.evkx.net/ehga/technology/battery/batterysystem/batterypack_e-tron-gt.webp">
        <img src="https://media.evkx.net/ehga/technology/battery/batterysystem/batterypack_e-tron-gts.webp"
        class="img-fluid" alt="Battery pack with 33 modules" title="Battery pack with 33 modules">
    </a>
    <figcaption><h4>Batterie avec 33 modules</h4></figcaption>
</figure>

Typiquement, le paquet est placé au bas de la voiture.

### Kits de batteries Audi

Aujourd'hui, tous les modèles Audi utilisent la technologie Cell2Module

#### Configuration du bloc de batteries

|  | Type de cellule | Cellules | Modules | Tension | Configment de cellules | Taux brut |
|-----|------|-----|-----|------|-----|-----|
| [e-tron 55](/fr/models/e-tron/drivetrain/battery/#battery-audi-e-tron-55) | LGXN2.1 | 432 | 36 | 396 | 108s4p | 95 kWh |
| [e-tron 55*3](/fr/models/e-tron/drivetrain/battery/#battery-audi-e-tron-55) | Samsung | 432 | 36 | 396 | 108s4p | 95 kWh |
| [e-tron 50](/fr/models/e-tron/drivetrain/battery/#battery-audi-e-tron-50) | Samsung | 324 | 27 | 396 | 108s3p | 71 kWh |
| [e-tron GT](/fr/models/e-tron-gt/drivetrain/battery/) | E66A | 396 | 33 | 723 | 196s2p | 93,4 kWh |
| [RS e-tron GT](/fr/models/e-tron-gt/drivetrain/battery/) | E66A | 396 | 33 | 723 | 196s2p | 93,4kWh |
| [Q4 e-tron 50](/fr/models/q4-e-tron/drivetrain/battery/#battery-q4-40-e-tron-and-q4-50-e-tron) |LGX E78 | 288 | 12 | 350 |96s3p | 82 kWh |
| [Q4 e-tron 40](/fr/models/q4-e-tron/drivetrain/battery/#battery-q4-40-e-tron-and-q4-50-e-tron) |LGX E78 | 288 | 12 | 350 |96s3p | 82 kWh |
| [Q4 e-tron 35](/fr/models/q4-e-tron/drivetrain/battery/#battery-q4-35) | LGX E78|  196 | 9 | 350 | 96s2p | 55 kWh |
| [Q6 e-tron](/fr/models/q6-e-tron/drivetrain/battery/)*1 | LGX E78 ?|  392? | 16? | 700? | 192s2p ? | 110 kWh ? |
| A6 e-tron *2 | LGX E78 ?|  392? | 16? | 700? | 192s2p ? | 110 kWh ? |

#### Performance du pack de batterie

Dans le tableau ci-dessous, vous voyez les performances du pack. Voyez comment Q4 a une densité plus élevée même la cellule elle-même n'a pas une meilleure densité.

|  | Capacité brute | Capacité nette | Charges max DC | Poids | kWh/kg |
|-----|------|-----|-----|------|-----|
| [e-tron 55](/fr/models/e-tron/drivetrain/battery/#battery-audi-e-tron-55) | 95kWh | 86,5 kWh | 150kW | 699 kg | 0.136 |
| [e-tron 55*3](/fr/models/e-tron/drivetrain/battery/#battery-audi-e-tron-55) | 95kWh | 86,5 kWh | 150kW | 699 kg | 0.136 |
| [e-tron 50](/fr/models/e-tron/drivetrain/battery/#battery-audi-e-tron-50) | 71kWh | 64,7kWh | 125kW | 580 | 0.122 |
| [e-tron GT](/fr/models/e-tron-gt/drivetrain/battery/) | 93,4kWh | 83,7kWh | 270kW | 630 kg | 0.148 |
| [RS e-tron GT](/fr/models/e-tron-gt/drivetrain/battery/) | 93,4kWh | 83,7kWh | 270kW | 630 kg | 0.148 |
| [Q4 e-tron 50](/fr/models/q4-e-tron/drivetrain/battery/#battery-q4-40-e-tron-and-q4-50-e-tron) | 82kWh | 77kWh | 125kW | 493 kg | 0.188 |
| [Q4 e-tron 40](/fr/models/q4-e-tron/drivetrain/battery/#battery-q4-40-e-tron-and-q4-50-e-tron) | 82kWh | 77kWh | 125kW | 493 kg | 0.188 |
| [Q4 e-tron 35](/fr/models/q4-e-tron/drivetrain/battery/#battery-q4-35) | 55kWh | 52kWh | 100kW | 344 kg | 0.160 |
| [Q8 50 e-tron](/fr/models/q8-e-tron/drivetrain/battery/#battery-audi-e-tron-55) | 95kWh | 89kWh | 150kW | 699 kg | 0.136 |
| [Q8 55 e-tron / SQ8](/fr/models/q8-e-tron/drivetrain/battery/#battery-audi-e-tron-55) | 114kWh | 104Wh | 170kW | 727 kg | 0.157 |



*1 Audi Q6 détails ne sont pas encore confirmés.

*2 Les détails de Audi A6 ne sont pas encore confirmés.

*3 A partir de janvier 2021 Audi utilise des cellules Samsung sur e-tron 55

## Quelle est la prochaine pour Audi ?

Le problème avec l'approche actuelle avec Cell2Modules est que la densité d'énergie du système de batterie est beaucoup plus faible que celle du niveau cellulaire. C'est à cause de tous les éléments structuraux d'une batterie qui n'ajoute aucune teneur en énergie à un pack de batterie.

La construction de cellules à emballages peut réduire les matériaux structurels inactifs en plaçant les cellules directement dans le pack plutôt que dans des modules distincts. Cela peut améliorer la densité énergétique de pack et réduire le poids, mais la mise en œuvre et les avantages varient entre les fabricants et les conceptions de batteries.

Le 15 mars 2021, Volkswagen Group a présenté sa stratégie de batterie à Power Day. Le matériel suivant reflète cette stratégie de 2021 et ne doit pas être considéré comme un calendrier de lancement actuel du modèle Audi.

<figure>
    <a href="https://media.evkx.net/ehga/technology/battery/batterysystem/cell2pack.webp">
        <img src="https://media.evkx.net/ehga/technology/battery/batterysystem/cell2packs.webp"
        class="img-fluid" alt="Volkswagen Cell2Pack technology" title="Volkswagen Cell2Pack technology">
    </a>
    <figcaption><h4>Volkswagen Cell2Pack technologie</h4></figcaption>
</figure>

<figure>
    <a href="https://media.evkx.net/ehga/technology/battery/batterysystem/cell2packcomparison.webp">
        <img src="https://media.evkx.net/ehga/technology/battery/batterysystem/cell2packcomparisons.webp"
        class="img-fluid" alt="Volkswagen Cell2Pack comparison" title="Volkswagen Cell2Pack comparison">
    </a>
    <figcaption><h4>Comparaison Volkswagen Cell2Pack</h4></figcaption>
</figure>

Voir la présentation complète.

{{< youtube UQZ8KmCItF8 >}}
