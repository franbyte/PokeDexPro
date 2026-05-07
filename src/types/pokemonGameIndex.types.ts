export interface PokemonGameIndexVersion {
  name: string;
  url: string;
}

export interface PokemonGameIndex {
  game_index: number;
  version: PokemonGameIndexVersion;
}
