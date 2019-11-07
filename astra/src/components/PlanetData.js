import React from "react";
import Lexicon from "./Lexicon";
import Lexique from "./Lexique";
import './Lexique.css';

const Planets = [
  {
    name: "Mercure",
    description:
      "Mercure est la plus petite et la plus rapide du Système Solaire. Elle est aussi la plus proche du Soleil et n'a aucun satellite connu. On retrouve des information sur elle datant de la Mésopotamie (-2000 av. JC). Sa température en surface varie entre -171 °C, la nuit et 427 °C, le jour à cause de son atmosphère quasi inexistante. Une journée sur Mercure équivaut à 59 jours sur Terre et une année Mercurienne ne dure que 88 jour. Mercure est une planète tellurique, son noyau, riche en fer représente 55% de sa masse et fait 3600 km de diamètre (Mercure fait 4880km de diamètre). L'atmosphère de la planète est composé à 42% d'oxygène mais de par sa quasi inexistance, elle ne permet pas de densifié assez l'oxygène pour être respirable. Distance avec le Soleil : 57 909 176 km.",
    image: "http://www.pngmart.com/files/5/Mercury-PNG-Clipart.png"
  },
  {
    name: "Vénus",
    description:
      "Vénus est la deuxième planète la plus proche du Soleil et la plus chaude du Système Solaire. Planète tellurique, elle est légèrement plus petite et moins massive que la Terre. L'atmosphère de l'étoile du Berger est composé à 96% de CO2. La planète est aride et la température en surface atteint les 460°C. Mais ce n'était pas le cas, il y a des centaines de millions d'années. En effet, l'eau était présente sur Mercure mais sa proximité avec le Soleil a fait s'évaporer l'eau, vapeur d'eau qui est un excellent gaz à effet de serre, permettant ainsi de chauffer la planète et augmenter la pression. Pression qui, au bout de centaines de millions d'années fit libérer le CO2 de la planète, remplaçant la vapeur d'eau dans l'atmosphère. Une journée sur Vénus équivaut à 243 jours sur Terre et une année sur Vénus dure 224,7 jours terrestres. Distance avec le Soleil : 104 millions de km.",
    image: "https://space-facts.com/wp-content/uploads/venus-transparent.png"
  },
  {
    name: "Terre",
    description:
      "La Terre est la  troisième planète la plus proche du Soleil. Sa révolution dure 365, 6 jours et une journée dure 24 heures. Elle fait 12 756 km de diamètre (la partie solide ne mesure que 66km d'épaisseur). La température moyenne en surface et de 15 °C, la température la plus chaude enregsitré est de 57.8 °C, en Lybie et la plus froide en Antarcitque, à -89 °C. La surface des continents mesure 149 millions de km² et celle des océans, 361 millions km². La montagne la plus haute est la Mauna Loa à Hawaï mesurant 10 230 m de haut mais 6000m sont immergés. L'endroit le plus profond est la fausse des Mariannes, dans l'océan Pacifique mesurant 10 916m, la pression là-bas équivaut à 1000 fois celle en surface. 97% de l'eau sur Terre se trouve dans les océans, 70% de l'eau potable, dans les glaces de l'Antarctique et au Groenland. Si les galces venaient à fondre le niveau des mers augmenteraient de 61 mètres. Un tiers des terres sont désertiques. La Terre possède un satellite naturel : la Lune. Distance avec le Soleil : 150 millions de km.",
    image: "https://i0.wp.com/freepngimages.com/wp-content/uploads/2015/09/planet-earth-from-space1.png?fit=280%2C280"
  },
  {
    name: "Mars",
    description:
      "Mars est la quatrième planète la plus éloignée du Soleil. Sa couleur rouge est du à l'abondance d'oxyde de fer à sa surface. La gravité est 3 fois moins importante que sur Terre. Il n'y a pas d'océan mais il y a de la galce sur un des pôles. La température moyenne en surface est -63 °C, 20 °C, le jour et -120 °C, la nuit. Cette grance différence est due à la fine atmosphère de la planète et à l'absence d'océan permettant d'emmagasiner la chaleur le jour et la relacher lentement la nuit. Un jour dure 24 heures et 37 minutes et une année dure 687 jours. Le diamètre de la plnète mesure 6792 km. Mars possède 2 satellites naturels : Phobos et Deimos. Distance avec le Soleil : 227 936 637 km.",
    image: "https://www.stickpng.com/assets/images/580b585b2edbce24c47b2708.png"
  },
  {
    name: "Jupiter",
    description:
      "Jupiter est la cinquième planète du Système Solaire, et la première planète gazeuse. Une journée dure un peu moins de 10 heures (9.97 heures) et une année dure 4335 jours. Son diamètre, de 142 984 km, est 11 fois plus grand que celui de la Terre et fait de Jupiter, la planète la plus grande du Système. Etant une planète gazeuse sa densité est 4 fois plus faible que celle de la Terre. Elle ne possède pas de surface solide et la température à une pression égale à celle sur terre (altitude 0) s'élève à -110 °C. Son atmosphère est riche en hydrogène et en hélium. La planète est en permanence frappée par de puissantes tempêtes. Jupiter possède 79 satellites naturels connus à ce jour, les plus connus sont : Io, Ganymède, Europe et Callisto. Distance avec le Soleil : 778 412 027 km.",
    image: "https://www.pikpng.com/pngl/b/544-5444947_jupiter-planet-png-transparent-background-jupiter-png-png.png"
  },
  {
    name: "Saturne",
    description:
      "Planète gazeuse, Saturne est la sixième planète de notre Système. Son diamètre est 9 fois supérieur à celui de la Terre, 139 822 km. La température en surface s'élève à -190 °C. Une journée là-bas dure 10 heures et 44 minutes et une année, 10 758 jours (29 ans et 171 jours). De part sa forte vitesse de rotation, ses pôles sont aplatits (rayon aux pôles : 54 359 km, rayon équatorial : 60 269 km). La densité de Saturne est très faible, 0.7 ce qui est inférieur à la densité de l'eau. Son oxygène est composé d'hydrogène et d'hélium. Le climat sur Saturne est très violent, tous les 30 ans, une tempête géante fait le tour de l'équateur. De nombreux orages apparaissent sur la planète pouvant duré jusque 8 mois et les éclairs sont beaucoup plus puissant que sur Terre. Ses anneaux sont composés de blocs glace et de roches allant de la taille d'un grain de sable à celle d'une montagne. Saturne a environ 200 satellites mais seulement 62 ont été confirmés parmis lesquels on retrouve : Téthys, Dioné, Rhéa, Titan, Hypérion et Phoebe. Distance avec le Soleil : 1 430 millions de km. ",
    image: "https://space-facts.com/wp-content/uploads/saturn-transparent.png"
  },
  {
    name: "Uranus",
    description:
      "Uranus est une planète gazeuse et la septième du Système Solaire. C'est la première planète invisible à l'oeil nu. Son diamètre mesure 51 118 km. Sa température s'élève à -220 °C. Une journée là-bas ne dure que 17 heures et 14 minutes. Et une année sur Uranus dure 84 ans. C'est une géante gazeuse composée à 83% d'hydrogène et 15% d'hélium. Sa masse est 14.5 fois celle de la Terre mais elle est la moins massive des géantes gazeuses. Sa densité est de 1.27, en comparaison la Terre a une densité de 5.5. Uranus est bleue-verte de par la composition de son atmosphère principalement composé de méthane. Uranus possède 29 satellites naturels connus dont : Titania et Obéron. Distance avec le Soleil : 2 869 millions de km.",
    image: "https://space-facts.com/wp-content/uploads/uranus-transparent.png"
  },
  {
    name: "Neptune",
    description:
      "Neptune, quatrième géante gazeuse, huitième et dernière planète du Système depuis le déclassement de Pluton. Son diamètre est de 49 528 km, elle est la plus petite des géantes gazeuses. Sa température s'élève à -218 °C. Une journée là-bas équivaut à 16 heures et une année sur Terre en vaut 164 et 288 jours sur Neptune. Elle est composé d'hydrogène et d'hélium et tout comme Uranus est principalement composé de méthane, ce qui donne sa couleur bleue. Elle est la géante gazeuse la plus dense (1.64) et la plus massive. Elle possède 14 satellites naturels dont : Triton et Néréide. Distance avec le Soleil : 4.495 milliards de km.",
    image: "https://i.ya-webdesign.com/images/png-neptune.png"
  },
  {
    name: "",
    description:
      "",
    image: ""
  },
];

const PlanetData = () => (
  <div className='Lexique'>
    <Lexique/>
    {Planets.map(item => (
      <Lexicon name={item.name} description={item.description} image={item.image} />
    ))}
  </div>
);

export default PlanetData;
