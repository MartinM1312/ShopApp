import React from 'react';

import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';

import productsReducers from './src/store/reducers/productsReducers';
import cartReducers from './src/store/reducers/cartReducers';
import ShopNavigator from './src/navigation/ShopNavigator';

const rootReducer = combineReducers({
  products: productsReducers,
  cart: cartReducers,
});

const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <ShopNavigator />
    </Provider>
  );
}
