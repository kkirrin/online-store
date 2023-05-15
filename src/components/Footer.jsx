import React from 'react'

import style from './../assets/styles/Footer.module.css'
import logo from './../assets/images/logo.svg'

import { NavLink } from 'react-router-dom'

import { ROUTES } from '../utils/Routes'
import inst from './../assets/images/inst.png'
import vk from './../assets/images/vk.png'

const Footer = () => {
  return (
    <section className={style.footer}>
      <div className={style.logo}>
        <NavLink to={ROUTES.HOME}>
          <img src={logo} alt='Stuff'/>
        </NavLink>
      </div>

      <div className={style.rights}>
        Developed by <span style={{color: '#4e2591'}}>Kkirrin</span> 
      </div>

      <div className={style.socials}>
        <a href='https://instagram.com'><img src={inst} /></a>
        <a href='https://vk.com'><img src={vk} /></a>
      </div>
    </section>
  )
}

export default Footer