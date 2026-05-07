import type { PokemonAbility } from "./pokemonAbility.types";
import type { PokemonCries } from "./pokemonCries.types";
import type { PokemonGameIndex } from "./pokemonGameIndex.types";
import type { PokemonMove } from "./pokemonMove.types";
import type { PokemonPastAbility } from "./pokemonPastAbility.types";
import type { PokemonPastStat, PokemonStat } from "./pokemonPastStat.types";
import type { PokemonSprites } from "./pokemonSprites.types";
import type { PokemonType } from "./pokemonType.types";

export interface PokemonForm {
  name: string;
  url: string;
}

export interface PokemonSpecie {
  name: string;
  url: string;
}

export interface Pokemon {
  abilities: PokemonAbility[];
  base_experience: number;
  cries: PokemonCries;
  forms: PokemonForm[];
  game_indices: PokemonGameIndex[];
  height: number;
  held_items: unknown[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: PokemonMove[];
  name: string;
  order: number;
  past_abilities: PokemonPastAbility[];
  past_stats: PokemonPastStat[];
  past_types: unknown[];
  species: PokemonSpecie;
  sprites: PokemonSprites;
  stats: PokemonStat[];
  types: PokemonType[];
  weight: number;
}
