import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { request } from '../../../config/request'
export const useCatigoryList = () => {
  return (
    useQuery({
        queryKey:["catigoryList"],
        queryFn: () => request.get("/category").then((res) => res.data)
    })
  )
}
