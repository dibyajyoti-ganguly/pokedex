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
    <div className="relative z-10 py-3 md:py-5 px-4 md:px-0">
      <Header />

      <button
        onClick={() => fetchPokemons()}
        className="flex items-center mx-auto gap-2 mb-12 md:mb-16 px-4 md:px-6 py-2.5 md:pt-3 md:pb-3.5 rounded-xl md:rounded-2xl text-sm md:text-sm font-medium text-white bg-white/10 backdrop-blur-md border border-white/20 shadow-md hover:bg-white/20 hover:shadow-lg active:scale-95 transition-all duration-200 cursor-pointer"
      >
        <span className="text-sm md:text-base">🗘</span>
        <span>Surprise Me</span>
      </button>

      <Dexcontainer pokemonData={pokemonData} />

      <p className="w-full text-center mt-8 md:mt-16 mb-4 md:mb-8 px-4 text-white text-xs md:text-sm font-medium font-onest opacity-60">
        © 2025 Pokedex. All rights reserved.
      </p>
    </div>
  );
};

export default Dex;
