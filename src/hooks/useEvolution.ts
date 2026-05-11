import { useEffect, useState } from "react";
import { getEvolution } from "@/services/evolution.service";
import type {
  EvolutionChain,
  EvolutionChainUrl,
} from "@/types/evolutionChain.types";

export const useEvolution = (evolutionChainUrl?: EvolutionChainUrl) => {
  const [evolutionChain, setEvolutionChain] = useState<
    EvolutionChain | undefined
  >(undefined);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        setLoading(true);
        setError(null);

        const data = await getEvolution(evolutionChainUrl!);
        setEvolutionChain(data);
      } catch (err) {
        setError("Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    if (evolutionChainUrl !== undefined && evolutionChainUrl !== null)
      fetchPokemon();
  }, [evolutionChainUrl]);

  return {
    evolutionChain,
    evolutionChainLoading: loading,
    evolutionChainError: error,
  };
};
