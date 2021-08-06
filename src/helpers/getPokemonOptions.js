import pokemonApi from '@/api/pokemonApi';

const getPokemons = () => {
  return Array.from(Array(650)).map((_, idx) => idx + 1);
};

const getPokemonNames = async ([a, b, c, d] = []) => {
  const selected = Math.ceil(Math.random() * 4);
  const requests = [
    pokemonApi.get(`/${a}`),
    pokemonApi.get(`/${b}`),
    pokemonApi.get(`/${c}`),
    pokemonApi.get(`/${d}`),
  ];
  const pokemons = await Promise.all(requests);

  return pokemons.map(({ data }, idx) => ({
    id: data.id,
    name: data.name,
    selected: selected === idx,
  }));
};

export const getPokemonOptions = async () => {
  const mixedPokemons = getPokemons().sort(() => Math.random() - 0.5);
  return await getPokemonNames(mixedPokemons.slice(0, 4));
};
