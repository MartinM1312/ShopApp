import {NavigationContainer} from '@react-navigation/native';
import React, {useLayoutEffect} from 'react';
import {ScrollView, View, Text, Image, Button, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';

const ProductDetailScreen = props => {
  const {productId, productTitle} = props.route.params;

  useLayoutEffect(() => {
    props.navigation.setOptions({
      title: productTitle,
    });
  }, [props.navigation, productTitle]);

  const selectedProduct = useSelector(state =>
    state.products.availableProducts.find(prod => prod.id === productId),
  );
  return (
    <View style={styles.container}>
      <Text>{selectedProduct.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
});

export default ProductDetailScreen;
