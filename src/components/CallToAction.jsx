import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <section id='cta' className='bg-brightRed'>
      {/* Flex Container */}
      <div className='container flex flex-col items-center justify-between px-6 py-24 mx-auto space-y-12 md:py-12 md:flex-row md:space-y-0'>
        {/* Heading */}
        <h2 className='text-5xl font-bold leading-tight text-center text-white md:text-4xl md:max-w-xl md:text-left'>
        Ready to Unlock Financial Success with SS Tax Mentors?
        </h2>
        {/* Button */}
        <div>
          <Link
            to='#'
            className='p-3 px-6 pt-2 text-brightRed bg-white rounded-full shadow-2xl baseline hover:bg-gray-900 hover:text-white'
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
