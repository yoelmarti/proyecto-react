import React, { useState } from 'react'

export const CartContext = React.createContext()

export const CartProvider = ({children}) => {
const [cartItems, setCartItems] = useState([])

const cart = {
    cartItems,
    setCartItems
}
return (
<CartContext.Provider value={cart}>{children}</CartContext.Provider>
)
}