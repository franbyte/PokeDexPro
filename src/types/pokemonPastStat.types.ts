export interface PokemonPastStatGeneration {
  name: string;
  url: string;
}

export interface PokemonStatData {
  name: string;
  url: string;
}

export interface PokemonStat {
  base_stat: number;
  effort: number;
  stat: PokemonStatData;
}

export interface PokemonPastStat {
  generation: PokemonPastStatGeneration;
  stats: PokemonStat[];
}
