---
title: How to verify battery status
linktitle: Verify battery health
description: It is possible with simple math to verify the overall status of your battery. This guide explaines how.
weight: 1
---

When battery degrades the available battery capacity reduces. This causes a shorter range.

If you know how much net capacity your car should have, you can easily check it.

1. First charge to 100%
2. Take a drive and at least spend 70% of the battery. Try to keep the consumption low.
3. Take a note of your consumption and driving distance
4. Take a note of end SOC (state of charge) (percent left on battery)
5. Calculate actual capacity

For the following example we assume you have an e-tron 55 with 86.5kWh net capacity

## Calculation in miles

### Miles example 1

You drive 169 miles with a consumption on 2.6 miles/kWh. You started the trip with 100%
battery, and ended up with 21%.

First you calculate total energy used:
169/2.6 = 65kWh in total.

If you had 21% left, you have used 79%. (100-21)

The current capacity is that 79% = 65kWh.

The full capacity (100%) can then be calculated with.

65/0.79 = 82.27kWh.

82.27 is the actual capacity on your battery.

82.27/86.5 = 95.1%. Meaning a reduction of almost 5% from orignal capacity.

## Calculation in kilometers

### Km example 1

If you drive 240 kilometers with a consumption on 25kWh/100
You started with 100% and ended up with a 16%.

First you calculate the total energy used

(280 * 25)/100 = 70kWh in total on the trip.

If you have 16% left you have used 84% on the trip (100-16)

84% = 70kWh battery.

To calculate the full capacity

70/0.84 = 83.333 kWh

 83.333 is the actual capacity on your battery.

83.33/86.5 = 96.34%. Meaning a reduction of almost 4% from original capacity.

{{% children description="true" depth="1" %}}
