import React from 'react'
import Button from '../Button'

function FormComp() {
  return (
    <form action="">
      <div className="grid grid-cols-2 gap-4 max-md:gap-3 ">
      
      <div>
        <label for="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
        <input type="text" id="firstName" 
        className="mt-1 p-2 w-full border border-black rounded-md focus:ring-blue-500 focus:border-blue-500 Input"/>
      </div>
      <div>
        <label for="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
        <input type="text" id="lastName"
         className="mt-1 p-2 w-full border border-black rounded-md focus:ring-blue-500 focus:border-blue-500 Input"/>
      </div>
    </div>
    <div className="grid  gap-4 mt-4">
      
      <div>
        <label for="companyName" className="block text-sm font-medium text-gray-700">Company Name</label>
        <input 
        type="text" id="companyName" 
        className="mt-1 border-black p-2 w-full border rounded-md focus:ring-blue-500 focus:border-blue-500 Input"/>
      </div>
    </div>
    <div className="grid grid-cols-2 gap-4 mt-4">
      <div>
        <label for="email" className="block text-sm font-medium text-gray-700">Email</label>
        <input type="email"
         id="email" className="mt-1 p-2 w-full border  border-black rounded-md focus:ring-blue-500 focus:border-blue-500 Input"/>
      </div>
      <div>
        <label for="phoneNumber" className="block text-sm font-medium text-gray-700">Phone Number</label>
        <input type="tel" id="phoneNumber" 
        className="mt-1 p-2 w-full border rounded-md focus:ring-blue-500 focus:border-blue-500 border-black Input"/>
      </div>
    </div>
    <div className="mt-4">
      <label for="message" className="block text-sm font-medium text-gray-700">Briefly explain what you are looking for:</label>
      <textarea id="message" className="mt-1 p-2 w-full border rounded-md text-black border-black 
       focus:ring-blue-500 focus:border-blue-500 TextArea" rows="4"></textarea>
    </div>
    <div className="mt-8">
     <Button txt="Submit"/>
    </div>
      </form>
  )
}

export default FormComp