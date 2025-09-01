/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";

const usePokemonData = () => {
  const [pokemonData, setPokemonData] = useState<any>([]);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const res = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=155");
        const data = await res.json();
        const results: any = data.results;

        const detailedData = await Promise.all(
          results.map(async (pokemon: { url: RequestInfo | URL }) => {
            const response = await fetch(pokemon.url);
            return response.json();
          })
        );

        setPokemonData(detailedData);
      } catch (err) {
        // Optional: console.error for debugging
        console.log(err);
      }
    };

    fetchPokemons();
  }, []);

  return pokemonData;
};

export default usePokemonData;
