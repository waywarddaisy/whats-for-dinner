
import './shopping-cart.styles.scss';
import { useState, prevCount } from 'react';

const ShoppingCart = ({ shoppingCart, setShoppingCart }) => {
    // let cart = shoppingCart;
    const [quantity, setQuantity]= useState(1);
    const [subTotal, setSubTotal]= useState(null);


    const handleIncrement = (item)=> {

        setQuantity(item.cartQuantity = item.cartQuantity+1);

        console.log(shoppingCart, 'cart');
        console.log(item.name, item.cartQuantity, 'final cart qty')
    };

    const handleDecrement = (item)=> {
        if (item.cartQuantity>1) {
        setQuantity(item.cartQuantity = item.cartQuantity-1)};

        console.log(shoppingCart, 'cart');
        console.log(item.name, item.cartQuantity, 'final cart qty')
    };
    

    const handleRemove =(item, id)=> {
        let newCart = shoppingCart.filter(prod => prod.id !==item.id);
        setShoppingCart(newCart);
    };

    const getSubTotal =()=>{
        let amount = 0;
        shoppingCart.forEach(prod => {amount = amount + prod.price * prod.cartQuantity});
        return amount
    };

    const getTax =()=>{
        return getSubTotal()* .08
    };
    
    const getShipping =()=> {
        let amount =0;
        shoppingCart.forEach(prod => {amount= amount +prod.cartQuantity});
        return 5* amount
    };

    const getTotal =()=>{
        return getSubTotal()+getTax()+getShipping();
    };

    return (
        <div className="cart-container">
            <h1>Shopping Cart</h1>
            <div>{shoppingCart.map(item => {
                return <div className='cart-line-item'>
                    <div className='cart-photo'><img src={item.photo} /></div>
                    <div className='title'>{item.name}</div>
                    <div></div>
                    <div className='quantity'><button type='button' className='small-button' 
                    onClick = {()=>{handleDecrement(item)}}>-</button> {item.cartQuantity} <button type='button' className='small-button' 
                    onClick = {()=>{handleIncrement(item)}}>+</button></div>
                    <div>${item.price * item.cartQuantity}</div>
                    <button type="button" className="small-button" 
                    onClick= {()=>{handleRemove(item)}}>Remove</button>


                </div>
            })}</div>
            <div className='totals'>
                <div>Sub-Total ${getSubTotal().toFixed(2)}</div>
                <div>Tax ${getTax().toFixed(2)}</div>
                <div>Shipping ${getShipping().toFixed(2)}</div>
                <div>Total ${getTotal().toFixed(2)}</div>
            </div>
            <div className='checkout'>
                <button className='large-button' onClick={()=>{alert("not currently set up for payment")}}>Checkout</button>
            </div>
        </div>
    )
};

export default ShoppingCart;