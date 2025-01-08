import React, { useState ,useEffect }  from 'react'
import Hero from '../Component/Hero'
import Button from '../Component/Button'
import Work1 from '../assets/work1.svg'
import Work2 from '../assets/work2.svg'
import subImage from '../assets/subImage2.svg'
import Box from '../Component/Box'
function Work() {
  const [ currentIndex , setCurrentIndex] = useState(0)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, [])
  const isMediumScreen = window.matchMedia('(max-width: 768px)').matches;
  const workDetails = [
    { id: 1, image: subImage, title: "CEPI", des: "An identity for CEPI to give them confidence on the world stage. " },
    { id: 2, image: subImage, title: "OKRE", des: "Developing a world-first hub where two industries combine." },
    { id: 3, image: subImage, title: "PROTAS", des: "Identity and digital presence for a rapidly growing organisation." }
  ]



  return (
    <div>
      <Hero className="bg-white text-black " widthtitle="w-[50%]  max-md:w-[100%]  " widthpara=" w-[30%] max-md:w-[100%] "

        title="We design brands that stand out..."
        des="Your brand needs three things: clarity,  alignment to your audience, and the right look and feel. We can help you nail all three and, in turn, earn more trust and more engagement." />
      <hr className='border-[2px] border-gray-200 w-[80%] ml-[4.5rem] max-md:ml-[2rem]' />
      <div className='p-[5.5rem] max-md:p-[1.5rem]'>
        <h2 className='text-[33px]   mb-8  max-md:mb-3 hover:underline transition-all 2s linear'>Some of our branding work</h2>
        <div className='  flex justify-around p-[3rem] max-md:p-[0rem] max-md:justify-between   '>
          <div className='w-1/2' >

            <img src={Work1} alt="" className='  w-[450px] h-[500px]   max-md:w-full max-md:h-full ' />
          </div>
          <div className='ml-20 mt-10  max-md:ml-2 max-md:mt-3 max-md:w-1/2'>
            <h2 className='text-[18px] font-semibold mb-3 max-md:text-[15px] max-md:mb-1'>CEPI</h2>
            <p className='text-gray-500 mb-5 max-md:mb-2 max-md:text-[12px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit lor.</p>
            <div className='flex'>
              <Button className='p-[0.37rem] text-[13px] max-md:text-[10px] bg-black text-white mr-2 text-center rounded-md ' txt="BRAND" />
              <Button className='p-[0.37rem] text-[13px] bg-black text-white mr-2 max-md:text-[10px] text-center rounded-md ' txt="WEBSITE" />
            </div>
          </div>
        </div>
        <div className='  flex justify-around p-[3rem] max-md:p-[0rem]  mt-10  '>
          <div className=' mt-10 max-md:mt-3  max-md:w-[45%] '>
            <h2 className='text-[18px] max-md:text-[13px] font-semibold mb-3 max-md:mb-1'>CEPI</h2>
            <p className='text-gray-500 mb-5 max-md:text-[12px] max-md:mb-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className='flex'>
              <Button className='p-[0.37rem] max-md:py-1 text-[13px] max-md:text-[10px] bg-black text-white mr-2 text-center rounded-md ' txt="BRAND" />
              <Button className='p-[0.37rem] text-[13px] bg-black text-white mr-2 max-md:text-[10px] text-center rounded-md ' txt="WEBSITE" />
            </div>
          </div>
          <div className='max-md:w-[55%] '>
            <img src={Work2} alt="" className='w-[550px] h-[400px] max-md:w-full max-md:h-full' />
          </div>

        </div>
        <div className=' mt-10 flex justify-around p-[3rem] max-md:p-[0rem] max-md:justify-between   '>
          <div className='w-1/2' >

            <img src={Work1} alt="" className='  w-[450px] h-[500px]   max-md:w-full max-md:h-full ' />
          </div>
          <div className='ml-20 mt-10  max-md:ml-2 max-md:mt-3 max-md:w-1/2'>
            <h2 className='text-[18px] font-semibold mb-3 max-md:text-[15px] max-md:mb-1'>CEPI</h2>
            <p className='text-gray-500 mb-5 max-md:mb-2 max-md:text-[12px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit lor.</p>
            <div className='flex'>
              <Button className='p-[0.37rem] max-md:py-1 text-[13px] max-md:text-[10px] bg-black text-white mr-2 text-center rounded-md ' txt="BRAND" />
              <Button className='p-[0.37rem] text-[13px] bg-black text-white mr-2 max-md:text-[10px] text-center rounded-md ' txt="WEBSITE" />
            </div>
          </div>
        </div>
        <section className='max-md:overflow-hidden'>
        <div className='mt-20 p-5 max-md:p-0 flex justify-around max-md:justify-between slider-container'
        style={isMediumScreen ? { transform: `translateX(-${currentIndex * 104}%)` } : {}}>
          {
            workDetails.map((detail) => {
              return (
                <Box  {...detail} />
              )
            })
          }
        </div>

        </section>
        
      </div>




    </div>

  )
}

export default Work