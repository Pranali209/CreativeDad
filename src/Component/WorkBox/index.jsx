import React from 'react'
import WorkImage1 from '../../assets/workImage1.svg'
import WorkImage2 from '../../assets/workImage2.svg'
import WorkImage3 from '../../assets/workImage3.svg'
import WorkImage4 from '../../assets/workImage4.svg'
import { useTranslation } from 'react-i18next'
function WorkBox() {
  const { t } = useTranslation()
  const FreshWorkData = [
    {
      id: 1,
      image: WorkImage1,
      title: t('Energy Company.title'),
      description: t('Energy Company.description'),
    },
    {
      id: 2,
      image: WorkImage2,
      title: t('Retta.title'),
      description: t('Retta.description'),
    },
    {
      id: 3,
      image: WorkImage3,
      title: t('Pride Helsinki.title'),
      description: t('Pride Helsinki.description')
    },
    {
      id: 4,
      image: WorkImage4,
      title: t('St1 Business.title'),
      description: t('St1 Business.description'),
    }
  ]

  return (
    <>

      {FreshWorkData.map((work) => (
         <div className='flex m-5 max-md:m-0 max-md:mb-5 max-md:w-full max-md:items-center
           max-md:rounded-lg max-md:shadow-md max-md:p-4 max-md:bg-gray-100 '>
         <div className='w-36 h-32 max-md:mr-2 max-md:w-[6.5rem] max-md:h-[6.5rem] rounded-full '>
           <img src={work.image} alt="" className='max-md:w-full max-md:h-full max-md:rounded-full max-md:object-cover '  />
         </div>
         <div className='w-[400px] max-md:w-[55%] ml-6 max-md:ml-0 max-md:bg-gray-100 '>
           <p className=' text-blue-400  font-medium '>{work.title}</p>
           <h1 className=' text-[20px] max-md:text-[13px] '>{work.description}</h1>
         </div>
       </div>

      ))}


    </>
  )
}

export default WorkBox