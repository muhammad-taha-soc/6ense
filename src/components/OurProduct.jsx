import React from 'react'
import LinkButton from './containers/LinkButton'
import Separator from './containers/Separator'
import Card from './containers/Card'

export default function OurProduct() {
    return (
        <section className="flex flex-col md:flex-row justify-between mt-32 md:my-28 md:text-left items-center md:items-center lg:w-[94%] w-full max-w-auto mx-auto">
            <div className="flex flex-col justify-center md:px-6 md:items-start text-center md:text-left w-full p-6 mt-16 lg:mt-0 sm:p-0">
                <Separator text="our product" variant="dark" />
                <h1 className="lg:text-6xl text-4xl mt-5 font-space font-medium">
                    First contact with 6ENSE. We are trasformin everithing into one secure digital system made from people.
                </h1>
                <div className='flex flex-col md:flex-row items-center justify-between w-full my-8'>
                    {[{ title: 'Totaly Supply', text: '9,63 Mld' }, { title: 'Market cap', text: '5 Mln' }].map((data, index) => (
                        <Card title={data.title} text={data.text} variant="light" />
                    ))}
                    <div className='border-[#F1F1F1] border font-inter text-center mr-auto md:mr-6 mb-2 rounded-2xl w-full px-6 py-6`'>
                        <img src="/assets/img/product-section.png" alt="product-section" className="mx-auto px-6 py-6" />
                    </div>
                </div>
                <p className="lg:text-base  my-6 font-inter font-normal">
                    6ense | 6OS Tokens are ERC-20 utility token fuelling thewhole Plantogroup 6ENSE Ecosystem.<br />Allows users to receive a discount on our platform of real economics of products and as well as allowing them to have priority access to DEX&Dapp implementation with LOWEST commission.                  </p>
                <div className="flex flex-col md:flex-row items-center font-medium md:text-base font-inter space-x-2 ">
                    {/* {['Read Whitepaper', 'View Audit'].map((link) => ( */}
                    <LinkButton text='Buy Now' variant='dark' />
                    {/* ))} */}
                </div>

            </div>
        </section>
    )
}
