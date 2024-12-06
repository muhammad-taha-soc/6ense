import React from 'react'
import LinkButton from './containers/LinkButton'
import Separator from './containers/Separator'

export default function About() {
    return (
        <section className=" text-white bg-black md:rounded-[64px]">
            <div className="flex flex-col md:flex-row justify-between md:text-left items-center md:items-center lg:w-[94%] w-full max-w-auto mx-auto">
                <div className="flex flex-col justify-center md:px-6 md:items-start text-center md:text-left h-[500px] lg:h-[650px] md:w-[65%] p-6 mt-16 lg:mt-0 sm:p-0">
                   <Separator text="About" variant="light"/>
                    <h1 className="lg:text-6xl text-4xl mt-5 font-space font-medium">
                        6SENSE is everywhere!
                    </h1>
                    <p className="lg:text-base  my-6 font-inter font-normal">
                        6ENSE is the blockchain ecosystem developed for Plantogroup that integrate real economyes,including CATALYST  Network.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center font-medium md:text-base font-inter space-x-2 ">
                        {['Read Whitepaper', 'View Audit'].map((link) => (
                            <LinkButton text={link} variant='light' />
                        ))}
                    </div>


                </div>
                {/* <div className="aspect-w-1 aspect-h-1 flex items-center justify-center sm:mt-0 mt-10">
                    <div className="relative w-full h-full flex justify-center items-center">
                        <img
                            src='/assets/img/hero-section-group.png'
                            alt='hero'
                            //   className={`object-cover transition-opacity duration-500 ${imageLoaded ? "opacity-100" : "opacity-0"} w-2/3 lg:w-[95%] lg:h-[95%]  h-full`}
                            //   onLoad={handleImageLoad} // Trigger image load handler
                            loading="lazy"
                        />
                    </div>
                </div> */}
                <div className='w-[552px] h-[335px] bg-[#212121]'>
                </div>
            </div>
        </section>
    )
}
