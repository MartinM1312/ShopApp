import 'react-native-gesture-handler';

import React from 'react';

import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';

import productsReducers from './src/store/reducers/productsReducers';
import cartReducers from './src/store/reducers/cartReducers';
import ShopNavigator from './src/navigation/ShopNavigator';

import orderReducer from './src/store/reducers/orderReducer';

const rootReducer = combineReducers({
  products: productsReducers,
  cart: cartReducers,
  orders: orderReducer,
});

const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <ShopNavigator />
      </NavigationContainer>
    </Provider>
  );
}
