import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'


import { useGetProductQuery } from '../features/api/apiSlice'
import { getRelatedProducts } from '../features/products/productsSlice'

import { ROUTES } from '../utils/Routes'

import Product from './Product'
import Products from './Products'

const SingleProduct = () => {
  const { list, related } = useSelector(({ products}) => products)
  const dispatch = useDispatch()
  // Запрос по id
  const navigate = useNavigate()
  // Взяли и параметров
  const { id } = useParams()
  // Передали id в HOC
  const { data, isLoading, isFetching, isSuccess } = useGetProductQuery({id})

  // Если не загрудается, то редирект на HOME
  useEffect(() => {
    if(!isFetching && !isLoading && !isSuccess) {
      navigate.push(ROUTES.HOME)
    } 

  },[isLoading, isFetching, isSuccess])

  useEffect(() => {
    if(!data || !list.length) return  

      dispatch(getRelatedProducts(data.category.id))
    
  },[data, dispatch, list.length])
  return (
    !data ? (
      <section className='preloader'> Loading...</section>
    )
     :
    ( 
   <>
    <Product {...data} />
    <Products products={related} amount = {10} title='Related products'/>
   </>
    )
  )
}

export default SingleProduct