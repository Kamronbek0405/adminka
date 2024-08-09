import { useMutation } from "@tanstack/react-query";
import { request } from "../../../config/request";



export const useCatigoryDelete = () => {
  return useMutation({
    mutationFn: (data) => request.delete(`/category/${id}`).then((res) => res.data)
  })
}
