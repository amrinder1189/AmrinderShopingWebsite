 import {useContext} from 'react'

 import {CartDropdownContext} from '../../context/cartDropdown'
 import CheckoutItem from '../../components/checkoutItem/checkoutItem'
 import '../chekout/checkout.scss'
 const Checkout = () => {


    const{cartItems,addItemToCart,removeItemFromCart,cartTotal} = useContext(CartDropdownContext)

    return (
        <div className='checkout-container'>
          <div className='checkout-header'>
            <div className='header-block'>
              <span>Product</span>
            </div>
            <div className='header-block'>
              <span>Description</span>
            </div>
            <div className='header-block'>
              <span>Quantity</span>
            </div>
            <div className='header-block'>
              <span>Price</span>
            </div>
            <div className='header-block'>
              <span>Remove</span>
            </div>
          </div>
          {cartItems.map((cartItem) => (
            <CheckoutItem key={cartItem.id} cartItem={cartItem} />
          ))}
          <div className='total'>TOTAL: ${cartTotal}</div>
        </div>
      );
}

export default Checkout