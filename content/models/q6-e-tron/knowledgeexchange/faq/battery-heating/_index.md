---
title: Battery preheating
linktitle: Battery preheating
description: How to control battery preheating
weight: 30
---

## Battery preheating
Audi Q6 and other cars on the PPE platform have automatic battery preheating.

## Why do you want to preheat the battery?

So, why should you preheat the battery? Preheating the battery has only **one purpose**, which is to create a good temperature before you start a fast charging session (150 kW and up). Otherwise, it is completely unnecessary. The optimal temperature is about 25 °C and then you will, and only then, achieve up to 280 kW charging speed on an 800V charger in the SoC range from 10-30%, then it starts to drop.

In winter, it may not be possible to achieve 280 kW either, but others may be able to provide experience on that. But with a cold battery, the charging session will be very slow at the start. Gradually, the battery temperature increases due to the charging effect and the heat it produces, and then there will be better speed at the end, but time flies.

Even in the fall with temperatures down to 0 degrees, preheating will be necessary to get the really fast 200+ kW speeds.

However, there is some important things to be aware of
- You cannot turn on the preheating manually. This may come in later models or updates
- The only way is to enter a charging destination in your navigation, either manually or accept the charging stop(s) that Audi Charging Planner adds to your route.
- The car will then plan preheating itself so that it is at the correct temperature. Normally this is about 25 degrees Celsius

It is therefore very critical that you create a navigation route that **actually** involves a charging session/charging stop.

It **NOT** enough to just enter a destination that is a fast charger if your charging settings are such that you do not need to charge when you have reached your destination.

For example, this will **NOT** trigger preheating, simply because the car does not assume that you actually need to charge.

![alt text](image-1.png)

So how are you going to get the car to preheat? It's not that difficult really, you just have to know the tricks.

In the image above, these settings were set:

![alt text](image-2.png)

However, if I enter that I WANT to have a minimum level upon arrival at the destination, the charging planner will understand that it actually needs to be charged to reach your destination. So when you change to this

![alt text](image-3.png)

Then I get this

![alt text](image-4.png)

Practical example: While I was waiting for the train today, with the navigation route above active and the car was just parked, the battery warmed up from 1 to 2 degrees in about 5 minutes, when it was -8.5 outside. Even though I was parked at the time.

![alt text](image-7.png)

![alt text](image-6.png)

It is quite obvious that it would have provided better visual communication if there had been a preheating symbol in the battery image that could provide feedback that the preheating is active, but we are not there yet.

# Practical test

The next sections are tests of what one can expect that temperature and other practical experiences on this topic. The undersigned has tested this with an Audi SQ6 2025 model manufactured July 2024

## Usecases

### Charging speed and temperature, with and without preheating

Test performed to find out the speed difference with and without preheating.

**Charger** : UnoX 300 kW (800V)

**Outside temp** : -11 °C

**Battery temperature** : 1 °C, SoC 35 %

![alt text](image-8.png)

Achieved speed with cold battery: **51 kW**

![alt text](image-9.png)

Then entered a charging target for a random fast charger nearby. It is important that there is a charger nearby for the car to start preheating right away

![alt text](image-10.png)

The short initial charging test gave me a 1% SoC and 1 °C more on the battery

![alt text](image-11.png)

It was then 16:48. I just drove a very short car trip and parked the car, while I sat in the front seat and just waited with the ignition on and the seat belt fastened (simulating a drive).

At 17:14 I had gotten 10 °C at a 'price' of 4 % SoC. Simplified math is that 4 kWh have been used so far on preheating and 26 minutes.

At 17:30 I had reached 16 °C and 29 % SoC, i.e. 7 % / 7 kWh consumed on preheating.

I then chose to drive back to the UnoX charger and charge again.

A small curiosity that I suspect came with the KD2 update is that when does the navigation calculate that the car will use 7% SoC to drive the 2 km to UnoX. That's probably not true ...

![alt text](image-12.png)

Well back to UnoX, the numbers speak for themselves: 28% / 16 °C

![alt text](image-13.png)

Plugging in and seeing that preheating is useful, so to speak. Almost 150 kW now. You can achieve up to 3 times as fast a charging speed, so

![alt text](image-14.png)

For your information, both charging sessions took place while another car was plugged in, so it's possible that different numbers would have come up if I had the charger all by myself.

That's my car on the right in the picture below. The other was a 400V architecture car, which was probably going to be there for a while ...
![alt text](image-15.png)
![alt text](image-16.png)

I only charged 2%, and it quickly gave a temperature rise, I think the preheating elements in the battery helped a little.

![alt text](image-17.png)

**Conclusion**

Preheating is useful. And 15 degrees helps a lot. I haven't tested preheating more to possibly achieve 25 °C. The principle is well explained in the section above and the result is clear.

### Preheating and extreme temperatures

Based on a practical test from another Q6 owner on Facebook who implemented preheating in 16-20 degrees below zero, experienced that the preheating was unable to raise more than +15 °C. This could be due to the low temperature, or the car starting preheating too late in relation to the outside temperature.

The section above shows that +15 °C makes a significant difference, so it makes sense.

It may be possible that a trick is to enter an **extra** charging station stop in the navigation that is a little before the one you actually plan to charge at, to trick the car into starting preheating earlier and then just drive past or delete it when you have reached it and then hope that the preheating continues until the **actual** charging stop.

### Preheating before the car trip starts

It has also been 'desired' that you can preheat the battery if you are going to start a long trip by fast charging immediately after driving from home.

It is actually possible with the help of a little 'trick', which I have verified at home.

Here's how you do it if you want to preheat before driving.

- Bring the car key in the car
- Enter a charging target in the navigation that initiates charging
e.g. like this:

![alt text](image-18.png)

- My car had been outside with a cold battery before it was driven into the garage

![alt text](image-19.png)
- Turn on the ignition and **put the seat belt in its holder**, while you are sitting in the car
- Turn off the ventilation and headlights
- Leave the key in the car and you can go in and pack the last bags before departure
- Everything is 'off', but the car is preheating ...

![alt text](image-21.png)

- After 10 minutes I had gone from -2 to +5 °C at a cost of 2% SoC

![alt text](image-22.png)
- Means that about 20-30 minutes is enough to give a pretty good battery temperature that will give you a pretty quick and good start to a fast charging session nearby.

### Preheating has a 'price'

As the paragraphs above show, it seems that you have to expect a SoC loss of 7-10% for a full preheat in reasonably cold conditions, so there is always an assessment to be made in relation to charging time. For example, if you can have a snack while charging, then maybe the battery temperature is not so important after all?