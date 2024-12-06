import React from 'react'
import Separator from './containers/Separator'
import LinkButton from './containers/LinkButton'
import Card from './containers/Card'

export default function Wallet() {
    return (
        <section className="mt-32">
            <div className=" md:text-left md:py-28  lg:w-[94%] w-full max-w-auto mx-auto">
                <div className="md:px-6  text-center md:text-left md:w-full p-6  sm:p-0">
                    <Separator text="6ENSE WALLET" variant="dark" />
                    <div className='flex flex-row items-center justify-between w-full my-8'>
                        {[{ title: 'Non Custodial Wallet + DEX', text: 'App.' }, { title: `6ENSE Card Wallet`, text: 'Physic' }].map((data, index) => (
                            <Card title={data.title} text={data.text} variant="light" />
                        ))}
                    </div>
                    <p className="lg:text-base  my-6 font-inter font-normal">
                        Choose to store token in total security and accuracy.<br/>
                        Note* The secret key to your wallet is an important thing. unlike banking passwords, these keys cannot be recovered and restore.
                        Store them properly.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center font-medium md:text-base font-inter space-x-2 ">
                        <LinkButton text='Read More' variant='dark' />
                    </div>
                    <img
                        src="/assets/img/wallet-section.png"
                        alt="DEX"
                        className={`w-full sm:w-3/4 md:w-2/3 lg:w-full h-auto mx-auto mt-12`}
                        loading="lazy"
                    />
                </div>
            </div>
        </section>
    )
}
