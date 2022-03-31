import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Fonts from '../../constants/Fonts';

const CartItem = props => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <View style={styles.itemDetail}>
          <Text style={styles.detailQuantity}>{props.quantity} </Text>
          <Text style={styles.detail}>{props.title}</Text>
        </View>
        <View style={styles.itemRightInfo}>
          <Text style={styles.amount}>{props.amount.toFixed(2)}</Text>
          <TouchableOpacity
            onPress={props.onRemove}
            style={styles.deleteButton}>
            <Icon name={'trash'} size={23} color="red" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 5,
    height: 60,
  },
  box: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 10,
    borderRadius: 5,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    elevation: 4,
    backgroundColor: 'white',
  },
  itemDetail: {
    flexDirection: 'row',
  },
  itemRightInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  amount: {
    marginHorizontal: 6,
    fontFamily: Fonts.bold,
    color: 'black',
  },
  detail: {
    fontFamily: Fonts.bold,
    color: 'black',
    fontSize: 14,
  },
  detailQuantity: {
    fontFamily: Fonts.bold,
  },
});

export default CartItem;
