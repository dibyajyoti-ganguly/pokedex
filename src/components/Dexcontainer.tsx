import usePokemonData from "../utils/usePokemonData";
import Card from "./Card";

const Dexcontainer = () => {
  const pokemonData = usePokemonData();
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
