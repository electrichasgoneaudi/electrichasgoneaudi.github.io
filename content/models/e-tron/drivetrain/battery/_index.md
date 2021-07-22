---
title: Audi e-tron battery
linktitle: Battery
description: Audi e-tron is delivered with two different battery sizes and serveral variants. 
weight: 7
---

## Cell technology

Audi/Volkswagen has a multi-vendor strategy  on cells. So different cells are used on e-tron.

### LG Chem

The cell used on e-tron 55 before january 2021 is LG Chem E66A. The cell type is [LG Pouch Cell](https://www.youtube.com/watch?v=Q2Lczd7MjGc) produced in [Poland](https://www.google.no/maps/search/lg+chem+poland/@51.0183429,16.8906359,995m/data=!3m1!1e3).

|Spec | Value |
|-----|------|
| Producer | LG Chem |
| Model | LGX N2.1 |
| Nominal Capacity |60 Ah |
| Nominal Voltage | 3,666666 V |
| Nominal energy | 219,907 Wh |
| Thickness|  16,5 mm |
| Width | 100 mm |
| Height | 330 mm |
| Volume | 0,544500 |
| Weight | 820 g |
| Volumetric Energy Density | 403 Wh/L |
| Gravimetric Energy Density | 268 Wh/kg |
| Chemistry | [NCM 622](https://en.wikipedia.org/wiki/Lithium-ion_battery) |

![Audi](lgchenx21.jpg "LGX N2.1 60AH pouch cell from LG Chem")

![LG battery module](lgmodule.jpg "Battery module with 12LG pouch cells")

### Samsung SDI

Audi e-tron 50 has been using Samsung SDI cells since the beginning.
The cells are produced by Samsung SDI in [Budapest, Hungary](https://www.google.com/maps/place/Samsung+SDI+Hungary+Zrt./@47.6765476,19.168821,2130m/data=!3m1!1e3!4m5!3m4!1s0x0:0x45db42011a2687d9!8m2!3d47.6779532!4d19.170087)
They are of type [Samsung Prismatic](https://www.samsungsdi.com/automotive-battery/products/prismatic-lithium-ion-battery-cell.html)

After January 2021 Audi replaced the battery cells on e-tron 55 batteries with [Samsung SDI cells](https://www.electrive.net/2020/07/23/audi-chef-duesmann-sieht-batterie-probleme-beim-e-tron-als-geloest/). This is believed  mainly to be because LG focused on other cells to other VAG cars.


|Spec | Value |
|-----|------|
| Producer | Samsung SDI|
| Model |  |
| Nominal Capacity |60 Ah |
| Nominal Voltage | 3,666666 V |
| Nominal energy | 219,907 Wh |
| Thickness|  ? |
| Width | ? |
| Height | ? |
| Volume | ? |
| Weight | ? g |
| Volumetric Energy Density | ?  Wh/L |
| Gravimetric Energy Density | ? Wh/kg |
| Chemistry | [NCM 622](https://en.wikipedia.org/wiki/Lithium-ion_battery) |

![e-tron 50 battery](etron50battery.jpg "e-tron battery module with Samsung prismatic cell and battery pack")

![bilde](samsungcells.png "Samsung prismatic cells")

## Battery packs

Currently, the Audi e-tron is available with 2 different battery pack sizes. It is expected that from the 2023 model there will be added a larger pack.

### 95kWh battery

The battery for Audi e-tron 55/e-tron 60S is totally on 95kWh and with a nominal voltage on 396 volt.

It consist totally 36 modules with 12 cells each that gives totally 432 cells.

The cells in each module is connected in 4p3s configuration. Meaning 4 and 4 cells are grouped in paralell and
then connected in serial.

![95 kWh module](95kwhconnection.drawio.svg "Connection diagram 95kWh module with 4p3s configuration")

Since each cell is on 60ah each paralell group gives a capacity on 240Ah. (4 x 60ah)

When 36 modules like this are connected in serial the nominal voltage is 396 volt.

396volt * 240ah = 95 040 Watt hour (Wh) or 95kWh (kilo Watt Hours)

Each module weighs aprox 13kg.

![bilde](lgmodule.jpg "Module with LG pouch cell")

Total battery weight is 1532.2lb (699,99 kg)

For models produced before week 47 in 2019, available battery is 83.6 kWh. This has part number 1 AX2.
For models produced after that the buffer has been decreased so available is 86.5 kWh increasing the range with 3,4%.

### 71kWh battery

The battery for Audi e-tron 50 is totaly on 71kWh and was created to support a cheaper e-tron.

It has totally 27 modules with 12 cells each that gives totally 324 cells. It is no concedence that it has 27 modules.

One important factor was that it has to have the same nominal voltage on 396 volt. 

This was possible with changing the battery architecture from 4 cells in paralell to 3 cells in paralell.

![95 kWh module](71kwhconnection.drawio.svg "Connection diagram 71kWh module with 3p4s configuration")

Since each cell is on 60ah each paralell group gives a capacity on 180Ah. (3 x 60ah)

When 27 modules like this are connected in serial the nominal voltage is 396 volt.

396volt * 180ah = 71 280 Watt hour (Wh) or 71kWh (kilo Watt Hours)

Module with 12 60Ah  Prismatic cells from e-golf. (not found any picture for e-tron)

![bilde](https://user-images.githubusercontent.com/59776765/73131174-70857f80-4006-11ea-84bd-a1f2d5848613.png)

## Battery housing

The 71kWh battery consist of 27 modules and all are located on the same "floor".

![71kWh battery](batterycase50.jpg "71kWh battery for e-tron 50 with 27 modules")

The 95kWh uses a second storage under the rear seats to get rom for the 36 modules.

![bilde](batterycase95kwh.jpg "Battery pack 95kWh with 36 modules including 5 in the second floor")

![bilde](batterycasing.jpg "95kWh battery pack")

The diagram below shows how the etron 50 / e-tron sportback 50 has less modules.

![Crash structure](crashstructure.jpg "Integrated crash structure of the lithium-ion battery")

## Thermal management

## Charging performance

Audi e-tron 55/S and Audi e-tron 50 is one of the

Max chargespeed is 125kW
![bilde](chargespeed50.png "battery")

Max charging speed is 150kW.

![bilde](chargespeed55.png "Charging curve 55")

[Diagramm from FASTNED](https://support.fastned.nl/hc/en-gb/articles/360000815988-Charging-with-an-Audi-e-tron)

## Summary

|Spec | 95kWh pack | 71 kWh pack |
|---- | -----|-----|
| Nominal voltage | 396 volt | 396 volt |
| Modules | 36 | 27 |
| Cells  | 432  | 324 |
| Cell type | LG | Samsung SDI |
| Max  DC Charging | 150kw | 120kw |
| Cell configuration | 108s4p |108s3p|


{{% children description="true" depth="1" %}}
