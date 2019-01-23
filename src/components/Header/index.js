import React, { Component } from 'react'
import { StyleSheet, Text, View, Dimensions, Image, Animated, Easing } from 'react-native'

import parentIconMock from '../../images/ParentIcon-Mock.jpg'

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        top: 0,
        left: 0,
        right: 0,
        flex: 0,
        height: 100,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        width: Dimensions.get('window').width,
    },
    header: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        flex: 0,
        flexDirection: 'row',
        width: Dimensions.get('window').width,
        height: 100,
        paddingTop: 18,
        paddingLeft: 25,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    message: {
        fontSize: 17
    },
    icon: {
        marginRight: 15,
        width: 40,
        height: 40
    }
})

type Props = {
    welcomeMessage: {}
};
export default class Header extends Component<Props> {

    state = {
        topAnim: new Animated.Value(-200),
        fadeAnim: new Animated.Value(0),
    }


    componentDidMount() {
        Animated.timing(
            this.state.fadeAnim,
            {
                toValue: 1,
                duration: 1000,
                easing: Easing.back(),
            }
        ).start();
        Animated.timing(
            this.state.topAnim,
            {
                toValue: 0,
                duration: 1000,
                easing: Easing.bezier(0.645, 0.045, 0.355, 1)
            }
        ).start();
    }


    render() {
        const { welcomeMessage } = this.props;

        let { fadeAnim, topAnim } = this.state;

        return <View style={ styles.container }>
            <Animated.View style={{
                ...styles.header,
                opacity: fadeAnim,         // Bind opacity to animated value
                top: topAnim
            }}>
                <Image style={styles.icon} source={parentIconMock}/>
                <Text style={styles.message}>
                    { welcomeMessage }
                </Text>
            </Animated.View>
        </View>
    }
}