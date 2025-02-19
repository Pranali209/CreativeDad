import React from 'react'

function Box({ image , title, des}) {
  return (
    <div className="w-[28%] max-md:w-[100%] mb-4 border-2 border-black slide
    max-md:shadow-md max-md:border-gray-500 Input  mr-3 rounded-md">
    <img src={image} alt="" className=' h-[289px]  max-md:h-auto max-md:w-fit-content' /> 
    <div className=" p-5 max-md:p-2 ">
    <h3 className="text-[18px] font-semibold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600 text-sm leading-relaxed">{des}.</p>
    <div className="flex justify-start mt-4">
    <buttton className = " Input p-[0.37rem] text-[13px] bg-black text-white mr-2 text-center rounded-md  border-2 border-white"> BRAND </buttton>
    <buttton className = " Input p-[0.37rem] text-[13px] bg-black text-white  text-center rounded-md border-2 border-white">WEBSITE </buttton>
    </div>
  </div>

</div>
  )
}


export default Box