import React from 'react'

export default function Separator({ text, variant }) {
    return (
        <div className={`border-b-2 ${variant == "light" ? 'border-white':'border-black'} w-full`} >
            <span className={`${variant == "light" ? 'text-white' : 'text-black'} font-medium font-inter text-base mb-2 before:content-['•'] before:mr-2`}>{text.toUpperCase()}</span>
        </div>
    )
}