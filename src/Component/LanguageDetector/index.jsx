import { changeLanguage } from 'i18next'
import React from 'react'
import { useTranslation } from 'react-i18next'

function LangDetector() {
    const { i18n } = useTranslation()
    const languges = [
        { code: "en", Lang: "English" },
        { code: "fi", Lang: "Finnish" },
        { code: "sp", Lang: "Spanish" }
       
    ]

    function changeLanguage(lang) {
        console.log(lang);

        i18n.changeLanguage(lang)
    }
    return (
        <div className=" ">

<div class="bg-white rounded-xl flex items-center gap-4 max-md:gap-2 border-[1px] border-gray-500">
  <div class="bg-white rounded-xl m-[0.2rem] p-1 gap-4 border-[1px] border-gray-400 shadow-lg">
    <select 
      value={i18n.language} 
      onChange={(e) => changeLanguage(e.target.value)} 
      className='w-full bg-white border-none outline-none'
    >
      {languges.map((lang) => (
        <option key={lang.code} value={lang.code}>
          {lang.Lang}
        </option>
      ))}
    </select>
  </div>
</div>

        </div>
        

    )
}

export default LangDetector