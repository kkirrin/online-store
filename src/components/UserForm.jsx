import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { toggleForm, toggleFormType } from '../features/user/userSlice'
import UserSignUpForm from './UserSignUpForm'
import UserLoginForm from './UserLoginForm'

import style from './../assets/styles/User.module.css'
  
  const UserForm = () => {

    const dispatch = useDispatch()
    const { showForm, formType } = useSelector(({ user }) => user)

    const closeForm = () => dispatch(toggleForm(false))
    const toggleCurrentFormType = (type) => {
      dispatch(toggleFormType(type))
    }

    return showForm ? (
      <>
        <div className={style.overlay} onClick={closeForm}/>
        {formType === 'signup' ? <UserSignUpForm closeForm={closeForm}  toggleCurrentFormType={toggleCurrentFormType} /> : <UserLoginForm  toggleCurrentFormType={toggleCurrentFormType} closeForm={closeForm}/> }
      </>
    ) : (
      <></>
    )
  }
  
  export default UserForm