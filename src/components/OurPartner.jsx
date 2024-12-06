import React from 'react'
import LinkButton from './containers/LinkButton'
import Separator from './containers/Separator'
import Card from './containers/Card'
export default function OurPartner() {
  return (
      <section className="mt-32 md:my-28 md:text-left lg:w-[94%] w-full max-w-auto mx-auto">
          <div className="md:px-6  text-center md:text-left p-6 mt-16 lg:mt-0 sm:p-0">
              <Separator text="our product" variant="dark" />
              <h1 className="lg:text-6xl text-4xl mt-5 font-space font-medium">
                  Our Industryes Partners: Know Catalyst Network
              </h1>
              <img
                  src="/assets/img/partner-section.png"
                  alt="DEX"
                  className={` mx-auto mt-12`}
                  loading="lazy"
              />
              <div className="font-medium text-center mt-4 md:text-base font-inter space-x-2 ">
                  {/* {['Read Whitepaper', 'View Audit'].map((link) => ( */}
                  <LinkButton text='Discover Catalyst' variant='dark' />
                  {/* ))} */}
              </div>

          </div>
      </section>
  )
}
