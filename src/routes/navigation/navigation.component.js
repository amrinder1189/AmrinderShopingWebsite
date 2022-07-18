import {Fragment,useContext} from 'react';
import { Outlet , Link} from 'react-router-dom'
import './navigation.scss';
import CartIcon from '../../components/cartIcon/cartIcon'

import CartDropdown from '../../components/cartDropdown/cartDropDown.component'

import {UserContext} from '../../context/user.context'

import {singOutUser} from '../../utility/firebase'

import {CartDropdownContext} from '../../context/cartDropdown'

import comapanyLogo from './logogog.png'

const Navigation = () => {

  const {currentUser} = useContext(UserContext)
  // console.log(currentUser)
  const {isCartOpen} = useContext(CartDropdownContext)

 


return(
    <Fragment>
        <div className='navigation'>
        <Link className='logo-container' to='/'>
            <img className='logoimagee' src={comapanyLogo} alt="img"  />
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            SHOP
          </Link>

          {
            currentUser ? (<span className='nav-link' onClick={singOutUser}>Sign Out</span>) : (  <Link className='nav-link' to='/sign-in'>SIGN IN</Link>)
          }

        

          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>

      <Outlet />
    </Fragment>
)
}
export default Navigation;