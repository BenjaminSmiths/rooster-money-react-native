import { observer } from 'mobx-react'
import React from 'react'
import { Component } from 'react'
import { StyleSheet, Dimensions, Image, View, Text } from 'react-native'
import styled from 'styled-components/native'
import backgroundBlue from '../../images/background-blue.jpg'
import parentIconMock from '../../images/ParentIcon-Mock.jpg'
import ListPage from '../../components/List'
import parentStore from '../../stores/ParentStore'

import Header from '../../components/Header'

const StyledView = styled.View`
    flex-grow: 1;
    justify-content: center;
    align-items: stretch;
    height: ${props => props.height};
`

const MainView = styled.ImageBackground`
    height: ${props => props.height};
    align-items: center;
`

const styles = StyleSheet.create({
    icon: {
        width: 24,
        height: 24,
    },
});

class LogoTitle extends React.Component {
    render() {
        return (<View>
            <Image
                source={parentIconMock}
                style={{ width: 40, height: 40 }}
            />
            <Text style={styles.message}>
                Hello {parentStore.parentCalled}!
            </Text>
        </View>);
    }
}

type Props = {
    navigator: {}
};
@observer
export default class Home extends Component<Props> {

    static navigationOptions = {
        headerTitle: <Header welcomeMessage={`Welcome ${parentStore.parentCalled}`}  />,
    };

    render() {
        const { navigation } = this.props;
        const { childrenStore } = navigation.state.params;
        return (
            <StyledView height={Dimensions.get('window').height}>
                <MainView
                    height={Dimensions.get('window').height}
                    source={backgroundBlue}
                >
                    <ListPage
                        navigation={navigation}
                        childrenStore={childrenStore}
                    />
                </MainView>

            </StyledView>
        );
    }
}