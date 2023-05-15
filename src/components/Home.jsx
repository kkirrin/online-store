import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {Poster, Categories, Products, Banner} from './'
import { filterByPrice } from '../features/products/productsSlice'


const Home = () => {
  const dispatch = useDispatch()
  const {products: { list, filtered }, categories} = useSelector((state) => state)

  useEffect(() => {
    if(!list.length) return; 
    dispatch(filterByPrice(50))
    
  }, [dispatch, list.length])

  return (
    <>
      <Poster />
      <Products products={list} amount = {5} title='Trending'/>
      <Categories products={categories.list} amount = {5} title='Worth seeing'/>
      <Banner />
      <Products products={filtered} amount = {5} title='Less than 50$'/>
    </>
  )
} 

export default Home