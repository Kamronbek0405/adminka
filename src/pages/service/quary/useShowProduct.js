import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { request } from '../../../config/request'

export const useShowProduct = (id) => {
  return (
    useQuery({
        queryKey: ['productList', id],
        queryFn: () => request.get("/products", {
            params: {
                categoryId:id
        }
    }).then((res) => res.data)

    })
  )
}
