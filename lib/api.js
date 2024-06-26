// lib/api.js

import axios from 'axios';

export const fetchProducts = async () => {
  const response = await axios.get('https://dummyjson.com/products');
  console.log(response.data.products);
  return response.data.products;
};

export const fetchProductById = async (id) => {
  const response = await axios.get(`https://dummyjson.com/products/${id}`);
  
  console.log(response.data);
  return response.data;
};


