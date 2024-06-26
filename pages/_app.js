// pages/_app.js
import '../styles/globals.css';
import { CartProvider } from '../context/CartContext';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CartProvider>
  );
}

export default MyApp;
