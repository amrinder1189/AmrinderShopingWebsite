import './ProductCard.style.scss';
import {useContext} from 'react'


import Button from '../button/button.component';
import {CartDropdownContext} from '../../context/cartDropdown'

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;

  const{addItemToCart} = useContext(CartDropdownContext)
  const AddProduct = ()=> addItemToCart(product)

  return (
    <div className='product-card-container'>
      <img src={imageUrl} alt={`${name}`} />
      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <Button buttonType='inverted' onClick={AddProduct}>Add to card</Button>
    </div>
  );
};

export default ProductCard;