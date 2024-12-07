import React from 'react'
import LinkButton from './containers/LinkButton'
import Separator from './containers/Separator'
import Card from './containers/Card'
export default function Stats() {
  return (
      <section className="mt-32 text-white bg-black md:rounded-[64px]">
          <div className=" md:text-left md:py-28  lg:w-[94%] w-full max-w-auto mx-auto">
              <div className="md:px-6  text-center lg:text-left md:w-full p-6">
                  <Separator text="Stats" variant="light" />
                  <h1 className="lg:text-6xl text-4xl mt-5 font-space font-medium">
                      6ENSE IN NUMBERS
                  </h1>
                  <div className='flex flex-col lg:flex-row items-center justify-between w-full my-8'>
                      {[{ title: '9,63 mld', text: 'token 6OS' }, { title: `7`, text: 'Core Teams' }, { title: `10%`, text: 'Owner token Supply' }, { title: `5 min`, text: 'Market cap' }].map((data, index) => (
                          <div className={`font-inter mr-2 lg:mr-6 mb-2 lg:mb-0 w-full px-4 lg:px-8 py-4 lg:py-8  bg-[#1C1C1C]`}>
                              <div className={`text-2xl  lg:text-3xl xl:text-5xl font-medium font-space`}>{data.title}</div>
                              {/* <div className={``}>{data.text}</div> */}
                              <div className={`border-t-2 border-white w-full mt-6`} >
                              </div>
                                  <div className={`text-white text-sm xl:text-base font-inter font-medium  mt-6 before:content-['•'] before:mr-2`}>{data.text}</div>
                          </div>
                      ))}
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
