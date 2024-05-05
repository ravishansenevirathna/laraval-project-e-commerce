
import React, { useRef } from 'react'
import { Link } from 'react-router-dom'

export default function Signup() {

      const nameRef = useRef();
      const emailRef = useRef();
      const passwordRef = useRef();
      const passwordConfirmationRef = useRef();


  const onSubmit = (ev) => {
    ev.preventDefault()
    const payload = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      password_confirmation: passwordConfirmationRef.current.value,
    }

    console.log(payload);

  }

  return (
    <div className='login-signup-form animated fadeInDown'>
      <div className='form'>
        <form onSubmit={onSubmit}>

        <h1 className='title'>
          Loging in to your Account
        </h1>
          <input ref={nameRef} type='text' placeholder='Full Name'/>
          <input ref={emailRef} type='email' placeholder='Email Address'/>
          <input ref={passwordRef} type='password' placeholder='Password'/>
          <input ref={passwordConfirmationRef} type='password' placeholder='Password Confirmation'/>
          <button className='btn btn-block'>Signup</button>

          <p className='message'>
            Already Registered? <Link to = "/login">Signin</Link>
          </p>

        </form>
      </div>

      </div>
  )
}
