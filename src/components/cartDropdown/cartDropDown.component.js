import React from 'react';
import {useNavigate} from 'react-router-dom'
import {useContext} from 'react'
import {CartDropdownContext} from '../../context/cartDropdown'
import Button from '../button/button.component';
import CartItem from '../cartItemDisplay/cartItemDisplay.component'
import './cartDrop.scss';

const CartDropdown = () => {

    const {cartItems} = useContext(CartDropdownContext)
    const navigate = useNavigate();

    const goToCheckoutHandler = () => {
        navigate('/chechkout')
    }


return(
  <div className='cart-dropdown-container'>
   <div className='cart-items'>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <h4 className='mesag'>Your cart is empty</h4>
        )}
      </div>
    <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
  </div>
)
};

export default CartDropdown;