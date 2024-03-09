import React from 'react'
import {useNavigate} from 'react-router-dom'


function Logo() {
  const navigate = useNavigate()
  
  const routeChange = () =>{ 
    let path = `/interface`; 
    navigate(path);
  }
  return (
    <div className='bg-black h-screen'>
    
    <div className='flex justify-center mt-40'>
        <img className=" h-3/4 w-3/5" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="NetFlix Image Loading" />
       
    </div>
    <div className='flex justify-center'>
    <button className='bg-red-600 text-white  mt-36 w-40  h-12 text-base font-semibold' 
  
  onClick={routeChange}
    >
          Get Started
        </button>
        </div>
       
    </div>
  )
}

export default Logo
