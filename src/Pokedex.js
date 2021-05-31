import React from 'react';
import pokemons from './data';
import Pokemon from './Pokemon';


class Pokedex extends React.Component {
  constructor() {
    super()
    this.state = {
      index: 0
    }
    this.nextPoke = this.nextPoke.bind(this)
  }

  nextPoke() {
    this.setState((previous) => ({
      index: (previous.index === pokemons.length - 1) ? 0 : previous.index + 1
    }))
  }

  render() {
    return (
      <div>
        <Pokemon info={ pokemons[this.state.index] } />
        <button onClick={this.nextPoke}>next</button>
      </div>
    );
  }
};

export default Pokedex;