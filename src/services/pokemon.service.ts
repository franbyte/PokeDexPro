import axios from "axios";
import type { Pokemon, PokemonIdentifier } from "@/types/pokemon.types";

const BASE_URL = "https://pokeapi.co/api/v2";

export const getPokemon = async (
  pokemonNameOrId: PokemonIdentifier,
): Promise<Pokemon> => {
  const { data } = await axios.get(`${BASE_URL}/pokemon/${pokemonNameOrId}`);
  return data as Pokemon;
};
