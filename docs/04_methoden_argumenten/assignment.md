# Taak 4 - Programmeren met methoden

![download](./images/assignment.png)

## Opdrachten

**1.** Schrijf een programma met een inputveld voor het jaarsalaris van een werknemer en een inputveld voor het aantal jaren dienst. Bereken via een methode met twee integerparameters hoeveel de werknemer in totaal reeds heeft verdiend en toon het resultaat in een label.

**2.** Schrijf een programma die via onderstaande methode een cirkel op de canvas tekent. De straal, en de x/y coördinaten van het middelpunt worden ingegeven via een textbox en de cirkel wordt getekend via een knop "Draw".
 
```csharp
 private void DrawCircle(Canvas drawArea, SolidColorBrush brush, double xCentre, double yCentre, double radius)
{

}
```

**3.** Schrijf een programma waar je een bedrag in dollars kunt ingeven en via een knop "Convert" dit kan omrekenen naar euro's. Je zoekt zelf de huidige wisselkoers op.
```csharp
double euro = DollarToEuro(dollar);
```

**4.** Schrijf een programma die de inhoud van een kubus berekent als je de zijde ervan ingeeft. Gebruik terug een knop "Bereken" om dit te doen.
```csharp
double volume = KubusVolume(zijde);
```

**5.** Schrijf een programma die via inputvelden het aantal uren, minuten en seconden opvraagt en vervolgens via een knop "Bereken" het totaal aantal seconden uitrekent.
```csharp
double seconden = TijdInSeconden(uur, minuten, seconden);
```

**6.** Schrijf een programma met een methode die de inhoud van 2 strings omwisselt.
```csharp
swap(... string a, ... string b);
```
De inhoud van a komt in b en omgekeerd. (op de ... komt dus ofwel `out` ofwel `ref` te staan)

**7.** Schrijf een programma waar de gebruiker het aantal uren, minuten en seconden kan inbrengen. De ingebrachte waarden worden opgehaald via volgende methode:
```csharp
GetInput(... int a, ... int b, ... int c);
```
Vervolgens wordt het totaal aantal seconden uitgerekend en in een label getoond.

## Tips

* Overloop de leerstof van objecten en events nog even voor je hieraan begint.
* Verzorg je naamgeving van objecten.
* Lees de opdrachten goed en werk met een checklist wat vink af wat klaar is.

## Evaluatie

Deze opdracht staat op **10%** van de totale score voor basic programming 1.

De evaluatie gebeurt op basis van:
* Is jou code geschreven de good practices van programmeren?
* Het product: Doet het programma wat er gevraagd is?
* Het proces: Hoe is het programma geschreven?
