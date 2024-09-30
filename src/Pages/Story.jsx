import React from 'react'
import Hero from '../Component/Hero'

function Story() {
  return (
    <div>
      <Hero className="bg-white text-black " widthtitle="w-[70%]  " widthpara=" w-[40%] "
                title="Who We Are"
                des="Your brand needs three things: clarity,  alignment to your audience, and the right look and feel. We can help you nail all three and, in turn, earn more trust and more engagement." />
    <hr className='border-[2px] border-gray-200 w-[80%] ml-[4.5rem] max-md:ml-[2rem]' />
    <div className='p-[5.5rem] max-md:p-[2rem]'>
    <h2 className=" text-[33px]  mb-8 max-md:mb-4 hover:underline transition-all 2s linear">The values we live by</h2>
    <div className="container mx-auto px-4 ">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-[26px] font-semibold mb-4 ">Ever collaborative</h2>
      <p className="">When it comes to creating brilliant work and a happy   workplace   where everyone is able to be their true selves, sharing isn't optional. It's vital.</p>
    </div>
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-[26px] font-semibold  mb-4 ">Ever caring</h2>
      <p className="">We know people have put a lot into their businesses, so we care about what we do and are dedicated to finding the people who help us do it well.</p>
    </div>
  </div>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-[26px] font-semibold  mb-4 ">Ever determined</h2>
      <p className="">We stand up for the causes we're driven by, the ideas we cherish and the values we live and breathe.</p>
    </div>
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-[26px] font-semibold  mb-4 ">Ever questioning</h2>
      <p className="">Our roles transcend our desks. Finding fulfillment comes with asking questions, challenging assumptions and absorbing the world around us.</p>
    </div>
  </div>
</div>
    </div>
    </div>
  )
}

export default Story