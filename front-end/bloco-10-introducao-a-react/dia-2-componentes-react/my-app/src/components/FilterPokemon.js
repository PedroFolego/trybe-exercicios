import React from "react";

class FilterPokemon extends React.Component {
  render () {

    const { name, type, averageWeight, image, moreInfo} = this.props.pokemon;

    return(
      <div className="pokemon" >
        <img src={image} />
        <div className="info">
          <h3>{name}</h3>
          <p>{type}</p>
          <p>{averageWeight.value} {averageWeight.measurementUnit}</p>
        </div>
      </div>
    )
  }
}

export default FilterPokemon;