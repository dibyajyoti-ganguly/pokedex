/* eslint-disable @typescript-eslint/no-explicit-any */
import Card from "./Card";

type DexcontainerProps = {
  pokemonData: any[];
};

const Dexcontainer = ({ pokemonData }: DexcontainerProps) => {
  return (
    <div className="flex flex-wrap gap-6 px-48">
      {pokemonData.map((p: any) => (
        <Card key={p.id} data={p} />
      ))}
    </div>
  );
};

export default Dexcontainer;
