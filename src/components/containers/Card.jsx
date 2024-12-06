import React from 'react'

export default function Card({ title, text, variant }) {
    return (
        <div className={`${variant == 'light' ? 'bg-[#F1F1F1]' : 'bg-[#1C1C1C]'} font-inter mr-6 rounded-2xl w-full px-6 py-6`}>
            <div className={` ${variant == 'light' ? 'text-[#4000FF]' : 'text-[#7142FF]'} text-base font-semibold`}>{title}</div>
            <div className={`text-${variant == 'light' ? 'black' : 'white'} text-3xl font-space font-medium mt-1`}>{text}</div>
        </div>
    )
}
