import type { ReactNode } from "react";
import type { Pokemon } from "@/types/pokemon.types";
import fireBackground from "@/assets/fire_background.png";
import defaultBackground from "@/assets/default_background.png";
import "./Banner.css";

interface BannerProps {
  children: ReactNode;
  pokemon?: Pokemon;
}

export default function Banner({ children, pokemon }: BannerProps) {
  const backgrounds: Record<string, string> = {
    fire: fireBackground,
  };

  const pokemonType = pokemon?.types[0]?.type.name;

  const backgroundImage = backgrounds[pokemonType ?? ""] ?? defaultBackground;

  const artwork = pokemon?.sprites?.other?.["official-artwork"]?.front_default;

  const abilities = pokemon?.abilities ?? [];

  const types = pokemon?.types ?? [];

  return (
    <div
      className="banner"
      style={
        {
          "--banner-image": `url(${backgroundImage})`,
        } as React.CSSProperties
      }
    >
      <div>
        {types.map((type) => (
          <p key={type.slot}>{type.type.name}</p>
        ))}
      </div>

      <h1>
        {pokemon?.name} #{pokemon?.id}
      </h1>

      <div>
        {abilities.map((ability) => (
          <p key={ability.slot}>{ability.ability?.name}</p>
        ))}
      </div>

      {artwork && <img src={artwork} alt={pokemon?.name} />}

      {children}
    </div>
  );
}
