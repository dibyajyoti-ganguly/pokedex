/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useCallback } from "react";

const usePokemonData = () => {
  const [pokemonData, setPokemonData] = useState<any[]>([]);

  const fetchPokemons = useCallback(async (offset?: number) => {
    try {
      const randomOffset =
        offset ?? Math.floor(Math.random() * (501 - 21) + 21);

      const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon/?offset=${randomOffset}`
      );
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
      console.error(err);
    }
  }, []);

  return { pokemonData, fetchPokemons };
};

export default usePokemonData;
