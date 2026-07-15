---
title: "Audi Q6 e-tron Software Updates"
linktitle: "Software-Updates"
description: 
weight: 30
---

## KD2* - 03.11.00/C

- Dies ist KEIN OTA-Update; Das Auto muss in einem Workshop / Dealership aktualisiert werden
- Der Job wird voraussichtlich 3,5 Stunden dauern

![alt text](image-3.png)

### Was wurde repariert oder verbessert
- Einige Probleme und ein inkonsistentes Heckklappenverhalten nach der Installation von KD2 sollen behoben worden sein, insbesondere für diejenigen, die den Digital Key verwenden. Bisher ist es noch zu früh, um daraus Schlüsse zu ziehen, da sich das Auto manchmal wochen- oder sogar monatelang einwandfrei verhält.
- Fahrerassistenzsysteme sollen verbessert werden
- Das Warnsignal wurde von einem etwas lästigen und scharfen Signalton zu einem viel angenehmeren Signalton geändert, was anscheinend bei allen Systemgeräuschen aktualisiert wurde, mit Ausnahme der Parkwarnung, bei der der Ton unverändert ist.
- Verschiedene Heckklappenprobleme sollen gelöst werden. [Known issue #94](https://github.com/electrichasgoneaudi/q6-e-tron/issues/94)

- Viele weitere Fixes werden beansprucht, und diese Liste wird aktualisiert, wenn mehr Informationen verfügbar sind.

### Wenn Sie das Auto erhalten, nachdem das Update abgeschlossen wurde
- Der Garagentoröffner muss wieder programmiert werden
- Das Wi-Fi-Passwort muss möglicherweise erneut eingestellt werden, also überprüfen Sie dies
- Die Navigationsansicht im Head UP Display wurde ausgeschaltet und musste reaktiviert werden

### Was nicht festgelegt wurde
- Die Berechnung des SoC für den nächsten oder den letzten Stopp in der Navigation ist immer noch ziemlich ungenau. [Known issue #97](https://github.com/electrichasgoneaudi/q6-e-tron/issues/97)
- Smart-Ladefehlermeldungen wurden nicht behoben; es meldet immer noch Ladegerät-Netzwerkfehler, wenn das Laden durch den Laderoboter angehalten wird. [Known issue #16](https://github.com/electrichasgoneaudi/q6-e-tron/issues/16)
- Wi-Fi-Ausfälle treten immer noch von Zeit zu Zeit auf.  
[Known issue #4](https://github.com/electrichasgoneaudi/q6-e-tron/issues/4) und  
[Known issue #90](https://github.com/electrichasgoneaudi/q6-e-tron/issues/90)
- Das Garagentoröffnerproblem wurde nicht behoben. [Known issue #67](https://github.com/electrichasgoneaudi/q6-e-tron/issues/67)
App-Status wird in unregelmäßigen Abständen zurückgesetzt. [Known issue #109](https://github.com/electrichasgoneaudi/q6-e-tron/issues/109)


### Erfahrungen nach dem Update
- Die Hochgeschwindigkeitswarnung ist jetzt so angenehm, aber immer noch hörbar, dass man sie einfach einschalten kann. In Fällen, in denen man sich selbst vergisst und in eine neue Geschwindigkeitsbegrenzungszone rast, wird man sanft daran erinnert.
- Aktive Spur Zentrierung scheint das Auto mehr in der Mitte der Spur zu platzieren, im Vergleich zu etwas zu weit nach links in früheren Versionen, und das Auto ist ziemlich stabil gehalten, ohne jede Weberei
- Der Digital Key funktionierte nur mit NFC und nicht mit UWB/BLE (Bluetooth), was sich von selbst aufgelöst hat und seit Tag 2 funktioniert.  
Schauen Sie sich Ihre App an. Ich habe das bekommen, was deutlich zeigte, dass das Telefon das Auto nicht finden konnte.  
![alt text](image-1.png) ![alt text](image-5.png)

Das löste sich von selbst und funktioniert seit Tag 2.
- Überprüfen Sie das Wi-Fi-Passwort im Auto. Möglicherweise müssen Sie ein neues erstellen. ![alt text](image.png)
- Es gibt immer noch viele Beispiele für die berühmte Fehlermeldung, dass Predictive Control nicht verfügbar ist. Etwa 20 Mal auf einer Reise von Oslo nach Trondheim passiert. Es ist eine Verbesserung gegenüber der letzten Reise, als ich ungefähr 50 dieser Nachrichten bekam, und jetzt ist das Tonsignal nicht so ärgerlich. Aber es ist völlig unnötig, eine Audiowarnung zu haben. Das ist kein ernster Fehler und Sie können nichts dagegen tun, also sollte diese Warnung so subtil wie möglich sein und völlig ohne Warnton.
![alt text](image-6.png)
- Auch die bekannte Belästigung durch die Navigation wurde nicht verbessert. (#2) und (#3) mit einer Zahl in der Zeile, 
![alt text](image-7.png) Aber der Navigationsbildschirm zeigt Informationen über den letzten Stopppunkt an. Es ist in dieser Phase der Reise nicht besonders interessant (nachdem #1 passiert wurde), was hier am nützlichsten ist, sind Informationen über den nächsten Stopp. (#2), egal was. ![alt text](image-8.png)