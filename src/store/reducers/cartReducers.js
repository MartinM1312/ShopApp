import CartItem from '../../models/cart-item';
import {ADD_TO_CART, REMOVE_FROM_CART} from '../actions/cartActions';

const initialState = {
  items: {},
  total: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const addedProduct = action.product;
      const productPrice = addedProduct.price;
      const productTitle = addedProduct.title;

      if (state.items[addedProduct.id]) {
        //item is already in the cart
        const updatedCartItem = new CartItem(
          state.items[addedProduct.id].quantity + 1,
          productPrice,
          productTitle,
          state.items[addedProduct.id].total + productPrice,
        );
        return {
          ...state,
          items: {...state.items, [addedProduct.id]: updatedCartItem},
          total: state.total + productPrice,
        };
      } else {
        const newCartItem = new CartItem(
          1,
          productPrice,
          productTitle,
          productPrice,
        );
        return {
          ...state,
          items: {...state.items, [addedProduct.id]: newCartItem},
          total: state.total + productPrice,
        };
      }
    case REMOVE_FROM_CART:
      const selectedCartItem = state.items[action.pid];
      const currentQty = selectedCartItem.quantity;
      let updatedCartItems;
      if (currentQty > 1) {
        //reduce # of items
        const updatedCartItem = new CartItem(
          selectedCartItem.quantity - 1,
          selectedCartItem.productPrice,
          selectedCartItem.productTitle,
          selectedCartItem.total - selectedCartItem.productPrice,
        );
        updatedCartItems = {...state.items, [action.pid]: updatedCartItem};
      } else {
        updatedCartItems = {...state.items};
        delete updatedCartItems[action.pid];
      }
      return {
        ...state,
        items: updatedCartItems,
        total: state.total - selectedCartItem.productPrice,
      };
  }

  return state;
};
