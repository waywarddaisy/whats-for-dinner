import './shop.item.styles.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import { productsArray} from '../../data/products-data';

const ShopItem = () => {





    return (
        <div className="shop-container">
            <div className='shop-grid'>
                {productsArray.map(item => {
                    return (
                        <Link to={`/product-page/${item.id}`} key= {item.id} className='product-link-container'><div className='product-container shop-grid'>

                            <img src={item.photo}/>
                            <div className='namedescription'>{item.name}</div>
                            <div className='price'>${item.price}</div>

                        </div></Link>
                    )
                })}
            </div>

        </div>
    )
};

export default ShopItem;