import { useEffect, useState } from "react";
import { getPokemon } from "@/services/pokemon.service";
import type { Pokemon, PokemonIdentifier } from "@/types/pokemon.types";

export const usePokemon = (pokemonNameOrId?: PokemonIdentifier) => {
  const [pokemon, setPokemon] = useState<Pokemon | undefined>(undefined);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        setLoading(true);
        setError(null);

        const data = await getPokemon(pokemonNameOrId!);
        setPokemon(data);
      } catch (err) {
        setError("Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    if (pokemonNameOrId !== null && pokemonNameOrId !== undefined)
      fetchPokemon();
  }, [pokemonNameOrId]);

  return {
    pokemon,
    pokemonLoading: loading,
    pokemonError: error,
  };
};
