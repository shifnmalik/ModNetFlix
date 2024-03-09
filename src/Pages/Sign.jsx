import React from 'react'
import  "./Sign.css"

function Sign() {
  return (
    <div className='body'>
    <div className="overlay"></div>
    <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="netflix logo" />

<div className="form-wrapper">
    <h2>Sign In</h2>
    <form action="#">
        <div className="form-control">
            <input type="text" required />
            <label>Email or phone number</label>
        </div>
        <div className="form-control">
            <input type="password" required />
            <label>Password</label>
        </div>
        <button className='bg-red-700' type="submit">Sign In</button>
        <div className="form-help"> 
            <div className="remember-me">
                <input type="checkbox" id="remember-me" />
                <label for="remember-me">Remember me</label>
            </div>
            <a href="#">Need help?</a>
        </div>
    </form>
    <p>New to Netflix? <a href="#">Sign up now</a></p>
    <small>
        This page is protected by Google reCAPTCHA to ensure you're not a bot. 
        <a href="#">Learn more.</a>
    </small>
</div>
</div>
  )
}

export default Sign
