import axios from "axios";
import type { Pokemon } from "@/types/pokemon.types";

const BASE_URL = "https://pokeapi.co/api/v2";

export const getPokemon = async (
  pokemon: string | number,
): Promise<Pokemon> => {
  const { data } = await axios.get(`${BASE_URL}/pokemon/${pokemon}`);
  return data as Pokemon;
};
