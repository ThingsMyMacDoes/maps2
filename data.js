const waterways = [
  {
    id: 1,
    name: "Schelde",
    image: "Schelde.png",
    era: "natural",
    description: `De Schelde is een 350 kilometer lange rivier die ontspringt `
in de Franse gemeente Gouy in Noord-Frankrijk en door België en het
      zuidwesten van Nederland stroomt naar de Noordzee. De eerste bekende naam was
Scaldis, gevonden in een Romeinse tekst uit de 1e eeuw voor Christus. Een andere naam was Scala.
  De grootste haven aan de Schelde is de haven van Antwerpen. Al voor de Romeinse tijd was de monding van de Schelde van strategisch belang.`,
    sections: "8 secties (25,4 km)",
    details: [
      "Boven-Schelde. Ten zuiden van de Ringvaart. 1,8 km",
      "Kanaal van Zwijnaarde. 2,5 km",
      "Originele arm. Getijdenwater. 3,3 km",
      "Muinkschelde van Jachthaven Merelbeke tot Ketelvest. 5 km",
      "Reep van Ketelvest tot Portus Ganda. 0,8 km",
      "Achtervisserij. 1,4 km",
      "Muinkschelde van Stropkaai tot oude sluis Gentbrugge. 1,6 km",
      "Boven-Zeeschelde. Getijdenwater. Oude route van Frankrijk naar Antwerpen (via 1 2 4 7) 9 km"
    ],
    notes: [
      "Zwijnaarde aan het zuidelijke uiteinde",
      "Melle aan het oostelijke uiteinde"
    ]
  },
  {
    id: 2,
    name: "Leie",
    image: "Leie.png",
    era: "natural",
    description: "De Leie (Frans: Lys) is een rivier in Frankrijk en België. Ze is een zijrivier van de Schelde en mondt uit in de stad Gent. De rivier ontspringt in Lisbourg en is ongeveer 200 kilometer lang. De Leie vormt de Belgisch-Franse grens van Armentières tot Menen. De Leie wordt ook wel de 'Gouden Rivier' genoemd omdat er van 1860 tot 1945 vlas werd geroot in de Leie.",
    sections: "3 secties (20,6 km)",
    details: [
      "Leie 14,8 km",
      "Arm van Drongen 5 km",
      "Arm van Akkergem 1 km"
    ],
    notes: []
  },
  {
    id: 3,
    name: "Ketelvest 11de E.",
    image: "Ketelvaart.png",
    era: "medieval",
    description: "Het Ketelvest werd in de 11de eeuw gegraven als een soort stadsgracht en vormde een van de grenzen van het gebied dat nu bekend staat als de Gentse Kuip.",
    sections: "1 sectie (600 m)",
    details: [],
    notes: [
      "Justitiepaleis aan het westelijke uiteinde",
      "Bibliotheek 'De Krook' aan het oostelijke uiteinde"
    ]
  },
  {
    id: 4,
    name: "Lieve 13de E.",
    image: "Lieve.png",
    era: "medieval",
    description: "De Lieve, in de volksmond liefkozend 'Liefke' of 'Liefken' genoemd, is een kanaal dat vanaf 1251 werd gegraven van Gent, startend aan het Gravensteen, naar het Zwin bij Damme. 'Lieve' is een fonetische variant van 'Leie' (Leye). In het verleden werd het kanaal ook wel de 'Gentse Leie' genoemd. De aanleg van de Lieve zorgde voor de eerste scheiding tussen de bron en de monding van de Durme.",
    sections: "3 secties (7 km)",
    details: [],
    notes: []
  },
  {
    id: 5,
    name: "Brugse Vaart 13de–19de E.",
    image: "Brugse_Vaart.png",
    era: "medieval",
    description: "Het kanaal Gent–Brugge, plaatselijk ook wel de Brugse Vaart of Gentse Vaart genoemd, is een kanaal tussen de Belgische steden Gent en Brugge. Het kanaal is 42 km lang.",
    sections: "2 secties (6 km)",
    details: [],
    notes: []
  },
  {
    id: 6,
    name: "Coupure 1751",
    image: "Coupure.png",
    era: "early-modern",
    description: "De Coupure is een kanaal in Gent, gegraven in 1751 om de Leie te verbinden met de Brugse Vaart.",
    sections: "1 sectie (2,5 km)",
    details: [],
    notes: []
  },
  {
    id: 7,
    name: "Visserij 1752",
    image: "Visserij.png",
    era: "early-modern",
    description: "Een historische waterweg in Gent, parallel aan de Schelde gelegen en bekend om zijn molens.",
    sections: "1 sectie (1,2 km)",
    details: [],
    notes: []
  },
  {
    id: 8,
    name: "Franse Vaart 1752",
    image: "Franse_Vaart.png",
    era: "early-modern",
    description: "Een kanaal gegraven in de 18de eeuw in Gent, historisch onderdeel van het uitbreidende waterwegennetwerk van de stad.",
    sections: "2 secties (0,9 km)",
    details: [],
    notes: []
  },
  {
    id: 9,
    name: "N. de Pauwvertakking 1827–1829",
    image: "NdPvertakking.png",
    era: "industrial",
    description: "De Napoleon de Pauwvertakking is een kort kanaal in de stad Gent dat de Visserij en de Leie verbindt met het Achterdok via een draaikom. Het kanaal werd aangelegd tussen 1827 en 1829, gedeeltelijk op de noordelijke vestingwerken van het voormalige Spaans Kasteel, dat zich bevond op de plaats van de Sint-Baafsabdij. In 1884 werd de Kasteelsluis gebouwd in dit korte kanaal. Deze sluis is vandaag niet meer in gebruik.",
    sections: "1 sectie (0,2 km)",
    details: [],
    notes: []
  },
  {
    id: 10,
    name: "Voorhaven 1827",
    image: "Voorhaven.png",
    era: "industrial",
    description: "De Voorhaven in Gent is een historisch havengebied aan het kanaal Gent–Terneuzen, op de grens van de Gentse wijken Muide en Meulestede. In de 19de eeuw was het een prestigieus en innovatief havenproject, gerealiseerd onder Emile Braun, hoofdingenieur en later burgemeester van Gent. In de 21ste eeuw is het een beschermd stadsgezicht en zijn de gerestaureerde pakhuizen gelegen in een parkzone.",
    sections: "1 sectie (1,8 km)",
    details: [],
    notes: []
  },
  {
    id: 11,
    name: "Achterdok 1829",
    image: "Achterdok.png",
    era: "industrial",
    description: "Het Achterdok is een van de oudste dokken van de haven van Gent, samen met het Houtdok en het Handelsdok. Het werd aangelegd in 1829, kort voor de afscheiding van België van het Verenigd Koninkrijk der Nederlanden in 1830. Het is het meest zuidelijk gelegen dok van de haven. Het Achterdok is verbonden met het stadscentrum en Portus Ganda via een draaikom en de Napoleon de Pauwvertakking.",
    sections: "1 sectie (0,6 km)",
    details: [],
    notes: []
  },
  {
    id: 12,
    name: "Handelsdok 1829",
    image: "Handelsdok.png",
    era: "industrial",
    description: "Het Handelsdok is een van de oudste dokken van de haven van Gent, samen met het Houtdok en het Achterdok. Het werd in 1829 aangelegd, samen met het Achterdok, kort voor de afscheiding van België van het Verenigd Koninkrijk der Nederlanden in 1830. Het meest zuidelijke deel heet het Achterdok en is verbonden met het stadscentrum en Portus Ganda via een draaikom en de Napoleon de Pauwvertakking.",
    sections: "1 sectie (0,9 km)",
    details: [],
    notes: []
  },
  {
    id: 13,
    name: "Verbindingsvaart 1863",
    image: "Verbindingsvaart.png",
    era: "industrial",
    description: "Een kanaal dat de Brugse Vaart en de Voorhaven verbindt, en een belangrijke schakel vormt in het 19de-eeuwse industriële havennetwerk van Gent.",
    sections: "",
    details: [],
    notes: []
  },
  {
    id: 14,
    name: "Houtdok 1880",
    image: "Houtdok.png",
    era: "industrial",
    description: "In wat nu bekend staat als de 'Oude Dokken' (van zuid naar noord: Kleindok, Handelsdok, Houtdok en Voorhaven) neemt het Houtdok een bijzondere plaats in. Voor de Gentse haven was de houttrafiek heel belangrijk. Van de 650 zeeschepen die Gent in 1880 binnenliepen, waren er 150 met hout geladen. Om dit in goede banen te leiden werd in 1880 begonnen met de aanleg van een goed uitgerust dok aan het hoofd van het Handelsdok, met afmetingen van 260,5 × 125 × 6,4 m. In september 1881 waren de werken grotendeels voltooid.",
    sections: "",
    details: [],
    notes: []
  },
  {
    id: 15,
    name: "Ringvaart 1950–69",
    image: "Ringvaart.png",
    era: "modern",
    description: "Een kunstmatig ringkanaal rond Gent, aangelegd tussen 1950 en 1969 als onderdeel van de modernisering van het kanaalnetwerk van de stad.",
    sections: "",
    details: [],
    notes: []
  },
  {
    id: 16,
    name: "Put Evergem 1950–69",
    image: "PutEvergem.png",
    era: "modern",
    description: "Een uitgegraven waterbekken nabij Evergem, aangelegd als onderdeel van de Ringvaartwerken tussen 1950 en 1969.",
    sections: "",
    details: [],
    notes: []
  },
  {
    id: 17,
    name: "Watersportbaan 1952–54",
    image: "Watersportbaan.png",
    era: "modern",
    description: "De Watersportbaan, officieel de Nationale Watersportbaan Georges Nachez, is een roeibaan in de Belgische stad Gent. Hij is 2.300 meter lang en 76 meter breed (net vijfbaans) en werd in 1954 voor het eerst gebruikt. Hij is een centrum geworden voor sport en recreatie in Gent. Het water staat in verbinding met de Coupure, het kanaal Gent–Brugge en de Leie, waarvan een zijarm dwars door de roeibaan stroomt.",
    sections: "",
    details: [],
    notes: []
  },
  {
    id: 18,
    name: "Kanaal Gent–Terneuzen 1827–1968",
    image: "Gent_Terneuzen.png",
    era: "industrial",
    description: "Het kanaal van Gent naar Terneuzen verbindt de stad Gent in België via de Noordzeesluizen met de Westerschelde, waardoor de stad een rechtstreekse verbinding heeft met de Noordzee. Het kanaal mondt uit in Terneuzen, op enkele honderden meters van de Westerscheldetunnel. De aanleg liep van 1823 tot 1827, met grote uitbreidingen die doorliepen tot 1968.",
    sections: "",
    details: [],
    notes: []
  },
  {
    id: 19,
    name: "Grootdok 1900",
    image: "Grootdok.png",
    era: "modern",
    description: "Een groot dok aangelegd rond 1900 als onderdeel van de uitbreiding van de haven van Gent om de groeiende maritieme handel op te vangen.",
    sections: "",
    details: [],
    notes: []
  },
  {
    id: 20,
    name: "Zuiddok 1915",
    image: "Zuiddok.png",
    era: "modern",
    description: "Het Zuiddok werd aangelegd in 1915 als onderdeel van de voortdurende industriële uitbreiding van de Gentse havenzone.",
    sections: "",
    details: [],
    notes: []
  },
  {
    id: 21,
    name: "Middendok 1925",
    image: "Middendok.png",
    era: "modern",
    description: "Het Middendok werd aangelegd in 1925 en breidde de haveninfrastructuur noordwaarts uit vanuit de vroegere 19de-eeuwse dokken.",
    sections: "",
    details: [],
    notes: []
  },
  {
    id: 22,
    name: "Noorddok 1930",
    image: "Noorddok.png",
    era: "modern",
    description: "Het Noorddok werd gebouwd in 1930 als onderdeel van de uitbreiding van het industriële havengebied van Gent in het interbellum.",
    sections: "",
    details: [],
    notes: []
  },
  {
    id: 23,
    name: "Sifferdok 1931",
    image: "Sifferdok.png",
    era: "modern",
    description: "Het Sifferdok werd aangelegd in 1931 en voegde verdere capaciteit toe aan de groeiende industriële zone van de haven van Gent langs het kanaal Gent–Terneuzen.",
    sections: "",
    details: [],
    notes: []
  },
  {
    id: 24,
    name: "Mercatordok 1966–1968",
    image: "Mercatordok.png",
    era: "modern",
    description: "Het Mercatordok werd aangelegd tussen 1966 en 1968 en is een van de laatste grote dokuitbreidingen van de haven van Gent in de 20ste eeuw. Het is genoemd naar de Vlaamse cartograaf Gerardus Mercator.",
    sections: "",
    details: [],
    notes: []
  }
];
