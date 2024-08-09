import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useCatigoryDelete } from '../pages/service/mutation/useCatigoryDelete'

export const CatigoryCard = ({id, name, img}) => {
    const navigate = useNavigate()
    const {mutate} = useCatigoryDelete()

    const deleteItem = (id) => {
        mutate(id, {
            onSuccess: ()=>{

            }
        })
    }
  return (
    <div className='flex w-[1100px] h-auto  items-center justify-between'>
       <div>
       <img src={img} alt="img" />
        <h2>{name}</h2>
       </div>
        <div className='gap-3'>
            <button onClick={()=> navigate(`/catigory-product/${id}`)} className='w-[150px]  h-[50px] rounded-xl font-medium shadow-lg shadow-blue-300 bg-blue-400 text-white mr-3'>show Product</button>
            <button className='w-[120px] rounded-xl font-medium h-[50px] shadow-lg shadow-red-300 bg-red-400 text-white mr-3' onClick={deleteItem}>delete</button>
            <button className='w-[120px] rounded-xl h-[50px] shadow-lg shadow-green-300 bg-green-400 text-white'>edit</button>
        </div>
    </div>
  )
}
