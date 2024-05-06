import { Link } from 'react-router-dom';

import avatarAnisha from '../assets/images/ic1.png';
import avatarAli from '../assets/images/ic2.png';
import avatarRichard from '../assets/images/ic3.png';

const Testimonial = () => {
  return (
    <section id='testimonials' className="bg-gray-100 py-20">
      {/* Container to heading and testimonial blocks */}
      <div className='max-w-6xl px-5 mx-auto text-center'>
        {/* Heading */}
        <h2 className='text-4xl uppercase font-bold mb-12'>
          What's Different About <span className='text-brightRed'>SS TAX MENTORS</span>?
        </h2>
        {/* Testimonials Container */}
        <div className='flex flex-col md:flex-row md:space-x-6'>
          {/* Testimonial 1 */}
          <div className='flex flex-col items-center justify-center p-6 space-y-6 rounded-lg bg-white shadow-md md:w-1/3 relative'>
            <div className="absolute top-0 left-0 right-0 h-4 bg-brightRed rounded-t-lg"></div>
            <img src={avatarAnisha} className='w-40 mb-4 border-brightRed' alt='' />
            <div>
              <h5 className='text-lg font-bold mb-2 uppercase text-brightRed'>Simplified Tax Processes</h5>
              <p className='text-sm text-gray-700 leading-relaxed'>
              SS Tax Mentors simplifies tax processes with streamlined solutions, ensuring navigating complexities is effortless for clients. Our tailored approach guarantees hassle-free experiences.
              </p>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className='flex flex-col items-center justify-center p-6 space-y-6 rounded-lg bg-white shadow-md md:w-1/3 relative'>
            <div className="absolute top-0 left-0 right-0 h-4 bg-brightRed rounded-t-lg"></div>
            <img src={avatarAli} className='w-40 mb-4 border-brightRed' alt='' />
            <div>
              <h5 className='text-lg font-bold mb-2 uppercase text-brightRed'>Focus on Growth</h5>
              <p className='text-sm text-gray-700 leading-relaxed'>
              With a focus on growth, SS Tax Mentors handles numbers, freeing businesses to concentrate on expansion. Entrusting us with financial management aids clients in achieving their goals more effectively.
              </p>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className='flex flex-col items-center justify-center p-6 space-y-6 rounded-lg bg-white shadow-md md:w-1/3 relative'>
            <div className="absolute top-0 left-0 right-0 h-4 bg-brightRed rounded-t-lg"></div>
            <img src={avatarRichard} className='w-40 mb-4 border-brightRed' alt='' />
            <div>
              <h5 className='text-lg font-bold mb-2 uppercase text-brightRed'>FINANCIAL CLARITY</h5>
              <p className='text-sm text-gray-700 leading-relaxed'>
              SS Tax Mentors fosters trust through transparent financial management, ensuring clients fulfill fiduciary responsibilities confidently. Our guidance builds strong relationships, paving the way for long-term success.
              </p>
            </div>
          </div>
        </div>
        {/* Button */}
        <div className='mt-12'>
          <Link
            to='#'
            className='p-3 px-6 pt-2 text-white bg-brightRed rounded-full inline-block hover:bg-brightRedLight'
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
