import React, { useEffect } from 'react'
import style from "./../assets/styles/Profile.module.css"
import { useDispatch, useSelector } from 'react-redux'
import { updateUser } from '../features/user/userSlice'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { ROUTES } from '../utils/Routes'

const Profile = () => {
  const dispatch = useDispatch()
  const {currentUser} = useSelector(({ user}) => user)
  const [values, setValues ] = useState({
    email: '',
    name: '',
    password:'',
    avatar:''
  })
  useEffect(() => {
    if (!currentUser) return;

    setValues(currentUser);
  }, [currentUser]);

  const handleChange = ({ target: { value, name } }) => {
    setValues({ ...values, [name]: value });
  };

  // Отправка
  const handleSubmit = (e) => {
    e.preventDefault();

    const isNotEmpty = Object.values(values).every((val) => val);

    if (!isNotEmpty) return;

    dispatch(updateUser(values));
  };


  return (
    <section className={style.profile}>
      {!currentUser ? <span style={{ color: '#445454'}}>You need to <NavLink to={ROUTES.LOGIN}>login</NavLink></span> : (
        <form className={style.form} onSubmit={handleSubmit}>
          <div className={style.group}>
          <input
            type="email"
            placeholder="Your email"
            name="email"
            value={values.email}
            autoComplete="off"
            onChange={handleChange}
            required
          />
          </div>
            <div className={style.group}>
              <input 
                type='name' 
                name='name' 
                placeholder='Enter your name' 
                value={values.name}
                autoComplete='off' 
                className={style.input}
                onChange={handleChange} 
                required
              />
            </div>
          <div className={style.group}>
            <input 
              type='password' 
              name='password' 
              placeholder='Enter your password' 
              value={values.password} 
              autoComplete='off' 
              className={style.input}
              onChange={handleChange} 
              required
            />
          </div>
          <div className={style.group}>
            <input 
              type='avatar' 
              name='avatar' 
              placeholder='Enter your avatar' 
              value={values.avatar}
              autoComplete='off' 
              className={style.input}
              onChange={handleChange} 
              required
            />
          </div>
          <button type='submit' className={style.submit}>
              Update
          </button>
        </form>
      )}
    </section>
  )
}

export default Profile