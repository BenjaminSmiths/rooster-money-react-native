import React from 'react';
import { Provider } from 'mobx-react';
import renderer from 'react-test-renderer';
import SplashScreen from './SplashScreen';


test('Splash Screen Renders Correctly', () => {
    // When
    const tree = renderer.create(
        <Provider>
            <SplashScreen/>
        </Provider>
    ).toJSON();

    // Then
    expect(tree).toMatchSnapshot();
});