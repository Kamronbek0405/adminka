import { Route, Routes } from 'react-router-dom'
import './App.css'
import { MainLayout } from './layout/main-layout'
import { Home } from './pages/home'
import { Login } from './pages/login'
import { CatigoryList } from './pages/catigory-list'
import { CatigoryProduct } from './pages/catigory-product'
import { CreateProduct } from './pages/create-product'

function App() {


  return (
    <>
    <Routes>
      <Route path='/login' element={<Login/>}/>
        <Route path='/' element={<MainLayout/>}>
          <Route index element={<Home/>}/>
          <Route path='/catigory-list' element={<CatigoryList/>}/>
          <Route path='/catigory-product/:id' element={<CatigoryProduct/>}/>
          <Route path='/create-product' element={<CreateProduct/>}/>
        </Route>
    </Routes>
    </>
  )
}

export default App
