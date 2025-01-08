import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
function Button({ className = "bg-white w-fit  text-black px-8 py-3 max-md:py-1 rounded-md transition-all duration-200 ease-in-out hover:bg-gray-200 focus:outline-none focus:ring-2  hover:scale-75  active:shadow-inner" , 
  onClick = "" , txt = ""}) {
   

  

  return (
    <button className= {` ${className} border-2 border-black cursor-pointer hover:scale-90`} id='ButtonMain'
     onClick={onClick}>{txt}</button>
 
  )
}

export default Button

