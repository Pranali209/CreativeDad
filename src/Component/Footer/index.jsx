import React from 'react'
import Icons from '../../assets/icon1.gif'
function Footer() {
    return (
        <footer className='bg-black max-md:p-2'>
            <section className=' max-w-[1208px] my-0 mx-auto py-0 px-[20px] max-md:px-[10px] bg-black'>
                <section className='bg-black'>
                    <section className='pt-[104px] pb-[120px] text-center max-md:pt-[20px] max-md:pb-[40px]'>
                        <h1 className='text-gray-500 mb-8px text-[43px] max-md:text-[23px]'>Ready to make something great?</h1>
                        <h2 className='text-white text-[43px]  max-md:text-[23px]'>Let’s talk.</h2>

                    </section>
                </section>
            </section>
            <section className=' flex max-md:flex-col max-md:justify-center   border-t-2 border-t-white py-[28px] px-[30px] justify-between text-white'>
                <section className='flex text-left max-md:text-center max-md:flex-col max-md:mb-3'>
                    <nav>
                        <a href="/en/contact" className='text-white'>Contact us</a>
                    </nav>
                </section>
                <section className="relative text-center text-white max-md:mb-4">
                    <span >Made with</span>
                    <span className="relative inline-block overflow-hidden max-w-full">
                        <img src={Icons} className='w-[2rem] h-[1.9rem] mb-[-7px]'/>
                    </span>
                    <span>in Helsinki</span>
                </section>

                <section className='flex max-md:text-center max-md:flex-col '>
                    <nav>
                        <a href="/en/contact" >Linkedin</a>
                    </nav>
                </section>
            </section>
        </footer>
    )
}

export default Footer