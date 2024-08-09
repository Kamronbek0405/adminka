import React from 'react'
import { ProductForm } from '../components/product-form'
import { useCatigoryList } from './service/quary/useCatigoryList'
import { useCreateProduct } from './service/mutation/useCreateProduct'
import { useNavigate } from 'react-router-dom'


export const CreateProduct = () => {
    const {data, isLoading} = useCatigoryList()

    const {mutate} = useCreateProduct()
    const navigate = useNavigate()

    const submit = (data)=> {
        console.log(data);
        mutate(data, {
            
            onSuccess: ()=> {
            navigate(-1)
            }
        }) 

    }
  return (
    <div>
        {!isLoading && <ProductForm categoryData={data} submit={submit}/>}

    </div>
  )
}
