// pages/cart.js
import { useCart } from '../context/CartContext';
import styles from '../styles/ProductDetail.module.css'; // Import custom styling
import cartStyles from '../styles/cart.module.css'; // Import custom styling

const CartPage = () => {
  const { cart, removeFromCart, clearCart } = useCart();

 
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className={cartStyles.cartcontainer}>
      <div className={styles.cartheading}>
        <h1><b>Your Cart</b></h1>
      </div>

      <div className={cartStyles.productcontainer}>
        {cart.length === 0 ? (
          <p>Your cart is empty. Kindly browse through our website and add items to your cart.</p>
        ) : (
          <>
            <div className="cart-items">
              {cart.map((item, index) => (
                <div key={index} className="cart-item">
                  <p><b>Product: </b> {item.title}</p>
                  <p><b>Price:</b> ${item.price}</p>
                </div>
              ))}
            </div>
            <br /><br />
            <div className={styles.totalPrice}>
              <p><b>Total Price:</b> ${totalPrice.toFixed(2)}</p>
            </div>
            <button className={styles.addToCartButton} onClick={clearCart}>
              Clear Cart
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default CartPage;
