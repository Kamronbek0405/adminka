import React from 'react'
import { useProductDelete } from '../pages/service/mutation/useProductDelete'
export const ProductCard = ({id, name, img, price, categoryId}) => {
    const {mutate} = useProductDelete()

    const productDelete = (id) =>{
        mutate(id)
    }
  return (
    <div className='flex w-[1100px] h-auto  items-center justify-between'>
       <div>
       <img src={img} alt="img" />
        <h2>{name}</h2>
        <p>{price}</p>
       </div>
        <div className='gap-3'>
            <button className='w-[120px] rounded-xl h-[50px] shadow-lg shadow-red-300 mr-5 bg-red-400 text-white' onClick={() => productDelete(id)}>delete</button>
            <button className='w-[120px] rounded-xl h-[50px] shadow-lg shadow-green-300 bg-green-400 text-white'>edit</button>
        </div>
    </div>
  )
}