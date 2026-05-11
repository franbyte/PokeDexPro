import { useEffect, useState } from "react";
import { getSpecies } from "@/services/species.service";
import type { PokemonIdentifier } from "@/types/pokemon.types";
import type { Species } from "@/types/species.types";

export const useSpecies = (pokemonNameOrId?: PokemonIdentifier) => {
  const [species, setSpecies] = useState<Species | undefined>(undefined);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSpecies = async () => {
      try {
        setLoading(true);
        setError(null);

        const data = await getSpecies(pokemonNameOrId!);
        setSpecies(data);
      } catch (err) {
        setError("Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    if (pokemonNameOrId !== null && pokemonNameOrId !== undefined)
      fetchSpecies();
  }, [pokemonNameOrId]);

  return {
    species,
    speciesLoading: loading,
    speciesError: error,
  };
};
