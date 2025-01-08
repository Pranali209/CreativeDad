import React from 'react'
import Hero from '../Component/Hero'
import ServiceImage from '../assets/Servicesecfic1.svg'
import FormComp from '../Component/Form'
import Button from '../Component/Button'
function Service() {
    return (
        <div>
            <Hero className="bg-white text-black " widthtitle="w-[70%] " widthpara=" w-[50%]"
                title="UI Design That Captivates and Converts."
                des="First Impressions Matter. Your users expect more than just functionality they crave an experience. " />
          <hr className='border-[2px] border-gray-200 w-[80%] ml-[4.5rem] max-md:ml-[2rem]' />
            <div className='p-[5.5rem] max-md:p-[2rem]'>
                <h2 className=" text-[26px] font-medium mb-8 max-md:mb-4">  What We Offer</h2>
                <div className='  flex justify-around  '>

                    <div className=' mt-10 max-md:mt-5 max-md:w-[50%] '>
                        <h2 className='text-[25px] max-md:text-[15px] font-semibold mb-3 max-md:mb-1'>User Centric Design</h2>
                        <p className='text-gray-500 mb-5 max-md:text-[10px] max-md:mb-2'>We focus on your audience, crafting designs that are easy <br /> to navigate and delightful to use.</p>
                        <Button className='p-[0.37rem] text-[13px] bg-black text-white mr-2 text-center rounded-md ' txt ="BRAND"/>
                        <Button className='p-[0.37rem] text-[13px] bg-black text-white mr-2 text-center rounded-md ' txt ="WEBSITE"/>
                    </div>
                    <div className=' max-md:w-[50%] '>
                        <img src={ServiceImage} alt="" className='  w-[460px] h-[205px]' />
                    </div>
                </div>
                <div className='  flex  justify-around mt-10 max-md:mt-5 max-md:flex-col  '>
                    <div className=' '>
                        <img src={ServiceImage} alt="" className='  w-[460px] h-[205px]' />
                    </div>
                    <div className=' mt-10 max-md:mt-5 '>
                        <h2 className='text-[25px] font-semibold mb-3'>User Centric Design</h2>
                        <p className='text-gray-500 mb-5'>We focus on your audience, crafting designs that are easy <br /> to navigate and delightful to use.</p>
                        <Button className='p-[0.37rem] text-[13px] bg-black text-white mr-2 text-center rounded-md ' txt ="BRAND"/>
                        <Button className='p-[0.37rem] text-[13px] bg-black text-white mr-2 text-center rounded-md ' txt ="WEBSITE"/>
                    </div>

                </div>
                <div className='  flex justify-around mt-10 max-md:flex-col   '>

                    <div className=' mt-10 max-md:mt-5  '>
                        <h2 className='text-[25px] font-semibold mb-3'>User Centric Design</h2>
                        <p className='text-gray-500 mb-5'>We focus on your audience, crafting designs that are easy <br /> to navigate and delightful to use.</p>
                        <Button className='p-[0.37rem] text-[13px] bg-black text-white mr-2 text-center rounded-md ' txt ="BRAND"/>
              <Button className='p-[0.37rem] text-[13px] bg-black text-white mr-2 text-center rounded-md ' txt ="WEBSITE"/>
                    </div>
                    <div className=' '>
                        <img src={ServiceImage} alt="" className='  w-[460px] h-[205px]' />
                    </div>
                </div>
                <div class="container my-20 ml-[5.5rem]  max-md:my-10 max-md:ml-[0rem]">
                    <div class="flex  flex-col md:flex-row gap-8 max-md:justify-center">
                        <div class="md:w-[35%] max-md:w-[100%] ">
                            <p class="text-gray-600 mb-4">Get Started</p>
                            <h1 class="text-[28px]  mb-4">
                                Need help with your UI Design? <br />Talk to one of our friendly <br /> consultants.</h1>

                            <a href="#" class=" hover:underline">Book a call &gt;</a>
                        </div>
                        <div class=" w-[25%] max-md:w-[100%]">
                           <FormComp/>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Service