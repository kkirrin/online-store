import React from 'react'
import style from './../assets/styles/User.module.css'
import icon from './../assets/images/icons8-close.svg'
import { useState } from 'react' 
import { useDispatch } from 'react-redux'
import { loginUser } from '../features/user/userSlice'

const UserSignUpForm = ({ closeForm, toggleCurrentFormType }) => {
  const dispatch = useDispatch()
  // Есть состояния
  const [values, setValues] = useState({  
    email:'',
    password:'',
  })
  // Есть функция, которая будет сетать значения в состояния
  const handleChange = ({ target: { value, name } }) => {
    setValues({ ...values, [name]: value });
  };
  
  // Отправка
  const handleSubmit = (e) => {
    e.preventDefault();

    const isNotEmpty = Object.values(values).every((val) => val);

    if (!isNotEmpty) return;

    dispatch(loginUser(values));
    closeForm();
  };

  return (
    <div className={style.wrapper}>
        <div className={style.close} onClick={closeForm}>
          <img className={style.icon} src={icon}/>
        </div>

        <div className={style.title}>
          <h1>
              Log In
          </h1>
        </div>

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
            
            <div className={style.link} onClick={() => toggleCurrentFormType('signup')}>
              Create an account
            </div>

            <button type='submit' className={style.submit} onClick={handleSubmit}>
              Login
            </button>
        </form>
    </div>
  )
}

export default UserSignUpForm