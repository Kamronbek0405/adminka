import React from 'react'
import { useMutation } from '@tanstack/react-query'
import { request } from '../../../config/request'

export const useCreateProduct = () => {
  return useMutation({
    mutationFn: (data) => request.post("/products").then((res) => res.data)
  })
}
