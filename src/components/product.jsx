import { Link } from "react-router-dom";

const Product = (props) => {
    const { id, productName, price, productImage } = props.data;
    return ( 
        <div className="product" key={id}>
            <Link to={`/product/${id}`}>
            <img src={productImage} alt={`${productName}`}/>
            <div className="description">
                <p><b>{productName}</b></p>
                <p>{price}</p>
            </div>
            </Link>
            <button className="addToCartBttn">Add To Cart</button>
        </div>
     );
}
 
export default Product;