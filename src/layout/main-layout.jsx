import React from 'react'
import { Link, Navigate, Outlet } from 'react-router-dom'
import { loadState } from '../config/storage'

export const MainLayout = () => {
    const user = loadState("user")
    if(!user){
        return <Navigate replace to={"/login"}/>
    }
  return (
    <div className='flex'>
       <div className='w-[350px] h-screen bg-blue-500 flex flex-col text-white font-bold '>
        <div className='ml-5 flex flex-col mt-5'>
        <Link to={"/"}>Home</Link>
        <Link to={"/catigory-list"}>Catigory</Link>
        </div>

       </div>
       <div>
        <Outlet/>
       </div>
    </div>
  )
}
