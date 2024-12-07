import React from 'react'
import Separator from './containers/Separator'

export default function Contact() {
    return (
        <section className="mt-32  text-white bg-black md:rounded-[64px]">
            <div className=" md:text-left md:py-28  lg:w-[94%] w-full max-w-auto mx-auto">
                <div className="md:px-6  text-center md:text-left md:w-full p-6  sm:p-0">
                    <Separator text="Contact" variant="light" />
                    <h1 className="lg:text-6xl text-4xl mt-5 font-space font-medium">
                        Be the First to Receive the Latest News From 6ENSE.
                    </h1>
                    <div className='mx-auto w-full md:w-[50%] my-16 px-4 sm:px-8 md:px-16'>
  <div className={`font-inter w-full py-16 px-4 sm:px-8 md:px-16 bg-[#1C1C1C]`}>
    <div className='flex flex-col sm:flex-row mb-9 gap-4 sm:gap-6'>
      <input 
        type="text" 
        name="" 
        id="" 
        placeholder='Name' 
        className='bg-[#1C1C1C] w-full border-0 border-b-2 border-b-white placeholder:text-white placeholder:text-base font-inter font-medium focus:outline-none'
      />
      <input 
        type="email" 
        name="" 
        id="" 
        placeholder='Email' 
        className='bg-[#1C1C1C] w-full border-0 border-b-2 border-b-white placeholder:text-white placeholder:text-base font-inter font-medium focus:outline-none'
      />
    </div>
    
    <input 
      type="text" 
      name="" 
      id="" 
      placeholder='Description' 
      className='bg-[#1C1C1C] h-[158px] w-full border-0 border-b-2 border-b-white placeholder:text-white placeholder:text-base font-inter font-medium focus:outline-none pt-3 mb-6'
    />
    
    <button
      className='bg-white text-black w-full py-2 px-5 rounded-full transition-colors duration-300 text-base font-semibold whitespace-nowrap hover:bg-gray-200 md:text-base'
    >
      Subscribe
    </button>
  </div>
</div>

                    {/* <p className="lg:text-base  my-6 font-inter font-normal">
                      6ENSE dex is a product developed by Plantomatic® for Plantogroup.<br />It is a digital platform created to exchange between different chains or of the same chain, and to buy cryptocurrencies in a safe and intuitive way. Payments are accepted by debit or credit card, and by 6ENSE DEX wallet.                      </p>
                  <div className="flex flex-col sm:flex-row items-center font-medium md:text-base font-inter space-x-2 ">
                      <LinkButton text='Read More' variant='light' />
                  </div> */}
                    {/* <img
                      src="/assets/img/dex-section.png"
                      alt="DEX"
                      className={`w-full sm:w-3/4 md:w-2/3 lg:w-full h-auto mx-auto mt-12`}
                      loading="lazy"
                  /> */}
                </div>
            </div>
        </section>
    )
}
