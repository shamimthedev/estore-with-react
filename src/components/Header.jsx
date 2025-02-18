import Wishlist from '/wishlist.svg'
import Logo from '/logo.png'
import Search from '/search.svg'
import Cart from '/cart.svg'
import User from '/user.svg'
import { Link, NavLink } from 'react-router'
import Burger from '/Burger.svg'

const Header = () => {
  return (
    <>
      <section id="header" className='max-w-[1120px] mx-auto h-[88px] flex justify-between items-center gap-12 2xl:gap-14 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-32 2xl:px-64'>
        {/* Logo */}
        <div className="logo w-[65px]">
          <Link to='/'> <img src={Logo} alt="Logo" className='w-full' /></Link>
        </div>
        {/* Search  */}
        <div className="search hidden lg:flex items-center px-4 gap-x-2 bg-[#F5F5F5] rounded-lg h-14 w-[30vw]">
          <img src={Search} alt="" className='w-4 h-4' />
          <input className='w-full h-full outline-none text-[#656565] text-sm' type="text" placeholder="Search here" />
        </div>
        {/* Menu  */}
        <div className="menu hidden lg:block">
          <ul className='flex gap-x-10'>
            <li> <NavLink style={({ isActive }) => ({ fontWeight: isActive ? "bold" : "normal" })} to='/'>Home</NavLink> </li>
            <li> <NavLink style={({ isActive }) => ({ fontWeight: isActive ? "bold" : "normal" })} to='about'>About</NavLink> </li>
            <li> <NavLink style={({ isActive }) => ({ fontWeight: isActive ? "bold" : "normal" })} to='contact'>Contact </NavLink> </li>
            <li> <NavLink style={({ isActive }) => ({ fontWeight: isActive ? "bold" : "normal" })} to='blog'>Blog</NavLink> </li>
          </ul>
        </div>
        {/* Icons  */}
        <div className="icons hidden lg:flex gap-x-6">
          <img className='w-5 h-5 cursor-pointer' src={Wishlist} alt="heart icon" />
          <img className='w-5 h-5 cursor-pointer' src={Cart} alt="Cart icon" />
          <img className='w-5 h-5 cursor-pointer' src={User} alt="User icon" />
        </div>
        {/* Mobile Menu  */}
        <div className="w-10 lg:hidden">
          <img src={Burger} alt="" className='w-full cursor-pointer'/>
        </div>
      </section>
    </>
  )
}

export default Header