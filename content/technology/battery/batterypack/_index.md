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

![Battery](/models/e-tron/drivetrain/battery/95kwhconnection.drawio.svg "3s4p connection")

#### Example 2

Below you see how modules on e-tron 50 are. There are 12 cells per module.
They are grouped in 4 groups where 2 cells are connected in paralell. Then those groups are connected in serial giving it
a 4 serial 2 paralell configuration (3s4p). With 60AH for each cell and a nominal voltage on 3.66 this module have a capacity on
180AH and 14.666 volts.

![Battery](/models/e-tron/drivetrain/battery/71kwhconnection.drawio.svg "4s3p connection")

### Audi modules

| Module | No of cells | Config | Capacity | Nominal voltage |
|-----|-----|-----|------|------|
|e-tron 55 | 12 | 3s4p | 240AH | 11 volts |
|e-tron 50 | 12 | 4s3p | 180AH | 14.666 volts |
|e-tron GT | 12 | 6s2p | 129.2AH | 22.13 volts |
|Q4 e-tron | 24 | 8s3p | 234AH | 29.16 volts |

## Packs

![Batterypack](batterypack_e-tron-gt.jpg "Batterypack with 33 modules")




### Audi Battery packs

#### Battery configuration

|  | Cell type | Cells | Modules | Voltage | Cell config | Gross cap |
|-----|------|-----|-----|------|-----|-----|
| [e-tron 55](/models/e-tron/drivetrain/battery/#battery-audi-e-tron-55) | LGXN2.1 | 432 | 36 | 396 | 108s4p | 95 kWh |
| [e-tron 55*3](/models/e-tron/drivetrain/battery/#battery-audi-e-tron-55) | Samsung | 432 | 36 | 396 | 108s4p | 95 kWh |
| [e-tron 50](/models/e-tron/drivetrain/battery/#battery-audi-e-tron-50) | Samsung | 324 | 27 | 396 | 108s3p | 71 kWh |
| [e-tron GT](/models/e-tron-gt/drivetrain/battery/) | E66A | 396 | 33 | 723 | 196s2p | 93.4 kWh |
| [RS e-tron GT](/models/e-tron-gt/drivetrain/battery/) | E66A | 396 | 33 | 723 | 196s2p | 93.4kWh |
| [Q4 e-tron 50](/models/q4-e-tron/drivetrain/battery/#battery-q4-40-e-tron-and-q4-50-e-tron) |LGX E78 | 288 | 12 | 350 |96s3p | 82 kWh |
| [Q4 e-tron 40](/models/q4-e-tron/drivetrain/battery/#battery-q4-40-e-tron-and-q4-50-e-tron) |LGX E78 | 288 | 12 | 350 |96s3p | 82 kWh |
| [Q4 e-tron 35](/models/q4-e-tron/drivetrain/battery/#battery-q4-35) | LGX E78|  196 | 9 | 350 | 96s2p | 55 kWh |
| [Q6 e-tron](/models/q6-e-tron/drivetrain/battery/)*1 | LGX E78?|  392? | 16? | 700? | 192s2p? | 110 kWh? |
| A6 e-tron *2 | LGX E78?|  392? | 16? | 700? | 192s2p? | 110 kWh? |

#### Battery pack performance

|  | Gross capacity | Net capacity | Max DC Charging | Weight | kWh/kg |
|-----|------|-----|-----|------|-----|
| [e-tron 55](/models/e-tron/drivetrain/battery/#battery-audi-e-tron-55) | 95kWh | 86.5kWh | 150kW | 699kg | 0.136 |
| [e-tron 55*3](/models/e-tron/drivetrain/battery/#battery-audi-e-tron-55) | 95kWh | 86.5kWh | 150kW | 699kg | 0.136 |
| [e-tron 50](/models/e-tron/drivetrain/battery/#battery-audi-e-tron-50) | 71kWh | 64.7kWh | 125kW | 580 | 0.122 |
| [e-tron GT](/models/e-tron-gt/drivetrain/battery/) | 93.4kWh | 83.7kWh | 270kW | 630kg | 0.148 |
| [RS e-tron GT](/models/e-tron-gt/drivetrain/battery/) | 93.4kWh | 83.7kWh | 270kW | 630kg | 0.148 |
| [Q4 e-tron 50](/models/q4-e-tron/drivetrain/battery/#battery-q4-40-e-tron-and-q4-50-e-tron) | 82kWh | 77kWh | 125kW | 493kg | 0.188 |
| [Q4 e-tron 40](/models/q4-e-tron/drivetrain/battery/#battery-q4-40-e-tron-and-q4-50-e-tron) | 82kWh | 77kWh | 125kW | 493kg | 0.188 |
| [Q4 e-tron 35](/models/q4-e-tron/drivetrain/battery/#battery-q4-35) | 55kWh | 52kWh | 100kW | 344kg | 0.160 |


*1 Audi Q6 details is not yet confirmed.

*2 Audi A6 details is not yet confirmed.

*3 From January 2021 Audi uses Samsung cells on e-tron 55


{{% children description="true" depth="1" %}}
