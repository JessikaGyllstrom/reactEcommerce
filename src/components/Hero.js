import React from 'react'

function Hero() {

  return (
    <div className="h-screen w-full relative" style={{ backgroundImage: `url("../images/bg.jpg")`}}>
      <div className='flex justify-center items-center w-full h-[100vh] bg-gray-800/[.88] absolute top-0 right-0'>
        <div className='absolute w-[80%] h-[80%] xl:w-[65%]'>
          <div className='flex flex-col h-[95%] justify-center w-[97%] md:w-[52%] lg:mt-0 flex-wrap animate-wiggle'>
            <h2 className='text-light-50 text-lg tracking-wide mb-4 lg:text-3xl font-light'>welcome to </h2>
            <h1 className='text-teal-50 text-5xl font-semibold tracking-wide lg:text-7xl'>ShopTopia</h1>
            <h2 className='text-light-50 text-md mt-6 tracking-wide font-light md:text-3xl'>- where convenience meets quality </h2>
            <p className='text-light-50 text-md mt-6 tracking-wide font-light md:text-xl md:w-[86%]'>Explore our vast catalog, seamless browsing, secure transactions, and personalized recommendations. Elevate your online shopping today!</p>
            <div className='w-[40%] text-md my-5 mt-12 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:bg-purple-600/40 hover:shadow-purple-500/50 text-white md:text-lg font-semibold rounded-lg  transition duration-300 ease-in-out lg:text-2xl cursor-pointer'
              onClick={() => window.location.replace("/#shop")}
            >
              <span className='flex w-full justify-center'>Shop Now</span>
            </div>
          </div>
          <div className='absolute top-0 right-0 w-[50%] h-[50%] lg:h-[50%] lg:w-[50%]'>
            <div className="absolute h-[10rem] w-[10rem] bg-cover top-[26rem] right-11 animate-flow rounded-full md:h-[20rem] md:w-[20rem] md:top-[8rem] lg:h-[25rem] lg:w-[25rem]"
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
