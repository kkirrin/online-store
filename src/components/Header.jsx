import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { useGetProductsQuery } from '../features/api/apiSlice'
import { toggleForm } from '../features/user/userSlice'

import style from './../assets/styles/Header.module.css'

import { ROUTES } from '../utils/Routes'

import logo from './../assets/images/logo.svg'
import avatar from './../assets/images/avatar.jpg'
import search from './../assets/images/search.png'
import cart from './../assets/images/cart.png'
import favorite from './../assets/images/favorite.png'


const Header = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [ searchValue, setSearchValue ] = useState('')
  const { currentUser, cart} = useSelector(({ user }) => user)

  const { data, isLoading } = useGetProductsQuery({ title: searchValue})

  const handleClick = () => {
      if(!currentUser) dispatch(toggleForm(true))
  }

  const [values, setValues] = useState({ name: 'Guest', avatar: avatar})
  useEffect(() => {
    if(!currentUser) return 
    else navigate(ROUTES.PROFILE)

    setValues(currentUser)
  }, [currentUser])

  const handleSearch = ({target: {value}}) => {
    setSearchValue(value)
  }
  return (
    <div className={style.header}>
      <div className={style.logo}>
        <NavLink to={ROUTES.HOME}>
          <img src={logo} alt='Stuff'/>
        </NavLink>
      </div>

      <div className={style.info}>
        <div className={style.user} onClick={handleClick}>
            <div
              className={style.avatar}
              style={{ backgroundImage: `url(${values.avatar})` }}
            />
            <div className={style.name}>{values.name}</div>
        </div>
      
        <form className={style.form}>
          <div className={style.icon}>
           <img src={search} /> 
          </div>
          <div className={style.input}>
            <input
              type="search"
              name="search"
              placeholder="Search for anyting..."
              autoComplete="off"
              onChange={handleSearch}
              value={searchValue}
            />
          </div>  
          {searchValue && (
            <div className={style.box}>
              {isLoading
                ? "Loading"
                : !data.length
                ? "No results"
                : data.map(({ title, images, id }) => {
                    return (
                      <Link
                        key={id}
                        onClick={() => setSearchValue("")}
                        className={style.item}
                        to={`/products/${id}`}
                      >
                        <div
                          className={style.image}
                          style={{ backgroundImage: `url(${images[0]})` }}
                        />
                        <div className={style.title}>{title}</div>
                      </Link>
                    );
                  })}
            </div>
          )}
        </form>

        <div className={style.account}>
          <NavLink to={ROUTES.USER}>
            <img src={favorite} />
          </NavLink>
          <NavLink to={ROUTES.CART}>
            <img src={cart} />
          </NavLink>
          {!!cart.length && (<span>{cart.length}</span>)}
        </div>
      </div>
    </div>
  )
}

export default Header