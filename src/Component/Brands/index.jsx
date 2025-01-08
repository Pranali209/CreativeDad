import React from 'react'
import Marquee from "react-fast-marquee";
function Brands() {
  return (
    <div>
        <div>
           <div className=' w-full text-black max-md:overflow-hidden '>
           <h2 className=' text-[33px]  max-md:text-[23px] flex justify-evenly enable-animation-left  '>  
             <span className='max-md:mr-2' >iLOQ </span>
             <span className='max-md:mr-2'> Brella </span>
             <span className='max-md:mr-2'>Lyti</span>
             <span className='max-md:mr-2'> Naava</span>
             <span className='max-md:mr-2'> Firstbeat</span>
             <span className='max-md:mr-2'> Smartum</span>
             <span className='max-md:mr-2'> Howspace</span>
             </h2>
           </div>
           
        </div>
        <div>
           <div className=' w-full text-black max-md:overflow-hidden '>
           <h2 className=' text-[33px] max-md:text-[23px]  flex justify-evenly enable-animation-right'>  
             <span className='max-md:mr-2'>iLOQ </span>
             <span className='max-md:mr-2'> Brella </span>
             <span className='max-md:mr-2'>Lyti</span>
             <span className='max-md:mr-2'> Naava</span>
             <span className='max-md:mr-2'> Firstbeat</span>
             <span className='max-md:mr-2'> Smartum</span>
             <span className='max-md:mr-2'> Howspace</span>
             </h2>
             </div>
         
           
        </div>
    </div>

  )
}

export default Brands