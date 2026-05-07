import { usePokemon } from "@/hooks/usePokemon";

export function PokemonPage() {
  const { pokemon, loading, error } = usePokemon("4");

  console.log(pokemon);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h1>Hi world {pokemon?.name}</h1>
      {pokemon?.sprites?.other?.["official-artwork"]?.front_default && (
        <img
          src={pokemon?.sprites?.other?.["official-artwork"]?.front_default}
          alt={pokemon?.name}
          className="w-40 h-40"
        />
      )}
    </div>
  );
}
