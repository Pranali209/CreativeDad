import React, { useState , useEffect} from 'react'
import Logo from '../../assets/Logo.svg'
import ContactArrow from '../../assets/arrow-contact.svg'
import { DarkmodeSwitch } from '../DarkSwitch'
import LangDetector from '../LanguageDetector'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

import Logo1 from '../../assets/CREATIV.svg'
import Contact from '../../Pages/Contact'
function Header({ className =""}) {
    const [isDarkMode, setIsDarkMode] = useState(false);
     const[ showDropdown , setshowDropDown]  = useState(false)
     const {t} =  useTranslation()
     const navigate = useNavigate();
     const [showpopup , setShowPopUp] = useState(false)
     
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
    return (
        <div className={`bg-white font-sans  h-[60px]  py-2  ${className}  max-md:h-auto  `}> 
          
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
                                className=' w-5 h-5 inline-block mt-[-5px]'>
                                <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />
                            </svg></button>

                        </div>
                        {
                            showDropdown && (
                         <div class="flex flex-col gap-4 absolute  mt-[1.9rem]  px-14 max-md:px-7 py-5 border-2 border-black 
                         left-[20rem]">
                            <div class="flex gap-8">
                                <div class="flex flex-col gap-2">
                                    <h3 class="text-xl font-bold  hover:cursor-pointer"
                                    onClick={()=> {navigate('/service') ; setshowDropDown(!showDropdown)}}>Content Strategy</h3>
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
                        
                        <a href="#" className="  hover:text-gray-300" onClick={()=> {navigate('/work')}}> {t('menuOptions.work')}</a>
                       
                        <a href="#" className="  hover:text-gray-300 " onClick={()=>  navigate('/story') }>{t('menuOptions.ourStory')}</a>

                        <a href="#" className="  hover:text-gray-300  underline " onClick={()=>  navigate('/quote')}>{t('menuOptions.requestForProposal')}</a>
                        <a href="#" className="  hover:text-gray-300 " onClick={HandleShowPopUp} >{t('menuOptions.contact')}
                            <img src={ContactArrow} alt="ContactArrow" className='inline-block' />
                        </a>



                    </div>
                    <div className=" flex max-md:ml-4 w-32 items-center  justify-between  ">
                        <div>
                            <LangDetector/>
                        </div>
                          <DarkmodeSwitch isDarkMode = {isDarkMode}  onClick = {handleClick}/>
                          <Contact showpopup={showpopup} onClick = {HandleShowPopUp} />
                    </div>
                </div>

        
        </div>
    )
}

export default Header