import React from 'react'
import Header from '../Component/Header'
import Button from '../Component/Button';


function Contact({ showpopup, onClick }) {
    console.log(showpopup);

    return (
        <>
            {
                showpopup ? (
                    <>
                        <div className="fixed inset-0 flex flex-col items-center justify-center
                     z-50 bg-black">
                            <Header className="w-full absolute top-0 left-0" />
                            <p className='text-white text-[20px]'>Just Say Hi At</p>
                            <a href={`mailto:hello@creativdad.com`} className='text-white text-[30px]'>
                                hello@<span className='text-gray-700 hover:text-white
                                Email'>creativdad.com</span>
                            </a>
                            <Button className="bg-white w-fit mt-4
    text-black px-4 py-1 rounded-md transition-all duration-200 ease-in-out
     hover:bg-gray-200 focus:outline-none focus:ring-2 hover:scale-75 active:shadow-inner"
                                onClick={onClick} txt="Go Back" />
                        </div>

                    </>
                ) : " "
            }

        </>

    )
}



export default Contact
