export const PokemonCard = ({pokemonData}) => {
  return (
    <>
      <li className='pokemon-card'>
        <figure>
          <img src={pokemonData.sprites.other.dream_world.front_default} alt="pokemonData.name" />
        </figure>

        <h2>{pokemonData.name}</h2>

        <div className='pokemon-type'>
          <p className='type'>{pokemonData.types.map((curType)=> curType.type.name).join(", ")}</p>
        </div>

        <div className="grid-col-3">
          <p className='pokemon-info'>
            <span>Height : </span> {pokemonData.height}</p>
          <p className='pokemon-info'>
            <span>Weight : </span> {pokemonData.weight}</p>
          <p className='pokemon-info'>
            <span>Speed : </span> {pokemonData.stats[5].base_stat}</p>
        </div>

        <div className="grid-col-3">
          <div className='pokemon-info'>
            <p> {pokemonData.base_experience}</p>
            <span>Experience : </span>
          </div>
          <div className='pokemon-info'>
            <p>{pokemonData.stats[1].base_stat}</p>
            <span>Attack : </span>
          </div>
          <div className='pokemon-info'>
            <p>{pokemonData.abilities
              .map((abilityinfo)=>abilityinfo.ability.name)
              .slice(0,1)
              .join(", ")}
            </p>
            <span>Abilities : </span>
          </div>
        </div>
      </li>
      {/* <li className='pokemon-card'>
        <figure>
          <img src="../../images/img1.jpg" alt="" />
        </figure>
        <h2>Bulasaur</h2>
        <div className='pokemon-type'>
          <p className='type'>Grass, Poison</p>
        </div>
        <div className="grid-col-3">
          <p className='pokemon-info'><span>Height : </span>7</p>
          <p className='pokemon-info'><span>Weight : </span>69</p>
          <p className='pokemon-info'><span>Speed : </span>45</p>
        </div>
        <div className="grid-col-3">
          <div className='pokemon-info'>
            <p className='pokemon-info'>64</p>
            <span>Experience : </span>
          </div>
          <div className='pokemon-info'>
            <p className='pokemon-info'>49</p>
            <span>Attack : </span>
          </div>
          <div className='pokemon-info'>
            <p className='pokemon-info'>Overgrow</p>
            <span>Abilities : </span>
          </div>
        </div>
      </li>
      <li className='pokemon-card'>
        <figure>
          <img src="../../images/img1.jpg" alt="" />
        </figure>
        <h2>Bulasaur</h2>
        <div className='pokemon-type'>
          <p className='type'>Grass, Poison</p>
        </div>
        <div className="grid-col-3">
          <p className='pokemon-info'><span>Height : </span>7</p>
          <p className='pokemon-info'><span>Weight : </span>69</p>
          <p className='pokemon-info'><span>Speed : </span>45</p>
        </div>
        <div className="grid-col-3">
          <div className='pokemon-info'>
            <p className='pokemon-info'>64</p>
            <span>Experience : </span>
          </div>
          <div className='pokemon-info'>
            <p className='pokemon-info'>49</p>
            <span>Attack : </span>
          </div>
          <div className='pokemon-info'>
            <p className='pokemon-info'>Overgrow</p>
            <span>Abilities : </span>
          </div>
        </div>
      </li> */}
    </>
  )
} 