import { useState, useEffect } from "react";
import type {
  EvolutionChain,
  EvolutionChainLink,
} from "@/types/evolutionChain.types";
import type { Pokemon } from "@/types/pokemon.types";
import { getPokemon } from "@/services/pokemon.service";

export const useCarousel = (evolutionChain?: EvolutionChain) => {
  const [carousel, setCarousel] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getEvolutionNames = (chain: EvolutionChainLink): string[] => {
    const resp: string[] = [chain.species.name];
    if (chain.evolves_to.length > 0) {
      chain.evolves_to.forEach((evolution) => {
        resp.push(...getEvolutionNames(evolution));
      });
    }
    return resp;
  };

  const getEvolutionData = (evolutionNames: string[]): Promise<Pokemon[]> => {
    return Promise.all(
      evolutionNames.map((pokemonName) => getPokemon(pokemonName)),
    );
  };

  useEffect(() => {
    if (!evolutionChain) return;

    const buildCarousel = async () => {
      try {
        setLoading(true);
        setError(null);
        const newCarousel: Pokemon[] = [];
        const pokemonEvolutions = evolutionChain.chain;
        const evolutionNames = getEvolutionNames(pokemonEvolutions);
        newCarousel.push(...(await getEvolutionData(evolutionNames)));
        setCarousel(newCarousel);
      } catch (err) {
        setError("Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    buildCarousel();
  }, [evolutionChain]);

  return { carousel, carouselLoading: loading, carouselError: error };
};
