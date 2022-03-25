import {NavigationContainer} from '@react-navigation/native';
import React, {useLayoutEffect} from 'react';
import {ScrollView, View, Text, Image, Button, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import CustomButton from '../../components/touchables/CustomButton';
import Colors from '../../constants/Colors';
import Fonts from '../../constants/Fonts';
import * as cartActions from '../../store/actions/cartActions';

const ProductDetailScreen = props => {
  const {productId, productTitle} = props.route.params;
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    props.navigation.setOptions({
      title: productTitle,
    });
  }, [props.navigation, productTitle]);

  const selectedProduct = useSelector(state =>
    state.products.availableProducts.find(prod => prod.id === productId),
  );
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{uri: selectedProduct.imageUrl}} style={styles.image} />
      <CustomButton
        style={styles.addButton}
        title="Add to Cart"
        onPress={() => dispatch(cartActions.addToCart(selectedProduct))}
      />
      <Text style={styles.price}>${selectedProduct.price.toFixed(2)}</Text>
      <Text style={styles.description}>{selectedProduct.description}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 350,
    marginBottom: 30,
  },
  addButton: {
    backgroundColor: Colors.accent,
  },
  price: {
    fontSize: 24,
    margin: 20,
    fontFamily: Fonts.regular,
  },
  description: {
    fontSize: 18,
    margin: 15,
    textAlign: 'justify',
    color: 'black',
    fontFamily: Fonts.regular,
  },
});

export default ProductDetailScreen;
