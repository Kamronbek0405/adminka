import React from 'react'
import { useCatigoryList } from './service/quary/useCatigoryList'
import { CatigoryCard } from '../components/catigory-card'

export const CatigoryList = () => {
  const {data, isLoading} = useCatigoryList()
  return (
    <div>
       
      {data?.map((item) => <CatigoryCard key={item.id} {...item}/> )}
    </div>
  )
}
