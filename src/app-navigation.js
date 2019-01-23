import { createStackNavigator, createSwitchNavigator } from "react-navigation";

import SplashScreen from './components/Home/SplashScreen';
import HomeScreen from './components/Home/HomeScreen';
import BalanceScreen from './components/Balance/BalanceScreen';

const AppStack = createStackNavigator({
    Home: {
        screen: HomeScreen
    },
    Balance: {
        screen: BalanceScreen
    }
}, {
    defaultNavigationOptions: {
        headerStyle: {
            height: 100,
            borderWidth: 1,
            borderRadius: 2,
            borderColor: '#ddd',
            borderBottomWidth: 0,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.5,
            shadowRadius: 2,
            elevation: 1,
            marginLeft: 0,
            marginRight: 0,
            marginTop: 0,
        },
    }
});

const AppNavigator = createSwitchNavigator({
    AuthLoading: {
        screen: SplashScreen
    },
    App: {
        screen: AppStack
    }
}, {
    initialRouteName: 'AuthLoading'
});

export default AppNavigator;