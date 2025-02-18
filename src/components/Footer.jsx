import { FaFacebookF, FaInstagram, FaTiktok, FaTwitter } from 'react-icons/fa'
import FooterLogo from '/footer-logo.png'

const Footer = () => {
  return (
    <>
      <section id="footer" className="bg-black py-12">
        <div className="max-w-[1120px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-32">
          <div className="flex flex-col gap-8 md:flex-row md:justify-between">
            {/* Footer item one  */}
            <div className="">
              <img src={FooterLogo} alt="Logo" className='w-16 mb-4 mx-auto md:mx-0' />
              <p className='text-[#CFCFCF] text-[13px] leading-6 max-w-[312px] mx-auto text-center md:text-left'>We are a residential interior design firm located in Portland. Our boutique-studio offers more than</p>
            </div>
            {/* Footer item two */}
            <div className="text-center md:text-left">
              <h3 className='mb-2 font-semibold text-white'>Services</h3>
              <ul className='text-[#CFCFCF] text-sm leading-8 flex flex-col gap-y-2'>
                <li>Bonus program</li>
                <li>Gift cards</li>
                <li>Credit and payment</li>
                <li>Service contracts</li>
                <li>Non-cash account</li>
                <li>Payment</li>
              </ul>
            </div>
            {/* Footer item three */}
            <div className="text-center md:text-left">
              <h3 className='mb-2 font-semibold text-white'>Assistance to the buyer</h3>
              <ul className='text-[#CFCFCF] text-sm leading-8 flex flex-col gap-y-2'>
                <li>Find an order</li>
                <li>Terms of delivery</li>
                <li>Exchange and return of goods</li>
                <li>Guarantee</li>
                <li>Frequently asked questions</li>
                <li>Terms of use of the site</li>
              </ul>
            </div>
          </div>
          {/* Social Icons  */}
          <div className="text-white flex justify-center gap-x-6 mt-8 md:mt-6 md:text-xl text-3xl md:justify-start">
            <FaTwitter/>
            <FaFacebookF/>
            <FaTiktok/>
            <FaInstagram/>
          </div>
        </div>
      </section>
    </>
  )
}

export default Footer