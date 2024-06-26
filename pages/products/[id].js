// pages/products/[id].js
import { useCart } from '../../context/CartContext';
import { fetchProductById, fetchProducts } from '../../lib/api';
import prstyles from '../../styles/ProductDetail.module.css'; // Import custom styling

const ProductDetailPage = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className={prstyles.itemcontainer}>
      <div className={[prstyles.boxx]}>
      <h1 className={prstyles.productheading}><b>Product Details</b></h1>
      <h1><b>{product.title}</b></h1>
      <p>{product.description}</p>
      <p><b>Price: ${product.price}</b></p>
      <br></br>
      </div>
      <button
        className={prstyles.addToCartButton} // Apply custom styling class
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  );
};


export const getStaticPaths = async () => {
  const products = await fetchProducts();
  const paths = products.map(product => ({
    params: { id: product.id.toString() },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  const product = await fetchProductById(params.id);
  return { props: { product } };
};

export default ProductDetailPage;
