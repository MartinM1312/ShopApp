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

import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';

import productsReducers from './src/store/reducers/productsReducers';
import ShopNavigator from './src/navigation/ShopNavigator';

const rootReducer = combineReducers({
  products: productsReducers,
});

const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <ShopNavigator />
    </Provider>
  );
}
