import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { CartContext } from '../../contexts/CartContext';

const ProductDetail = () => {
    const {cartItems, setCartItems} = useContext(CartContext)
    const { productId } = useParams();
    const [productDetail, setProductDetail] = useState(null)
    
    const [isLoading, setIsLoading] = useState(true);
    useEffect(()=>{
        fetch(`http://localhost:4000/products/${productId}`)
        .then((res)=>{ return res.json()})
        .then((data)=>{
            setProductDetail(data)
            
            setIsLoading(false)
            
        })
    },[productId])

    if (isLoading) {
    return (<>Loading...</>)
} else{
    return (
    <>
        {/* <p>Product detail</p> */}
        <div className='flex flex-col w-vh m-8 scroll-m-0'>
            <h2 className='text-3xl mb-1'>{productDetail.name}</h2>
            <p className='mb-6 text-lg'>{productDetail.categoria}</p>
            <p className='text-lg'>{productDetail.price} €</p>
        </div>
        <img className='bg-gray-100 w-full shadow-md' src={productDetail.image} alt={productDetail.name}/>
        <div className='flex flex-col w-vh m-8 mt-4'>
            <button className='text-white bg-zinc-900 hover:bg-neutral-600 w-full h-[60px] rounded-full text-lg' onClick={()=>{setCartItems([...cartItems, productDetail])}}>Añadir a la cesta</button>
            <button className='mt-4 border border-solid border-slate-300 hover:border-black w-full h-[60px] rounded-full text-lg'>Favorito ♡</button>
            <p className='mt-4'>{productDetail.description}</p>
            <ul>
                <li className='mt-4 list-disc list-inside'>Color: {productDetail.color}</li>
            </ul>
        </div>

    </>
    )
}
}

export default ProductDetail