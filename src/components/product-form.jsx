import React from 'react'
import { useForm } from 'react-hook-form'

export const ProductForm = ({submit, categoryData}) => {
    const {handleSubmit, register} = useForm()


  return (
    <div className=''>
        <form className='flex items-center jc flex-col gap-3' onSubmit={handleSubmit(submit)}>
            <select className='w-[100px] h-[30px] mt-2' {...register("categoryId")}>
                {categoryData.map((item) => <option value={item.id} key={item.id}>{item.name}</option>)}
            </select>
            <input className='w-[350px] h-[50px] rounded-lg border-gray-400 border-2 px-3' {...register("name")} type="text" placeholder='name' required />

            <input className='w-[350px] h-[50px] rounded-lg border-gray-400 border-2 px-3' {...register("number")} type="number" placeholder='price' required />
            <input className='w-[350px] h-[50px] rounded-lg border-gray-400 border-2 px-3' {...register("Img")} type="text" placeholder='Img' required />
          
            <button className='w-[250px] rounded-xl h-[50px] bg-blue-500 text-white' type='submit'>send</button>
        </form> 
    </div>
  )
}
