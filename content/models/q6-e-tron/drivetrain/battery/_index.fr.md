---
translation_status: machine
title: "Batterie e-tron Audi Q6"
linktitle: "Batterie"
description: "Le système de batteries lithium-ion du véhicule électrique électrique Audi Q6 peut stocker 100 kWh d'énergie et utilise un système de 800 volts."
weight: 7
sectiontabs: "/models/q6-e-tron/drivetrain/"
---

La série Q6 e-tron, construite à Ingolstadt, est le premier modèle à haute puissance entièrement électrique fabriqué sur un site Audi allemand. Simultanément, la marque avec les quatre anneaux consolide de nouvelles compétences et technologies au siège de son entreprise avec l'assemblage de la batterie haute tension (HV) nouvellement développée pour la Premium Platform Electric (PPE). Grâce à la nouvelle batterie, Audi augmente progressivement la gamme verticale de fabrication pour les modèles entièrement électriques et rassemble l'expérience pour la production de modules de batterie plus loin dans la gamme.

Dans le cadre de la production de la série d'e-trons Audi Q6, environ 1 000 piles haute tension (HV) sont assemblées chaque jour sur une surface d'environ 30 000 mètres carrés. Un total d'environ 300 employés travaillent en trois équipes. Le taux d'automatisation atteint environ 90 pour cent. Pour chaque batterie haute tension, le temps de fabrication passe d'environ deux heures à seulement 55 minutes. Comparé aux systèmes de batterie utilisés par Audi, la batterie de l'EPI ne comprend que douze modules avec un total de 180 piles prismatiques. L'agrandissement significatif des cellules correspond étroitement à la tension du système de 800 volts pour atteindre le meilleur équilibre possible entre la portée et les performances de charge.

{{< sitefiguresized thumb="https://media.evkx.net/ehga/models/q6-e-tron/drivetrain/battery/battery_1_st.webp" width="3000" height="1969" title="100Kwh gross pack, 12 modules" >}}

Pour l'EPI, le rapport entre le nickel et le cobalt et le manganèse dans les cellules est d'environ 8:1:1, avec une proportion réduite de cobalt et une proportion accrue de nickel, ce qui est particulièrement important pour la densité énergétique.

La réduction du nombre de modules pour les batteries PPE offre une gamme d'avantages. La batterie, qui peut être utilisée modulairement pour les modèles à planchers hauts et plats, nécessite moins d'espace d'installation, est plus légère et peut être intégrée dans la structure de choc du véhicule et le système de refroidissement. Elle nécessite également moins de câbles et de connecteurs à haute tension. Le nombre de fixations boulonnées a été considérablement réduit. De plus, les connexions électriques entre les modules sont plus courtes, ce qui réduit considérablement les pertes et le poids. Les jupes latérales de protection en acier à chaud ne sont pas fixées à la batterie, mais bien fixées de façon très sûre au corps. Le revêtement sous-corps en matériau composite fibre est également nouveau. Cette construction réduit encore le poids et améliore l'isolation thermique entre la batterie et l'environnement.

## Capacité de la batterie 100 kWh et puissance de charge jusqu'à 270 kW

La batterie HV pour l'EPI a été développée à partir de la mise en place et sa structure a été simplifiée. Elle est équipée de douze modules et 180 cellules et a une capacité de stockage brute de 100 kWh (94,9 net). Pour chaque module, 15 cellules électrochimiques sont connectées en série. La puissance de charge maximale de la batterie 100 kWh est de 270 kW.

{{< sitefiguresized thumb="https://media.evkx.net/ehga/models/q6-e-tron/drivetrain/battery/cell_1_st.webp" width="3000" height="1783" title="Battery module with 15 x 152 ah cells" >}}

Une variante d'une capacité de 83 kWh est également disponible pour la série d'e-trons Audi Q6. Cette dernière est composée de dix modules et 150 cellules. Grâce à une chimie cellulaire optimisée et une gestion thermique performante, la batterie de 100 kWh peut être chargée de 10 à 80 % en 21 minutes dans une station de recharge rapide appropriée.

Le contrôleur de gestion de batterie (BMC), un appareil de commande central spécialement développé pour l'EPI, est responsable du contrôle actuel nécessaire pour une charge rapide et économique. Le BMC est complètement intégré dans la batterie HV. Dans le cadre d'une surveillance permanente, les contrôleurs de 12 modules cellulaires (CMS) envoient des données telles que la température du module actuel ou la tension cellulaire au BMC, qui envoie ses informations, par exemple concernant l'état de changement (SoC), à l'ordinateur haute performance HCP 4 (partie de la nouvelle architecture électronique E3 1.2). Ce dernier envoie à son tour des données à la nouvelle gestion thermique prédictive, qui régule la circulation de refroidissement ou de chauffage au besoin pour une performance optimale de la batterie.

Si une borne de recharge fonctionne avec une technologie de 400 volts, il est possible de recharger pour la première fois la batterie de 800 volts. La batterie de 800 volts est automatiquement divisée en deux batteries à tension égale, qui peuvent ensuite être chargées parallèlement à 135 kW. Les deux moitiés de la batterie sont d'abord amenées au même niveau de charge et ensuite chargées ensemble.

{{< sitefiguresized thumb="https://media.evkx.net/ehga/models/q6-e-tron/drivetrain/battery/bankcharging_1_st.webp" width="3000" height="1783" title="Battery module with 15 x 152 ah cells" >}}


## Gestion thermique efficace pour une durée de charge plus courte, une plus grande autonomie et une durée de vie plus longue

La gestion thermique intelligente apporte une contribution essentielle à la performance de charge élevée et à la durée de vie de la batterie HV dans l'EPI. La composante la plus importante est la gestion thermique prédictive, qui utilise les données de la navigation, de l'itinéraire, du minuteur de départ et du comportement d'utilisation du client pour calculer le besoin de refroidissement ou de chauffage à l'avance, ainsi que pour fournir ces données à la fois efficacement et au bon moment.

Si la température est très élevée, la gestion thermique ajuste la batterie HV en le refroidissant de façon à éviter une plus forte contrainte thermique.

Si le client ne fournit aucune information permettant de déduire des données prédictives, un algorithme standard régule la gestion thermique de la batterie HV. Cet algorithme recueille également beaucoup d'informations et réagit à la situation de conduite. Si, par exemple, le conducteur a sélectionné le mode d'efficacité dans le menu de sélection du lecteur, le conditionnement de la batterie est activé plus tard et la plage réelle peut être augmentée en fonction du comportement de conduite. En mode dynamique, le but est de fournir des performances optimales. Cependant, si la situation actuelle du trafic ne permet pas de conduire dynamiquement, la gestion thermique réagira à cela et minimisera l'utilisation d'énergie pour le conditionnement de la batterie.

La post-conditionnement et le conditionnement continu sont également nouveaux dans la gestion thermique de l'EPI. Ces fonctions surveillent la température de la batterie pour toute la durée de vie de la voiture de sorte que la batterie est maintenue dans la plage de température optimale même lorsque le véhicule ne bouge pas – par exemple en cas de températures extérieures chaudes.

En raison de l'homogénéité de température élevée de la batterie, les performances peuvent être augmentées - c'est pourquoi le liquide de refroidissement est dirigé en dessous des modules selon le principe du flux U. La plaque de refroidissement de la batterie est également un composant structurel de la batterie, ce qui permet d'éliminer un panneau de plancher supplémentaire dans l'espace HV du boîtier de la batterie et d'optimiser la connexion thermique aux modules à l'aide d'une pâte thermoconductrice.

## Courbe de charge

Ci-dessous est la courbe de charge pour la batterie de 100 kWh. Source [EVKX.net](https://evkx.net/models/audi/q6_e-tron/q6_e-tron_quattro/chargingcurve/)


<figure>
    <a href="https://evkx.net/images/models/audi/q6_e-tron/q6_e-tron_quattro/chargingcurve.svg">
        <img src="https://evkx.net/images/models/audi/q6_e-tron/q6_e-tron_quattro/chargingcurve.svg"" class="img-fluid" alt="Charging Curve" title="Charging Curve">
    </a>
    <figcaption><h4>Courbe de charge</h4></figcaption>
</figure>
