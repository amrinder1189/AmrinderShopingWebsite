import { ReactComponent as ShoppingIcon } from '../../shopping-bag.svg';
import {useContext} from 'react'

import {CartDropdownContext} from '../../context/cartDropdown'


import './cartIcon.style.scss';

const CartIcon = () => {

    const {isCartOpen,setCartOpen,cartCount} = useContext(CartDropdownContext)
    const cartCloseandopen = ()=> {
        setCartOpen(!isCartOpen)
      }
    

  return (
    <div className='cart-icon-container' onClick={cartCloseandopen}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{cartCount}</span>
    </div>
  );
};

export default CartIcon;