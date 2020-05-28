# Variabelen en berekeningen

## Variabelen

Een variabele is een container of doos waarin je informatie kan bewaren.

De meest gebruikte variabele types zijn:
* **string**: wordt gebruikt om tekst in te bewaren
* **int**: wordt gebruikt om gehele getallen in te bewaren
* **double** wordt gebruikt om kommagetallen in te bewaren

Het definiëren van een variabele gebeurt als volgt:
```csharp
int lengte, breedte;
double prijs;
string voornaam;
```
:::warning Nota:
De naam van een variabele start je steeds met een kleine letter en kan geen spaties bevatten.
:::

Bij het toekennen van een waarde aan een variabele heb je een linkerdeel (de target of variabele) en een rechterdeel (de waarde). 

:::warning Nota:
Onthou dat de waarde steeds van hetzelfde datatype moet zijn als de variabele.
:::

![download](./images/afbeelding1.png)

Je kunt geen peren in een bak voor appelen steken.

Het toekennen van een waarde gebeurt als volgt:
```csharp
int lengte;
lengte = 100;
```
of
```csharp
int lengte = 100;
```
## Berekeningen

We onderscheiden volgende rekenkundige operatoren:

![download](./images/afbeelding2.png)

Aangevuld met volgende speciale operatoren:

![download](./images/afbeelding3.png)

Een berekening kan er b.v. als volgt uit zien:
```csharp
int lengte = 100;
int breedte = 250;
int opp = lengte * breedte;
```
:::warning Nota:
Eerst wordt dus het rechterdeel berekend, dit is van een bepaald datatype, vervolgens wordt dit toegekend aan de target variabele.
:::

Laten we even enkele voorbeelden bekijken:
```charp
int i;
i = 6 * 2;      Het resultaat is 12
i = 3 / 2;      Het resultaat is 1
i = 33 / 44;    Het resultaat is 0

double i;
i = 10.6 / 2;   Het resultaat is 5.3
i = 3 / 2;      Het resultaat is 1 
```
:::warning Nota:
De software rekent met de eenvoudigste vorm van datatype. Als je dus 5 gebruikt in een berekening is dit een integer terwijl 5.0 een double zal zijn.
:::

:::tip Oefening

**3.1** Schrijf een programma waar de gebruiker het aantal stuks, de eenheidsprijs (2 cijfers na de komma) en de btw % kan ingeven.
Na het indrukken van de CALC-knop verschijnt de totaalprijs in een label.

Controle:

aantal = 4 stuks , eenheidsprijs = 99.95€ , btw = 21%

brutoprijs = (99.95 * 4)*(100 + 21)/100 = 483.758€

Tip:
Om de ingevulde waarde van string naar int om te zetten ga je als volgt te werk: 
```csharp
int aantal = Convert.ToInt32(txbLengte.Text);
```
Om het resultaat van int terug naar string om te zetten ga je als volgt te werk: 
```csharp
lblBrutoprijs.Content = Convert.ToString(brutoprijs);
```
:::

## Operaties met een string

Net zoals bij getallen kan je ook strings met elkaar optellen.

```csharp
string voornaam = "Jan";
string familienaam, naam, titel;
familienaam = "Jansens";
naam = voornaam + " " + familienaam;
titel = "Dhr. "+naam+" studeert de opleiding Graduaat Internet of Things";
```

Indien je een lege string wil definiëren kan dit als volgt:
```csharp
string titel = "";
of
string titel = String.Empty;
of 
string titel = null;
```
Laten we even kijken wat er gebeurt als we volgende code schrijven:
```csharp
int appels = 2, peren = 3;
string resultaat, zin = "Het antwoord is: ";
resultaat = intro + appels + peren;
```
Er zijn twee mogelijkheden:
* **Het antwoord is: 23**   Dit omdat de twee + operatoren op de string worden uitgevoerd
* **Het antwoord is: 5**    Dit omdat eerst de cijfers worden opgeteld

De eerste mogelijkheid is de juiste omdat C# van links naar rechts de evaluatie uitvoert. De eerste + zet de waarde van appels om in een string en voegt deze samen met de string van intro, vervolgens doet de tweede + dit nog eens.

Wil je echter het tweede resultaat dan moet je haakjes gebruiken:
```csharp
resultaat = intro + (appels + peren);
```
## Conversie van datatypes

Op de schrijfwerkwijze zoals hierboven doe je beroep op C# om de conversie van integer naar string voor jou te doen. Dat is geen 'best-practice' techniek. Je zorgt steeds dat je zelf deze omzetting in de juiste code voorziet:

* Om iets om te zetten naar string gebruik je `Convert.ToString()`
* Om iets om te zetten naar integer gebruik je `Convert.ToInt32()`
* Om iets om te zetten naar double gebruik je `Convert.ToDouble()`

Een andere methode gaat als volgt:
```csharp{4,5}
int i = 33;
double d = 3.9;
double d1;
d1 = (double)i;     // d1 wordt 33.0
i = (int)d;         // i  wordt 3
```
## Geformateerde strings

Via geformateerde strings kan je tekst, getallen en weergave combineren. Je herkent stringformattering onmiddellijk aan het **$-teken** voor de string en de `{}` waar een getal geformatteerd wordt weergegeven.

```csharp
lblResultaat.Content = $"{euro} euro en {cent} cent";
lblPrijs.Content = $"De kostprijs is {prijs:c}";
```

Extra info kan je [hier](/files/stringformat.pdf) terugvinden.

## De rol van expressies

Expressies of berekeningen kan je ook gebruiken om structuur en eenvoud in je code te brengen. Stel b.v. dat je een lijn op de canvas moet plaatsen die t.o.v. de linkeronderzijde van je canvas moet gepositioneerd zijn. 

Je code zou er dan als volgt kunnen uitzien:
```csharp
int x0 = 10;     // referentiepositie in de x richting t.o.v. de canvas
int y0 = 390;    // referentiepositie in de y richting t.o.v. de canvas

Line xAs = new Line();
xAs.X1 = x0; xAs.Y1 = y0;
xAs.X2 = x0; xAs.Y2 = y0 - 380;
```

::: tip Taak 3 - Programmeren met variabelen en bewerkingen

![download](./images/assignment.png)

* [Opdrachtfiche](assignment.html)
:::

