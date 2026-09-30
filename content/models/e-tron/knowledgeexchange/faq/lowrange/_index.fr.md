---
translation_status: machine
title: "Pourquoi mon e-tron Audi affiche-t-il une portée plus faible que prévu?"
linktitle: "Portée"
description: "Les questions les plus courantes sont liées à la raison pour laquelle les propriétaires d'Audi e-tron ont l'expérience que la voiture montre une plage de vision plus faible que spécifiée."
weight: 30
hidden: true
---

## Quelle est la plage/consommation spécifiée?

Audi ne donne pas qu'un seul numéro sur la gamme. La gamme varie beaucoup entre les variantes et en fonction du niveau de la garniture.

En Europe, ils utilisent WLTP pour calculer la plage et aux États-Unis, ils utilisent l'EPA pour calculer la plage. Ces chiffres sont généralement différents parce que le cycle d'entraînement de ces deux tests n'est pas le même.

### Portée WLTP

Le tableau ci-dessous montre la plage mesurée selon la norme WLTP. Notez la différence entre un Audi e-tron équipé minimum et un Audi e-tron équipé maximum.

| Variante | Portée WLTP | Consommation km | Kilométrages de consommation |
|-------|-----------|-----------|------|
| Audi e-tron 50 min de garniture |  341km/212 milles | 18.97/100km | 3,28milles/kWh |
| Audi e-tron 55 min de garniture |  441km/274 milles | 19.61/100km | 3.17milles/kWh |
| Découpe de la mini-support Audi e-tron S |  374km/232 milles | 23.13/100km | 2,69milles/kWh |
| Audi e-tron 50 max parures |  282 km/175 milles | 22,94/100km | 2,71milles/kWh |
| Audi e-tron 55 max parures |  369km/229 milles | 23.44/100km | 2,65milles/kWh |
| Audi e-tron S garniture max |  343km/213 milles | 25.22/100km | 2,46milles/kWh |

### Gamme EPA

| Variante | Gamme EPA | Consommation km | Kilométrages de consommation |
|-------|-----------|-----------|------|
| Audi e-tron 55 max parures |  357km/222 milles | 24.23/100km | 2,57milles/kWh |
| Audi e-tron S garniture max |  291km/181 milles | 25.22/100km | 2,09milles/kWh |

Dans la publicité, le niveau minimal de garniture est souvent utilisé lorsqu'ils déclarent la gamme soit en WLTP ou en EPA numéros.

De nombreux consommateurs ne savent pas que l'ajout de plus d'équipement comme les roues plus grandes réduit la gamme nominale.

## Exemples de gammes de produits du monde réel

Les propriétaires réagissent généralement lorsque leur gamme estimée d'e-tron Audi est beaucoup plus faible que celle annoncée par Audi. Ci-dessous vous voyez quelques exemples de gammes affichées par les utilisateurs dans différents groupes de médias sociaux.

![Low range](https://media.evkx.net/ehga/models/e-tron/knowledgeexchange/faq/lowrange/lowrangeexample.webp)

## Pourquoi la voiture estime-t-elle cette plage?

L'indicateur de la fourchette de valeurs se base sur les données suivantes :

- Consommation moyenne sur les 100km/62 milles parcourus
- L'état de charge (de beaucoup est la batterie chargée)
- L'itinéraire prévu dans le système de navigation

Supposons donc que vous ayez un e-tron 55 avec une batterie de 86,5kWh et que vous l'avez chargé à 100%.

Si vous vérifiez les données de conduite dans l'application myAudi sur la mémoire à court terme, vous verrez vos disques.

![Triphistory](https://media.evkx.net/ehga/models/e-tron/knowledgeexchange/faq/lowrange/triphistory.webp "Triphistory")

Si nous calculons la plage en fonction de la consommation sur 24.12 avec 30.3 kWh/100km nous obtenons

86.5/30.3 = 285km.

Même calcul en miles 2,1mi/kWh

86,5*2.1 = 181 milles.

Mais c'est la meilleure hypothèse basée sur les voyages précédents. Si vous changez de comportement sur le prochain voyage, la fourchette calculée serait erronée.

Si vous avez fait beaucoup de courts trajets par temps froid, vous auriez dépensé beaucoup d'énergie pour chauffer la voiture. Mais cette consommation moyenne n'est pas pertinente si vous prenez le lendemain un long trajet. La voiture sous-estimerait alors la gamme.

Si une route est définie dans le système de navigation de la voiture, la voiture ajusterait la plage en fonction de l'altitude et de la route à l'avant.

## Les chiffres ne correspondent pas, peut-il y avoir quelque chose de mal ?

Si votre consommation moyenne lors de notre dernier voyage ne correspond pas à la plage estimée, cela pourrait être un problème avec votre Audi e-tron.

Nous avons vu des exemples de défauts qui causent une faible portée.

La première chose à faire est de calculer la capacité de la batterie, vous êtes donc sûr qu'il y a un problème. Cela vous faciliterait également la documentation de votre concessionnaire.

Lisez ce guide pour [calculate and verify your Audi e-tron battery status](../../../../../guides/checkingbatteryhealth/)

Si vous en arrivez à la conclusion que la capacité de la batterie est beaucoup plus faible que la capacité spécifiée, il se peut que ce soit l'un des problèmes suivants.

- [Defect battery module](https://github.com/electrichasgoneaudi/etron-issues/issues/9)
- [Defect BMS module](https://github.com/electrichasgoneaudi/etron-issues/issues/58)

## En savoir plus sur la gamme

Lire notre guide complet de gamme **[Understanding range](../../../../../guides/understandingrange/)** Voir les spécifications complètes sur toutes les variantes de [Audi e-tron](../../../specifications).
