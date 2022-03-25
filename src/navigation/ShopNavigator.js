import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import Colors from '../constants/Colors';
import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import ProductDetailScreen from '../screens/shop/ProductsDetailScreen';
import CustomHeaderButton from '../components/touchables/HeaderButton';
import CartScreen from '../screens/shop/CartScreen';

const ProductsNavigator = createNativeStackNavigator();

const ShopNavigator = props => {
  return (
    <NavigationContainer>
      <ProductsNavigator.Navigator initialRouteName="ProductsOverview">
        <ProductsNavigator.Group
          screenOptions={{
            headerTintColor: Colors.primary,
            headerTitleAlign: 'center',
            statusBarStyle: 'auto',
            headerTitleStyle: {
              fontSize: 18,
              fontFamily: 'OpenSans-Bold',
            },

            backgroundColor: 'white',
          }}>
          <ProductsNavigator.Screen
            name="ProductsOverview"
            component={ProductsOverviewScreen}
            options={{
              title: 'All Products',
            }}
          />
          <ProductsNavigator.Screen
            name="ProductDetails"
            component={ProductDetailScreen}
            options={{
              title: 'Details',
            }}
          />
          <ProductsNavigator.Screen
            name="CartScreen"
            component={CartScreen}
            options={{
              title: 'Cart',
            }}
          />
        </ProductsNavigator.Group>
      </ProductsNavigator.Navigator>
    </NavigationContainer>
  );
};

export default ShopNavigator;
