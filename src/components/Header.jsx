import Wishlist from '/wishlist.svg'
import Logo from '/logo.png'
import Search from '/search.svg'
import Cart from '/cart.svg'
import User from '/user.svg'

const Header = () => {
  return (
    <>
      <section id="header" className='max-w-[1120px] mx-auto h-[88px] flex justify-between items-center'>
        {/* Logo */}
        <div className="logo w-[65px]">
          <img src={Logo} alt="Logo" className='w-full'/>
        </div>
        {/* Search  */}
        <div className="search flex items-center px-4 gap-x-2 bg-[#F5F5F5] rounded-lg h-14 w-[30vw]">
          <img src={Search} alt="" className='w-4 h-4'/>
          <input className='w-full h-full outline-none text-[#656565] text-sm' type="text" placeholder="Search here" />
        </div>
        {/* Menu  */}
        <div className="menu">
          <ul className='flex gap-x-12'>
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
            <li>Blog</li>
          </ul>
          
        </div>
        {/* Icons  */}
        <div className="icons flex gap-x-6">
          <img className='w-5 h-5' src={Wishlist} alt="heart icon" />
          <img className='w-5 h-5' src={Cart} alt="Cart icon" />
          <img className='w-5 h-5' src={User} alt="User icon" />
        </div>
      </section>
    </>
  )
}

export default Header