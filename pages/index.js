import { useState, useEffect } from 'react';
import styles from '../styles/HomePage.module.css'; // Correct import path for styles

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  return (
    <div className={styles.homeContainer}>
      <div className={styles.productcontainer}>
        <h1 className={styles.title}>Welcome!</h1>
        <p className={styles.description}>
         This is a simple product catalog. Browse through the website and find what you need.
        </p>
        <br />
      </div>
    </div>
  );
};

export default HomePage;