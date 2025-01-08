import React, { useState , useEffect } from 'react'
import Hero from '../Component/Hero'

function Story() {
const [currentIndex , setCurrentIndex] = useState(0);
useEffect(() => {
  const interval = setInterval(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % 4);
  }, 3000);
  return () => clearInterval(interval);
}, [])
const story =[
  {
    "id": 1,
    "title": "Ever collaborative",
    "description": "When it comes to creating brilliant work and a happy workplace where everyone is able to be their true selves,  sharing isn't optional. It's vital."
  },
  {
    "id": 2,
    "title": "Ever caring",
    "description": "We know people have put a lot into their businesses, so we care about what we do and are dedicated to finding the people who help us do it well."
    },
   
    {
      "id": 3,
      "title": "Ever determined",
      "description": "We stand up for the causes we're driven by, the ideas we cherish and the values we live and breathe."

    }  ,
    {
      "id": 4,
      "title": "Ever questioning",
      "description": "Our roles transcend our desks. Finding fulfillment comes with asking questions, challenging assumptions and absorbing the world around us."
    }
  ]


  return (
    <div>
      <Hero className="bg-white text-black " widthtitle="w-[70%]  " widthpara=" w-[40%] "
        title="Who We Are"
        des="Your brand needs three things: clarity,  alignment to your audience, and the right look and feel. We can help you nail all three and, in turn, earn more trust and more engagement." />
      <hr className='border-[2px] border-gray-200 w-[80%] ml-[4.5rem] max-md:ml-[2rem]' />
      <div className='p-[5.5rem] max-md:p-[1.5rem]'>
        <h2 className=" text-[33px]  mb-8 max-md:mb-4 hover:underline transition-all 2s linear">The values we live by</h2>
        <div className="mx-auto px-4 lg:block max-md:hidden DesktopView ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {
              story.map((item, index) => {
                return (
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-[26px] font-semibold mb-4 ">{item.title}</h2>
                    <p className=""> {item.description}</p>
                  </div>
                )

              })
            }
          </div>
        </div>
        <div className="mx-auto px-4 max-md:px-2 lg:hidden max-md:block MobileView overflow-hidden">
          <div className="flex slider-container   w-full "
          style={{ transform: `translateX(-${currentIndex * 102}%)` }}
           >
            
            {
              story.map((item, index) => {
                return (
                  <div className="bg-white rounded-lg shadow-md border-[1px] border-gray-400  
                  slide  max-md:p-4 max-md:mr-2  w-fit-content ">
                    <h2 className="text-[26px] font-semibold mb-4 ">{item.title}</h2>
                  <p className=""> {item.description}</p>
                   </div>
                )

            })
          }
           
          </div>
        </div>
      </div>
    </div>
  )
}

export default Story