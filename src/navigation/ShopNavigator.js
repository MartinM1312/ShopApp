import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native';

import Colors from '../constants/Colors';
import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen';
import ProductDetailScreen from '../screens/shop/ProductsDetailScreen';
import OrderScreen from '../screens/shop/OrderScreen';
import CartScreen from '../screens/shop/CartScreen';

import Icon from 'react-native-vector-icons/Ionicons';

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
  drawerActiveTintColor: Colors.primary,
  drawerActiveBackgroundColor: 'transparent',
};

const ProductNavigator = props => {
  return (
    <Stack.Navigator screenOptions={{...defaultNavOptions, ...{}}}>
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

const OrdersNavigator = props => {
  return (
    <Stack.Navigator screenOptions={defaultNavOptions}>
      <Stack.Screen
        name="OrdersScreen"
        component={OrderScreen}
        options={{title: 'Orders'}}
      />
    </Stack.Navigator>
  );
};

const ShopNavigator = props => {
  const navigation = useNavigation();
  return (
    <Drawer.Navigator
      screenOptions={defaultNavOptions}
      initialRouteName="ProductNavigator">
      <Drawer.Screen
        name="ProductNavigator"
        component={ProductNavigator}
        options={{
          title: 'Products',
          headerShown: false,
          drawerIcon: ({focused}) => (
            <Icon
              name="cart-outline"
              size={24}
              color={focused ? Colors.primary : 'gray'}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="OrderScreen"
        component={OrdersNavigator}
        options={{
          title: 'Orders',
          headerShown: false,
          drawerIcon: ({focused}) => (
            <Icon
              name="list"
              size={24}
              color={focused ? Colors.primary : 'gray'}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default ShopNavigator;
