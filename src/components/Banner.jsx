import React from 'react'

import style from './../assets/styles/Home.module.css'

import banner from './../assets/images/banner.png'


const Banner = () => {
  return (
    <section className={style.banner}>
        <div className={style.left}>
          <p className={style.content}>
              New Year
              <span>SALE</span>
          </p>
          <button className={style.more}>
            see more
          </button>
        </div>

        <div className={style.right} style={{ backgroundImage:`url(${banner})`}}>
          <p className={style.discount}>
              save up to <span>50%</span> off
          </p>
        </div>
    </section>
  )
}

export default Banner