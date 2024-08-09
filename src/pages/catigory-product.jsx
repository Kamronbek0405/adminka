import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useShowProduct } from './service/quary/useShowProduct'
import { ProductCard } from '../components/product-card'


export const CatigoryProduct = () => {
    const {id} = useParams()
    const {data} = useShowProduct(id)
  return (
    <div>
        <Link className='py-5 px-5 m-10 text-white font-medium rounded-lg bg-yellow-400' to={"/create-product"}>Create product</Link>
        <div className='mt-20'>
        {data?.map((item) => (
            <ProductCard key={item.id} {...item}/>
        ))}
        </div>
    </div>
  )
}
