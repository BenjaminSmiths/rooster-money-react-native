import React from 'react';
import { Provider } from 'mobx-react';
import renderer from 'react-test-renderer';
import BalanceModel from '../../models/BalanceModel'
import ChildrenStore from '../../stores/ChildrenStore'
import parentStore from '../../stores/ParentStore';
import BalanceSceen from './BalanceScreen';


test('Balance Screen Renders Correctly', () => {
    // Given
    const childStore = ChildrenStore.create(parentStore)
    const balanceModel = new BalanceModel(childStore, {
        childUsername: 'test13465',
        goalBalance: 50,
        savingsBalance: 4,
        totalBalance: 54,
        walletBalance: 0,
    })
    const mockNavigation = { state: { params: { balanceModel } } };

    // When
    const tree = renderer.create(
        <Provider>
            <BalanceSceen navigation={mockNavigation}/>
        </Provider>
    ).toJSON();

    // Then
    expect(tree).toMatchSnapshot();
});