import React from 'react'
import Header from '../Component/Header'
import Footer from '../Component/Footer'
import Hero from '../Component/Hero'
import FormComp from '../Component/Form'

function Quote() {
  return (
    <>
  <Hero  className = "bg-black text-white" widthtitle  = "w-[30%] " widthpara = " w-[30%]"
  title = "Request for a quote or proposal"
  des =  "Are you planning a marketing project? By sending us a request for proposal, you can get a concrete idea of how we could work together."/>
<div className=''>
<hr className='border-[2px] border-gray-200 w-[80%] ml-[4.5rem] max-md:ml-[2rem]' />
    <div className=" max-w-[1000px] p-14  ">
    <h2 className="text-[17px] font-bold mb-4">I would like a quote for the following services</h2>
    <div className='mb-4'>
        <label  
        className="block text-sm font-medium text-gray-700">Select Services</label>
        <select id="services" className="mt-1 p-2 w-full border rounded-md text-black border-black
         focus:ring-blue-500 focus:border-blue-500 Input">
          <option value="marketing-strategy">Marketing strategy</option>
          <option value="content-strategy">Content strategy</option>
          <option value="social-media-audit">Social media audit</option>
          <option value="website">Website (WordPress / HubSpot CMS)</option>
          <option value="content-production">Content production</option>
          <option value="inbound-marketing">Inbound marketing / HubSpot onboarding</option>
          <option value="graphic-design">Graphic design</option>
          <option value="online-advertising">Online advertising (Google Ads / Social media)</option>
          <option value="web-analytics">Web analytics</option>
          <option value="website-audit">Website audit</option>
          <option value="keyword-research">Keyword research</option>
          <option value="other">Other, please specify below</option>
        </select>
      </div>
     
   <FormComp/>
    </div>
</div>
  </>
  )
}

export default Quote