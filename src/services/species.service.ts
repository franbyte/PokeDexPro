import axios from "axios";
import type { PokemonIdentifier } from "@/types/pokemon.types";
import type { Species } from "@/types/species.types";

const BASE_URL = "https://pokeapi.co/api/v2";

export const getSpecies = async (
  pokemonNameOrId: PokemonIdentifier,
): Promise<Species> => {
  const { data } = await axios.get(
    `${BASE_URL}/pokemon-species/${pokemonNameOrId}`,
  );
  return data as Species;
};
