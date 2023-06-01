import React from 'react';
import renderer from 'react-test-renderer';

import CustomInput from './CustomInput';



describe('<CustomInput />', () => {

    it('renders correctly', () => {
        const tree = renderer.create(<CustomInput 
            value={'Text'}
            onChangeText={() => {}}
            placeholder={'Placeholder'}
        />).toJSON();
        expect(tree).toMatchSnapshot();
    }
    );


});