import { createStore, combineReducers } from 'redux';
import freezerReducer from './ducks/freezer';
//import orderReducer from './ducks/orders';
//import { devToolsEnhanced } from 'redux-devtools-extension';


//const fakeReducer = (prevState, action) => ({ mockInfo: 'some information' })

const rootReducer = combineReducers({
    freezer: freezerReducer,
    //partialState: fakeReducer,
    //orders: orderReducer,
})


export default createStore(rootReducer);

