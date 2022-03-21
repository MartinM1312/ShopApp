import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Colors from '../constants/Colors';
import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen';
import ProductDetailScreen from '../screens/shop/ProductsDetailScreen';

const ProductsNavigator = createNativeStackNavigator();

const ShopNavigator = props => {
  return (
    <NavigationContainer>
      <ProductsNavigator.Navigator>
        <ProductsNavigator.Group
          screenOptions={{
            headerTintColor: Colors.primary,
            headerTitleAlign: 'center',
            statusBarStyle: 'auto',
            headerTitleStyle: {
              fontSize: 18,
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
        </ProductsNavigator.Group>
      </ProductsNavigator.Navigator>
    </NavigationContainer>
  );
};

export default ShopNavigator;
