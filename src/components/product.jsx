import { Link } from "react-router-dom";
import { ShopContext } from "../context/shop-context";
import { useContext } from "react";

const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);
  const cartItemAmount = cartItems[id];
  return (
    <div className="product" key={id}>
      <Link to={`/product/${id}`}>
        <img src={productImage} alt={`${productName}`} />
        <div className="description">
          <p>
            <b>{productName}</b>
          </p>
          <p>{price}</p>
        </div>
      </Link>
      <button onClick={() => addToCart(id)} className="addToCartBttn">
        Add To Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
      </button>
    </div>
  );
};

export default Product;
