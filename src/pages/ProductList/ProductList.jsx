import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../contexts/CartContext'

const ProductList = () => {
const {cartItems, setCartItems} = useContext(CartContext)
const [list, setList] = useState([])

useEffect(()=>{
    fetch('http://localhost:4000/products')
    .then((res)=>{ return res.json()})
    .then((data) => {
        setList(data)
})
},[])

return (
<div className='flex flex-wrap justify-center'>
    {list.map(product => {return(
        <div key={product.id} className='m-1 mb-10'>
            <Link to={`./${product.id}`}><img className='w-[380px] h-[380px] rounded-[25px]' src={product.image} alt={product.name}/></Link>
            <p className='mt-2'>{product.price} €</p>
            <div className='flex justify-between'>
                <p>{product.name}</p>
                <button className='hover:text-sky-400 mr-6' onClick={()=>{setCartItems([...cartItems, product])}}>Añadir al cesta</button>
            </div>
        </div>        
    )})}
</div>
)
}

export default ProductList