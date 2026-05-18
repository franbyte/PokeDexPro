import type { ReactNode } from "react";
import type { Pokemon } from "@/types/pokemon.types";

interface BannerProps {
  children: ReactNode;
  pokemon?: Pokemon;
}

export default function Banner({ children, pokemon }: BannerProps) {
  const ShowTypes = () => {
    if (!pokemon) return null;
    return pokemon.types.map((type) => <p key={type.slot}>{type.type.name}</p>);
  };

  return (
    <div
      style={{ padding: "20px", border: "2px solid black", marginBottom: 20 }}
    >
      {/* NAME */}
      <h1>
        {pokemon?.name} #{pokemon?.id}
      </h1>
      {/* TYPES */}
      <ShowTypes />
      {/* ABILITIES */}
      {pokemon?.abilities && (
        <div>
          {pokemon.abilities.map((ability) => (
            <p key={ability.slot}>{ability?.ability?.name}</p>
          ))}
        </div>
      )}
      {/* SPRITE */}
      {pokemon?.sprites?.other?.["official-artwork"]?.front_default && (
        <img
          src={pokemon?.sprites?.other?.["official-artwork"]?.front_default}
          alt={pokemon?.name}
        />
      )}
      {/* EVOLUTION CHAIN */}
      {children}
    </div>
  );
}
