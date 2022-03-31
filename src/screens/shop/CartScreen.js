import React from 'react';
import {View, Text, SafeAreaView, StyleSheet, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import CartItem from '../../components/shop/CartItem';
import CustomButton from '../../components/touchables/CustomButton';
import Colors from '../../constants/Colors';
import Fonts from '../../constants/Fonts';
import * as cartActions from '../../store/actions/cartActions';
import * as orderActions from '../../store/actions/orderActions';

const CartScreen = props => {
  const dispatch = useDispatch();

  const cartTotal = useSelector(state => {
    return state.cart.total;
  });

  const cartItems = useSelector(state => {
    const transformedCartItems = [];
    for (const key in state.cart.items) {
      transformedCartItems.push({
        productId: key,
        productTitle: state.cart.items[key].productTitle,
        productPrice: state.cart.items[key].productPrice,
        quantity: state.cart.items[key].quantity,
        total: state.cart.items[key].total,
      });
    }
    return transformedCartItems;
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.summary}>
        <Text style={styles.total}>
          Total: <Text style={styles.amount}>${cartTotal.toFixed(2)}</Text>
        </Text>

        <CustomButton
          title={'Checkout'}
          style={styles.checkoutButton}
          titleStyle={{color: 'dodgerblue'}}
          disabled={cartItems.length === 0}
          accesible={cartItems.length === 0}
          onPress={() => dispatch(orderActions.addOrder(cartItems, cartTotal))}
        />
      </View>
      <View style={styles.cartItems}>
        <Text style={{fontFamily: Fonts.bold, fontSize: 14, color: 'black'}}>
          CART ITEMS
        </Text>
        <View style={styles.horizontalLine}></View>
        <View>
          <FlatList
            contentContainerStyle={styles.list}
            data={cartItems}
            keyExtractor={item => item.productId}
            renderItem={itemData => (
              <CartItem
                quantity={itemData.item.quantity}
                title={itemData.item.productTitle}
                amount={itemData.item.total}
                onRemove={() =>
                  dispatch(cartActions.removeFromCart(itemData.item.productId))
                }
              />
            )}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  summary: {
    flexDirection: 'row',
    margin: 20,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 8,
    elevation: 10,
    borderRadius: 10,
    backgroundColor: 'white',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'space-between',
  },
  total: {
    fontFamily: Fonts.bold,
    fontSize: 16,
    color: 'black',
  },
  amount: {
    color: Colors.primary,
  },
  checkoutButton: {
    backgroundColor: 'transparent',
    shadowColor: 'white',
  },
  cartItems: {
    margin: 20,
    // alignItems: 'center',
    justifyContent: 'center',
  },
  horizontalLine: {
    width: '100%',
    borderWidth: 0.5,
    borderTopColor: 'lightgray',
    marginVertical: 5,
  },
});

export default CartScreen;
