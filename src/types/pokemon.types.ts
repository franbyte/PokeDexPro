interface NamedApiResource {
  name: string;
  url: string;
}

export interface PokemonAbility {
  ability: NamedApiResource | null;
  is_hidden: boolean;
  slot: number;
}

export interface PokemonCries {
  latest: string;
  legacy: string;
}

export interface PokemonGameIndex {
  game_index: number;
  version: NamedApiResource;
}

export interface PokemonMoveVersion {
  level_learned_at: number;
  move_learn_method: NamedApiResource;
  order: number | null;
  version_group: NamedApiResource;
}

export interface PokemonMove {
  move: NamedApiResource;
  version_group_details: PokemonMoveVersion[];
}

export interface PokemonPastAbility {
  abilities: PokemonAbility[];
  generation: NamedApiResource;
}

export interface PokemonStat {
  base_stat: number;
  effort: number;
  stat: NamedApiResource;
}

export interface PokemonPastStat {
  generation: NamedApiResource;
  stats: PokemonStat[];
}

export interface PokemonType {
  slot: number;
  type: NamedApiResource;
}

export interface PokemonSprites {
  back_default: string | null;
  back_female: string | null;
  back_shiny: string | null;
  back_shiny_female: string | null;
  front_default: string | null;
  front_female: string | null;
  front_shiny: string | null;
  front_shiny_female: string | null;
  other: {
    dream_world: {
      front_default: string | null;
      front_female: string | null;
    };
    home: {
      front_default: string | null;
      front_female: string | null;
      front_shiny: string | null;
      front_shiny_female: string | null;
    };
    "official-artwork": {
      front_default: string | null;
      front_shiny: string | null;
    };
    showdown: {
      back_default: string | null;
      back_female: string | null;
      back_shiny: string | null;
      back_shiny_female: string | null;
      front_default: string | null;
      front_female: string | null;
      front_shiny: string | null;
      front_shiny_female: string | null;
    };
  };
  versions: Record<string, unknown>;
}

export interface Pokemon {
  abilities: PokemonAbility[];
  base_experience: number;
  cries: PokemonCries;
  forms: NamedApiResource[];
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
  species: NamedApiResource;
  sprites: PokemonSprites;
  stats: PokemonStat[];
  types: PokemonType[];
  weight: number;
}

export type PokemonIdentifier = Pokemon["name"] | Pokemon["id"];
