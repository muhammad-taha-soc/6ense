import React from 'react'
import Separator from './containers/Separator'
import LinkButton from './containers/LinkButton'
import Card from './containers/Card'

export default function Dex() {
  return (
      <section className="mt-32 text-white bg-black md:rounded-[64px]">
          <div className=" md:text-left md:py-28  lg:w-[94%] w-full max-w-auto mx-auto">
              <div className="md:px-6  text-center md:text-left md:w-full p-6  sm:p-0">
                  <Separator text="6ENSE DEX" variant="light" />
                  <div className='flex flex-row items-center justify-between w-full my-8'>
                      {[{ title: 'Dedicated 6OS Token Supply.', text: '25%' }, { title: `Transaction fees in 6OS that feed the token's liquidity pool.`, text: '1.5%' }].map((data, index) => (
                          <Card title={data.title} text={data.text} variant="dark" />
                      ))}
                      {/* <div className='bg-[#F1F1F1] font-inter mr-6 rounded-2xl w-full px-6 py-6'>
                        <img src="/assets/logo/logo.svg" alt="Logo" className="h-8 w-auto" />
                    </div> */}
                  </div>
                  <p className="lg:text-base  my-6 font-inter font-normal">
                      6ENSE dex is a product developed by Plantomatic® for Plantogroup.<br/>It is a digital platform created to exchange between different chains or of the same chain, and to buy cryptocurrencies in a safe and intuitive way. Payments are accepted by debit or credit card, and by 6ENSE DEX wallet.                      </p>
                  <div className="flex flex-col sm:flex-row items-center font-medium md:text-base font-inter space-x-2 ">
                      {/* {['Read Whitepaper', 'View Audit'].map((link) => ( */}
                      <LinkButton text='Read More' variant='light' />
                      {/* ))} */}
                  </div>
                  <img
                      src="/assets/img/dex-section.png"
                      alt="DEX"
                      className={`w-full sm:w-3/4 md:w-2/3 lg:w-full h-auto mx-auto mt-12`}
                      loading="lazy"
                  />
              </div>
          </div>
      </section>
  )
}
