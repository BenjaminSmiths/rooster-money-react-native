/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

// List items page with source of SharedElement]
import React, { Component } from 'react';
import { TouchableHighlight, Text, View, Dimensions, Image } from 'react-native';
import { observer } from 'mobx-react'
import styled from 'styled-components/native'
import backgroundDetails from '../../images/background-details.jpg'
import childIconMock from '../../images/ChildIcon-Mock.png'
import { formatCurrency } from '../../currency'

const TotoalContainer = styled.View` 
    height: 300px;
    align-items: center;
    justify-content: flex-end;
    margin-bottom: 30px
`

const ChildIconImage = styled.Image`
  margin-top: 30px;
`

const SharedAmountsContainer = styled.View` 
    align-items: center;
    justify-content: center; 
    flex-direction: row;
`

const AmountContainer = styled.TouchableHighlight`
    flex: 0;
    align-items: center;
    justify-content: center;
    
    background-color: ${props => props.size ? props.color : '#b0b0b0'};
    border-radius: ${props => props.borderRadius};
    min-height: ${props => props.size || '100px'};
    min-width: ${props => props.size || '100px'}; 
 
    border: ${props => !props.size ? '4px dashed gray' : 'transparent' };
`
const AmountView = styled.View `
    align-items: center;
    justify-content: center;
`

const StyledTotalText = styled.Text` 
    color: #fff;
    font-size: 50px;
`

const MainView = styled.ImageBackground`
    flex: 1;
    align-items: stretch;
`

const SmallPriceText = styled.Text`
  color: #fff;
  font-size: 20px;
`
const WhiteText = styled.Text`
  color: #fff;
`

type Props = {
    navigation: {},
}

// TODO: would have loved to calculate the width and price as % for size with animation

@observer
export default class BalanceScreen extends Component<Props> {

    static navigationOptions = ({ navigation, navigationOptions }) => {
        const { params } = navigation.state;
        const title = params.balanceModel.childUsername.replace(/[0-9]/g, '')
        return {
            title: `Hello ${title}`
        };
    };

    render() {
        const { navigation } = this.props
        const { balanceModel } = navigation.state.params;
        const borderRadius = Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2
        return (
            <MainView
                source={backgroundDetails}
            >
                {
                    balanceModel && <View>
                        <TotoalContainer>
                            <StyledTotalText>{formatCurrency(balanceModel.totalBalance)}</StyledTotalText>
                            <WhiteText>ACCOUNT TOTAL</WhiteText>
                            <ChildIconImage source={childIconMock}/>
                        </TotoalContainer>
                        <SharedAmountsContainer>
                            <AmountContainer color="#fdc52f" borderRadius={borderRadius} size='180px'>
                                <AmountView>
                                    <SmallPriceText>{formatCurrency(balanceModel.walletBalance)}</SmallPriceText>
                                    <WhiteText>Spend</WhiteText>
                                </AmountView>

                            </AmountContainer>
                            <AmountContainer color="#da485f" borderRadius={borderRadius} size='150px'>
                                <AmountView>
                                <SmallPriceText>{formatCurrency(balanceModel.goalBalance)}</SmallPriceText>
                                <WhiteText>Goal</WhiteText>
                                </AmountView>
                            </AmountContainer>
                        </SharedAmountsContainer>

                        <SharedAmountsContainer>
                            <AmountContainer color="#266093" borderRadius={borderRadius}>
                                <AmountView>
                                <SmallPriceText>{formatCurrency(balanceModel.charityPotBalance)}</SmallPriceText>
                                <WhiteText>Give</WhiteText>
                                </AmountView>
                            </AmountContainer>
                            <AmountContainer color="#5fc4d9" borderRadius={borderRadius}>
                                <AmountView>
                                <SmallPriceText>{formatCurrency(balanceModel.savingsBalance)}</SmallPriceText>
                                <WhiteText>Save</WhiteText>
                                </AmountView>
                            </AmountContainer>
                        </SharedAmountsContainer>

                    </View>
                }

            </MainView>
        );
    }
}