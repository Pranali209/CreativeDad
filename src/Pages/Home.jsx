import React from 'react'
import Header from '../Component/Header'
import Hero from '../Component/Hero'
import Footer from '../Component/Footer'
import Service1 from '../assets/services1.svg'
import Service2 from '../assets/services2.svg'
import Service3 from '../assets/services3.svg'
import Service4 from '../assets/services4.svg'
import ServiceBox from '../Component/ServicesBox'
import Brands from '../Component/Brands'
import WorkBox from '../Component/WorkBox'
import Button from '../Component/Button'
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next'
function Home() {
    const navigate = useNavigate();
    const {t} =  useTranslation()
    const ServiceData = [
        {
            id: 1,
            icon: Service1,
            title: t('Design.title'),
            description: t('Design.description')
        },
        {
            id: 2,
            icon: Service2,
            title: t('Development.title'),
            description: t('Development.description')
        },
        {
            id: 3,
            icon: Service3,
            title: t('Support.title'),
            description: t('Design.description')
        },
        {
            id: 4,
            icon: Service4,
            title: t('Strategy.title'),
            description:t('Support.description')
        }
    ]

    const handleClick = () => {
        navigate('/quote');
      };
    return (
        <div>
        
        <Hero className="bg-black text-white " widthtitle="w-[70%] max-md:w-[100%] " 
                title={t('mainHeading')}
                />
                  
            <div className=" px-10 py-10 max-md:py-5  max-md:px-2 max-md:w-[100%] ">
                <h2 className=" text-[20px] font-medium mb-8 max-md:ml-3"> {t('servicesHeading')}</h2>
                <p className="text-[29px] max-md:text-[24px] mb-16 max-md:mb-4 ml-8 max-md:ml-4">
               {t('servicesDescription1')}
               <br/>
               {t('servicesDescription2')}
               <br/>
               {t('servicesDescription3')}
                </p>
                <div className="flex  max-md:flex-col justify-around w-[100%]  flex-wrap ml-8 max-md:ml-4 max-md:px-2">
                {ServiceData.map((service) => (
                    <ServiceBox {...service} />
                    ))}
                </div>
            </div>
            <Brands/>
            <div className='ml-8 max-md:ml-3 px-10 py-10  max-md:py-7 max-md:px-5'>
            <h2 className=" text-[20px] font-medium mb-8">{t('MainTitle')}</h2>
                 <div className=' flex flex-wrap justify-around max-md:justify-start '>
                     <WorkBox/> 
                    
                 </div>
                 <div className='ml-[4.5rem] mt-5 max-md:ml-3 max-md:mt-3 max-md:mb-5'>
                 <Button onClick = {handleClick} txt = {t('quoteButton')}/>
                 </div>
             
            </div>
          
        </div>
    )
}

export default Home