import React from 'react'
import style from './../assets/styles/Home.module.css'

import BG from './../assets/images/BG.png'

const Poster = () =>  (
    <section className={style.home}>
      <div className={style.title}>BIG SALE 25%</div>
      <div className={style.product}>
        <div className={style.text}>
          <div className={style.subtitle}>
              The bestseller of 2023
          </div>
          <h1 className={style.head}>
              Lennon r2d2 with NVIDIA 5090 TI
          </h1>
          <button className={style.button}>
              Shop Now
          </button>
          <div className={style.image}>
            <img src={BG} alt='computer' />
          </div>
        </div>
      </div>
    </section>
  )

export default Poster