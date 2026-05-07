import type { PokemonAbility } from "./pokemonAbility.types";

export interface NamedApiResourceGeneration {
  name: string;
  url: string;
}

export interface PokemonPastAbility {
  abilities: PokemonAbility[];
  generation: NamedApiResourceGeneration;
}
