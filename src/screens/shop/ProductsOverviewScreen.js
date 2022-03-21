import React from 'react';
import {FlatList, SafeAreaView, View, Text} from 'react-native';
import {useSelector} from 'react-redux';
import ProductItem from '../../components/shop/ProductItem';

const ProductsOverviewScreen = props => {
  const products = useSelector(state => state.products.availableProducts);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <FlatList
        data={products}
        renderItem={itemData => (
          <ProductItem
            image={itemData.item.imageUrl}
            title={itemData.item.title}
            price={itemData.item.price}
            onViewDetail={() => {
              props.navigation.navigate('ProductDetails', {
                productId: itemData.item.id,
                productTitle: itemData.item.title,
              });
            }}
            onAddToCart={() => console.log('ADD TO CART')}
          />
        )}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

export default ProductsOverviewScreen;
