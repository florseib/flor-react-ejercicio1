export const PokeInfo = (pokemon) => {
  console.log(pokemon);
  return (
    <div>
      <h2>{pokemon.name}</h2>
      <h3>Pokedex number: {pokemon.order}</h3>
      <img src={pokemon.sprites?.other.home.front_default}></img>
    </div>
  );
};
