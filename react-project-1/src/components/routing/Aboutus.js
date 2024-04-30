import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Aboutus() {
  let navigate = useNavigate();

  const doSomethingAndGoToHome = () => {
    console.log('Doing Something.......');
    navigate('/home');
  }

  return <>
    <h1>This is About Us page</h1>
    <a href='home' >go to Home</a>
    <Link to="/products" className='mx-2'>go to Product</Link>

    <button onClick={doSomethingAndGoToHome}>Do SOmething and go to home</button>

  </>
}
