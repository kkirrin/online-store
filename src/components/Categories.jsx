import React from 'react'
import style from './../assets/styles/Categories.module.css'
import { NavLink } from 'react-router-dom'

const Categories = ({ title, products = [], amount }) => {
  const list = products.filter((_, i) => i < amount);

  return (
    <section className={style.section}>
      <h2>{title}</h2>

      <div className={style.list}>
        {list.map(({ id, name, image }) => (
          <NavLink to={`/categories/${id}`} key={id} className={style.item}>
            <div
              className={style.image}
              style={{ backgroundImage: `url(${image})` }}
            />
            <h3 className={style.title}>{name}</h3>
          </NavLink>
        ))}
      </div>
    </section>
  );
};

export default Categories;