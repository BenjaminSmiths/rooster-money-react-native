/** @format */
import React, { Component } from 'react';
import { createAppContainer, NavigationActions } from 'react-navigation'
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';

import AppNavigation from './src/app-navigation'
import parentStore from './src/stores/ParentStore';
import ChildrenStore from './src/stores/ChildrenStore';


const AppContainer = createAppContainer(AppNavigation)

class App extends Component {

    componentDidMount() {

        const childrenStore = ChildrenStore.create(parentStore);
        childrenStore.getBalance()

        parentStore.login()
            .then(() => {
                console.log('App dis', childrenStore)
                this.navigator &&
                this.navigator.dispatch(
                    NavigationActions.navigate(
                        {
                            routeName: 'Home',
                            params: {
                                childrenStore: childrenStore
                            }
                        }
                    )
                );
            })
    }

    render() {
        return <AppContainer
            ref={nav => {
                this.navigator = nav;
            }}/>;
    }
}

AppRegistry.registerComponent(appName, () => App);
