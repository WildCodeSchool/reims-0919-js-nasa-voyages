import React from 'react';
import Lexicon from './Lexicon'

const Planets = [
  {
    name: "Mercure",
    description: "Mercure est la plus petite et la plus rapide du Système Solaire. Elle est aussi la plus proche du Soleil et n'a aucun satellite connu. On retrouve des information sur elle datant de la Mésopotamie (-2000 av. JC). Sa température en surface varie entre -171 °C, la nuit et 427 °C, le jour à cause de son atmosphère quasi inexistante. Une journée sur Mercure équivaut à 59 jours sur Terre et une année Mercurienne ne dure que 88 jour. Mercure est une planète tellurique, son noyau, riche en fer représente 55% de sa masse et fait 3600 km de diamètre (Mercure fait 4880km de diamètre). L'atmosphère de la planète est composé à 42% d'oxygène mais de par sa quasi inexistance, elle ne permet pas de densifié assez l'oxygène pour être respirable.",
    image: "",
    distance: ""
  },
  {
    name: "Vénus",
    description: "Vénus est la deuxième planète la plus proche du Soleil et la plus chaude du Système Solaire. Planète tellurique, elle est légèrement plus petite et moins massive que la Terre. L'atmosphère de l'étoile du Berger est composé à 96% de CO2. La planète est aride et la température en surface atteint les 460°C. Mais ce n'était pas le cas, il y a des centaines de millions d'années. En effet, l'eau était présente sur Mercure mais sa proximité avec le Soleil a fait s'évaporer l'eau, vapeur d'eau qui est un excellent gaz à effet de serre, permettant ainsi de chauffer la planète et augmenter la pression. Pression qui, au bout de centaines de millions d'années fit libérer le CO2 de la planète, remplaçant la vapeur d'eau dans l'atmosphère. Une journée sur Vénus équivaut à 243 jours sur Terre et une année sur Vénus dure 224,7 jours terrestres.",
    image: "",
    distance: ""
  },
  {
    name: "Terre",
    description: "La Terre est la  troisième planète la plus proche du Soleil. Sa révolution dure 365, 6 jours et une journée dure 24 heures. Elle fait 12 742 km de diamètre (la partie solide ne mesure que 66km d'épaisseur). La température moyenne en surface et de 15 °C, la température la plus chaude enregsitré est de 57.8 °C, en Lybie et la plus froide en Antarcitque, à -89 °C. La surface des continents mesure 149 millions de km² et celle des océans, 361 millions km². La montagne la plus haute est la Mauna Loa à Hawaï mesurant 10 230 m de haut mais 6000m sont immergés. L'endroit le plus profond est la fausse des Mariannes, dans l'océan Pacifique mesurant 10 916m, la pression là-bas équivaut à 1000 fois celle en surface. 97% de l'eau sur Terre se trouve dans les océans, 70% de l'eau potable, dans les glaces de l'Antarctique et au Groenland. Si les galces venaient à fondre le niveau des mers augmenteraient de 61 mètres. Un tiers des terres sont désertiques. La Terre possède un satellite naturelle : la Lune.",
    image: "",
    distance: ""
  },
  {
    name: "Mars",
    description: "",
    image: "",
    distance: ""
  },
  {
    name: "",
    description: "",
    image: "",
    distance: ""
  },
];

const PlanetData = () => (
  <div>
    {Planets.map(item => (
      <Lexicon name={item.name} description={item.description} />
    ))}
  </div>
)

export default PlanetData;