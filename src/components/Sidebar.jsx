import React from 'react'
import style from './../assets/styles/Sidebar.module.css'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Sidebar = () => {

  const { list } = useSelector(({ categories }) => categories)
  return (
  <section className={style.sidebar}>
    <div className={style.title}>
      Categories
    </div>

    <nav>
      <ul className={style.menu}>
        {list.map(({id, name }) => (
        <li key={id}>
          <NavLink 
            className={({ isActive }) => `${style.link} ${isActive ? style.active : undefined}` }
            to={`/category/${id}`}>
              {name}
          </NavLink>
        </li>
        ))}
       
      </ul>
    </nav>

    <div className={style.footer}>
        <a className={style.link} href='/help' target='_blank'>Help</a>
        <a className={style.link} href='/terms' target='_blank'>Terms & Conditions</a>
    </div>
  </section>
  )
}



export default Sidebar