import React from 'react'
import { useForm } from 'react-hook-form'
import {zodResolver}  from '@hookform/resolvers/zod'
import * as z from 'zod'
import { useLogin } from './service/mutation/useLogin'
import { saveState } from '../config/storage'
import { useNavigate } from 'react-router-dom'

const schema = z.object({
    email:z.string().min(3, "ankdcnsdkjcnnnnn"),
    password:z.string(2).min(3, "siz kam qiymat kitingiz").max(6, "siz kop qimat kiritingiz ")
})


export const Login = () => {
    const {handleSubmit, register, formState: {errors}} = useForm({resolver:zodResolver(schema)})

    const {mutate} = useLogin()
    const navigate = useNavigate()

    const submit = (data) => {
       mutate(data, {
        onSuccess: (res) => {
            console.log(res.data);
            saveState('user', {...res.user, token:res.accessToken});
            navigate("/")
        }
       })

    }
  return (
    <div className='flex items-center justify-center h-[100vh]'>
        <div className='w-[450px] h-[350px] bg-slate-400 shadow-lg shadow-gray-400 rounded-xl flex items-center justify-center'>   
        <form className='flex items-center jc flex-col gap-3' onSubmit={handleSubmit(submit)}>
            <input className='w-[350px] h-[50px] rounded-lg border-gray-400 border-2 px-3' {...register("email")} type="email" placeholder='email kiriting' required />

            <input className='w-[350px] h-[50px] rounded-lg border-gray-400 border-2 px-3' {...register("password")} type="password" placeholder='parol kiriting' required />
            {errors.password && <p className='text-red-600'>{errors.password.message}</p>}
            <button className='w-[250px] rounded-xl h-[50px] font-bold text-lg bg-blue-500 text-white' type='submit'>send</button>
        </form>
        </div>

    </div>
  )
}
