
import store from './store';
import * as flavors from './constants/icecream_flavors';
import { actions as actionsFreezer } from './ducks/freezer'


import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';


setInterval(() => store.dispatch(actionsFreezer.addIcecream(flavors.FABADA, 5)), 5000)
setInterval(() => store.dispatch(actionsFreezer.addIcecream(flavors.STRAWBERRY, 25)), 5000)

//  store.dispatch(actionsFreezer.updateTemperature(-Math.round(Math.random() * 10)))

ReactDOM.render(<App />, document.getElementById('root'));