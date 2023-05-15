import React, { useEffect } from 'react'
import { Header, AppRouter, Sidebar, Footer,UserForm } from './'
import { useDispatch } from 'react-redux'
import { getCategories } from '../features/categories/categoriesSlice'
import { getProducts } from '../features/products/productsSlice'

const App = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCategories())
  }, [dispatch])

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

  return (
    <div className='app'>
        <Header />
        <UserForm />
        <div className='container'>
          <Sidebar />
          <AppRouter />
        </div>

        <Footer />
    </div>
  )
}

export default App