---
title: "Audi Q6 e-tron Software Updates"
linktitle: "Software-Updates"
description:
weight: 30
---

## 06.30.01/C

- Dies ist derzeit kein OTA-Update
- v6.30.01/C ist die installierte Version auf Q6-Fahrzeugen (und wahrscheinlich A6-Fahrzeugen), die im Oktober 2026 ausgeliefert wurden


### Was wurde gegenüber Version 06.11 behoben oder verbessert

- Zum Zeitpunkt der Erstellung nicht bekannt

### Was wurde gegenüber Version 03.11 behoben oder verbessert

v03.11 entspricht dem Audi Q6/SQ6 (und in der Praxis A6/S6) Modelljahr 2025 (oft als MY2025 bezeichnet)

Es gibt eine Reihe von Verbesserungen und Aktualisierungen. Diese sind erwähnenswert:

- Die Aufforderung, das Lenkrad festzuhalten, wird jetzt im Head-up-Display (HUD) angezeigt. [Issue 107 im Issue-Tracker](https://github.com/electrichasgoneaudi/q6-e-tron/issues/107)

- Das Popup zum Öffnen des Garagentors funktioniert wie vorgesehen. [Issue 67 im Issue-Tracker](https://github.com/electrichasgoneaudi/q6-e-tron/issues/67)

- Das Fahrzeug handhabt intelligentes Laden genau so, wie es sein soll. Es zeigt an, dass das Laden pausiert ist, statt einen Fehler des Ladesystems zu melden. [Issue 16 im Issue-Tracker](https://github.com/electrichasgoneaudi/q6-e-tron/issues/16)

- Die Höhe über dem Meeresspiegel wird jetzt in der Navigationsansicht angezeigt, allerdings nur bei aktiver Navigationsroute und wenn man das Infofenster links in der Navigation öffnet
![alt text](image-1.png)  ![alt text](image-2.png)

Man kann auch die Steigungsanzeige auf dem 'Homescreen' nutzen, wenn man sie dort hinzufügt. Seltsamerweise zeigen beide nicht denselben Wert ...

![alt text](image.png)
- Automatisches Audi drive select. Man kann das Fahrzeug jetzt selbst den drive-select-Modus wählen lassen, der seiner Meinung nach zum eigenen Fahrstil passt. Leider muss diese Einstellung bei jeder Fahrt manuell gewählt werden. Man kann diese Funktion jedoch auf die Sterntaste am Lenkrad legen.

- Eine eigene Schnelltaste schaltet die Warnung bei Überschreitung der Geschwindigkeitsbegrenzung ab. Dadurch wird die Sterntaste am Lenkrad für andere Funktionen frei.

![alt text](image-3.png)

- Verbesserte Auswahl der Ladeanbieter im fahrzeugeigenen Ladeplaner. Man kann jetzt bestimmte Ladeanbieter oder Technologien bevorzugen. Das war beim MY2025 nicht vollständig möglich. Wer z. B. einen Audi Charging Pro Tarif mit günstigem Laden bei IONITY hat, kann das Fahrzeug endlich dazu bringen, nur diese Anbieter zu nutzen. Beachte, dass es sich um Präferenzen handelt. Das Fahrzeug wählt dennoch Alternativen, um sicherzustellen, dass genug geladen wird, um das Ziel mit dem eingestellten Ziel-SoC zu erreichen.

![alt text](image-5.png)
![alt text](image-6.png)


- Parken und Parkassistent sind deutlich verbessert, das hängt aber vom Modell (Hardware) ab und nicht von der Software. So gibt es z. B. wieder die 3D-Ansicht, bei der man die Perspektive rund um das Fahrzeug beliebig drehen kann, so wie es der Audi e-tron damals hatte.

![alt text](image-4.png)

### Was ist schlechter geworden
Einige Dinge sind tatsächlich schlechter geworden.
- Es dauert lange, bis das Profil geladen ist. Wir sprechen von 1-2 Minuten, bis der Hauptbildschirm bereit ist.
![alt text](image-7.png)
- Mehrere Fälle von Hängern oder Dingen, die 4-5 Minuten zum Laden brauchen. Nicht gut.
![alt text](image-8.png)
- Der Hauptbildschirm stürzt außerdem ab, anscheinend ausgelöst durch einen Titelwechsel in TIDAL. Getestet: Spotify löst keinen solchen Neustart des MMI-Hauptbildschirms aus. Beachte, dass der Ton nicht abbricht, und obwohl das Telefon in der Hauptansicht neu initialisiert werden muss, bleibt das Symbol für die Signalstärke ganz links die ganze Zeit sichtbar. Das wirkt also wie ein reiner Fehler im Displaytreiber oder etwas Ähnliches.
<video src="/models/q6-e-tron/knowledgeexchange/updates/otapatch063001/IMG_9509.mp4" controls playsinline preload="metadata"></video>
<video src="/models/q6-e-tron/knowledgeexchange/updates/otapatch063001/IMG_9511.mp4" controls playsinline preload="metadata"></video>

Dieses Video zeigt, dass das Virtual Cockpit vom Neustart des Hauptbildschirms nicht betroffen ist.
<video src="/models/q6-e-tron/knowledgeexchange/updates/otapatch063001/IMG_9532.mp4" controls playsinline preload="metadata"></video>
- TIDAL verliert zwischen den Fahrten gelegentlich seinen Zustand. Auch kürzere Pausen können dazu führen, dass die App z. B. den aktuellen Titel verliert und alles komplett neu gestartet werden muss.

Am nächsten Tag erscheint typischerweise eine Meldung, dass die Medienwiedergabe nicht möglich ist und die Auswahl der Wiedergabeliste komplett neu gestartet werden muss.

![alt text](image-11.png)

- Es ist außerdem ziemlich frustrierend, dass man dies fast jedes Mal bestätigen muss, wenn man eine neue Fahrt startet. Siehe das Bild oben.

- Die Signalstärkesymbole für WLAN und 3G/4G/LTE wurden im Vergleich zum MY2025 entfernt. Das ist sehr schade, denn sie zeigen auf einfache Weise, ob eine Verbindung zu einem externen Zugangspunkt besteht, sowie die Qualität dieser Verbindung und des MMI-Uplinks. Die unten gezeigten Symbole, die in v3.xx vorhanden waren, fehlen damit schmerzlich.
![alt text](image-9.png)

Hier ist reichlich Platz.
![alt text](image-10.png)
