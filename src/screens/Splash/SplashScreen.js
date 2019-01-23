import React from 'react'
import { Dimensions, ActivityIndicator } from 'react-native'
import styled from 'styled-components/native'
import roosterLogo from '../../images/roostermoney-logo.png'

const StyledView = styled.View`
    flex-grow: 1;
    justify-content: center;
    align-items: stretch;
    height: ${props => props.height};
`
const LoadingView = styled.View`
    justify-content: center;
    align-items: center;
`
const Logo = styled.Image`
    margin-bottom: 20px;
`

const SplashScreen = () =>
    <StyledView height={Dimensions.get('window').height}>
        <LoadingView>
            <Logo source={roosterLogo}/>
            <ActivityIndicator />
        </LoadingView>
    </StyledView>

export default SplashScreen