import { useMutation } from "@tanstack/react-query";
import { request } from "../../../config/request";

import React from 'react'

export const useProductDelete = () => {
  return useMutation({
    mutationFn: (id)=> request.delete(`/products/${id}`).then((res) => res.data)
  })
}
