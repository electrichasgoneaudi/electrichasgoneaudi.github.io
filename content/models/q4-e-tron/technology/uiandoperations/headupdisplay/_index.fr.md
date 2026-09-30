---
translation_status: machine
title: "Audi Q4 e-tron écran tête vers le haut"
linktitle: "Affichage de la tête vers le haut"
description: "Avec l'affichage de la tête vers le haut de réalité augmentée en option dans les e-trons Q4 et Q4 Sportback, Audi fait un grand pas en avant dans la technologie d'affichage."
weight: 3
---
<!-- markdownlint-disable MD033 -->
 L'affichage reflète des informations importantes via le pare-brise sur deux niveaux distincts, la section de statut et la section de réalité augmentée (AR). Les informations fournies par certains des systèmes d'assistance et les flèches de virage du système de navigation ainsi que ses points de départ et destinations sont visuellement superposées à la place correspondante sur le monde réel extérieur comme contenu de la section AR et affichées dynamiquement. Ils semblent flotter à une distance d'environ dix mètres du conducteur. Selon la situation, ils peuvent apparaître beaucoup plus loin dans certains cas. Le conducteur peut comprendre les écrans très rapidement sans être confondu ou distrait par eux, et ils sont extrêmement utiles dans des conditions de visibilité médiocres.

Le champ de vision du contenu AR de la perspective du conducteur équivaut à une diagonale d'environ 70 pouces. Ci-dessous, il est une fenêtre de zone de champ proche plat, connue sous le nom de section d'état. Il affiche la vitesse conduite et les panneaux de circulation ainsi que le système d'assistance et les symboles de navigation comme des écrans statiques. Il semble planer environ trois mètres devant le conducteur.

<figure>
    <a href="https://media.evkx.net/ehga/models/q4-e-tron/technology/uiandoperations/headupdisplay/headup.webp">
        <img src="https://media.evkx.net/ehga/models/q4-e-tron/technology/uiandoperations/headupdisplay/headups.webp"
        class="img-fluid" alt="Headup display" title="Headup display">
    </a>
    <figcaption><h4>Affichage de l'entête</h4></figcaption>
</figure>

### Le cœur du système : l'unité de génération d'images

Le cœur technique de l'écran de tête de la réalité augmentée est l'unité de génération d'images (PGU), située au plus profond du long panneau de bord. Un LCD particulièrement lumineux dirige les faisceaux lumineux qu'il génère sur deux miroirs de niveau, et des composants optiques spéciaux séparent les parties pour les zones proches du champ et distantes. Les miroirs de niveau dirigent les faisceaux sur un grand miroir concave qui peut être réglé électriquement. De là, ils atteignent le pare-brise, qui les reflète dans ce qu'on appelle la boîte à paupières et donc sur les yeux du conducteur. A une distance apparente de dix mètres, voire plus loin selon la situation, le conducteur voit les symboles aussi clairement que leur environnement réel.

<figure>
    <a href="https://media.evkx.net/ehga/models/q4-e-tron/technology/uiandoperations/headupdisplay/headupunit.webp">
        <img src="https://media.evkx.net/ehga/models/q4-e-tron/technology/uiandoperations/headupdisplay/headupunits.webp"
        class="img-fluid" alt="Headup display unit" title="Headup display unit">
    </a>
    <figcaption><h4>Unité d'affichage de l'entête</h4></figcaption>
</figure>

### Générateur d'images prédictives : le Créateur AR

Ce qu'on appelle le Créateur AR sert de maître-penseur et de générateur d'images du côté logiciel – c'est une unité de traitement de la plate-forme modulaire d'infodivertissement (MIB 3) qui est composée de plusieurs modules individuels. Le Créateur AR rend les symboles d'affichage à un rythme de 60 images par seconde et les adapte à la géométrie de l'optique de projection. En même temps, il calcule leur emplacement par rapport à l'environnement, sur lequel il obtient des informations via les données brutes de la caméra avant, du capteur radar et de la navigation GPS. Son logiciel se compose d'environ 600 000 lignes de code de programmation, environ 50% de plus que l'ensemble du système de contrôle de la première version de la navette spatiale.

Pendant l'exécution de son travail informatique, le Créateur AR tient compte du fait qu'il y a toujours quelques fractions de seconde entre l'identification d'un objet par les capteurs et la sortie du contenu graphique. Pendant ces brèves fenêtres de temps, letron Q4 peut changer considérablement sa position, que ce soit en raison du freinage ou d'un trou de pot. Plusieurs calculs sont effectués en continu pour s'assurer que l'affichage dans la boîte oculaire ne saute pas dans la mauvaise position. L'un d'eux se déroule dans le logiciel de la caméra. Dans un autre calcul, il évalue le mouvement vertical sur la base des données fournies par la caméra, le radar et les capteurs du contrôle de stabilisation (ESC).Ces indications sont intégrées dans la compensation -Shake, qui a lieu quelques millisecondes avant la sortie de l'image et dont la tâche est d'éviter toute perturbation de l'affichage.

<figure>
    <a href="https://media.evkx.net/ehga/models/q4-e-tron/technology/uiandoperations/headupdisplay/headup2.webp">
        <img src="https://media.evkx.net/ehga/models/q4-e-tron/technology/uiandoperations/headupdisplay/headup2s.webp"
        class="img-fluid" alt="Headup display" title="Headup display">
    </a>
    <figcaption><h4>Affichage de l'entête</h4></figcaption>
</figure>

### Navigation : le drone vole devant

Sur la route, ce qu'on appelle le drone – une flèche flottante – montre le point d'action suivant sur la route. Il est dynamique : En approchant d'une intersection, par exemple, la flèche flottante annonce d'abord la manœuvre de virage avant qu'une flèche animée ne dirige avec précision le conducteur sur la route. Si la route continue alors tout droit, le drone vole en avant et disparaît pour revenir avec suffisamment de temps avant le point d'action suivant. La distance jusqu'au point de virage est affichée en mètres dans la fenêtre inférieure de la zone proche du champ.

Même si le conducteur a activé l'assistance de croisière adaptative, qui maintient la voiture au centre de la voie, l'affichage de la tête vers le haut de la réalité augmentée les aide avec des conseils visuels. Dès que le Q4 e-tron approche d'un marquage de voie sans que le signal de virage ait été activé, l'avertissement de départ de voie superpose le marquage de la voie réelle avec une ligne rouge. Un autre exemple est la régulation par rapport à un véhicule conduisant devant : Si elle est active, la voiture est marquée sur l'affichage avec une bande colorée – cela permet au conducteur de comprendre l'état de l'assistance de croisière adaptative ou le contrôle de croisière adaptative sans être distrait. Un marquage rouge et un symbole d'avertissement apparaissent si l'aide de croisière adaptative incite le conducteur à vérifier qu'il fait attention.

<figure>
    <a href="https://media.evkx.net/ehga/models/q4-e-tron/technology/uiandoperations/headupdisplay/headup3.webp">
        <img src="https://media.evkx.net/ehga/models/q4-e-tron/technology/uiandoperations/headupdisplay/headup3s.webp"
        class="img-fluid" alt="Headup display" title="Headup display">
    </a>
    <figcaption><h4>Affichage de l'entête</h4></figcaption>
</figure>
