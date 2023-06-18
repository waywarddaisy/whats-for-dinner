
import './product-page.styles.scss';
import { useParams } from 'react-router-dom';
import { productsArray } from '../../data/products-data';
import { useState, useEffect, Fragment } from 'react';


const ProductPage = ({ addToCart }) => {

    const { id } = useParams();
    console.log(typeof id);
    const [product, setProduct] = useState(null);
    useEffect(() => {
        let displayProduct = productsArray.find(prod => prod.id == id);
        console.log(displayProduct);
        displayProduct.cartQuantity =1;
        setProduct(displayProduct)
    }, [id]);

    return (
        <div className='product-container'>
            {product && <div className="product-page">
                <div className='product-image'>
                <img src={product.photo} />
                </div>
                <div className='product-text'>
                <h1>{product.name}</h1>
                <h4>by {product.author}</h4>
                <p className='italicize'>{product.description}</p>
                <div>{product.blurb.map(para => {return <p>{para}</p>})}</div>
                <button type="button" className="large-button" onClick={() => { addToCart(product) }}>Add to Cart</button>
                </div>
            </div>}
        </div>
    )
};

export default ProductPage