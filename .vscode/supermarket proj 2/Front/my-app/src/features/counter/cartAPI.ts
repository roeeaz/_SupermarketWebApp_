import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const addToCart = async (productId: number, userToken: string) => {
    const response = await axios.post(
        'http://127.0.0.1:8000/cart/',
        { product_id: productId }, 
        { headers: { 'Authorization': `Bearer ${userToken}` } }
    );
    return response.data;
}

export const fetchUserCart = async (userToken: string) => {
    const response = await axios.get(
        'http://127.0.0.1:8000/cart/',
        { headers: { 'Authorization': `Bearer ${userToken}` } }
    );
    return response.data;
}


export const updateQuantityAsync = createAsyncThunk(
  'cart/updateQuantity',
  async ({ cartItemId, newQuantity, userToken }: { cartItemId: number, newQuantity: number, userToken: string }) => {
    console.log(`cartItemId before request: ${cartItemId}`);
    try {
      const response = await axios.patch(
        `http://127.0.0.1:8000/cartitem/${cartItemId}/`,
        { quantity: newQuantity },
        { headers: { 'Authorization': `Bearer ${userToken}` } }
      );
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
);


export const removeItemFromCart = async ({cartItemId, userToken}: {cartItemId: number, userToken: string}) => {
  const response = await axios.delete(`http://127.0.0.1:8000/cartitem/${cartItemId}/`, {
      headers: {
          Authorization: `Bearer ${userToken}`
      },
  });
  return response.data;
}



export const clearCart = async (userToken: string) => {
  const response = await axios.delete('http://127.0.0.1:8000/cart/clear/', {
    headers: {
      Authorization: `Bearer ${userToken}`
    }
  });
  return response.data;
}



