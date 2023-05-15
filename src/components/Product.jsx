import React, { useEffect, useState } from 'react'
import style from "./../assets/styles/Product.module.css"
import { useDispatch } from 'react-redux'

import { NavLink } from 'react-router-dom'
import { ROUTES } from '../utils/Routes'
import { addItemToCart } from '../features/user/userSlice'

const Product = (item) => {
  const { images, title, price, description} = item
  
  const dispatch = useDispatch()
  
  const SIZES = [5,5.5, 6]

  const [currentImage, setCurrentImage] = useState()
  const [currentSize, setCurrentSize] = useState()

  useEffect(() => {{
    if(!images.length) return 

    setCurrentImage(images[0])
  }}, images)

  useEffect(() => {{
    if(!SIZES.length) return 

    setCurrentSize(SIZES[0])
  }}, images)

  const addToCart = () => {
    dispatch(addItemToCart(item))
  }
  return (
    <section className={style.product}>
      <div className={style.images}>
        <div 
          className={style.current} 
          style={{backgroundImage: `url(${currentImage })`}}
        />
        <div className={style['images-list']}>
          {images.map((image, index) => (
            <div 
              className={style.image} 
              style={{backgroundImage: `url(${image})`}}
              onClick={() =>setCurrentImage(image)}
              key={index}
            />
          ))}
        </div>

      </div>
      <div className={style.info}>
        <h1 className={style.title}>{title}</h1>
        <div className={style.price}>{price}$</div>
        <div className={style.color}>
          <span>Color:</span> Green
        </div>
        <div className={style.sizes}>
          <span>Sizes:</span>
          
          <div className={style.list}>
            {SIZES.map((size) => (
              <div
                onClick={() => setCurrentSize(size)}
                className={`${style.size } ${currentSize === size ? style.active : 'null'}`}
                key={size}
              >
                {size}
              </div>
            ))}
          </div>
        </div>

        <p className={style.description}>{description}</p>

        <div className={style.actions}>
          <button
            onClick={addToCart(item)}
            className={style.add}
            disabled={!currentSize}
          >
            Add to cart
          </button>
          <button className={style.favourite}>Add to favourites</button>
        </div>

        <div className={style.bottom}>
          <div className={style.purchase}>19 people purchased</div>

          <NavLink to={ROUTES.HOME}>Return to store</NavLink>
        </div>
      </div>
    </section>
  )
}

export default Product