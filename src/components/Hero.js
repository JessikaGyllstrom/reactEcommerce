import React from 'react'

function Hero() {
  return (
    <div className="h-screen w-full relative"
      style={{ backgroundImage: `url("../images/bg.jpg")` }}
    >
      <div className='flex justify-center items-center w-full h-[100vh] bg-gray-800/90 absolute top-0 right-0'>
        <div className='absolute w-[60%] h-[80%] lg:w-[70%]'>
          <div className='flex flex-col justify-center h-full w-[50%] flex-wrap animate-wiggle'>
            <h1 className='text-light-50 text-6xl font-semibold tracking-wide'>Welcome to <span className='text-teal-50'>ShopTopia</span></h1>
            <h2 className='text-light-50 text-2xl font-semibold mt-2 tracking-wide'>- where convenience meets quality </h2>
            <p className='text-light-50 text-xl mt-2'>Explore our vast catalog, seamless browsing, secure transactions, and personalized recommendations. Elevate your online shopping today!</p>
            <div className='w-[70%] my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:bg-purple-600/40 hover:shadow-purple-500/50 text-white text-xl font-semibold rounded-lg  transition duration-300 ease-in-out'>
              <a href="#shopSection" className='flex w-full justify-center'>Shop Now</a>
            </div>
          </div>
          <div className='absolute top-0 right-0 w-[50%] h-[50%]'>
            <div className="absolute h-[30rem] w-[30rem] bg-cover top-32 right-5 animate-flow rounded-full"
              style={{ backgroundImage: `url("../images/shoe.png")` }}
            >
            </div>
          </div>
        </div>    
      </div>
    </div>
  )
}

export default Hero
