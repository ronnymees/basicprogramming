# Methoden

Soms moet in een programma meermaals hetzelfde stukje code worden uitgevoerd. Het zou niet efficiënt zijn om dit telkens opnieuw te schrijven. Daarvoor gebruiken we methoden.

Een methode is dus een stukje code dat je vanuit andere plaatsen in je code kan oproepen om dit uit te voeren.

Het definiëren van een methode gebeurt als volgt:
```csharp
public void Welkom()
{
    lvlMessage.Content = "Welkom!";
}


Welkom();
```
We onderscheiden hier het volgende :
* `public` of `private` : de scope waar deze methode geldig is. Indien public kan je de methode ook vanop externe code oproepen, bij private kan dit niet.
* `void` : de methode geeft geen returns waarde. M.a.w. het stukje code wordt uitgevoerd zonder dat er een resultaat uit voortvloeit.

:::tip Oefening

**4.1** Schrijf een programma die gebruik maakt van een methode om de tekst "Graduaat Internet of Things" op het scherm weer te geven via een label.
:::

## Gebruik van parameters

Soms heb je in je methode behoefte aan gegevens. Die kan je via parameters doorgeven aan de methode.

```csharp
string voornaam = txbVoornaam.Text;
string familienaam = txbFamilienaam.Text;

Naam(voornaam, familienaam);

private void Naam(string vnaam, string fnaam)
{
    lblNaam.Content = vnaam + " " + fnaam;
}
```
De variabelen `vnaam` en `fnaam` of parameters hebben een scope die enkel geldig is binnen de methode. Je maakt als het ware een tijdelijke identieke kopie van de originele variabelen.

:::warning Nota:
Gebruik niet dezelfde benaming voor je variabelen, dat zorgt alleen maar verwarring bij het lezen van je code of het debuggen ervan.
:::

:::tip Oefening

**4.2** Schrijf een programma met een canvas en een knop "Draw".
Gebruik onderstaande code en probeer de werking te begrijpen.

```csharp
private void btnDraw_Click(object sender, RoutedEventArgs e)
{
   SolidColorBrush blackbrush = new SolidColorBrush(Colors.Black);
    DrawTriangle(papercanvas, blackbrush, 100,10,40,40);
    DrawTriangle(papercanvas, blackbrush, 10,100,20,60);
}

private void DrawTriangle(Canvas drawingArea, SolidColorBrush brushToUse, double topX, double topY, double width, double height)
{
   DrawLine(drawingArea, brushToUse, topX, topY, topX, topY+height);
   DrawLine(drawingArea, brushToUse, topX, topY+height, topX+width, topY+height);
   DrawLine(drawingArea, brushToUse, topX, topY, topX+width, topY+height);
}

private void DrawLine(Canvas Area, SolidColorBrush brushColor, double startX, double startY, double endX, double endY)
{
   Line theLine = new Line();
   theline.X1 = startX; theLine.Y1 = startY;
   theline.X2 = endX; theLine.Y2 = endY;
   theLine.Stroke = brushColor;
   theLine.StrokeThickness = 1;
   Area.Children.Add(theLine);
}
```
:::

## Een resultaat teruggeven

Als een methode een resultaat teruggeeft dan spreken we over een functiemethode of kortweg een functie.

```csharp
 private int Oppervlakte(int lengte, int breedte)
{
   return lengte*breedte;
}
```
Wat je als resultaat teruggeeft kan van om het even welk datatype zijn. 

:::warning Nota:
Het is belangrijk dat wat je return stuurt van het juiste datatype is zoals je voor de functie hebt gedefinieerd.
:::

:::tip Oefeningen

**4.3** Schrijf een programma met een inputveld voor het aantal graden in Fahrenheit. Via een knop "Convert" spreek je een functie `ConvertFtoC()` aan en plaats je vervolgens het resultaat in een label.
```csharp
celcius = ( fahrenheit - 32) * 5 / 9;
```

**4.4** Schrijf een programma waarmee we een paswoord kunnen genereren.
Het paswoord is als volgt opgebouwd:
* 3de letter van de familienaam
* 2de letter van de voornaam als hoofdletter
* 1ste cijfer van het huisnummer
* 2de letter van de straat
* 1ste cijfer van de postcode in het kwadraat
* 2de letter van de stad als hoofdletter
* het 4de t.e.m. het 6de cijfer van het gsm nummer

Toon het paswoord in een label.
Gebruik volgende functie:
```csharp
private string NextChar(string input, int start, int lengte)
{
   return input.Substring(start-1,lengte);    
}
```
:::

## Argumenten

Soms wil je meerdere parameters doorgeven aan een methode maar ook het resultaat ervan terugkrijgen via diezelfde parameters, of wil je meerdere resultaten terugkrijgen uit een functie.

Hiervoor gebruiken we de out- en ref-argumenten:

* **ref**: de waarde van het argument wordt doorgegeven aan de methode, maar komt ook als resultaat terug.
* **out**: het argument ontvangt enkel een resultaat maar geeft geen waarde door aan de methode.

:::tip Oefeningen

**4.5** Schrijf een programma waar je het aantal eurocents kan inbrengen en via een knop "Bereken" dit weergeeft in euro's en eurocenten.
```csharp
private void EuroCents(int totaalCents, out int euro, out int cents)
{
   euro = totaalCents / 100;
   cents = totaalCents % 100;
}

EuroCents(inputcents, out int euro, out int cents);
```

**4.6** Schrijf een programma met een methode waarmee je een afmeting kunt verhogen.
```csharp
private void Verhoog(ref int input, int waarde)
{
   input += waarde;
}

Verhoog(ref int lengte, 10 );
```
:::

::: tip Taak 4 - Programmeren met methoden

![download](./images/assignment.png)

* [Opdrachtfiche](assignment.html)
:::
