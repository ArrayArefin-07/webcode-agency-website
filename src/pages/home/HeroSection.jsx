import React from 'react'

const HeroSection = () => {
  return (
    <div className='bg-colorBg'>
       <div className='max-w-screen-2xl container mx-auto py-20 px-5 flex flex-col lg:flex-row justify-between items-center'>
            {/* Left side */}
            <div> 
              <h1> Build Your Dream Website </h1>
            </div>

            {/* Right side */}
            <div><p>Right Side</p></div>
       </div>
    </div>
  )
}

export default HeroSection
