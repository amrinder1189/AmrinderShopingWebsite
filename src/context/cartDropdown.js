import {createContext , useState, useEffect} from 'react'

export const addCartItem = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find(
      (cartItem) => cartItem.id === productToAdd.id
    );
  
    if (existingCartItem) {
      return cartItems.map((cartItem) =>
        cartItem.id === productToAdd.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
    }
  
    return [...cartItems, { ...productToAdd, quantity: 1 }];
  };

  const removeCartItem = (cartItems, cartItemToRemove) => {
    // find the cart item to remove
    const existingCartItem = cartItems.find(
      (cartItem) => cartItem.id === cartItemToRemove.id
    );
  
    // check if quantity is equal to 1, if it is remove that item from the cart
    if (existingCartItem.quantity === 1) {
      return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
    }
  
    // return back cartitems with matching cart item with reduced quantity
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  };

  
export const CartDropdownContext = createContext({
    isCartOpen: false,
    setCartOpen: ()=>{},
    cartItems:[],
    addItemToCart:()=>{},
    removeItemFromCart:()=>{},
    clearItemFromCart: () => {},
    cartCount:0,
    cartTotal:0
})

const clearCartItem = (cartItems, cartItemToClear) =>
  cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);


export  const CardDropdownProvider = ({children}) => {

    const[isCartOpen,setCartOpen] = useState(false)
    const[cartItems,setCartItem] = useState([])
    const[cartCount,setCartCount] = useState(0)
    const [cartTotal, setCartTotal] = useState(0);

    useEffect(() => {
        const newCartCount = cartItems.reduce((total,cartItem)=>total + cartItem.quantity,0)
        setCartCount(newCartCount)
        
    }, [cartItems]);

    useEffect(() => {
      const newCartTotal = cartItems.reduce(
        (total, cartItem) => total + cartItem.quantity * cartItem.price,
        0
      );
      setCartTotal(newCartTotal);
    }, [cartItems]);
    
    const addItemToCart = (productToAdd) => {
        //need help of other function so :
        setCartItem(addCartItem(cartItems,productToAdd))
    }

    const removeItemFromCart = (cartItemToRemove) => {
        //need help of other function so :
        setCartItem(removeCartItem(cartItems,cartItemToRemove))
    }

    const clearItemFromCart = (cartItemToClear) => {
      setCartItem(clearCartItem(cartItems, cartItemToClear));
    };
    
    const value = {isCartOpen,setCartOpen,addItemToCart,clearItemFromCart,removeItemFromCart,cartItems,cartCount,cartTotal}
    return(
        <CartDropdownContext.Provider value = {value}>{children}</CartDropdownContext.Provider>
    )
}