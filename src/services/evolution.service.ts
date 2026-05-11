import axios from "axios";
import type {
  EvolutionChain,
  EvolutionChainUrl,
} from "@/types/evolutionChain.types";

export const getEvolution = async (
  evolutionChainUrl: EvolutionChainUrl,
): Promise<EvolutionChain> => {
  const { data } = await axios.get(evolutionChainUrl);
  return data as EvolutionChain;
};
