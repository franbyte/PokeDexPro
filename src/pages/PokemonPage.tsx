import Banner from "@/component/Banner/Banner";
import { usePokemon } from "@/hooks/usePokemon";
import { useSpecies } from "@/hooks/useSpecies";
import { useEvolution } from "@/hooks/useEvolution";
import { useCarousel } from "@/hooks/useCarousel";
import type { Pokemon } from "@/types/pokemon.types";

export function PokemonPage() {
  // ralts
  const { species, speciesLoading, speciesError } = useSpecies("charmander");
  const { evolutionChain, evolutionChainLoading, evolutionChainError } =
    useEvolution(species?.evolution_chain.url);
  const { pokemon, pokemonLoading, pokemonError } = usePokemon(species?.id);
  const { carousel, carouselLoading, carouselError } =
    useCarousel(evolutionChain);

  const showPokemon = (carouselPokemon: Pokemon) => (
    <div>
      <h1>
        {carouselPokemon?.name} / {carouselPokemon?.types[0]?.type.name}
      </h1>
      {carouselPokemon?.sprites?.other?.["official-artwork"]?.front_default && (
        <img
          src={
            carouselPokemon?.sprites?.other?.["official-artwork"]?.front_default
          }
          alt={carouselPokemon?.name}
          className="w-40 h-40"
        />
      )}
    </div>
  );

  if (
    pokemonLoading ||
    evolutionChainLoading ||
    speciesLoading ||
    carouselLoading
  ) {
    return <p>Loading...</p>;
  }

  if (pokemonError || evolutionChainError || speciesError || carouselError) {
    return (
      <p>
        {pokemonError || evolutionChainError || speciesError || carouselError}
      </p>
    );
  }

  return (
    <>
      <Banner pokemon={pokemon}>
        {carousel.length > 0 && (
          <div style={{ display: "flex" }}>
            {carousel.map((p) => showPokemon(p))}
          </div>
        )}
      </Banner>
    </>
  );
}
