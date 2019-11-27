import reducer, { actions, MAX_AMOUNT_PER_ICECREAM } from '../../ducks/freezer';
import * as flavors from '../../constants/icecream_flavors';



describe('Freezer reducer', () => {
    it('should store the temperature in the state', () => {
        const newState = reducer(undefined, actions.updateTemperature(-6));
        expect(newState.temperature).toEqual(-6);
    });

    it('should store the icecream in the state', () => {
        const newState = reducer(undefined, actions.addIcecream(flavors.FABADA, 33));
        expect(newState.icecreams[flavors.FABADA]).toEqual(33);
    });

    it('should add the amnount to abn icecream if it already exists', () => {
        const previousState = {
            icecreams: {
                [flavors.CHOCOLATE]: 3,
            }
        }
        const newState = reducer(previousState, actions.addIcecream(flavors.CHOCOLATE, 22));
        expect(newState.icecreams[flavors.CHOCOLATE]).toEqual(25);
    });

    it('should limit the amount to a maximum value', () => {
        const previousState = {
            icecreams: {
                [flavors.CHOCOLATE]: 444,
            }
        }
        const newState = reducer(previousState, actions.addIcecream(flavors.CHOCOLATE, 66));
        expect(newState.icecreams[flavors.CHOCOLATE]).toEqual(MAX_AMOUNT_PER_ICECREAM);
    });

    //  describe('')


});