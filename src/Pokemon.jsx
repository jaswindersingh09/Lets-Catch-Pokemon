import { useEffect } from 'react'
import './Pokemon.css'
import { PokemonCard } from './PokemonCard'
import { useState } from 'react'

export const Pokemon = () => {
  const [pokemon, setPokemon] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [search, setSearch] = useState('')

  const API = "https://pokeapi.co/api/v2/pokemon?limit=501";

  const fetchPokemon = async () => {
    try {
      const response = await fetch(API);
      const data = await response.json();
      // console.log(result);

      const detailedPokemonData = data.results.map(async (curPokemon) => {
        const res = await fetch(curPokemon.url);
        const data = await res.json();
        // console.log(curPokemon.url);
        // console.log(data);
        return data;
      })
      // console.log(detailedPokemonData);

      const detailedResponse = await Promise.all(detailedPokemonData);
      console.log(detailedResponse);
      setPokemon(detailedResponse)
      setLoading(false)
      
    } catch (error) {
      console.log(error);
      setLoading(false)
      setError(error)
    }
  }

  useEffect(() => {
    fetchPokemon();
  }, [])

  // search functionality

  const searchData = pokemon.filter((curPokemon) =>
     curPokemon.name.toLowerCase().includes(search.toLocaleLowerCase())
);

  if (loading) {
    return (
      <div className='loading'>
        <h1>Loading...</h1>
      </div>
    );
  }  

  if (error) {
    return (
      <div>
        <h1>{error.message}</h1>
      </div>
    );
  }

  
  return (
    <section className="container">
      <header>
        <h1>Lets Catch Pokemon</h1>
      </header>
      <div className="input">
          <input type="text" placeholder='Search Pokemon' value={search} onChange={(e)=>setSearch(e.target.value)}/>
        </div>
      <ul className='cards'>
        {
          // pokemon.map((curPokemon) => {
            searchData.map((curPokemon) => {
            return (
              <PokemonCard key={curPokemon.id} pokemonData={curPokemon} />
            )
          })
        }

      </ul>
    </section>
  )
}