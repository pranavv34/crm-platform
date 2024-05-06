import { Link as ScrollLink } from 'react-scroll';
import companyLogoWhite from '../assets/images/logo-white.png';

const Footer = () => {
  return (
    <div className='bg-veryDarkBlue'>
      {/* Flex Container */}
      <div className='container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0'>
        {/* Logo and social links container */}
        <div className='flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start'>
          <div className='mx-auto my-6 text-center text-white md:hidden'>
            Copyright © 2024 All Rights Reserved © SS Tax Mentors
          </div>
          {/* Logo */}
          <div>
            <img src={companyLogoWhite} className='h-20 w-70' alt='' />
          </div>
          <div className='hidden text-white md:block text-sm'>
            Copyright © 2024 All Rights Reserved © SS Tax Mentors
          </div>
          
        </div>
        {/* List Container */}
        <div className='flex justify-around space-x-32'>
          <div className='flex flex-col space-y-3 text-white'>
            <ScrollLink to='testimonials' smooth={true} duration={500} className='hover:text-brightRed'>
              Features
            </ScrollLink>
            <ScrollLink to='features' smooth={true} duration={500} className='hover:text-brightRed'>
              Why Us?
            </ScrollLink>
            <ScrollLink to='services' smooth={true} duration={500} className='hover:text-brightRed'>
              Services
            </ScrollLink>
            <ScrollLink to='contact-us' smooth={true} duration={500} className='hover:text-brightRed'>
              Contact Us
            </ScrollLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
