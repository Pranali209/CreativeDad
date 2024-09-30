import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
function ServiceBox({ id, icon, title, description }) {
    const { t} = useTranslation()
    const [showOptions, setShowOptions] = useState(false);

    const toggleOptions = () => {
        setShowOptions(!showOptions);
        console.log();
        
    };
    return (
        <>
            <div className="flex flex-col items-start w-[40%] max-md:w-[100%] mb-16 max-md:mb-8">

                <div class="bg-white rounded-xl   flex items-center gap-4 max-md:gap-2 border-[1px] border-gray-500">
                    <div class="bg-white rounded-xl m-[0.2rem] p-2 gap-4 border-[1px] border-gray-400  shadow-lg">
                        <img src={icon} alt="service1" className=' w-5 h-5 inline-block mr-2' />

                        <span className="font-bold text-lg mr-2 ">{title}</span>
                        <div className='bg-slate-50 p-1  inline hover:cursor-pointer'>
                            <span className="text-lg text-gray-600" onClick={toggleOptions}>{showOptions ? '-' : '+'}</span>
                        </div>
                        <div>
                        <ul id="design-options" className={showOptions ? 'ml-6' : 'hidden'}>
                            <li className="mb-2 mt-4 ">
                                <a href="#" className="hover:underline">
                                    UI Design &gt;
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="  hover:underline">
                                    Content Design &gt;
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className=" hover:underline">
                                    Graphic Design &gt;
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className=" hover:underline">
                                    Advertisement Creation &gt;
                                </a>
                            </li>
                        </ul>
                        </div>
                       

                    </div>

                </div>
                <p className="text-sm text-gray-600 mt-5 mb-3">0{id} /{t('Design.category')} </p>
                <p className="mb-20">{description}</p>
                <hr className="border-gray-300 w-full mb-8" />
            </div>

        </>
    )
}

export default ServiceBox