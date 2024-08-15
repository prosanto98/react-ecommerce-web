import { useState } from 'react';
import { Link } from 'react-router-dom';
const desc = 'This is our One of the best product in our shop ';

const ProductDisplay = ({ item }) => {
    // console.log(product);
    const { name, id, price, seller, ratingsCount, quantity, img } = item;
    //
    const [prequantity, setPreQuantity] = useState(quantity);
    const [coupon, setCoupon] = useState('');
    const [size, setSize] = useState('Select Size');
    const [color, setColor] = useState('Select Color');

    const handleSizeChange = (e) => {
        setSize(e.target.value);
    };
    const handleColorChange = (e) => {
        setColor(e.target.value);
    };
    const handleDecrease = () => {
        if (prequantity > 1) {
            setPreQuantity(prequantity - 1);
        }
    };

    const handleInc = () => {
        setPreQuantity(prequantity + 1);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const product = {
            id: id,
            name: name,
            price: price,
            quantity: prequantity,
            coupon: coupon,
            size: size,
            color: color,
            img: img,
        };
        // console.log(product);
        const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
        const existingProductIndex = existingCart.findIndex(
            (item) => item.id === id
        );

        if (existingProductIndex !== -1) {
            existingCart[existingProductIndex].quantity += prequantity;
        } else {
            existingCart.push(product);
        }
        localStorage.setItem('cart', JSON.stringify(existingCart));
        setPreQuantity(1);
        setSize('Select Size');
        setColor('Select Color');
        setCoupon("");
    };
    return (
        <div>
            <div>
                <h4>{name}</h4>
                <p className="rating">
                    <i className="icofont-star"></i>
                    <i className="icofont-star"></i>
                    <i className="icofont-star"></i>
                    <i className="icofont-star"></i>
                    <i className="icofont-star"></i>
                    <span>{ratingsCount} Review</span>
                </p>
                <h4>${price}</h4>
                <h6>{seller}</h6>
                <p>{desc}</p>
            </div>
            {/* Size */}
            <div>
                <form onSubmit={handleSubmit}>
                    <div className="select-product size">
                        <select value={size} onChange={handleSizeChange}>
                            <option>Select Size</option>
                            <option value="SM">Sm</option>
                            <option value="MD">Md</option>
                            <option value="LG">LG</option>
                            <option value="XL">XL</option>
                            <option value="XXL">XXL</option>
                        </select>
                        <i className="icofont-rounded-down"></i>
                    </div>
                    {/* Color */}
                    <div className="select-product color">
                        <select value={color} onChange={handleColorChange}>
                            <option>Select Color</option>
                            <option value="pink">Pink</option>
                            <option value="ash">Ash</option>
                            <option value="red">Red</option>
                            <option value="white">White</option>
                            <option value="blue">Blue</option>
                            <option value="black">Black</option>
                        </select>
                        <i className="icofont-rounded-down"></i>
                    </div>
                    {/* cart-plus-minus */}
                    <div className="cart-plus-minus">
                        <div className="dec qtybutton" onClick={handleDecrease}>- </div>
                        <input className="cart-plus-minus-box" type="text" name="qtybutton" id="qtybutton" value=
                            {prequantity} onChange={(e) => setPreQuantity(parseInt(e.target.value, 10))} />
                        <div className="inc qtybutton" onClick={handleInc}>+</div>
                    </div>
                    {/* coupon field */}
                    <div className="discount-code mb-2">
                        <input type="text" placeholder="Enter Code here" onChange={(e) => setCoupon(e.target.value)} />
                    </div>
                    {/* btn section */}
                    <button type="submit" className="lab-btn">
                        Add to Cart
                    </button>
                    <Link to="/cart-page" className="lab-btn bg-primary">
                        Check out
                    </Link>
                </form>
            </div>
        </div>
    );
};
export default ProductDisplay