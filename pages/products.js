// pages/products.js

import { useState, useEffect } from 'react';
import { fetchProducts } from '../lib/api';
import styles from '../styles/Products.module.css';

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    getProducts();
  }, []);

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  
  const chunkArray = (array, chunkSize) => {
    return array.reduce((acc, _, i) => {
      if (i % chunkSize === 0) {
        acc.push(array.slice(i, i + chunkSize));
      }
      return acc;
    }, []);
  };

  const chunkedProducts = chunkArray(filteredProducts, 4);

  return (
    
    <div>
      <div className={styles.productcontainer}>
        <h1 style={{ fontSize: '2rem', marginBottom: '1rem', textAlign: 'center' }}><b>Product Catalog!</b></h1>
        <p style={{ textAlign: 'center' }}>
          Welcome to Our Product Catalog! Click on the product to view its details.
        </p> <br />
      <input
         type="text"
         placeholder="Search products"
         value={searchQuery}
         onChange={(e) => setSearchQuery(e.target.value)}
         className={styles.searchInput}
         />
      <div className={styles.productGrid}>
        {filteredProducts.length === 0 ? (
          <p>No products found.</p>
          ) : (
            chunkedProducts.map((row, rowIndex) => (
              <div key={rowIndex} className={styles.productRow}>
              {row.map(product => (
                <div key={product.id} className={styles.productItem}>
                  <a href={`/products/${product.id}`} style={{ fontWeight: 'bold' }}>{product.title}</a>
                  <p>{product.description}</p>
                  <p>Price: ${product.price}</p>
                  <br /> 
                </div>
              ))}
            </div>
          ))
        )}
      </div>
            </div>
    </div>
  );
};

export default ProductsPage;
