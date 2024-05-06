import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import illustrationIntro from '../assets/images/illustration-intro.svg';

const Hero = () => {
  const [textIndex, setTextIndex] = useState(0);
  const texts = [
    "Unlocking Success Through Expert Accounting, Tax, and Advisory Solutions.",
    "Empowering Your Business with Proactive Financial Management.",
    "Guiding Your Growth with Tailored Accounting and Tax Strategies."
  ];
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let currentIndex = 0;
    let currentText = texts[textIndex];
    let interval = setInterval(() => {
      if (currentIndex === currentText.length) {
        clearInterval(interval);
        setTimeout(() => {
          setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, 2000); // Wait 2 seconds before switching to the next text
      } else {
        setDisplayedText(currentText.substring(0, currentIndex + 1));
        currentIndex++;
      }
    }, 40); // Typing speed: 100 milliseconds
    return () => clearInterval(interval);
  }, [textIndex]);

  return (
    <motion.div
    initial={{ opacity: 0, scale: 0.5 }} // Initial opacity and scale
    animate={{ opacity: 1, scale: 1 }}     // Animation to full opacity and original scale
    transition={{ duration: 0.3, ease: "linear" }} // Transition duration and easing
  >
    <section id='hero'>
      {/* Flex Container */}
      <div className='container flex flex-col-reverse items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0 md:flex-row'>
        {/* Left Item */}
        <div className='flex flex-col mb-32 space-y-12 md:w-1/2'>
          <h1 className='max-w-md text-4xl font-bold text-center md:text-5xl md:text-left uppercase' style={{ lineHeight: '1.1' }}>
            Empower Your Financial Journey with<br></br> <span className='text-brightRed'>SS Tax Mentors</span>
          </h1>
          <div className="max-w-md h-16 overflow-hidden">
            <p className='text-1xl text-center uppercase text-darkGrayishBlue md:text-left'>
              {displayedText}
            </p>
          </div>
          <div className='flex justify-center md:justify-start'>
            <Link
              to='#'
              className='p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight'
            >
              Get Started
            </Link>
          </div>
        </div>
        {/* Image */}
        <div className='md:w-1/2'>
          <img src={illustrationIntro} alt='' />
        </div>
      </div>
    </section></motion.div>
  );
};

export default Hero;
