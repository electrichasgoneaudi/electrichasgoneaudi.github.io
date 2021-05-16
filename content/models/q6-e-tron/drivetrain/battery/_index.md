---
title: Audi A6 e-tron battery
linktitle: Battery
description: The lithium-ion battery system of the Audi A6 e-tron can store more than 100 kWh of energy and uses 800 volt system.
weight: 7
---

That is the only fact what we now at current time. There is no clear information if the 100kWh is net or gross, but based on the range stated for A6 the assumption
is that it is net.

Below you find some possible setups based on this information and the fact that Audi/Porsche/Wolkswagen use LC Chem on many other models.

## 800 Volt with LG Chem E78X

This scenario assume that PPE will use same battery cells as the MEB platform.

| **Spec** |  **value** |
|-----|-----|
| Manufacturer |  LG Chem |
| Model | LGX E78 |
| Voltage | 3,65 V |
| Capacity | 78 Ah |
| Weight | 1.073 g |
| Gravimetric energy density | 265 Wh/kg |
| Chemistry | NCM 712 |

On e-tron GT  the battery configuration is 198s2p. Meaning 396 cells in total with 2 cells in paralell and 198 cells in serial.
This is done with the LG Cell 66E cell.

If you use LG Chem E78X on the same configuration you get.

78Ah x 2 x 3,65Volt x 198 = 112.74 kWh Gross. This would mean a net capacity on 100-106kWh depending on the buffers that Audi/Porsche want to enforce.

On the MEB platform the setup is 96s2p or 96s3p.  If you assume that Audi/Porsche does want to double it so it goes for 192s2p to get 800 volt you get.

78Ah x 2 x 3,65Volt x 192 = 112.74 kWh Gross. This would mean a net capacity on 100-106kWh depending on the buffers that Audi/Porsche want to enforce.

## 800 Volt with LG Chem E66A

To get more than 100kWh you would then need to change to a 196s3p setup if voltage is kept the same. This is very unlikly. But will give

64.6Ah x 3 x 3,651515Volt x 198 = 140 kWh gross.

The battery would then be around 950kg heavy. 

{{% children description="true" depth="1" %}}
