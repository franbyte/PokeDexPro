export interface NamedApiResourceAbility {
  name: string;
  url: string;
}

export interface PokemonAbility {
  ability: NamedApiResourceAbility | null;
  is_hidden: boolean;
  slot: number;
}
