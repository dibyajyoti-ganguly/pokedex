import Header from "./Header";
import Dexcontainer from "./Dexcontainer";
import usePokemonData from "../utils/usePokemonData";
import { useEffect } from "react";

const Dex = () => {
  const { pokemonData, fetchPokemons } = usePokemonData();

  useEffect(() => {
    // load initial batch
    fetchPokemons();
  }, [fetchPokemons]);

  return (
    <div className="relative z-10 py-5">
      <Header />
      <button
        onClick={() => fetchPokemons()}
        className="flex items-center mx-auto gap-2 mb-16 px-6 pt-3 pb-3.5 rounded-2xl text-sm font-medium text-white bg-white/10 backdrop-blur-md border border-white/20 shadow-md hover:bg-white/20 transition-all duration-200 cursor-pointer"
      >
        <span className="text-base">🗘</span>
        Surprise Me
      </button>
      <Dexcontainer pokemonData={pokemonData} />
      <p className="w-full text-center mt-16 mb-8 text-white text-sm font-medium font-onest opacity-60">
        © 2025 Pokedex. All rights reserved.
      </p>
    </div>
  );
};

export default Dex;
