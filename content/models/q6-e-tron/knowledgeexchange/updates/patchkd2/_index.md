---
title: Audi Q6 e-tron software updates
linktitle: Software updates
description: Unknown
weight: 30
---

## KD2 - 03.10.01/C (28.13.01)

- This is NOT an OTA update, the car must be updated at the workshop
- It will also not be a campaign update, so only those experiencing problems can receive this update. So you contact your dealer if you experience the type of error described below
- Delivered on new cars from production week 34/2025
- Version number in myAudi App: 03.10.01

### Release date: October 2025
- TPI 2078923/1

### General description of improvements:
- Prevention of screen/infotainment errors; black screens, resets, restarts, screen freezing
- Optimizations of the navigation system (display, route planning, guidance, navigation)
- Improvements related to connectivity (APN, Bluetooth, radio, navigation, eCall)
- Optimization of eCall / radio / entertainment (no audio output, missing connection, stability)
- Improvements to operation (voice control) and navigation
- Improvements to traffic sign recognition (general improvement of detection, malfunction and deactivation of assistant systems)
- Improvements to driving experience (car startup, hold function, jerking while driving, car falls out of gear)
- Prevention of unauthorized warning lights (e.g., exhaust emission warning light and event memory entries)
- Optimizations of charging processes (charging time, charging app and charging status, display, charging problems)
- Improvements to mobile key (key recognition, keyless system, etc.)
- Mobile key sharing service is restored
- Child detection in car: no longer triggered without reason

### Important notes for owners:
- All personal settings (Drive Select, lighting, radio, language, HUD navigation, etc.) must be reconfigured after the update.
- Privacy mode is automatically deactivated and must be manually activated again.
- The update can only be performed with a physical key – digital keys and key cards cannot be used during installation.
- Update time: ≈ 3.5 hours (the car restarts multiple times and may be dark for 20–30 minutes).

### Technical information (from service documentation):
- Flash codes: BLKD2PPE, DUCLDRM0046, DUCDOORWR
- HV charging cable must be disconnected before update
- Update only via USB cable (for stability)

### Summary
KD2 is an important update for stability and reliability for the new PPE-based Q6 e-tron series.
Owners report smoother system performance, better key recognition and improved charging logic after installation.

### Practical experience with KD2
Author received KD2 on his SQ6 in November 2025 (Car was produced July 2024 and previously had [06XM](../patch06xm) and [06XL](../patch06xl))

The update took a working day at the dealer.

Surprisingly, almost all configuration was preserved. Rumors said the car was nearly factory reset, but that is not the case.
First thing to do is check the version in the car's MMI. It is as expected 03.10.00/C.

All installed apps in AppStore were in place and the icon overview is unchanged

One observation is that the icon/button has changed to better reflect what it actually does. Here it shows more clearly that both rear window and mirrors are heated. See the image below.

![alt text](image.png)

It's also easy to notice that ambient lighting was turned off (others have reported it lights white), so it had to be set again

![alt text](image-1.png)

But external sound was not reset.

![alt text](image-2.png)

Drive select was reset and you must set up the INDIVIDUAL setting again, if you had updated this previously.

In the information sheet from the dealer it said radio favorites had to be set again, but that wasn't necessary for me, all favorites were in place.

![alt text](image-3.png)

As stated in the information sheet, garage door opener must be reprogrammed.

![alt text](image-4.png)

**Error messages and popups**
Remains to be seen over time, but the initial yellow warning that front assist is initializing now seems to only take 10-15 seconds.

The information sheet also mentions connections to mobile devices, but for me iPhone and handsfree worked as before as if nothing had happened

**Car2Phone** appears to be gone, but it's not. It has just changed name, probably in the upgrade from myAudi 4.x to 5.x. Now it's called Car Connection, otherwise it works as before.

![alt text](image-12.png)

**Navigation** Here all previous destinations and favorites are in place as before. But as mentioned in the information sheet, display in Head Up Display (HUD) must be activated again

![alt text](image-5.png)

Here's how to do it if you want navigation in HUD

![alt text](image-6.png)

Navigation GUI doesn't seem to have received any improvements. I deeply miss that it doesn't show that the car has added a charging stop. Here you have to open the trip itself to see that this 'suddenly' may have been calculated by the car, and it's a bit irritating

**Braking**
Still notice that the brakes can jerk a bit if you have to suddenly brake e.g. into a roundabout because a BMW owner doesn't bother signaling and chooses to drive around without giving any indication.

**Charging system**: It is stated that charging is improved.

You can at least now see that remaining time is displayed in MMI<br><br>
![alt text](image-7.png)<br><br>
![alt text](image-8.png)

But unfortunately we still get 'Charging system error' message for those who smart charge. There is still not quite correct handling of the home charger being able to disconnect to wait for cheaper prices. But initial experience is that handling is improved.

![alt text](image-9.png) <br><br>
![alt text](image-10.png)

**Digital keys**

This is now restored as it was originally intended to function. That means you can have up to 5 digital keys. This was introduced in [06XM](../patch06xm) and scaled down to only the main user in [06XL](../patch06xl), but is now back in full.

Here it's very important to be aware that you must go through 2 rounds to be able to create a digital key on the main user and then be able to share it with others.

Audi writes that you need to repeat that procedure to start a process in the server part that makes it possible to share the digital key again

This is described in the information sheet you receive, but here is more detailed documentation of the procedure:

Author had digital key configured, but it is now gone from car, myAudi App and iPhone (if you double-press on iPhone with the right mobile button, the car is gone from the list of payment cards).

In the car you will see this message appear

![alt text](image-11.png)

Here there is still some confusion, because if you choose to start the process from MMI you are asked to place the phone in the mobile charger and follow instructions. But it's almost impossible to both see and press the phone when it's in the charging position.

Fortunately, there is a slightly different way to do it, so it's described in detail below.

1. Bring your mobile and physical key into the car.
2. Navigate in MMI to Digital Key and Administration, but you don't need to press 'Set up main device'
![alt text](image-13.png)

3. Just hold your mobile in your hand while sitting in the car. Navigate to Digital Key in myAudi App<br><br>
![alt text](image-15.png)

4. In the next image click on <br><br>
![alt text](image-16.png)

5. The process starts... What happens is that a key is created that is added as a 'Credit card' in your iPhone.<br><br>
![alt text](image-17.png)

6. At the same time you will see that the MMI screen also updates that something is 'happening'<br><br>
![alt text](image-18.png)

7. This point is the most critical, as there is communication between car, phone and internet. This unfortunately fails sometimes, then just start the process again. But wait a bit 15-30 minutes before trying again

8. If this was successful you see that the MMI screen continues to the next step<br><br>
![alt text](image-19.png)<br>
And your iPhone shows a 'credit card-like image' as shown below<br><br>
![alt text](image-20.png)

9. If you click continue in the myAudi App, you proceed to<br><br>
![alt text](image-21.png)

10. And to this image when you press Next. Here you see that you have created a digital key.<br><br>
![alt text](image-23.png)

11. If you now double-press the right button on your iPhone, you open your car as a Credit card and can then here open and close car and trunk. This happens via a bluetooth connection between the car and your phone.

**How to share the digital key**

If you managed to create the digital key following the description above, you are ready to share it further. This is performed on your iPhone, with the Wallet option.
<br><br>
![alt text](image-24.png)
<br><br>
Select the black Audi card that probably has the car name you have given yourself
<br><br>
![alt text](image-25.png)
<br><br>
Press the black audi card and select the sharing icon
<br><br>
![alt text](image-26.png)
<br><br>
Here the undersigned has chosen to share with messenger, but I guess other methods also work
<br><br>
![alt text](image-27.png)
<br><br>
Press the name field and you get the opportunity to either select a name from your contacts, or you can just write whatever name you want
<br><br>
![alt text](image-28.png)
<br><br>
Then you have the digital key that you send as a type of attachment via messenger in this example
<br><br>
![alt text](image-29.png)
<br><br>
And you can see that the key is delivered and when the recipient opens it, it is added to their wallet as a key
<br><br>
![alt text](image-30.png)
<br><br>
Be aware that when Enhanced security with activation code is selected, you must share that code with the user via SMS or other means. Usually this new user is seated in the seat next to you... This code is required when this option is set. You can of course choose not to check that option.
<br><br>
![alt text](image-33.png)
<br><br>
Note that when the first sharing is completed, you get a new option to manage and possibly add more recipients of the digital key.
<br><br>
![alt text](image-31.png)
<br><br>
Here you get new options to add more key users
<br><br>
![alt text](image-32.png)
<br><br>

### Issues database

Several of the issues registered in the Q6 Issues Database are now marked as fixed in KD2

see [Issues fixed with KD2](https://github.com/electrichasgoneaudi/q6-e-tron/issues?q=label%3A%22fixed%20in%20KD2%22)

see [Issues NOT fixed with KD2](https://github.com/electrichasgoneaudi/q6-e-tron/issues?q=state%3Aopen%20label%3A%22Not%20fixed%20in%20KD2%22)

