import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Features = () => {
  return (
    <section id='contact-us'>
      {/* Flex Container */}
      <div className='container flex flex-col px-4 mx-auto mt-20 space-y-12 md:space-y-0 md:flex-row mb-20'>
        {/* What's Different */}
        <div className='flex flex-col space-y-12 md:w-1/2'>
          <h2 className='max-w-md text-4xl font-bold text-center md:text-left uppercase text-brightRed'>
            ABOUT US
          </h2>
          <p className='max-w-sm text-center text-darkGrayishBlue md:text-left'>
            At SS Tax Mentors, we understand that change isn't always easy. Since 2016, we've been dedicated to helping companies navigate industry transitions to stay competitive. With years of experience and expertise, we're committed to serving you better and prioritizing your needs. Our dedicated team is ready to assist you in developing strategies for the future.
          </p>
          <div className="flex flex-col items-center md:items-start space-y-4 mt-4">
            <div className="flex items-center space-x-2">
              <FaPhoneAlt className="text-brightRed" />
              <span className="text-darkGrayishBlue">+91 8801103053</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaEnvelope className="text-brightRed" />
              <a href="mailto:sstax9646@gmail.com"><span className="text-darkGrayishBlue">sstax9646@gmail.com</span></a>
            </div>
            <div className="flex items-top space-x-2">
              <FaMapMarkerAlt className="text-brightRed" />
              <span className="text-darkGrayishBlue">Flat No.103, Swathi Ratna Appts, Geeta Hospital lane, Pillar No.1560, Chaitanyapuri, Dilsukhnagar, Hyderabad - 500060</span>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="md:w-1/2">
          <div className="map-container">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.8421499989063!2d78.52951267584969!3d17.37132700326633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb98f01bc2d401%3A0xd6107bc012060039!2sSS%20TaxMentors!5e0!3m2!1sen!2sin!4v1715017921390!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

/* Add this CSS to your stylesheets */
<style jsx>{`
  .map-container {
    position: relative;
    overflow: hidden;
    padding-top: 56.25%; /* 16:9 aspect ratio (height: 9/16 = 0.5625) */
  }

  .map-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`}</style>
