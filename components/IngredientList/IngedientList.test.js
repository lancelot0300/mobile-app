import React from 'react';
import renderer from 'react-test-renderer';

import {IngredientList} from './IngredientList';

describe('<IngredientList />', () => {

    it('renders correctly', () => {
        const tree = renderer.create(<IngredientList activeIngredient={{
            "ingedient1": "true",
            "ingedient2": "false",
            "ingedient3": "true",
        }} />).toJSON();
        expect(tree).toMatchSnapshot();
    }
    );

    it('showing loading text', () => {
        const tree = renderer.create(<IngredientList />).toJSON();
        expect(tree.children[0].children[0]).toBe('Loading');
    }
    );

    it('showing first ingredients ', () => {
        const tree = renderer.create(<IngredientList activeIngredient={{
            "ingedient1": "true",
            "ingedient2": "false",
            "ingedient3": "true",
        }} />).toJSON();
        expect(tree.children[0].children[0].children[0].children[0].children[0].children[0]).toBe('ingedient1');
    });
});