import React from 'react';
import renderer from 'react-test-renderer';

import  DrinkPopup from './DrinkPopup';


describe('<DrinkPopup />', () => {

    it('renders correctly', () => {
        const tree = renderer.create(<DrinkPopup
            setModalVisible={true}
            modalVisible={true}
            drink={{
                "name": "drink1",
                "ingredients": ["ingedient1", "ingedient2", "ingedient3"],
                "instructions": "instructions"
            }}
            />).toJSON();
        expect(tree).toMatchSnapshot();
    }
    );

    it('not showing popup without prop modalVisible', () => {
        const tree = renderer.create(<DrinkPopup  setModalVisible={true}
            drink={{
                "name": "drink1",
                "ingredients": ["ingedient1", "ingedient2", "ingedient3"],
                "instructions": "instructions"
            }} />).toJSON();
        expect(tree).toBe(null);
    }
    );

    it('not showing popup without props', () => {
        const tree = renderer.create(<DrinkPopup  />).toJSON();
        expect(tree).toBe(null);
    }
    );

});