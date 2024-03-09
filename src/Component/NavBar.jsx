import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'

function NavBar() {
  const navigate = useNavigate()
  
 const routeChange = () =>{ 
   let path = `/Login`; 
   navigate(path);
 }

 const routeChanges = () =>{ 
  let path = `/Sign`; 
  navigate(path);
}


 const [open,setOpen] =useState(false)

    
  return (
    
    <nav className="bg-black">
      
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div className="relative flex h-16 items-center justify-between">
        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
         
         
        </div>
        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          <div className="flex flex-shrink-0 items-center">
            
          </div>
          <div className=" sm:ml-6 sm:block  ">
            <div className="flex space-x-4">
              
              <img className='md:h-12 md:w-32 h-8 w-16 pt-2 ' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="NetFlix Image Loading" />
              <a href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Home</a>
              <a href="#" className="hidden md:block md:text-gray-300 md:hover:bg-gray-700 md:hover:text-white md:rounded-md md:px-3 md:py-2 md:text-sm md:font-medium">My List</a>
              <a href="#" className="hidden md:block text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">About</a>
              
            </div>
          </div>
        </div>

        <button className=' md:bg-red-600 md:text-white  md:w-20  md:h-8 md:text-base md:font-semibold md:rounded-md  
       bg-red-600 text-white h-8 w-14 text-sm font-semibold rounded-md ' onClick={routeChange} > 
       Login</button>
        <button className=' md:bg-red-600 md:text-white  md:w-20  md:h-8 md:text-base md:font-semibold md:rounded-md ml-4 
        bg-red-600 text-white h-8 w-14 text-sm font-semibold rounded-md mr-24' onClick={routeChanges}  >Sign in</button>
     
        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <button type="button" className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"  >
            <span className="absolute -inset-1.5"></span>
            
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
            </svg>
          </button>
  
          
          <div className="relative ml-3">
            <div>
              <button type="button" className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true" onClick={()=>setOpen(!open)} >
              
              
                <span className="absolute -inset-1.5"></span>
                <span className="sr-only">Open user menu</span>
               
            <img className="rounded w-8 h-8" src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745" alt="" />
              </button>
             
            </div>
           {
            open && 
            <div  className=" absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white  py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex="1">
          
            <a  href="#" className=" block  hover:bg-blue-100  px-4 py-2 text-sm font-semibold"   role="menuitem" tabIndex="2" id= "user-menu-item-0"> Profile</a>
              
              <a href="#" className="block hover:bg-blue-100  px-4 py-2 text-sm font-semibold " role="menuitem" tabIndex="3" id= "user-menu-item-0" >Settings</a>
              <a href="#" className="block hover:bg-blue-100  px-4 py-2 text-sm font-semibold " role="menuitem" tabIndex="4" id= "user-menu-item-0">Sign out</a>
   
            </div>
           }
            
          
          </div>
        </div>
      </div>
    </div>
  
   
  </nav>
  
  
  )
}

export default NavBar
