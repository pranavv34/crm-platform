import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

import companyLogo from '../assets/images/logo.svg';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const toggleMenuHandler = () => {
    setToggleMenu(!toggleMenu);
  };

  const closeMenuHandler = () => {
    setToggleMenu(false);
  };

  const menuClass = toggleMenu ? 'brightRed' : '';

  return (
    <nav className='relative container mx-auto p-6'>
      {/* Flex Container */}
      <div className='flex items-center justify-between'>
        {/* Logo */}
        <div className='pt-1'>
          <img src={companyLogo} className='h-20' alt='' />
        </div>
        {/* Menu Items */}
        <div className={`hidden space-x-6 md:flex ${menuClass}`}>
          <ScrollLink to='testimonials' smooth={true} duration={500} className='hover:text-brightRed' onClick={closeMenuHandler}>
            Features
          </ScrollLink>
          <ScrollLink to='features' smooth={true} duration={500} className='hover:text-brightRed' onClick={closeMenuHandler}>
            Why Us?
          </ScrollLink>
          <ScrollLink to='services' smooth={true} duration={500} className='hover:text-brightRed' onClick={closeMenuHandler}>
            Services
          </ScrollLink>
          <ScrollLink to='contact-us' smooth={true} duration={500} className='hover:text-brightRed' onClick={closeMenuHandler}>
            Contact Us
          </ScrollLink>
        </div>
        {/* Button */}
        <Link
          to='#'
          className='hidden p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight md:block'
        >
          Get Started
        </Link>

        {/* Hamburger Icon */}
        <button
          className={
            toggleMenu
              ? 'open block hamburger md:hidden focus:outline-none'
              : 'block hamburger md:hidden focus:outline-none'
          }
          onClick={toggleMenuHandler}
        >
          <span className='hamburger-top'></span>
          <span className='hamburger-middle'></span>
          <span className='hamburger-bottom'></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className='md:hidden'>
        <div
          className={
            toggleMenu
              ? 'absolute flex flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md'
              : 'absolute flex-col items-center hidden self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md'
          }
        >
          <ScrollLink to='testimonials' smooth={true} duration={500} onClick={closeMenuHandler}>Features</ScrollLink>
          <ScrollLink to='features' smooth={true} duration={500} onClick={closeMenuHandler}>Why Us?</ScrollLink>
          <ScrollLink to='services' smooth={true} duration={500} onClick={closeMenuHandler}>Services</ScrollLink>
          <ScrollLink to='contact-us' smooth={true} duration={500} onClick={closeMenuHandler}>Contact Us</ScrollLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
