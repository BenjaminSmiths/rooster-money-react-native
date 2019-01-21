/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native'
import { SharedElementRenderer } from 'react-native-motion'

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

const StyledView = styled.View` 
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: #72ff7d
`

type Props = {
    appLoaded: boolean
};
export default class App extends Component<Props> {

    constructor(props) {
        super(props)
        this.state = {
            appLoaded: false
        }
    }

    componentDidMount() {
        fetch('https://api.roostermoney.com/v1/auth/', {
            method: 'post',
            body: JSON.stringify({
                "accessKey": "bensmith",
                "accessPassword": "49f1963d859a9ec63e41"
            })
        }).then(function(response) {
            return response.json();
        }).then(function(data) {
            console.log('Created Gist:', data.html_url);
        })
    }

    render() {
        const { appLoaded } = this.state;

        return (
            <SharedElementRenderer>
                <StyledView>
                    {
                        appLoaded ? (
                            <Text style={styles.authorised}>
                                We have logged in
                            </Text>
                        ) : (
                            <Text style={styles.welcome}>Loading Account...</Text>
                        )
                    }
                </StyledView>
            </SharedElementRenderer>
        );
    }
}

const styles = StyleSheet.create({
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    authorised: {
        textAlign: 'center',
        color: '#04a400',
        marginBottom: 5,
    },
});
