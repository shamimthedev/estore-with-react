import Iphone from '/hero-background.png'

const Hero = () => {
  return (
    <>
      <section className="bg-[#211C24]">
        <div className="max-w-[1120px] mx-auto">
          <div className="flex items-center">
            {/* Content */}
            <div className="flex-1 mt-[88px] text-white">
              <h4 className='text-2xl font-semibold leading-8 mb-6 text-[#909090]'>Pro.Beyond.</h4>
              <h1 className='font-thin text-8xl leading-18 mb-6'>IPhone 14 <span className='font-semibold'>Pro</span></h1>
              <p className='font-medium text-lg leading-6 text-[#909090] mb-6'>Created to change everything for the better. For everyone</p>
              <button className='rounded-md border px-14 py-4 cursor-pointer'>Shop Now</button>
            </div>
            {/* Image */}
            <div className="w-[406px]">
              <img src={Iphone} alt="" className='w-full'/>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero