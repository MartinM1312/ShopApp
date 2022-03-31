import React, {useEffect, useLayoutEffect} from 'react';
import {View, StyleSheet, Text, SafeAreaView, FlatList} from 'react-native';
import {useDrawerStatus} from '@react-navigation/drawer';
import {useSelector} from 'react-redux';
import {container} from '../../constants/Styles';

import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import CustomHeaderButton from '../../components/touchables/HeaderButton';

const OrderScreen = props => {
  const orders = useSelector(state => state.orders.orders);

  const drawerStatus = useDrawerStatus();

  useLayoutEffect(() => {
    props.navigation.setOptions({
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Item
            title="Menu"
            iconName="menu"
            iconSize={30}
            onPress={() => props.navigation.toggleDrawer()}
          />
        </HeaderButtons>
      ),
      //   headerRight: () => (
      //     <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
      //       <Item
      //         title="Cart"
      //         iconName="cart"
      //         iconSize={30}
      //         onPress={() => props.navigation.navigate('CartScreen')}
      //       />
      //     </HeaderButtons>
      //   ),
    });
  }, [props.navigation]);

  useEffect(() => {
    props.navigation.closeDrawer();
  }, []);

  return (
    <SafeAreaView style={container}>
      <View style={{margin: 20}}>
        <FlatList
          data={orders}
          renderItem={itemData => (
            <Text>{itemData.item.totalAmount.toFixed(2)}</Text>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default OrderScreen;
