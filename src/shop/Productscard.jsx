import React from 'react'
import { Link } from 'react-router-dom'
import Ratting from '../components/Ratting'

const Productscard = ({ Gridlist, products }) => {

    return (
        <div className={`shop-product-wrap row justify-content-center ${Gridlist ? "grid" : "list"}`}>
            {
                products.map((products, i) => (
                    <div key={i} className='col-lg-4 col-md-6 col-12'>
                        <div className='product-item'>
                            {/* product images */}
                            <div className='product-thumb'>
                                <div className='pro-thumb'>
                                    <img src={products.img} alt="" />
                                </div>
                                {/* product action links */}
                                <div className='product-action-link'>
                                    <Link to={`/shop/${products.id}`}><i className='icofont-eye'></i></Link>
                                    <a href="">
                                        <i className='icofont-heart'></i>
                                    </a>
                                    <Link to="/card-page"><i className='icofont-cart-alt'></i></Link>
                                </div>
                            </div>

                            {/* product content */}
                            <div className='product-content'>
                                <h5>
                                    <Link to={`/shop/${products.id}`}>{products.name}</Link>
                                </h5>
                                <p className='prductRating'>
                                    <Ratting/>
                                </p>
                                <h6>${products.price}</h6>
                            </div>
                        </div>
                        {/* list style */}
                        <div className='product-list-item'>
                            {/* product images */}
                            <div className='product-thumb'>
                                <div className='pro-thumb'>
                                    <img src={products.img} alt="" />
                                </div>
                                {/* product action links */}
                                <div className='product-action-link'>
                                    <Link to={`/shop/${products.id}`}><i className='icofont-eye'></i></Link>
                                    <a href="">
                                        <i className='icofont-heart'></i>
                                    </a>
                                    <Link to="/card-page"><i className='icofont-cart-alt'></i></Link>
                                </div>
                            </div>

                            {/* product content */}
                            <div className='product-content'>
                                <h5>
                                    <Link to={`/shop/${products.id}`}>{products.name}</Link>
                                </h5>
                                <p className='prductRating'>
                                    <Ratting/>
                                </p>
                                <h6>${products.price}</h6>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Productscard