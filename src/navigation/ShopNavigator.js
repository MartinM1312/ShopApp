import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';

import Colors from '../constants/Colors';
import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen';
import ProductDetailScreen from '../screens/shop/ProductsDetailScreen';
import OrderScreen from '../screens/shop/OrderScreen';
import CartScreen from '../screens/shop/CartScreen';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const defaultNavOptions = {
  headerTintColor: Colors.primary,
  headerTitleAlign: 'center',
  statusBarStyle: 'auto',
  headerTitleStyle: {
    fontSize: 18,
    fontFamily: 'OpenSans-Bold',
  },
  backgroundColor: 'white',
  headerShadowVisible: false,
  swipeEdgeWidth: 0,
};

const ProductNavigator = props => {
  return (
    <Stack.Navigator screenOptions={defaultNavOptions}>
      <Stack.Screen
        name="ProductsOverview"
        component={ProductsOverviewScreen}
        options={{title: 'All Products'}}
      />
      <Stack.Screen
        name="ProductDetails"
        component={ProductDetailScreen}
        options={{
          title: 'Details',
        }}
      />
      <Stack.Screen
        name="CartScreen"
        component={CartScreen}
        options={{
          title: 'Cart',
        }}
      />
    </Stack.Navigator>
  );
};

const ShopNavigator = props => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={defaultNavOptions}
        initialRouteName="ProductNavigator">
        <Stack.Screen
          name="ProductNavigator"
          component={ProductNavigator}
          options={{title: 'Products', headerShown: false}}
        />
        <Stack.Screen
          name="OrderScreen"
          component={OrderScreen}
          options={{title: 'Orders'}}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default ShopNavigator;
