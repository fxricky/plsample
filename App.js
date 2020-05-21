import React from 'react';
import MainPage from './src/MainPage';
import DetailPage from './src/DetailPage';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import RootReducer from './src/reducer'

const Stack = createStackNavigator();

const Store = createStore(RootReducer, applyMiddleware(thunk))

const App: () => React$Node = () => {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={MainPage} />
          <Stack.Screen name="Detail" component={DetailPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
