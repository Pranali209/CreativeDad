import React from 'react'
import WorkImage1 from '../../assets/workImage1.svg'
import WorkImage2 from '../../assets/workImage2.svg'
import WorkImage3 from '../../assets/workImage3.svg'
import WorkImage4 from '../../assets/workImage4.svg'
import { useTranslation } from 'react-i18next'
function WorkBox() {
  const {t} =  useTranslation()
    const FreshWorkData = [
        {
            id: 1,
            image: WorkImage1,
            title: t('Energy Company.title'),
            description:  t('Energy Company.description'),
        },
        {
            id: 2,
            image: WorkImage2,
            title:   t('Retta.title'),
            description:  t('Retta.description'),
            },
            {
                id: 3,
                image: WorkImage3,
                title: t('Pride Helsinki.title'),
                description:  t('Pride Helsinki.description')
            },
            {
                id: 4,
                image: WorkImage4,
                title:  t('St1 Business.title'),
                description:  t('St1 Business.description'),
            }
    ]

  return (
    <>
    
        {FreshWorkData.map((work) => (
          <div className='flex m-5 max-md:m-3 max-md:flex-col'>
          <div className='w-36 h-32 '>
            <img src={work.image} alt=""   />
         </div>
         <div className='w-[400px] max-md:min-w-fit ml-6 max-md:ml-0'>
            <p className=' text-blue-400  font-medium '>{work.title}</p>
            <h1 className=' text-[20px] max-md:text-[15px]'>{work.description}</h1>
         </div>
          </div>
         
        ))}
   
     
</>
  )
}

export default WorkBox