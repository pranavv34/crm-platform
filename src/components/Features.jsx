import React from 'react';

const Features = () => {
  return (
    <section id='features'>
      {/* Flex Container */}
      <div className='container flex flex-col px-4 mx-auto mt-20 space-y-12 md:space-y-0 md:flex-row mb-20'>
        {/* What's Different */}
        <div className='flex flex-col space-y-12 md:w-1/2'>
          <h2 className='max-w-md text-4xl font-bold text-center md:text-left uppercase'>
            <span className='text-brightRed'>Why choose</span> SS Tax Mentors?
          </h2>
          <p className='max-w-sm text-center text-darkGrayishBlue md:text-left'>
          At SS Tax Mentors, we understand the challenges startups face in navigating the intricacies of operating in India's business landscape. That's why we offer a comprehensive suite of services aimed at simplifying the journey for entrepreneurs and empowering them to focus on what truly matters - building their business.
          </p>
        </div>

        {/* Numbered List */}
        <div className='flex flex-col space-y-8 md:w-1/2'>
          {/* List Item 1 */}
          <div className='flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row'>
            {/* Heading */}
            <div className='rounded-l-full bg-brightRedSupLight md:bg-transparent'>
              <div className='flex items-center space-x-2'>
                <div className='px-4 py-2 text-white rounded-full md:py-1 bg-brightRed'>
                  01
                </div>
                <h3 className='text-base font-bold md:mb-4 md:hidden'>
                  Smooth Startup Journey
                </h3>
              </div>
            </div>

            <div>
              <h3 className='hidden mb-4 text-lg font-bold md:block'>
              Smooth Startup Journey
              </h3>
              <p className='text-darkGrayishBlue'>
                SS Tax Mentors streamlines your startup journey in India, so you can focus on your business while we handle the paperwork hassle-free.
              </p>
            </div>
          </div>

          {/* List Item 2 */}
          <div className='flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row'>
            {/* Heading */}
            <div className='rounded-l-full bg-brightRedSupLight md:bg-transparent'>
              <div className='flex items-center space-x-2'>
                <div className='px-4 py-2 text-white rounded-full md:py-1 bg-brightRed'>
                  02
                </div>
                <h3 className='text-base font-bold md:mb-4 md:hidden'>
                  Expert Financial Support
                </h3>
              </div>
            </div>

            <div>
              <h3 className='hidden mb-4 text-lg font-bold md:block'>
                Expert Financial Support
              </h3>
              <p className='text-darkGrayishBlue'>
                With SS Tax Mentors, you get expert accounting and tax services designed for startups, ensuring your finances are in safe hands while you grow your business.
              </p>
            </div>
          </div>

          {/* List Item 3 */}
          <div className='flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row'>
            {/* Heading */}
            <div className='rounded-l-full bg-brightRedSupLight md:bg-transparent'>
              <div className='flex items-center space-x-2'>
                <div className='px-4 py-2 text-white rounded-full md:py-1 bg-brightRed'>
                  03
                </div>
                <h3 className='text-base font-bold md:mb-4 md:hidden'>
                Trusted Guidance
                </h3>
              </div>
            </div>

            <div>
              <h3 className='hidden mb-4 text-lg font-bold md:block'>
              Trusted Guidance
              </h3>
              <p className='text-darkGrayishBlue'>
              We're more than just accountants. SS Tax Mentors guides you through the complexities of business, building trust with stakeholders and ensuring you meet your responsibilities with ease.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
