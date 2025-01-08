import React, { useState, useEffect } from 'react'
import Logo from '../../assets/Logo.svg'
import ContactArrow from '../../assets/arrow-contact.svg'
import { DarkmodeSwitch } from '../DarkSwitch'
import LangDetector from '../LanguageDetector'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import Logo1 from '../../assets/CREATIV.svg'
import Contact from '../../Pages/Contact'
function Header({ className = "" }) {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [showDropdown, setshowDropDown] = useState(false)
    const { t } = useTranslation()
    const navigate = useNavigate();
    const [showpopup, setShowPopUp] = useState(false)

    useEffect(() => {
        const theme = localStorage.getItem("theme");
        if (theme === "dark") {
            window.document.documentElement.classList.add("dark");
            setIsDarkMode(true);
        }
    }, []);

    function HandleShowPopUp(params) {
        setShowPopUp(!showpopup)
        handleClick()
    }

    const handleClick = () => {
        if (isDarkMode) {
            window.document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        } else {
            localStorage.setItem("theme", "dark");
            window.document.documentElement.classList.add("dark");
        }
        setIsDarkMode(!isDarkMode);
    };
    const toggleMenu = () => { setIsOpen((prev) => !prev); };
    return (
        <>
            <div className={` DesktopView bg-white font-sans  h-[60px]  py-2  ${className}  max-md:h-auto  max-md:hidden lg:block `}>

                <div className="flex justify-between items-center shadow-md max-md:flex-col max-md: align-middle">
                    <div className="flex  max-md:flex-col  max-md:mb-4  ">
                        <img src={isDarkMode ? Logo1 : Logo} alt="logo" />
                    </div>
                    <div className="flex  max-md:flex-col max-md:space-y-5 space-x-12 ">
                        <div >
                            <button className=" hover:text-gray-300 max-md:ml-[3rem]"
                                onClick={() => setshowDropDown(!showDropdown)}>
                                {t('menuOptions.services')} <svg xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 320 512"
                                    className=' w-5 h-5 inline-block mt-[-5px] '>
                                    <path fill={isDarkMode ? "white" : ""}
                                        d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />
                                </svg></button>

                        </div>
                        {
                            showDropdown && (
                                <div class="flex flex-col gap-4 absolute  mt-[1.9rem]  px-14 max-md:px-7 py-5 border-2 border-black 
                   left-[20rem]">
                                    <div class="flex gap-8">
                                        <div class="flex flex-col gap-2">
                                            <h3 class="text-xl font-bold  hover:cursor-pointer"
                                                onClick={() => { navigate('/service'); setshowDropDown(!showDropdown) }}>Content Strategy</h3>
                                            <p class=" font-bold">Trend overview</p>
                                            <p class=" font-bold">Social media strategy</p>
                                            <p class=" font-bold">Content Creation</p>
                                            <p class=" font-bold">Inbound Marketing</p>
                                            <p class=" ml-3">HubSpot implementation</p>
                                            <p class=" font-bold">Graphic Design</p>
                                            <p class=" font-bold">Concept design</p>
                                        </div>
                                        <div class="flex flex-col gap-2">
                                            <h3 class="text-xl font-bold ">Digital Marketing</h3>
                                            <p class="  ml-3">Google Ads</p>
                                            <p class="  ml-3">LinkedIn Advertising</p>
                                            <p class="  ml-3">Meta advertising</p>
                                            <p class="  ml-3">Pinterest Marketing Services</p>
                                            <p class="  ml-3">TikTok Advertising</p>
                                            <p class="  ml-3">YouTube Ads</p>
                                            <p class="  ml-3">Snapchat advertising</p>
                                        </div>
                                        <div class="flex flex-col gap-2">
                                            <h3 class="text-xl font-bold ">Web Development</h3>
                                            <p class="  ml-3 ">Search Engine Optimization (SEO)</p>
                                            <p class="   ml-3">Shopify</p>
                                        </div>
                                        <div class="flex flex-col gap-2">
                                            <h3 class="text-xl font-bold">Web Analytics</h3>
                                            <p class="  ml-3">Current State Analysis</p>
                                            <p class=" ml-3 ">Keyword Research</p>
                                            <p class=" ml-3 ">Cookie Consent</p>
                                            <p class=" ml-3 ">Social media auditing</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        }

                        <a href="#" className="  hover:text-gray-300" onClick={() => { navigate('/work') }}> {t('menuOptions.work')}</a>

                        <a href="#" className="  hover:text-gray-300 " onClick={() => navigate('/story')}>{t('menuOptions.ourStory')}</a>

                        <a href="#" className="  hover:text-gray-300  underline " onClick={() => navigate('/quote')}>{t('menuOptions.requestForProposal')}</a>
                        <a href="#" className="  hover:text-gray-300 " onClick={HandleShowPopUp} >{t('menuOptions.contact')}
                            <img src={ContactArrow} alt="ContactArrow" className='inline-block' />
                        </a>



                    </div>
                    <div className=" flex max-md:ml-4 w-32 items-center  justify-between  ">
                        <div>
                            <LangDetector />
                        </div>
                        <DarkmodeSwitch isDarkMode={isDarkMode} onClick={handleClick} />
                        <Contact showpopup={showpopup} onClick={HandleShowPopUp} />
                    </div>
                </div>


            </div>

            <div className={` MobileView bg-white font-sans  h-[60px]   ${className}  max-md:h-auto  max-md:block lg:hidden `}>
                <div className='flex  max-md:justify-around  align-middle items-center '>
                    <div className="flex ">
                        <img src={isDarkMode ? Logo1 : Logo} alt="logo" />
                    </div>
                    <DarkmodeSwitch isDarkMode={isDarkMode} onClick={handleClick} />
                    {!isOpen && <button onClick={toggleMenu} className=" visible focus:outline-none hover:scale-[0.8] transition-transform transform hover:cursor-pointer">
                        <svg className="w-6 h-6 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>}
                </div>
                <div className={isOpen ? "showMenuNav " : "hideMenuNav"}>
                    <div className="flex justify-between items-center shadow-md max-md:flex-col max-md: align-middle">
                        <div
                            className="absolute top-0 right-0 px-8 py-5 hover:scale-[0.7] transition-transform transform hover:cursor-pointer"
                            onClick={() => setIsOpen(false)}
                        >
                            <svg
                                className="h-8 w-8 text-gray-600"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        </div>
                        <div className="flex  max-md:flex-col max-md:space-y-5 space-x-12 ">
                            <div >
                                <button className=" hover:text-gray-300 max-md:ml-[3rem]"
                                    onClick={() => setshowDropDown(!showDropdown)}>
                                    {t('menuOptions.services')} <svg xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 320 512"
                                        className=' w-5 h-5 inline-block mt-[-5px] '>
                                        <path fill={isDarkMode ? "white" : ""}
                                            d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />
                                    </svg></button>

                            </div>
                            {
                                showDropdown && (
                                    <div class="flex flex-col gap-4 absolute  mt-[1.9rem]  px-14 max-md:px-7 py-5 border-2 border-black 
                   left-[20rem]">
                                        <div class="flex gap-8">
                                            <div class="flex flex-col gap-2">
                                                <h3 class="text-xl font-bold  hover:cursor-pointer"
                                                    onClick={() => { navigate('/service'); setshowDropDown(!showDropdown) }}>Content Strategy</h3>
                                                <p class=" font-bold">Trend overview</p>
                                                <p class=" font-bold">Social media strategy</p>
                                                <p class=" font-bold">Content Creation</p>
                                                <p class=" font-bold">Inbound Marketing</p>
                                                <p class=" ml-3">HubSpot implementation</p>
                                                <p class=" font-bold">Graphic Design</p>
                                                <p class=" font-bold">Concept design</p>
                                            </div>
                                            <div class="flex flex-col gap-2">
                                                <h3 class="text-xl font-bold ">Digital Marketing</h3>
                                                <p class="  ml-3">Google Ads</p>
                                                <p class="  ml-3">LinkedIn Advertising</p>
                                                <p class="  ml-3">Meta advertising</p>
                                                <p class="  ml-3">Pinterest Marketing Services</p>
                                                <p class="  ml-3">TikTok Advertising</p>
                                                <p class="  ml-3">YouTube Ads</p>
                                                <p class="  ml-3">Snapchat advertising</p>
                                            </div>
                                            <div class="flex flex-col gap-2">
                                                <h3 class="text-xl font-bold ">Web Development</h3>
                                                <p class="  ml-3 ">Search Engine Optimization (SEO)</p>
                                                <p class="   ml-3">Shopify</p>
                                            </div>
                                            <div class="flex flex-col gap-2">
                                                <h3 class="text-xl font-bold">Web Analytics</h3>
                                                <p class="  ml-3">Current State Analysis</p>
                                                <p class=" ml-3 ">Keyword Research</p>
                                                <p class=" ml-3 ">Cookie Consent</p>
                                                <p class=" ml-3 ">Social media auditing</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }

                            <a href="#" className="  hover:text-gray-300" onClick={() => { navigate('/work') ; setIsOpen(false) }}> {t('menuOptions.work')}</a>

                            <a href="#" className="  hover:text-gray-300 " onClick={() => {navigate('/story') ; setIsOpen(false)}}>{t('menuOptions.ourStory')}</a>

                            <a href="#" className="  hover:text-gray-300  underline " onClick={() => {navigate('/quote'); setIsOpen(false)}}>{t('menuOptions.requestForProposal')}</a>
                            <a href="#" className="  hover:text-gray-300 " onClick={HandleShowPopUp} >{t('menuOptions.contact')}
                                <img src={ContactArrow} alt="ContactArrow" className='inline-block' />
                            </a>



                        </div>
                        <div className=" flex max-md:ml-4 w-32 items-center  justify-between  ">
                            <div>
                                <LangDetector />
                            </div>
                           
                            <Contact showpopup={showpopup} onClick={HandleShowPopUp} />
                        </div>
                    </div>
                </div>

            </div>
        </>

    )
}

export default Header