import React, { Component } from 'react';
import Button from '../Button/Button';
import Panel from '../Panel/Panel';
import FreezerFlavor from '../FreezerFlavor/FreezerFlavor';
import { actions as actionsFreezer } from '../../ducks/freezer';
import store from '../../store';
import * as FLAVORS from '../../constants/icecream_flavors';



class Freezer extends Component {

  state = {
    flavors: store.getState().freezer.icecreams,
    temperature: store.getState().freezer.temperature,
  }

  componentDidMount() {
    store.subscribe(() =>
      this.setState({
        flavors: store.getState().freezer.icecreams,
        temperature: store.getState().freezer.temperature,
      }))
    setInterval(() => {
      const randomTemp = -Math.round(Math.random() * 10)
      store.dispatch(actionsFreezer.updateTemperature(randomTemp))
    }, 2000)
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  handleRestock = (flavorName) => {
    const amount = parseInt(window.prompt(`Enter number of scoops to restock ${flavorName}`).toUpperCase())
    if (!isNaN(amount)) {
      store.dispatch(actionsFreezer.addIcecream(flavorName, amount))
    }
  }

  handleClickAddFlavor = () => {
    const availableFlavors = Object.keys(FLAVORS)
    const flavorsToRestock =
      window.prompt(`Enter flavor to restock from ${availableFlavors.join(',')}`)
    if (FLAVORS[flavorsToRestock]) {
      this.handleRestock(flavorsToRestock)
    }
  }

  render() {
    console.log(this.state);
    const flavors = this.state.flavors;
    const freezerFlavors = Object.keys(flavors).map(flavorName =>
      <FreezerFlavor
        key={flavorName}
        flavorName={flavorName}
        onClickRestock={() => this.handleRestock(flavorName)}
        scoops={flavors[flavorName]}
      />)
    return (
      <Panel title={`Freezer (º${this.state.temperature}C)`}>
        <Button label='Add flavor' onClick={this.handleClickAddFlavor} />
        <br />
        {freezerFlavors}
      </Panel>
    );
  }
}

export default Freezer;

