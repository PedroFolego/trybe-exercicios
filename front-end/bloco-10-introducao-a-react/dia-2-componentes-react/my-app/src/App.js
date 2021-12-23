import React from "react";
import data from "./components/data";
import FilterPokemon from "./components/FilterPokemon"
import "./App.css"

class App extends React.Component {
  render () {
    
    return ( <>
      <header> 
       <h1>Pokedex</h1>  
      </header> 
      <div className="pokemons">
        {data
        .map( pokemon => <FilterPokemon  pokemon={pokemon} key={pokemon.id}/>)
        }
    
      </div>
    </>
    )
  }
}

App.propTypes = {

}
export default App;