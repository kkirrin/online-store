import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import style from './../assets/styles/Cart.module.css'
import { sumBy } from '../utils/command'

import plus from './../assets/images/plus.png'
import minus from './../assets/images/minus.png'
import close from './../assets/images/icons8-close.svg'
import { addItemToCart, removeItemFromCart } from '../features/user/userSlice'

const Cart = () => {
    const dispatch = useDispatch();
    const { cart } = useSelector(({ user }) => user);
  
    const changeQuantity = (item, quantity) => {
      dispatch(addItemToCart({ ...item, quantity }));
    };
  
    const removeItem = (id) => {
      dispatch(removeItemFromCart(id));
    };
  return (
    <section className={style.cart}>
      <h2 className={style.title}>Your cart</h2>

      {!cart.length ? (
        <div className={style.empty}>Here is empty</div>
      ) : (
        <>
          <div className={style.list}>
            {cart.map((item) => {
              const { title, category, images, price, id, quantity } = item;

              return (
                <div className={style.item} key={id}>
                  <div
                    className={style.image}
                    style={{ backgroundImage: `url(${images[0]})` }}
                  />
                  <div className={style.info}>
                    <h3 className={style.name}>{title}</h3>
                    <div className={style.category}>{category.name}</div>
                  </div>

                  <div className={style.price}>{price}$</div>

                  <div className={style.quantity}>
                    <div
                      className={style.minus}
                      onClick={() =>
                        changeQuantity(item, quantity - 1)
                      }
                    >
                      <img src={minus} className={style.icon} />
                      
                    </div>

                    <span>{quantity}</span>

                    <div
                      className={style.plus}
                      onClick={() =>
                        changeQuantity(item, quantity + 1)
                      }
                    >
                      <img src={plus} className={style.icon} />
                    </div>
                  </div>

                  <div className={style.total}>{price * quantity}$</div>

                  <div
                    className={style.close}
                    onClick={() => removeItem(item.id)}
                  >
                    <img src={close} className={style.close} />
                    
                  </div>
                </div>
              );
            })}
          </div>

          <div className={style.actions}>
            <div className={style.total}>
              TOTAL PRICE:{" "}
              <span>
                {sumBy(cart.map(({ quantity, price }) => quantity * price))}$
              </span>
            </div>

            <button className={style.proceed}>Proceed to checkout</button>
          </div>
        </>
      )}
    </section>
  );
}

export default Cart