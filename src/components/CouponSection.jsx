import React from 'react'
import LinkButton from './containers/LinkButton'

export default function CouponSection() {
    return (
        <section className="flex flex-col md:flex-row justify-center  items-center md:items-end lg:w-[94%] my-6 w-full max-w-auto mx-auto">
            <div className="flex flex-col justify-center text-center items-center  h-[500px] lg:h-[650px] md:w-[85%] p-6 lg:mt-0 sm:p-0">
                <h2 className="text-center lg:text-6xl text-4xl font-space md:w-[848px] md:px-6 font-medium">
                    Do you have a coupon from the catalyst network?
                </h2>
                <p className="lg:text-base md:px-6 my-6 font-inter font-normal text-c">
                    Redeem your Token, send us your wallet number for credit or interact with the smart contract
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center font-medium md:text-base font-inter space-x-2 px-6">
                    {['Send Us', 'Redeem NFT'].map((link) => (
                        <LinkButton text={link} variant='dark' />
                    ))}
                </div>
            </div>
        </section>
    )
}