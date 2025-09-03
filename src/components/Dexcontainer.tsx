import usePokemonData from "../utils/usePokemonData";
import Card from "./Card";

const Dexcontainer = () => {
  const pokemonData = usePokemonData();

  /*const filteredData = pokemonData.map(
    (p: { types: any }) => p.types[0].type.name
  );*/

  console.log(pokemonData);

  return (
    <div className="flex flex-wrap gap-6 px-48">
      {pokemonData.map((p: unknown) => {
        return <Card data={p} />;
      })}
    </div>
  );
};

export default Dexcontainer;
