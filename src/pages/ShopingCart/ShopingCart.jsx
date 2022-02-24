import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../contexts/CartContext'

const ShopingCart = () => {

const {cartItems, setCartItems} = useContext(CartContext);
const [total, setTotal] = useState(0);
let productPrices = []

const handleDelete = (index) => {
    cartItems.splice(index, 1);
    const cartItemsTemp = [...cartItems];
    setCartItems(cartItemsTemp);
    // console.log(cartItems)
}

let productWord = ""
if(cartItems.length > 1){
    productWord = "Productos"
}else{
    productWord = "Producto"
}

useEffect(()=>{
    setTotal(productPrices.reduce((previousValue, currentValue) => previousValue + currentValue, 0))
},[productPrices])

return (
<div className='flex flex-col pt-[40px] '>
    <div className='h-[130px] text-center '>
        <p className='text-2xl'>Cesta</p>
        <p>{cartItems.length + " " + productWord} {} | {total.toFixed(2)} €</p>
    </div>
    <div>
        {cartItems.length === 0 ? 
                <p className='text-center underline'>No tienes productos en tu cesta.</p>
        : null}
        {cartItems.map((product, index) => {
            productPrices.push(product.price)
            return(
                <div key={index} className='flex flex-row mx-5 mb-3' >
                    <div>
                        <img  className='w-[170px]' src={product.image} alt={product.name}/>
                    </div>
                    <div className='grow pl-6'>
                        <p>{product.name}</p>
                        <p className='mb-20'>{product.categoria}</p>
                        <button className='underline mr-4'>Mover a Favoritos</button>
                        <button className='underline' onClick={() => handleDelete(index)}>Elimiar</button>
                    </div>
                    <div>
                        <p>{product.price} €</p>
                    </div>
                </div>
            )
        })}
    </div>
</div>
)
}

export default ShopingCart;