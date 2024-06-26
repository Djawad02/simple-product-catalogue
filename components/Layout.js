// components/Layout.js
import Link from 'next/link';
import styles from './Layout.module.css'; 
import { useCart } from '../context/CartContext';
const Layout = ({ children }) => {
  const { cart } = useCart();
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <nav className={styles.navbar}>
          <ul className={styles.navLinks}>
            <li>
              <Link href="/">
                Home
              </Link>
            </li>
            <li>
              <Link href="/products">
                Products
              </Link>
            </li>
            <li>
            <Link href="/cart">Cart ({cart.length})</Link>
            </li>
            <li>
              <Link href="/about">
                About
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        <p>&copy; 2024 Dania Jawad. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;
