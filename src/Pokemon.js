import React from 'react';

class Pokemon extends React.Component {
  render() {

    const { name, type, averageWeight, image } = this.props.info
    const { value, measurementUnit } = averageWeight;

    return (
      <div className='pk-style'>
        <div className='list-style'>
          <li>{ name }</li>
          <li>{ type }</li>
          <li>Average Weight: { value } { measurementUnit }</li>
        </div>
        <div>
          <img src={ image } alt='pokemons'/>
        </div>
      </div>
    );
  }
}

export default Pokemon;