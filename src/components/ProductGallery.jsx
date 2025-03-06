import MacbookAir from '/macbook-air.png'
import Playstation from '/playstation.png'
import Airpod from '/airpod.png'
import AVision from '/apple-vision.png'

const ProductGallery = () => {
  return (
    <section>
      <div className="max-w-[1440px] mx-auto flex">
        {/* Part-1 */}
        <div className="w-1/2 font-medium ">

          <div className="flex items-center">
            <div className="w-[360px]">
              <img src={Playstation} alt="" className='w-full' />
            </div>
            <div className='max-w-[338px] mr-12'>
              <h3 className='mb-4 text-[39px] leading-10'>Playstation 5</h3>
              <p className=' text-[#909090] text-sm leading-6'>Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your PlayStation experience.</p>
            </div>
          </div>

          <div className="flex">
            <div className="">
              <div className="flex items-center py-[64px] h-[272px] bg-[#EDEDED]">
                <div className="w-[104px]">
                  <img src={Airpod} alt="" className='w-full' />
                </div>
                <div className='max-w-[160px] mx-12'>
                  <h3 className='font-thin text-[29px] leading-10 mb-2'>Apple
                    AirPods <span className='font-medium'>Max</span> </h3>
                  <p className=' text-[#909090] text-sm leading-6'>Computational audio. Listen, it's powerful</p>
                </div>
              </div>
            </div>
            <div className="">
              <div className="flex items-center gap-x-3 py-[64px] h-[272px] bg-[#353535]">
                <div className="">
                  <img src={AVision} alt="" className='' />
                </div>
                <div className='max-w-[160px] mr-12'>
                  <h3 className='font-thin text-white text-[29px] leading-10 mb-2'>Apple
                    Vision <span className='font-medium'>Pro</span></h3>
                  <p className=' text-[#909090] text-sm leading-6'>An immersive way to experience entertainment</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Part-2 */}
        <div className="bg-[#EDEDED] w-1/2 flex items-center gap-x-3">
          <div className='max-w-[360px] ml-14'>
          <h2 className='font-thin text-[64px] leading-14 mb-4'>Macbook<span className='font-medium'>Air</span> </h2>
            <p className=' text-[#909090] text-sm leading-6 mb-4'>The new 15‑inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display.</p>
            <button className='rounded-md px-14 py-4 border cursor-pointer'>Shop Now</button>
          </div>
          <div className="w-[292px]">
            <img src={MacbookAir} alt="" className='w-full' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductGallery