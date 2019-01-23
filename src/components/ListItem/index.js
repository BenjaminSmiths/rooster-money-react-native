/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

// List items page with source of SharedElement]
import React, { Component } from 'react';
import { TouchableHighlight, Text, Image, View, Dimensions, StyleSheet } from 'react-native';
import { observer } from 'mobx-react'
import childIconMock from '../../images/ChildIcon-Mock.png'
import BalanceModel from '../../models/BalanceModel'
import { formatCurrency } from  '../../currency'

import Icon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
    containerStyle: {
        flex: 0,
        flexDirection: 'row',
        alignItems: 'center',
        width: Dimensions.get('window').width - 40,
        height: 100,
        paddingTop: 5,
        paddingLeft: 10,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderRadius: 20,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 0,
    },
    info: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        color: '#4f4f4f',
        fontSize: 22,
        margin:2,
    },
    total: {
        color: '#4f4f4f',
        margin:2,
    },
    lineStyle:{
        borderWidth: 1,
        borderColor:'#ccc',
        margin:2,
    },
    icon: {
        marginRight: 30,
        fontWeight: 'bold'
    }
})

type Props = {
    balanceModel: BalanceModel,
    navigation: {}
}

@observer
export default class ListItem extends Component<Props> {
    render() {
        const { navigation, balanceModel } = this.props;
        // TODO: optimise this so we dont need to do it each render
        const name = balanceModel.childUsername.replace(/[0-9]/g, '');

        return (
            <TouchableHighlight
                style={styles.containerStyle}
                onPress={ () => navigation.navigate('Balance', {
                    balanceModel
                }) }
            >
                <View style={styles.info}>
                    <Image source={childIconMock}/>
                    <View>
                        <Text style={styles.title}>{name}</Text>
                        <View style={{flex: 0, flexDirection: 'row'}}>
                            <Icon name="balance-scale" size={18} color="#FF363F" style={{marginLeft: 3}}/>
                            <Text style={styles.total}>{formatCurrency(balanceModel.totalBalance)}</Text>
                            <Icon name="bullseye" size={18} color="#82c91e" style={{marginLeft: 3}}/>
                            <Text style={styles.total}>{formatCurrency(balanceModel.goalBalance)}</Text>
                        </View>

                    </View>
                    <Icon name="angle-double-right" size={50} color="#ccc" style={styles.icon}/>
                </View>
            </TouchableHighlight>
        );
    }
}

{/*<Text>{child.charityPotBalance}</Text>*/}
{/*<Text>{child.goalBalance}</Text>*/}
{/*<Text>{child.savingsBalance}</Text>*/}
{/*<Text>{child.walletBalance}</Text>*/}