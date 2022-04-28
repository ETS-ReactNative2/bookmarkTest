/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { Provider } from 'react-redux';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { createStore } from 'redux';
import { NavigationContainer } from '@react-navigation/native';
import Base from './Screen/Base/Base';
import Home from './Screen/Home/Home';

const Stack = createStackNavigator();

const initialState = {
  dataProfile: {},
  initialModal: false,
  theme: 'light',

}
function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'UPDATE_INITIALMODAL':
      const { initialModal } = action.payload;
      return { ...state, initialModal };
    default:
      return state;
  }
}
const store = createStore(rootReducer);

export default class App extends React.Component {

  render() {

    return (
      // <Root>
      <SafeAreaProvider>
        <Provider store={store}>
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                gestureEnabled: true,
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
              }}
            >
              <Stack.Screen
                name="Home"
                component={Home}
                options={{
                  headerShown: false
                }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </Provider>
      </SafeAreaProvider>
      // </Root>
    )
  }
}
