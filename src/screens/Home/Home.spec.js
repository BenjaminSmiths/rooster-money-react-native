import React from 'react';
import { Provider } from 'mobx-react';
import renderer from 'react-test-renderer';
import ChildrenStore from '../../stores/ChildrenStore'
import parentStore from '../../stores/ParentStore';
import HomeScreen from './HomeScreen';


test('Home Screen Renders Correctly', () => {
    // Given
    const childrenStore = ChildrenStore.create(parentStore)
    const mockNavigation = { state: { params: { childrenStore } } };

    // When
    const tree = renderer.create(
        <Provider>
            <HomeScreen navigation={mockNavigation}/>
        </Provider>
    ).toJSON();

    // Then
    expect(tree).toMatchSnapshot();
});