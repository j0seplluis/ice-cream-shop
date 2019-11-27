import { createStore } from 'redux';
import * as FLAVORS from '../constants/icecream_flavors';




export const actionTypes = {
    UPDATE_TEMPERATURE: 'UPDATE_TEMPERATURE',
    ADD_ICECREAM: 'ADD_ICECREAM',
}



const DEFAULT_STATE = {
    temperature: 0,
    icecreams: {
        [FLAVORS.CHOCOLATE]: 10,
        [FLAVORS.VAINILLA]: 20,
    },

}

//Actions ////////////////////////////////////////////////////
export const actions = {
    updateTemperature(temperature) {
        return {
            type: actionTypes.UPDATE_TEMPERATURE,
            payload: temperature,
        };
    },
    addIcecream(flavor, amount = 20) {
        return {
            type: actionTypes.ADD_ICECREAM,
            payload: {
                flavor,
                amount,
            }
        }
    }
}



//Reducer //////////////////////////////////////////////////
export default function reducer(state = DEFAULT_STATE, action) {
    switch (action.type) {
        case actionTypes.UPDATE_TEMPERATURE:
            return {
                ...state,
                temperature: action.payload
            }
        case actionTypes.ADD_ICECREAM:
            const newAmount = action.payload.amount + (state.icecreams[action.payload.flavor] || 0);
            return {
                ...state,
                icecreams: {
                    ...state.icecreams,
                    [action.payload.flavor]: Math.min(newAmount, MAX_AMOUNT_PER_ICECREAM),
                }
            }
        default:
            return state;
    }



}

export const MAX_AMOUNT_PER_ICECREAM = 100;
export const store = createStore(reducer);
