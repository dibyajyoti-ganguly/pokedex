/* eslint-disable @typescript-eslint/no-explicit-any */

import Bug from "../assets/types/Bug.svg";
import Dark from "../assets/types/Dark.svg";
import Dragon from "../assets/types/Dragon.png";
import Electric from "../assets/types/Electric.png";
import Fire from "../assets/types/Fire.png";
import Flying from "../assets/types/Flying.png";
import Ghost from "../assets/types/Ghost.png";
import Grass from "../assets/types/Grass.png";
import Normal from "../assets/types/Normal.png";
import Poison from "../assets/types/Poison.png";
import Psychic from "../assets/types/Psychic.png";
import Rock from "../assets/types/Rock.png";
import Steel from "../assets/types/Steel.png";
import Water from "../assets/types/Water.png";
import Ice from "../assets/types/Ice.png";
import Ground from "../assets/types/Ground.png";
import Fight from "../assets/types/Fight.png";

interface CardProps {
  data: any;
}

const typeIcons: Record<string, string> = {
  bug: Bug,
  dark: Dark,
  dragon: Dragon,
  electric: Electric,
  fire: Fire,
  flying: Flying,
  ghost: Ghost,
  grass: Grass,
  normal: Normal,
  poison: Poison,
  psychic: Psychic,
  rock: Rock,
  steel: Steel,
  water: Water,
  ice: Ice,
  ground: Ground,
  fighting: Fight,
};

const Card = ({ data }: CardProps) => {
  const { name, id, sprites } = data;
  const type1 = data.types[0].type.name;
  const type2 = data?.types[1]?.type.name;
  const typeIcon = typeIcons[type1] || typeIcons[type2] || typeIcons.normal;

  return (
    <div className="flex flex-col gap-6 w-52 h-[320px] pt-8 cursor-pointer text-white bg-white/10 backdrop-blur-md border border-white/20 shadow-md hover:bg-white/20 transition-all duration-200">
      <img
        className="flex mx-auto w-32 h-28"
        src={sprites.other.dream_world.front_default}
        alt="pokemon"
      />
      <div className="flex flex-col gap-2">
        <p className="flex mx-auto font-onest text-xl font-semibold">
          {`#${id.toString().padStart(3, "0")}`}
        </p>
        <p className="flex mx-auto font-onest text-2xl font-bold mb-1.5">
          {name.charAt(0).toUpperCase() + name.slice(1)}
        </p>
        {typeIcon && (
          <img src={typeIcon} alt={type1 || type2} className="w-12 mx-auto" />
        )}
      </div>
    </div>
  );
};

export default Card;
