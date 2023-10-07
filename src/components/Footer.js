import React from 'react'
import { FaTwitter } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { FaShopify } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineHome } from "react-icons/ai"; 

export default function Footer() {
  return (
    <footer className=" bg-gray-800 text-center mt-16 border-t border-gray-700 text-slate-300">
      <div className="flex items-center justify-center border-b bg-petrol-800/20 border-gray-700 p-6 lg:justify-between">
        <div className="flex w-full justify-center">
          <div className='w-[90%] md:w-[35%]'>
            <div className='flex justify-center'>
              {/* social icons */}
              <AiFillInstagram className='text-2xl mx-4 cursor-pointer hover:text-purple-600 transition duration-300 ease-in-out'/>
              <BiLogoLinkedinSquare className='text-2xl mx-4 cursor-pointer hover:text-purple-600 transition duration-300 ease-in-out'/>
              <BsFacebook className='text-2xl mx-4 cursor-pointer hover:text-purple-600 transition duration-300 ease-in-out'/>
              <FaTwitter className='text-2xl mx-4 cursor-pointer hover:text-purple-600 transition duration-300 ease-in-out'/>
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-center'>
        <div className="w-[90%] py-10 text-center md:text-left">
          <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="">
              <h6 className="mb-4 flex items-center justify-center text-teal-50 font-semibold text-xl md:justify-start">      
                <FaShopify className='mr-1 text-slate-300'/>
                ShopTopia
              </h6>
              <p>
                Discover the future of online shopping! We offer a vast selection, seamless user experience, secure transactions, and exceptional customer service. Join us today and redefine your shopping journey.
              </p>
            </div>
            <div>
              <h6
                className="mb-4 flex justify-center text-teal-50 font-semibold uppercase md:justify-start">
                Company
              </h6>
              <p className="mb-4">
                About
              </p>
              <p className="mb-4">
              Reviews 
              </p>
              <p className="mb-4">
              Meet Our Team
              </p>
              <p>
              History 
              </p>
            </div>
            <div>
              <h6
                className="mb-4 text-teal-50 flex justify-center font-semibold uppercase md:justify-start">
                Useful links
              </h6>
              <p className="mb-4">
                Pricing 
              </p>
              <p className="mb-4">
                FAQs
              </p>
              <p className="mb-4">
                Support
              </p>
              <p>
                Live Chat
              </p>
            </div>
            <div>
              <h6
                className="text-teal-50 mb-4 flex justify-center font-semibold uppercase md:justify-start">
                Contact
              </h6>
              <p className="mb-4 flex items-center justify-center md:justify-start">
                <AiOutlineHome className='text-teal-50 mr-1'/>
                  New York, NY 87611, US
              </p>
              <p className="mb-4 flex items-center justify-center md:justify-start">
                <HiOutlineMail className='text-teal-50 mr-1'/>
                shoptopia@support.com
              </p>
              <p className="mb-4 flex items-center justify-center md:justify-start">
                <BsTelephone className='text-teal-50 mr-1'/>
                + 01 234 567 88
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center p-3 text-neutral-600 bg-gray-900/50">
        <span>© 2023 Copyright:</span>
        <p
          className='ml-1'
          > ShopTopia
        </p>
      </div>
    </footer>
  )
}
