import React from 'react'
import Button from '../Button'

function Hero({ className = "bg-black" ,widthtitle, widthpara, title ="" , des= ""}) {
  return (
    <section className={`flex flex-col max-md:p-[2.2rem]
        p-[4.5rem]  ${className}`}>
        <span className={`${widthtitle}  max-md:w-[100%]`}>
        <p className={`text-6xl max-md:text-[25px] text-justify  mb-8  max-md:w-[100%]  ${className}`}>
    {title}
    </p>
       
        </span>
        <p className={`max-md:w-[100%]  ${className , widthpara}`}>{des}</p>
     
  </section>

  
  )
}

export default Hero