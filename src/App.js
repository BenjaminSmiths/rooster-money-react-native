/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';
import styled from 'styled-components/native'
import { SharedElementRenderer } from 'react-native-motion'


const StyledView = styled.View` 
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: #72ff7d
`

type Props = {
    loginState: boolean
};
export default class App extends Component<Props> {

    constructor(props) {
        super(props)
        this.state = {
            loginState: 'loading'
        }
    }

    componentDidMount() {
        // TODO: Refactor this into a separate auth service or module
        // TODO: get the api url from the app config + accessKey + accessPassword
        // TODO: save the token to the runtime config for further use on each call.
        fetch('https://api.roostermoney.com/v1/auth/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                accessKey: 'bensmith',
                accessPassword: "49f1963d859a9ec63e41"
            })
        })
            .then(response => response.json())
            .then(data => {
                if (data.error === "AuthFailedError") {
                    return Promise.reject('Failed to Login')
                }
                if (data.token !== null) {
                    this.setState({
                        loginState: 'success',
                        token: data.token
                    })
                }
                console.log('Success:', data);
            })
            .catch(error => {
                console.log('Error:', error);
                this.setState({
                    loginState: 'failed'
                })
            })
    }

    render() {
        const { loginState, token } = this.state;
        // TODO: loginState should be in redux store
        // TODO: remove text and replace with actual views.
        return (
            <SharedElementRenderer>
                <StyledView>
                    {
                        loginState === 'success' &&
                        <Text style={styles.authorised}>
                            We have logged in lets view your account totals
                            { token }
                        </Text>
                    }
                    {
                        loginState === 'loading' &&
                        <Text style={styles.welcome}>Loading Account... Loading View</Text>
                    }
                    {
                        loginState === 'failed' &&
                        <Text style={styles.welcome}>Failed to load account. Login View</Text>
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
