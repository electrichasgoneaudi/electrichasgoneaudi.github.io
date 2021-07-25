---
title: Battery pack
linktitle: Battery pack
description: Battery pack to ev are often combined of many hundreds of battery cells.
weight: 3
---

Typical a battery pack consist of modules that consist of serveral cells

## Modules

Modules are a combination of cells. The number of cells in a module varies. 

![Module](module_lg_pouch.jpg "LG battery module")

### Architecture

The cells inside a module can be connected different ways.

- Serial connecting gives a higher voltage
- Paralell connection gives a higher capacity.

#### Example 1 

Below you see how modules on e-tron 55 are. There are 12 cells per module.
They are grouped in 3 groups where 4 cells are connected in paralell. Then those groups are connected in serial giving it
a 3 serial 4 paralell configuration (3s4p). With 60AH for each cell and a nominal voltage on 3.66 this module have a capacity on
240AH and 11 volts.

![Battery](/models/e-tron/drivetrain/battery/95kwhconnection.drawio.svg/ "3s4p connection")

#### Example 2

Below you see how modules on e-tron 50 are. There are 12 cells per module.
They are grouped in 4 groups where 2 cells are connected in paralell. Then those groups are connected in serial giving it
a 4 serial 2 paralell configuration (3s4p). With 60AH for each cell and a nominal voltage on 3.66 this module have a capacity on
180AH and 14.666 volts.

![Battery](/models/e-tron/drivetrain/battery/71kwhconnection.drawio.svg/ "4s3p connection")

### Audi modules

| Module | No of cells | Config | Capacity | Nominal voltage |
|-----|-----|-----|------|------|
|e-tron 55 | 12 | 3s4p | 240AH | 11 volts |
|e-tron 50 | 12 | 4s3p | 180AH | 14.666 volts |
|e-tron GT | 12 | 6s2p | 129.2AH | 22.13 volts |
|Q4 e-tron | 24 | 8s3p | 234AH | 29.16 volts |

## Packs

![Batterypack](batterypack_e-tron-gt.jpg "Batterypack with 33 modules")

{{% children description="true" depth="1" %}}
