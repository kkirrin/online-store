import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { ROUTES } from '../utils/Routes'
import SingleProduct from './SingleProduct'
import SingleCategory from './Category'

import Home from './Home'
import Cart from './Cart'
import User from './User'
import Profile from './Profile'

const AppRouter = () => (
    <Routes>
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route path={ROUTES.CART} element={<Cart />} />
      <Route path={ROUTES.USER} element={<User />} />
      <Route path={ROUTES.PRODUCT} element={<SingleProduct />} />
      <Route path={ROUTES.CATEGORY} element={<SingleCategory />} />
      <Route path={ROUTES.PROFILE} element={<Profile />} />
    </Routes>
  )


export default AppRouter