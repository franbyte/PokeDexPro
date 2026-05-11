import type { Species } from "./species.types";

interface NamedApiResource {
  name: string;
  url: string;
}

export interface EvolutionDetail {
  base_form: NamedApiResource | null;
  gender: number | null;
  held_item: NamedApiResource | null;
  item: NamedApiResource | null;
  known_move: NamedApiResource | null;
  known_move_type: NamedApiResource | null;
  location: NamedApiResource | null;
  min_affection: number | null;
  min_beauty: number | null;
  min_damage_taken: number | null;
  min_happiness: number | null;
  min_level: number | null;
  min_move_count: number | null;
  min_steps: number | null;
  needs_multiplayer: boolean;
  needs_overworld_rain: boolean;
  party_species: NamedApiResource | null;
  party_type: NamedApiResource | null;
  region: NamedApiResource | null;
  relative_physical_stats: number | null;
  time_of_day: string;
  trade_species: NamedApiResource | null;
  trigger: NamedApiResource;
  turn_upside_down: boolean;
  used_move: NamedApiResource | null;
}

export interface EvolutionChainLink {
  evolution_details: EvolutionDetail[];
  evolves_to: EvolutionChainLink[];
  is_baby: boolean;
  species: NamedApiResource;
}

export interface EvolutionChain {
  baby_trigger_item: NamedApiResource | null;
  chain: EvolutionChainLink;
  id: number;
}

export type EvolutionChainUrl = Species["evolution_chain"]["url"];
