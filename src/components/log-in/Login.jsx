import React from 'react'
import './login.css'
import { LoginFunctions } from './LoginFunctions'
import validateInfo from './ValidateLogin'

const Login = ({ submitForm }) => {
  const { handleChange, handleSubmit, formData, errors } = LoginFunctions(
    submitForm,
    validateInfo
  )

  return (
    <div className='container'>
      <div className='screen'>
        <div className='screen__content'>
          <form className='login' onSubmit={handleSubmit}>
            <div className='login__field'>
              <i className='login__icon fas fa-user'></i>
              <input
                type='text'
                className='login__input'
                name='username'
                placeholder='Username'
                onChange={handleChange}
                value={formData.username || ''}
              />
              {errors.username && (
                <p style={{ color: 'red', fontSize: '12px', marginTop: '4%' }}>
                  {errors.username}
                </p>
              )}
            </div>
            <div className='login__field'>
              <i className='login__icon fas fa-lock'></i>
              <input
                type='password'
                name='password'
                className='login__input'
                placeholder='Password'
                onChange={handleChange}
                value={formData.password || ''}
              />
              {errors.password && (
                <p style={{ color: 'red', fontSize: '12px', marginTop: '4%' }}>
                  {errors.password}
                </p>
              )}
            </div>
            <button className='button login__submit'>
              <span className='button__text'>Log In Now</span>
              <i className='button__icon fas fa-chevron-right'></i>
            </button>
          </form>
        </div>
        <div className='screen__background'>
          <span className='screen__background__shape screen__background__shape4'></span>
          <span className='screen__background__shape screen__background__shape3'></span>
          <span className='screen__background__shape screen__background__shape2'></span>
          <span className='screen__background__shape screen__background__shape1'></span>
        </div>
      </div>
    </div>
  )
}

export default Login
