import React, { useEffect, useState } from 'react';

const PokeSearch = () => {

  const [pokemon, setPokemon] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/bulbasaur`)
      .then((res) => res.json())
      .then((result) => {
        setPokemon(result);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [])

  return (
    <div>
      {isLoading
        ? <h3>...Loading...</h3>
        : <p>{pokemon.name}</p>
      }
    </div>
  );
}

export default PokeSearch;
