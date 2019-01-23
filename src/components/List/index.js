/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, { Component } from 'react';
import { observer } from 'mobx-react'
import styled from 'styled-components/native'
import ChildrenStore from '../../stores/ChildrenStore'
import ListItem from '../ListItem'

const StyledView = styled.View` 
    flex: 1;
    justify-content: flex-start;
    align-items: center;
`

const StyledList = styled.FlatList` 
    padding-top: 50px;
`

type Props = {
    childrenStore: ChildrenStore,
    navigation: {}
};

@observer
export default class ListPage extends Component<Props> {
    render() {
        const { childrenStore, navigation } = this.props
        return (
            <StyledView>
                <StyledList
                    data={childrenStore && childrenStore.balances}
                    renderItem={({item}) => <ListItem balanceModel={item} navigation={navigation}/>}
                    keyExtractor={(item, index) => index.toString()}
                />
            </StyledView>
        );
    }
}