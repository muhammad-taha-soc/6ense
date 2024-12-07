import React from 'react'

export default function LinkButton({ text, variant }) {
  return (
      <button
          className={`${variant == "light" ? "bg-white text-black":"bg-black text-white"} font-inter py-2 px-5 mb-2 md:mb-0 rounded-full transition-colors duration-300 text-base font-semibold whitespace-nowrap md:text-base`}
      >
          <a href="#" className='flex flex-row justify-between items-center font-inter text-base font-semibold' onClick='' >
              {text}
              <img
                  src={`/assets/img/link-arrow-icon-${variant == "light"?"dark":"light"}.svg`}
                  alt='link'
                  className='ml-2 '
                  // onLoad={handleImageLoad} // Trigger image load handler
                  loading="lazy"
              />
          </a>
      </button>
  )
}
