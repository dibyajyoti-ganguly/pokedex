/* eslint-disable @typescript-eslint/no-explicit-any */
import Card from "./Card";

type DexcontainerProps = {
  pokemonData: any[];
};

const Dexcontainer = ({ pokemonData }: DexcontainerProps) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 px-4 sm:px-6 md:px-12 lg:px-24 xl:px-32 max-w-7xl mx-auto">
      {pokemonData.map((p: any) => (
        <Card key={p.id} data={p} />
      ))}
    </div>
  );
};

export default Dexcontainer;
