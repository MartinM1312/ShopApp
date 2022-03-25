import React from 'react';
import {
  FlatList,
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from 'react-native';
import Colors from '../../constants/Colors';
import Fonts from '../../constants/Fonts';
import CustomButton from '../touchables/CustomButton';

const ProductItem = props => {
  let TouchableComponent = TouchableOpacity;

  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableComponent = TouchableNativeFeedback;
  }
  return (
    <SafeAreaView style={styles.product}>
      <TouchableComponent onPress={props.onViewDetail} useForeground>
        <View>
          <View style={styles.imageContainer}>
            <Image source={{uri: props.image}} style={styles.image} />
          </View>
          <View style={styles.details}>
            <Text style={styles.title}>{props.title}</Text>
            <Text style={styles.price}>${props.price.toFixed(2)}</Text>
          </View>
          <View style={styles.actions}>
            <CustomButton
              style={styles.detailsButton}
              title="View Details"
              onPress={props.onViewDetail}
            />
            <CustomButton
              style={styles.addToCartButton}
              title="Add To Cart"
              onPress={props.onAddToCart}
            />
          </View>
        </View>
      </TouchableComponent>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  product: {
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: 'white',
    height: 300,
    margin: 20,
    overflow: 'hidden',
  },
  imageContainer: {
    width: '100%',
    height: '60%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  details: {
    alignItems: 'center',
    height: '15%',
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontFamily: Fonts.bold,
  },
  price: {
    fontSize: 14,
    color: '#888',
    fontFamily: Fonts.regular,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '25%',
    paddingHorizontal: 20,
  },
  detailsButton: {
    backgroundColor: Colors.primary,
  },
  addToCartButton: {
    backgroundColor: Colors.accent,
  },
});

export default ProductItem;
