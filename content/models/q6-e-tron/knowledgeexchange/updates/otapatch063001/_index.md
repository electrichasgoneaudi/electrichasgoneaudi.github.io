---
title: Audi Q6 e-tron software updates
linktitle: Software updates
description: 
weight: 30
---

## 06.30.01/C

- This is currently a non-OTA update
- v6.30.01/C is the installed version on Q6 (and probably A6) delivered in October 2026


### What is fixed or improved from version 06.11

- Currently unknown

### What is fixed or improved from version 03.11

v03.11 represents the Audi Q6/SQ6 (and in practice A6/S6) model year 2025 (often referred to as MY2025)

There are a number of improvements and updates. These are the ones worth mentioning

- The hands-on-wheel warning is now shown in the Head-up Display (HUD). [issue 107 in the issue tracker](https://github.com/electrichasgoneaudi/q6-e-tron/issues/107)

- The garage door opener popup works as it should [issue 67 in the issue tracker](https://github.com/electrichasgoneaudi/q6-e-tron/issues/67)

- The car handles smart charging exactly as it should. It shows that charging is paused instead of reporting a charging system fault [issue 16 in the issue tracker](https://github.com/electrichasgoneaudi/q6-e-tron/issues/16)

- Altitude is now shown in the navigation view. But only when you have an active navigation route, and you have to open the info panel on the left side of the navigation  
![alt text](image-1.png)  ![alt text](image-2.png)

You can also use the gradient view on the 'Homescreen' if you choose to add it there. Oddly enough, the two do not show the same value ...

![alt text](image.png)
- Automatic drive select. You can now let the car itself pick the drive select mode it thinks suits your driving style. Unfortunately this setting has to be selected manually on every trip. You can, however, assign this function to the star button on the steering wheel.

- A dedicated shortcut button for turning off the speed limit warning. This frees up the star button on the steering wheel for other functions

![alt text](image-3.png)

- Improved charging operator selection for the in-car charging planner. You can now prefer specific charging operators or technologies. That was not fully possible on MY2025. For example, if you have an Audi Charging Pro plan that gives cheap charging at IONITY, you can finally get the car to use only those. Note that these are preferences. The car will still pick alternatives to make sure you can charge enough to reach your destination with the SoC you have set for arrival.

![alt text](image-5.png) 
![alt text](image-6.png)


- Parking and the parking assistant are significantly improved, but this depends on the model (hardware), not the software. For example, the 3D view is back, letting you rotate the perspective around the car however you like, just like the Audi e-tron had back in the day.

![alt text](image-4.png)

### What has got worse
Some things have actually got worse.
- It takes a long time before the profile is loaded. We are talking 1-2 minutes before the main screen is ready
![alt text](image-7.png)
- Several cases of hangs, or things taking 4-5 minutes to load. Not good
![alt text](image-8.png)
- And crashes of the main screen, which seem to be triggered by changing tracks in TIDAL. I have tested that Spotify does not trigger such a restart of the MMI main screen. Note that the audio does not drop out, and although the phone in the main view has to reinitialize, the signal strength icon on the far left stays there the whole time, so this looks like a pure display driver type bug or something similar
<video src="/models/q6-e-tron/knowledgeexchange/updates/otapatch063001/IMG_9509.mp4" controls playsinline preload="metadata"></video>
<video src="/models/q6-e-tron/knowledgeexchange/updates/otapatch063001/IMG_9511.mp4" controls playsinline preload="metadata"></video>

This one shows that the Virtual Cockpit is not affected by the main screen resetting.
<video src="/models/q6-e-tron/knowledgeexchange/updates/otapatch063001/IMG_9532.mp4" controls playsinline preload="metadata"></video>
- TIDAL sometimes loses its state between trips. Even shorter breaks can end with the app losing, for example, the current track, and everything has to be started again from scratch. That is simply not good enough.
