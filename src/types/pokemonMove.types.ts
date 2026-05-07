export interface PokemonMoveVersionMoveLearnMethod {
  name: string;
  url: string;
}

export interface PokemonMoveVersionGroup {
  name: string;
  url: string;
}

export interface PokemonMoveData {
  name: string;
  url: string;
}

export interface PokemonMoveVersion {
  level_learned_at: number;
  move_learn_method: PokemonMoveVersionMoveLearnMethod;
  order: number | null;
  version_group: PokemonMoveVersionGroup;
}

export interface PokemonMove {
  move: PokemonMoveData;
  version_group_details: PokemonMoveVersion[];
}
