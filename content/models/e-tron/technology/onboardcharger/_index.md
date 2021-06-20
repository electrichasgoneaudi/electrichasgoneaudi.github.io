---
title: Onboard Charger
linktitle: Onboard Charger
description: Audi e-tron has an onboard charger for level 1 and level 2 charging.
weight: 2
---


The onboard charger is responsible for converting AC to DC.

The standard onboard charger support up to 11KW AC charging

In the US the charging port has a [J1772 connector](https://en.wikipedia.org/wiki/SAE_J1772) to connect to the car, while in Europe it has a [Type 2 connector](https://en.wikipedia.org/wiki/Type_2_connector).

![Charge port](chargeport_left.jpg "Type 2 Chargeport")

To charge the car from AC you need a Wallbox to connect to or the [charging system that can connect to the domestic outlet](../chargingsystem). 


### Optional charge port

You can order an additional chargeport on the passenger side. This is option ID **JS1**

![Passenger charge port](chargeport_right.jpg "Additional passenger side charge port")

### Optional 22KW charger

You can order an additional charging unit to the car (AX5). This gives the car 22KW charging capability on 400Volt 32A 3 phases connection.

You need to order the additional port **JS1** and the [Audi Charging System Connect](/models/e-tron/technology/chargingsystem/#e-tron-charging-system-connect) **NW2**

### Electric drive unit

In the illustration below you see the location of the charge units.

![Electric drive](electricdrivetrain.jpg "Electric drive train with standard and optinal charger location")

 Only AC charging goes throug the charger. For DC charging the CCS port is directly connected to the battery.

![Wiring](wiringdiagram.jpg "Chargport/charger wiring")


### Capacity based on network / outlet

| Connection | Plug  | capacity | charging 100%  e-tron 55 |
| ------| ------| ---- |------- |
| 120Volt | Level 1 Domestic NEMA 5-20 | 1.2kW |  76 hours |
| 240Volt | Domestic NEMA 14-50 | 9.6kW |  9.5 hours |
| 230Volt | Domestic Type F | 1.8kW |  50.5 hours |
| 400V 32A 3phase | Red Industrial |  22KW | 4.5 hours |
| 400V 16A 3phase | Red Industrial |  11KW | 9 hours |
| 230V 32A 1phase | Blue Industrial |  7.2KW | 11.5 hours |
| 230V 16A 1phase | Blue Industrial |  3.6KW | 23 hours |


### LED Indicators

![LED](ledlights.jpg "Led Lights")

![LED](ledoverview.jpg "LED codes")

{{% children description="true" depth="1" %}}
