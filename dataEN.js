const waterways = [
  {
    id: 1,
    name: "Schelde",
    image: "Schelde.png",
    era: "natural",
    description: "The Scheldt (French: Escaut) is a 350-kilometer-long river that originates in the French municipality of Gouy in northern France and flows through Belgium and the southwestern Netherlands to the North Sea. Its first recorded name was Scaldis, found in a Roman text from the 1st century BC. Another name was Scala. The largest port on the Scheldt is the Port of Antwerp. Even before the Roman era, the mouth of the Scheldt was of strategic importance.",
    sections: "8 sections (25.4 km)",
    details: [
      "Boven-Schelde. South of Ringvaart. 1.8 km",
      "Kanaal van Zwijnaarde. 2.5 km",
      "Original arm. Tidal. 3.3 km",
      "Muinkschelde from Jachthaven Merelbeke to Ketelvest. 5 km",
      "Reep from Ketelvest to Portus Ganda. 0.8 km",
      "Achtervisserij. 1.4 km",
      "Muinkschelde from Stropkaai to old lock Sluis Gentbrugge. 1.6 km",
      "Boven-Zeeschelde. Tidal. Old route from France to Antwerp (via 1 2 4 7) 9 km"
    ],
    notes: [
      "Zwijnaarde at the southern end",
      "Melle at the eastern end"
    ]
  },
  {
    id: 2,
    name: "Leie",
    image: "Leie.png",
    era: "natural",
    description: "The Leie (French: Lys) is a river in France and Belgium. It is a tributary of the Scheldt and flows into it in the city of Ghent. The river originates in Lisbourg and is approximately 200 kilometers long. The Leie forms the Belgian-French border from Armentières to Menen. The Leie is also called the \"Golden River\" because flax was retted in the Leie from 1860 to 1945.",
    sections: "3 sections (20.6 km)",
    details: [
      "Leie 14.8 km",
      "Arm van Drongen 5 km",
      "Arm van Akkergem 1 km"
    ],
    notes: []
  },
  {
    id: 3,
    name: "Ketelvest 11th C.",
    image: "Ketelvaart.png",
    era: "medieval",
    description: "Ketelvest was dug in the 11th century as a kind of moat, forming one of the boundaries around the area now known as the Gentse Kuip.",
    sections: "1 section (600 m)",
    details: [],
    notes: [
      "Justitiepaleis at the western end",
      "Library 'De Krook' at the eastern end"
    ]
  },
  {
    id: 4,
    name: "Lieve 13th C.",
    image: "Lieve.png",
    era: "medieval",
    description: "The Lieve, often affectionately called \"Liefke\" or \"Liefken\" in colloquial speech, is a canal that was dug from Ghent, starting at the Gravensteen, to the Zwin near Damme beginning in 1251. \"Lieve\" is a phonetic variant of \"Leie\" (Leye). In the past, the canal was also referred to as the \"Gentse Leie\" (Ghent Leie). The construction of the Lieve created the first separation between the source and mouth of the Durme.",
    sections: "3 sections (7 km)",
    details: [],
    notes: []
  },
  {
    id: 5,
    name: "Brugse Vaart 13th–19th C.",
    image: "Brugse_Vaart.png",
    era: "medieval",
    description: "The Ghent–Bruges Canal, locally also called the Brugse Vaart or Gentse Vaart, is a canal between the Belgian cities of Ghent and Bruges. The canal is 42 km long.",
    sections: "2 sections (6 km)",
    details: [],
    notes: []
  },
  {
    id: 6,
    name: "Coupure 1751",
    image: "Coupure.png",
    era: "early-modern",
    description: "De Coupure is a canal in Gent, dug in 1751 to connect the Leie with the Brugse Vaart.",
    sections: "1 section (2.5 km)",
    details: [],
    notes: []
  },
  {
    id: 7,
    name: "Visserij 1752",
    image: "Visserij.png",
    era: "early-modern",
    description: "A historical waterway in Gent, running parallel to the Schelde and known for its mills.",
    sections: "1 section (1.2 km)",
    details: [],
    notes: []
  },
  {
    id: 8,
    name: "Franse Vaart 1752",
    image: "Franse_Vaart.png",
    era: "early-modern",
    description: "A canal dug in the 18th century in Gent, historically part of the city's expanding waterway network.",
    sections: "2 sections (0.9 km)",
    details: [],
    notes: []
  },
  {
    id: 9,
    name: "N. de Pauwvertakking 1827–1829",
    image: "NdPvertakking.png",
    era: "industrial",
    description: "The Napoleon de Pauw branch is a short canal in the city of Ghent that connects the Visserij and the Leie to the Achterdok via a turning basin. The canal was constructed between 1827 and 1829, partly on the northern fortifications of the former Spanish Castle, which was located on the site of the Saint Bavo's Abbey. In 1884, the Kasteelsluis lock was built in this short canal. This lock is no longer in use today.",
    sections: "1 section (0.2 km)",
    details: [],
    notes: []
  },
  {
    id: 10,
    name: "Voorhaven 1827",
    image: "Voorhaven.png",
    era: "industrial",
    description: "The Voorhaven in Ghent is a historic port area on the Ghent–Terneuzen canal, on the edge of the Ghent districts of Muide and Meulestede. In the 19th century, it was a prestigious and innovative port project, realized under Emile Braun, Ghent's chief engineer and later mayor. In the 21st century, it is a protected cityscape and the restored warehouses are located in a park zone.",
    sections: "1 section (1.8 km)",
    details: [],
    notes: []
  },
  {
    id: 11,
    name: "Achterdok 1829",
    image: "Achterdok.png",
    era: "industrial",
    description: "The Achterdok is one of the oldest docks in the port of Ghent, along with the Houtdok and Handelsdok. It was constructed in 1829, just before Belgium seceded from the United Kingdom of the Netherlands in 1830. It is the southernmost dock of the port. The Achterdok is connected to the city center and Portus Ganda via a turning basin and the Napoleon de Pauw branch.",
    sections: "1 section (0.6 km)",
    details: [],
    notes: []
  },
  {
    id: 12,
    name: "Handelsdok 1829",
    image: "Handelsdok.png",
    era: "industrial",
    description: "The Handelsdok is one of the oldest docks in the port of Ghent, along with the Houtdok and the Achterdok. It was constructed in 1829, together with the Achterdok, just before Belgium seceded from the United Kingdom of the Netherlands in 1830. The southernmost part is called the Achterdok and is connected to the city center and Portus Ganda via a turning basin and the Napoleon de Pauw branch.",
    sections: "1 section (0.9 km)",
    details: [],
    notes: []
  },
  {
    id: 13,
    name: "Verbindingsvaart 1863",
    image: "Verbindingsvaart.png",
    era: "industrial",
    description: "A canal connecting the Brugse Vaart and the Voorhaven, forming a key link in the 19th-century industrial port network of Ghent.",
    sections: "",
    details: [],
    notes: []
  },
  {
    id: 14,
    name: "Houtdok 1880",
    image: "Houtdok.png",
    era: "industrial",
    description: "In what is now known as the 'Oude Dokken' (from south to north: Kleindok, Handelsdok, Houtdok and Voorhaven), the Houtdok holds a special place. Timber traffic was very important for the Ghent port. Of the 650 sea vessels that entered Ghent in 1880, 150 were loaded with timber. To handle this, a well-equipped dock was constructed in 1880 at the head of the Handelsdok, measuring 260.5 × 125 × 6.4 m. Works were largely completed in September 1881.",
    sections: "",
    details: [],
    notes: []
  },
  {
    id: 15,
    name: "Ringvaart 1950–69",
    image: "Ringvaart.png",
    era: "modern",
    description: "A man-made ring canal surrounding Ghent, constructed between 1950 and 1969 as part of the larger modernisation of the city's canal system.",
    sections: "",
    details: [],
    notes: []
  },
  {
    id: 16,
    name: "Put Evergem 1950–69",
    image: "PutEvergem.png",
    era: "modern",
    description: "A excavated water basin near Evergem, created as part of the Ringvaart construction works between 1950 and 1969.",
    sections: "",
    details: [],
    notes: []
  },
  {
    id: 17,
    name: "Watersportbaan 1952–54",
    image: "Watersportbaan.png",
    era: "modern",
    description: "De Watersportbaan, officially the Nationale Watersportbaan Georges Nachez, is a rowing course in the Belgian city of Ghent. It is 2,300 meters long and 76 meters wide (five-lane), and was first used in 1954. It has become a centre for sport and recreation in Ghent. The water is connected to the Coupure, the Ghent–Bruges Canal, and the Leie, of which a side arm runs through the rowing course.",
    sections: "",
    details: [],
    notes: []
  },
  {
    id: 18,
    name: "Kanaal Gent–Terneuzen 1827–1968",
    image: "Gent_Terneuzen.png",
    era: "industrial",
    description: "The Ghent–Terneuzen Canal connects the city of Ghent in Belgium to the Westerschelde via the North Sea locks, giving the city a direct link to the North Sea. The canal ends at Terneuzen, a few hundred metres from the Westerscheldetunnel. Construction ran from 1823 to 1827, with major expansions continuing until 1968.",
    sections: "",
    details: [],
    notes: []
  },
  {
    id: 19,
    name: "Grootdok 1900",
    image: "Grootdok.png",
    era: "modern",
    description: "A large dock constructed around 1900 as part of the expansion of the port of Ghent to accommodate growing maritime trade.",
    sections: "",
    details: [],
    notes: []
  },
  {
    id: 20,
    name: "Zuiddok 1915",
    image: "Zuiddok.png",
    era: "modern",
    description: "The Zuiddok (South Dock) was constructed in 1915 as part of the continued industrial expansion of the Ghent port zone.",
    sections: "",
    details: [],
    notes: []
  },
  {
    id: 21,
    name: "Middendok 1925",
    image: "Middendok.png",
    era: "modern",
    description: "The Middendok (Middle Dock) was constructed in 1925, extending the port infrastructure northward from the earlier 19th-century docks.",
    sections: "",
    details: [],
    notes: []
  },
  {
    id: 22,
    name: "Noorddok 1930",
    image: "Noorddok.png",
    era: "modern",
    description: "The Noorddok (North Dock) was built in 1930 as part of the interwar expansion of the industrial port area of Ghent.",
    sections: "",
    details: [],
    notes: []
  },
  {
    id: 23,
    name: "Sifferdok 1931",
    image: "Sifferdok.png",
    era: "modern",
    description: "The Sifferdok was constructed in 1931, adding further capacity to the port of Ghent's growing industrial zone along the Ghent–Terneuzen canal.",
    sections: "",
    details: [],
    notes: []
  },
  {
    id: 24,
    name: "Mercatordok 1966–1968",
    image: "Mercatordok.png",
    era: "modern",
    description: "The Mercatordok was constructed between 1966 and 1968, one of the last major dock additions to the port of Ghent in the 20th century, named after the Flemish cartographer Gerardus Mercator.",
    sections: "",
    details: [],
    notes: []
  }
];
