---
translation_status: machine
title: "Groupe motopropulseur e-tron Audi A2"
linktitle: "Groupe motopropulseur"
description: "Le Audi A2 e-tron utilise la plateforme MEB+ avec des moteurs à l'arrière APP350 et APP550, des batteries LFP et NMC, jusqu'à 183 kW de charge DC et V2L bidirectionnelle et V2H."
weight: 6
---
<!-- markdownlint-disable MD033 -->

L'e-tron A2 est construit sur la plateforme **MEB+ du Groupe Volkswagen**, la version actualisée de l'architecture sous la Volkswagen ID.3 et Cupara Born. Chaque version est **rear-wheel drive** avec un seul moteur sur l'essieu arrière — il n'y a pas de variante quattro dans la gamme de lancement.

{{< evkxfiguresized thumb="models/audi/a2_e-tron/a2_e-tron_240_kw/chassis_6d454_st.webp" width="3000" height="2121" title="Audi A2 e-tron platform and drivetrain" >}}

---

## Moteurs

Deux machines synchrones constamment excitées couvrent les quatre niveaux de puissance :

| Unité d'entraînement | Utilisé par | Puissance | Torque |
|---|---|---:|---:|
| APP350 | 125 kW, 140 kW, 170 kW | jusqu'à 170 kW | 350 Nm |
| APP550 | 240 kW | 240 kW | 545 Nm |

### Ce que Audi a changé dans l'APP350

L'APP350 de l'E-tron A2 est une version retravaillée de l'unité utilisée ailleurs dans le groupe, et Audi dit qu'il fonctionne jusqu'à **10% plus efficacement** que le design précédent. Les changements sont individuellement petits et collectivement décisifs:

- ** semi-conducteurs de silice-carbide** dans l'électronique de puissance, coupe des pertes de commutation
- ** Laminages moteur de 0,2 mm** — plus minces qu'auparavant, réduisant les pertes en fer
- Un enroulement de stator connecté à l'adhésif , qui déplace la bande de fonctionnement efficace du moteur vers l'endroit où la voiture passe son temps
- ** Huile de transmission à faible fraction**
- Un long rapport de réduction **10.2:1**, chute de la vitesse du moteur à la croisière sur route

Le rapport de réduction est en particulier un choix d'efficacité. Un rapport plus court améliorerait l'accélération; le long maintient le moteur tournant lentement sur une autoroute, qui est où une voiture compacte à longue portée gagne ou perd son chiffre WLTP.

---

## Piles

Trois packs sont proposés, liés au niveau de puissance:

| Batterie | Montant brut | Montant net | Chimie | Tension | Configuration | Utilisé par |
|---|---:|---:|---|---:|---|---|
| Petites | 52 kWh | 50 kWh | LFP | 333 V | 104s2p | 125 kW |
| Moyenne | 61 kWh | 58 kWh | LFP | 333 V | – | 140 kW |
| Grandes | 84 kWh | 79 kWh | NMC | 353 V | – | 170 kW, 240 kW |

### Boîtes de produits LFP

Les deux plus petits emballages utilisent des cellules de phosphate de fer de lithium dans une construction de cell-to-pack : les cellules prismatiques sont collées directement dans le boîtier plutôt que assemblées en modules intermédiaires. Cela augmente la densité de l'emballage et réduit la hauteur totale du paquet, ce qui fait partie de la façon dont Audi a maintenu la voiture à 1 583 mm de haut sans sacrifier la tête de chambre.

Le LFP contient ** aucun nickel et aucun cobalt**, est intrinsèquement durable, et — contrairement aux chimies à base de nickel — peut être facturé à **100 % chaque jour** sans la limite de charge quotidienne normalement recommandée. Pour une voiture d'entrée de gamme qui passera la plus grande partie de sa vie sur une boîte murale à domicile, c'est un avantage vraiment pratique.

La courbe de charge LFP est également exceptionnellement plate, ce qui signifie que les 10 à 80 % fois de 24 et 26 minutes sont plus représentatifs des arrêts de charge réels qu'un pic élevé.

### Boîte de NMC

Le pack 84 kWh utilise des cellules de cobalt de manganèse nickel dans une construction modulaire. Il fournit les deux versions les plus puissantes, augmente la tension du système à 353 V et soulève la charge DC à 183 kW.

{{< evkxfiguresized thumb="models/audi/a2_e-tron/a2_e-tron_240_kw/chassis_75605_st.webp" width="3000" height="2121" title="Audi A2 e-tron battery and rear axle" >}}

---

## Chargement

| | 52 kWh | 61 kWh | 84 kWh |
|---|---:|---:|---:|
| Puissance maximale en courant continu | 100 kW | 105 kW | 183 kW |
| DK 10–80% | 24 min | 26 min | 29 min |

Le port de charge se trouve sur le côté arrière ** droit** avec un connecteur **CCS2** pour les marchés européens. Audi a également amélioré son efficacité de charge **AC à 89,6 %**, en hausse de 1,3 point de pourcentage, grâce à un logiciel de refroidissement et de contrôle révisé — un gain qui compte beaucoup plus qu'il ne semble, puisque la charge AC est là où la plupart des propriétaires mettront la plus grande partie de leur énergie dans la voiture.

### Charge bidirectionnelle

L'e-tron A2 peut alimenter l'énergie de la batterie de traction de deux façons:

- **Vehicle-to-Load (V2L)** — alimente l'équipement externe par une prise dans le compartiment à bagages ou un adaptateur au port de recharge
- **Vehicle-to-Home (V2H)** — fournit un système électrique de maison compatible par une boîte murale recommandée par Audi

V2H est initialement offert en Allemagne, Autriche et Suisse. V2L est une option distincte sur certains marchés, y compris la Norvège.

---

## Suspension

L'essieu avant utilise **MacPherson struts**, l'arrière une conception ** multi-lien** — la disposition arrière plus sophistiquée, plutôt que le faisceau de torsion que certaines voitures MEB utilisent à des niveaux de puissance inférieurs.

Trois configurations de suspension sont proposées :

- **Suppression de confort** — la configuration standard, avec ressorts en bobines conventionnels et amortisseurs passifs
- **Sport suspension** — abaissé, ainsi que la configuration incluse dans le pack **efficacité**
- **Suspension avec contrôle de l'amortisseur** — amortissement adaptatif, standard sur la version 240 kW et optionnel ailleurs

La direction est **linéaire** en standard, avec **direction progressive** et son rapport variable disponible en option.

---

## Modes de conduite et récupération

Quatre modes de conduite sont sélectionnables : **confort**, **équilibré**, **efficacité** et **dynamique**.

La récupération est réglable sur **quatre niveaux**. Les paddles derrière le volant sélectionnent D1 à D3 pour une décélération de côte progressivement plus forte, et une position **B** permet une conduite à une seule pédale où la voiture freine pour s'arrêter sur l'accélérateur seul.

Le e-tron A2 a également un calibrage électronique personnalisé de contrôle de stabilité développé spécifiquement pour la disposition de la roue arrière-drive.

---

## Poids et remorquage

| | 125 kW | 140 kW | 170 kW | 240 kW |
|---|---:|---:|---:|---:|
| Poids de la courbure | 1 915 kg | 1 915 kg | 1 985 kg | 2,005 kg |
| Poids total maximal | 2 400 kg | 2 400 kg | 2 400 kg | 2 400 kg |
| Charge utile, y compris le conducteur | 485 kg | 485 kg | – | – |

La capacité de remorquage est de **1 600 kg freinée** et **750 kg non freinée**, avec un poids maximum de **75 kg** de boule de remorquage — chiffres qui placent le e-tron A2 devant la plupart des voitures électriques compactes, qui souvent ne peuvent pas remorquer du tout.

→ [Complete specifications for all four variants](../specifications/)
