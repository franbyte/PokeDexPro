import { LanguageName } from "./language.types";

interface NamedApiResource {
  name: string;
  url: string;
}

interface ApiResource {
  url: string;
}

export interface LanguageSpecies {
  name: LanguageName;
  url: string;
}

export interface FlavorTextEntry {
  flavor_text: string;
  language: LanguageSpecies;
  version: NamedApiResource;
}

export interface Genus {
  genus: string;
  language: LanguageSpecies;
}

export interface PokemonSpeciesName {
  language: LanguageSpecies;
  name: string;
}

export interface PalParkEncounter {
  area: NamedApiResource;
  base_score: number;
  rate: number;
}

export interface PokedexNumber {
  entry_number: number;
  pokedex: NamedApiResource;
}

export interface PokemonVariety {
  is_default: boolean;
  pokemon: NamedApiResource;
}

export interface Species {
  base_happiness: number;
  capture_rate: number;
  color: NamedApiResource;
  egg_groups: NamedApiResource[];
  evolution_chain: ApiResource;
  evolves_from_species: NamedApiResource | null;
  flavor_text_entries: FlavorTextEntry[];
  form_descriptions: unknown[];
  forms_switchable: boolean;
  gender_rate: number;
  genera: Genus[];
  generation: NamedApiResource;
  growth_rate: NamedApiResource;
  habitat: NamedApiResource;
  has_gender_differences: boolean;
  hatch_counter: number;
  id: number;
  is_baby: boolean;
  is_legendary: boolean;
  is_mythical: boolean;
  name: string;
  names: PokemonSpeciesName[];
  order: number;
  pal_park_encounters: PalParkEncounter[];
  pokedex_numbers: PokedexNumber[];
  shape: NamedApiResource;
  varieties: PokemonVariety[];
}
