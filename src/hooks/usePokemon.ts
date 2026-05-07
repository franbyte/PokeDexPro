import { useEffect, useState } from "react";
import { getPokemon } from "@/services/pokemon.service";
import type { Pokemon } from "@/types/pokemon.types";

export const usePokemon = (pokemonName: string) => {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        setLoading(true);
        setError(null);

        const data = await getPokemon(pokemonName);
        setPokemon(data);
      } catch (err) {
        setError("Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchPokemon();
  }, [pokemonName]);

  return {
    pokemon,
    loading,
    error,
  };
};
