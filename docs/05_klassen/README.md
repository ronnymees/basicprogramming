# Klassen

Tijdens het programmeren heb je soms meerdere gegevens die eigenlijk samenhoren. bv. de gegevens van een student. Om die data te verzamelen in één variabele kunnen we een **klasse** aanmaken.

De definitie van een klasse gebeurt als volgt:

```csharp
public class Student
{
    // gedeelte met variabelen

    // gedeelte met constructor(s)

    // gedeelte met methode(n)    
}
```

We kunnen in ons programma dan een variabele van het type student als volgt definiëren:

```csharp
Student student = new Student();
```

## Variabelen

Uiteraard willen we data in de klasse bewaren, dus hebben we variabelen nodig. We kunnen hierbij van alle datatypes gebruik maken.

Een variabele kan ofwel **public** of **private** gedefinieerd worden.
Een public variabele is ook extern beschikbaar terwijl een private enkel binnen de klasse aanspreekbaar is.

```csharp
public class Student
{
    // gedeelte met variabelen
    private int studentennummer;
    public string voornaam;
    public string naam;
    public string straat;
    public int nummer;
    public int postcode;
    public string stad;
    public string email;
    public string telefoon;
    private bool actief;

    // gedeelte met constructor(s)

    // gedeelte met methode(n)    
}
```

De variabelen die public staan kan je in jou programma als volgt aanspreken:

```csharp
Student student = new Student();
student.voornaam = "Ronny";
```

## Constructor

Als we een nieuwe variabele maken van het type van deze klasse, dan moet er ook een constructor aanwezig zijn om de eventuele default waarden vast te leggen.

Je kan een constructor voorzien die geen default waarde toekent:

```csharp
// gedeelte met constructor(s)
public Student()
{

}
```
Je kan een constructor voorzien die dit wel doet:

```csharp
// gedeelte met constructor(s)
public Student()
{
    studentennummer=0;
    voornaam=""; naam=""; 
    straat=""; nummer=0;
    postcode=0; stad="";
    email=""; telefoon="";
    actief=false;
}
```

Of je kan meerdere constructors voorzien waarmee de gebruiker van de klasse waarden kan meegeven aan de constructor:

```csharp
// gedeelte met constructor(s)
public Student()
{
    studentennummer=0;
    voornaam=""; naam=""; 
    straat=""; nummer=0;
    postcode=0; stad="";
    email=""; telefoon="";
    actief=false;
}

public student(string _voornaam, string _naam, string _straat, int _nummer, int _postcode, string _stad, string _email, string _telefoon)
{
    studentennummer=0;
    voornaam=_voornaam; naam=_naam; 
    straat=_straat; nummer=_nummer;
    postcode=_postcode; stad=_stad;
    email=_email; telefoon=_telefoon;
    actief=false;
}
```

In het programma kan je dan bv het volgende coderen:

```csharp
Student student = new Student("Ronny", "Mees", "Doorniksesteenweg" , 145, 8500, "Kortrijk", "ronny.mees@vives.be", "0473/36.00.04");
```

## Methoden

Tot slot kan je ook methoden definiëren in een klasse. Ook die kunnen private of public zijn.

In ons voorbeeld zouden dit deze methoden kunnen zijn:

```csharp
// gedeelte met methode(n) 
public void SetStudentnummer(int _nummer)
{
    studentennummer = _nummer
}

public void Ingeschreven()
{
    actief = true;
}

public void Uitgeschreven()
{
    actief = false;
}

public bool IsActief()
{
    return actief;
}
```

In je programma kan je dan bv hetvolgende schrijven:

```csharp
if(student.IsActief()){
    
}
```

::: tip Tip
Je kan ook een array van een klasse maken.
```csharp
Student[] studenten = new Student[25];
```
:::

::: tip Taak 5 - Programmeren met klassen

![download](./images/assignment.png)

* [Opdrachtfiche](assignment.html)
:::