import React from "react";
import Lexicon from "./Lexicon";
import Lexique from "./Lexique";

const Sun = [
  {
    name: "Soleil",
    description:
      "Le Soleil est l'étoile du Système Solaire, étoile de type naine jaune. Le Soleil est composé de 6 couches : Le noyau à 15 millions de °C, là où les réactions de fusions nucléaires apparaissent, la zone radioactive, la zone convective, des cercles de chaleur remontant l'énergie à la surface, la photosphère, qui est la surface du SOleil à environ 5 500 °C, la chromosphère, qui est la basse atmoshphère de notre étoile et la couronn solaire, la haute atmosphère allant de 1 à 2 millions de °C. Toute l'énergie est produite dans le noyau. D'un diamètre d'environ 1,4 millions de km, c'est le corps céleste le plus gros de notre système et sa masse s'élève à 1, 99 milliards de milliards de milliards de tonnes (1.99*10³⁰ kg). Il tourne sur lui-même en 25 jours à l'équateur et en 35 aux pôles. Il est constitué à 74% d'hydrogène et 25% d'hélium. Dans environ 5 milliards d'années, le Soleil aura consommé tout son hydrogène, qui permet actuellement de le classifié en tant que naine jaune, et utilisera l'hélium comme nouveau combustible et en fera une géante rouge et le  rendra 200 fois plus volumineux.",
    image: "https://vignette.wikia.nocookie.net/thesolarsystem6361/images/5/59/Sun_spacepedia.png/revision/latest?cb=20180301152819" 
  },
];

const SunData = () => (
  <div>
    <Lexique />
    {Sun.map(item => (
      <Lexicon name={item.name} description={item.description} image={item.image} />
    ))}
  </div>
);

export default SunData;