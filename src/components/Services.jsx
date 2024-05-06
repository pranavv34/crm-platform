import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import avatarAnisha from '../assets/images/sc1.png';
import avatarAli from '../assets/images/sc2.png';
import avatarRichard from '../assets/images/sc3.png';
import newAvatar from '../assets/images/sc4.png';

const Testimonial = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(prevIndex => prevIndex === index ? null : index);
  };

  return (
    <section id='services' className="bg-gray-100 py-20">
      <div className='max-w-6xl px-5 mx-auto text-center'>
        <h2 className='text-4xl uppercase font-bold mb-12'>
          <span className='text-brightRed'>SERVICES WE PROVIDE</span> AT SS TAX MENTORS
        </h2>
        <div className='flex flex-col md:flex-row md:space-x-6'>
          {/* Testimonial 1 */}
          <div className={`testimonial-card md:w-1/3 relative rounded-lg bg-white shadow-md p-6 ${expandedIndex === 0 ? 'h-auto' : 'h-100'}`}>
            <div className="absolute top-0 left-0 right-0 h-4 bg-brightRed rounded-t-lg"></div>
            <div className="flex justify-center">
              <img src={avatarAnisha} className='w-40 mb-4 border-brightRed' alt='' />
            </div>
            <div>
              <h5 className='text-lg font-bold mb-2 uppercase text-brightRed'>GST SERVICES</h5>
              <p className={`text-sm text-gray-700 leading-relaxed ${expandedIndex === 0 ? '' : 'h-20 overflow-hidden'}`} style={{ textTransform: 'uppercase' }}>
                <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
                  <li style={{ fontSize: '12px', textAlign: 'left', position: 'relative', paddingLeft: '20px' }}>
                    <span style={{ position: 'absolute', left: 0, top: 0 }}>•</span> GST REGISTRATION
                  </li>
                  <li style={{ fontSize: '12px', textAlign: 'left', position: 'relative', paddingLeft: '20px' }}>
                    <span style={{ position: 'absolute', left: 0, top: 0 }}>•</span> GST RETURNS FILINGS<br></br> (GSTR -1/GSTR-3B)
                  </li>
                  <li style={{ fontSize: '12px', textAlign: 'left', position: 'relative', paddingLeft: '20px' }}>
                    <span style={{ position: 'absolute', left: 0, top: 0 }}>•</span> GST RETURNS FILINGS Composition scheme
                  </li>
                  <li style={{ fontSize: '12px', textAlign: 'left', position: 'relative', paddingLeft: '20px' }}>
                    <span style={{ position: 'absolute', left: 0, top: 0 }}>•</span> GST RETURNS FILINGS<br></br> (GSTR -9)
                  </li>
                  <li style={{ fontSize: '12px', textAlign: 'left', position: 'relative', paddingLeft: '20px' }}>
                    <span style={{ position: 'absolute', left: 0, top: 0 }}>•</span> GST RETURNS FILINGS<br></br> (GSTR -9A)
                  </li>
                  <li style={{ fontSize: '12px', textAlign: 'left', position: 'relative', paddingLeft: '20px' }}>
                    <span style={{ position: 'absolute', left: 0, top: 0 }}>•</span> GST RECONCILIATION
                  </li>
                  <li style={{ fontSize: '12px', textAlign: 'left', position: 'relative', paddingLeft: '20px' }}>
                    <span style={{ position: 'absolute', left: 0, top: 0 }}>•</span> GST CASH REFUND
                  </li>
                  <li style={{ fontSize: '12px', textAlign: 'left', position: 'relative', paddingLeft: '20px' }}>
                    <span style={{ position: 'absolute', left: 0, top: 0 }}>•</span> GST SURRENDER
                  </li>
                  <li style={{ fontSize: '12px', textAlign: 'left', position: 'relative', paddingLeft: '20px' }}>
                    <span style={{ position: 'absolute', left: 0, top: 0 }}>•</span> GST AUDIT
                  </li>
                  <li style={{ fontSize: '12px', textAlign: 'left', position: 'relative', paddingLeft: '20px' }}>
                    <span style={{ position: 'absolute', left: 0, top: 0 }}>•</span> GST RESPONSE TO NOTICE
                  </li>
                  <li style={{ fontSize: '12px', textAlign: 'left', position: 'relative', paddingLeft: '20px' }}>
                    <span style={{ position: 'absolute', left: 0, top: 0 }}>•</span> REVOCATION OF CANCELLATION OF GST LICENSE
                  </li>
                  <li style={{ fontSize: '12px', textAlign: 'left', position: 'relative', paddingLeft: '20px' }}>
                    <span style={{ position: 'absolute', left: 0, top: 0 }}>•</span> E WAY BILL - REGISTRATION AND GENERATION
                  </li>
                </ul>
              </p>
            </div>
            <div className="flex justify-center mt-4">
              {expandedIndex === 0 ? (
                <button className="text-brightRed font-semibold hover:underline" onClick={() => toggleExpand(0)}>
                  Read Less
                </button>
              ) : (
                <button className="text-brightRed font-semibold hover:underline" onClick={() => toggleExpand(0)}>
                  Read More
                </button>
              )}
            </div>
          </div>
          
          {/* Testimonial 2 */}
          <div className={`testimonial-card md:w-1/3 relative rounded-lg bg-white shadow-md p-6 ${expandedIndex === 1 ? 'h-auto' : 'h-100'}`}>
            <div className="absolute top-0 left-0 right-0 h-4 bg-brightRed rounded-t-lg"></div>
            <div className="flex justify-center">
              <img src={avatarAli} className='w-40 mb-4 border-brightRed' alt='' />
            </div>
            <div>
              <h5 className='text-lg font-bold mb-2 uppercase text-brightRed'>INCOME TAX</h5>
              <p className={`text-sm text-gray-700 leading-relaxed ${expandedIndex === 1 ? '' : 'h-20 overflow-hidden'}`} style={{ textTransform: 'uppercase' }}>
              <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
                <li style={{ fontSize: '12px', textAlign: 'left', position: 'relative', paddingLeft: '20px' }}><span style={{ position: 'absolute', left: 0, top: 0 }}>•</span>IT RETURN - 1 ( Salary)</li>
                <li style={{ fontSize: '12px', textAlign: 'left', position: 'relative', paddingLeft: '20px' }}><span style={{ position: 'absolute', left: 0, top: 0 }}>•</span>IT RETURN - 2 (Capital gain/ House Property/Other Source)</li>
                <li style={{ fontSize: '12px', textAlign: 'left', position: 'relative', paddingLeft: '20px' }}><span style={{ position: 'absolute', left: 0, top: 0 }}>•</span>IT RETURN - 3 (Business)</li>
                <li style={{ fontSize: '12px', textAlign: 'left', position: 'relative', paddingLeft: '20px' }}><span style={{ position: 'absolute', left: 0, top: 0 }}>•</span>IT RETURN - 4(Business)</li>
                <li style={{ fontSize: '12px', textAlign: 'left', position: 'relative', paddingLeft: '20px' }}><span style={{ position: 'absolute', left: 0, top: 0 }}>•</span>IT RETURN - 5</li>
                <li style={{ fontSize: '12px', textAlign: 'left', position: 'relative', paddingLeft: '20px' }}><span style={{ position: 'absolute', left: 0, top: 0 }}>•</span>IT RETURN - 6</li>
                <li style={{ fontSize: '12px', textAlign: 'left', position: 'relative', paddingLeft: '20px' }}><span style={{ position: 'absolute', left: 0, top: 0 }}>•</span>TAX AUDIT</li>
                <li style={{ fontSize: '12px', textAlign: 'left', position: 'relative', paddingLeft: '20px' }}><span style={{ position: 'absolute', left: 0, top: 0 }}>•</span>ITR FORM - 10E</li>
                <li style={{ fontSize: '12px', textAlign: 'left', position: 'relative', paddingLeft: '20px' }}><span style={{ position: 'absolute', left: 0, top: 0 }}>•</span>ITR RESPONSE TO NOTICE</li>
                <li style={{ fontSize: '12px', textAlign: 'left', position: 'relative', paddingLeft: '20px' }}><span style={{ position: 'absolute', left: 0, top: 0 }}>•</span>ITR CORRECTION/REVISED RETURN</li>
                <li style={{ fontSize: '12px', textAlign: 'left', position: 'relative', paddingLeft: '20px' }}><span style={{ position: 'absolute', left: 0, top: 0 }}>•</span>TDS RETURN FILING</li>
                <li style={{ fontSize: '12px', textAlign: 'left', position: 'relative', paddingLeft: '20px' }}><span style={{ position: 'absolute', left: 0, top: 0 }}>•</span>TDS CHALLAN PAYMENT</li>
                <li style={{ fontSize: '12px', textAlign: 'left', position: 'relative', paddingLeft: '20px' }}><span style={{ position: 'absolute', left: 0, top: 0 }}>•</span>ADVANCE TAX PAYMENT</li>
              </ul>
              </p>
            </div>
            <div className="flex justify-center mt-4">
              {expandedIndex === 1 ? (
                <button className="text-brightRed font-semibold hover:underline" onClick={() => toggleExpand(1)}>
                  Read Less
                </button>
              ) : (
                <button className="text-brightRed font-semibold hover:underline" onClick={() => toggleExpand(1)}>
                  Read More
                </button>
              )}
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className={`testimonial-card md:w-1/3 relative rounded-lg bg-white shadow-md p-6 ${expandedIndex === 2 ? 'h-auto' : 'h-100'}`}>
            <div className="absolute top-0 left-0 right-0 h-4 bg-brightRed rounded-t-lg"></div>
            <div className="flex justify-center">
              <img src={avatarRichard} className='w-40 mb-4 border-brightRed' alt='' />
            </div>
            <div>
              <h5 className='text-lg font-bold mb-2 uppercase text-brightRed'>REGISTRATIONS</h5>
              <p className={`text-sm text-gray-700 leading-relaxed ${expandedIndex === 2 ? '' : 'h-20 overflow-hidden'}`} style={{ textTransform: 'uppercase' }}>
              <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
                <li style={{ fontSize: '12px', textAlign: 'left', position: 'relative', paddingLeft: '20px' }}><span style={{ position: 'absolute', left: 0, top: 0 }}>•</span>NIDHI COMPANY REGISTRATION</li>
                <li style={{ fontSize: '12px', textAlign: 'left', position: 'relative', paddingLeft: '20px' }}><span style={{ position: 'absolute', left: 0, top: 0 }}>•</span>SECTION 8 COMPANY REGISTRATION</li>
                <li style={{ fontSize: '12px', textAlign: 'left', position: 'relative', paddingLeft: '20px' }}><span style={{ position: 'absolute', left: 0, top: 0 }}>•</span>ONE PERSON COMPANY REGISTRATION (OPC)</li>
                <li style={{ fontSize: '12px', textAlign: 'left', position: 'relative', paddingLeft: '20px' }}><span style={{ position: 'absolute', left: 0, top: 0 }}>•</span>UDYAM AADHAR REGISTRATION</li>
                <li style={{ fontSize: '12px', textAlign: 'left', position: 'relative', paddingLeft: '20px' }}><span style={{ position: 'absolute', left: 0, top: 0 }}>•</span>FSSAI REGISTRATION(STATE/CENTRAL)</li>
                <li style={{ fontSize: '12px', textAlign: 'left', position: 'relative', paddingLeft: '20px' }}><span style={{ position: 'absolute', left: 0, top: 0 }}>•</span>DIRECTOR IDENTIFICATION NUMBER (DIN)</li>
                <li style={{ fontSize: '12px', textAlign: 'left', position: 'relative', paddingLeft: '20px' }}><span style={{ position: 'absolute', left: 0, top: 0 }}>•</span>IMPORT EXPORT CODE REGISTRATION</li>
                <li style={{ fontSize: '12px', textAlign: 'left', position: 'relative', paddingLeft: '20px' }}><span style={{ position: 'absolute', left: 0, top: 0 }}>•</span>TRADE MARK REGISTRATION</li>
                <li style={{ fontSize: '12px', textAlign: 'left', position: 'relative', paddingLeft: '20px' }}><span style={{ position: 'absolute', left: 0, top: 0 }}>•</span>LABOUR REGISTRATION</li>
                <li style={{ fontSize: '12px', textAlign: 'left', position: 'relative', paddingLeft: '20px' }}><span style={{ position: 'absolute', left: 0, top: 0 }}>•</span>PAN CARD</li>
                <li style={{ fontSize: '12px', textAlign: 'left', position: 'relative', paddingLeft: '20px' }}><span style={{ position: 'absolute', left: 0, top: 0 }}>•</span>TAN CARD</li>
                <li style={{ fontSize: '12px', textAlign: 'left', position: 'relative', paddingLeft: '20px' }}><span style={{ position: 'absolute', left: 0, top: 0 }}>•</span>PROPRIETORSHIP REGISTRATION</li>
                <li style={{ fontSize: '12px', textAlign: 'left', position: 'relative', paddingLeft: '20px' }}><span style={{ position: 'absolute', left: 0, top: 0 }}>•</span>PARTNERSHIP REGISTRATION</li>
                <li style={{ fontSize: '12px', textAlign: 'left', position: 'relative', paddingLeft: '20px' }}><span style={{ position: 'absolute', left: 0, top: 0 }}>•</span>LIMITED LIABILITY PARTNERSHIP</li>
                <li style={{ fontSize: '12px', textAlign: 'left', position: 'relative', paddingLeft: '20px' }}><span style={{ position: 'absolute', left: 0, top: 0 }}>•</span>REGISTRATION</li>
                <li style={{ fontSize: '12px', textAlign: 'left', position: 'relative', paddingLeft: '20px' }}><span style={{ position: 'absolute', left: 0, top: 0 }}>•</span>CONVERSION OF PARTNERSHIP TO COMPANY</li>
                <li style={{ fontSize: '12px', textAlign: 'left', position: 'relative', paddingLeft: '20px' }}><span style={{ position: 'absolute', left: 0, top: 0 }}>•</span>COMPANY REGISTRATION</li>
                <li style={{ fontSize: '12px', textAlign: 'left', position: 'relative', paddingLeft: '20px' }}><span style={{ position: 'absolute', left: 0, top: 0 }}>•</span>SOCIETY REGISTRATION</li>
                <li style={{ fontSize: '12px', textAlign: 'left', position: 'relative', paddingLeft: '20px' }}><span style={{ position: 'absolute', left: 0, top: 0 }}>•</span>CHARITABLE TRUST REGISTRATION</li>
              </ul>
              </p>
            </div>
            <div className="flex justify-center mt-4">
              {expandedIndex === 2 ? (
                <button className="text-brightRed font-semibold hover:underline" onClick={() => toggleExpand(2)}>
                  Read Less
                </button>
              ) : (
                <button className="text-brightRed font-semibold hover:underline" onClick={() => toggleExpand(2)}>
                  Read More
                </button>
              )}
            </div>
          </div>

          {/* Testimonial 4 */}
          <div className={`testimonial-card md:w-1/3 relative rounded-lg bg-white shadow-md p-6 ${expandedIndex === 3 ? 'h-auto' : 'h-100'}`}>
            <div className="absolute top-0 left-0 right-0 h-4 bg-brightRed rounded-t-lg"></div>
            <div className="flex justify-center">
              <img src={newAvatar} className='w-40 mb-4 border-brightRed' alt='' />
            </div>
            <div>
              <h5 className='text-lg font-bold mb-2 uppercase text-brightRed'>LOANS & ADVANCES</h5>
              <p className={`text-sm text-gray-700 leading-relaxed ${expandedIndex === 3 ? '' : 'h-20 overflow-hidden'}`} style={{ textTransform: 'uppercase' }}>
              <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
                <li style={{ fontSize: '12px', textAlign: 'left', position: 'relative', paddingLeft: '20px' }}><span style={{ position: 'absolute', left: 0, top: 0 }}>•</span>HOME LOAN</li>
                <li style={{ fontSize: '12px', textAlign: 'left', position: 'relative', paddingLeft: '20px' }}><span style={{ position: 'absolute', left: 0, top: 0 }}>•</span>BUSINESS LOAN</li>
                <li style={{ fontSize: '12px', textAlign: 'left', position: 'relative', paddingLeft: '20px' }}><span style={{ position: 'absolute', left: 0, top: 0 }}>•</span>PERSONAL LOAN</li>
                <li style={{ fontSize: '12px', textAlign: 'left', position: 'relative', paddingLeft: '20px' }}><span style={{ position: 'absolute', left: 0, top: 0 }}>•</span>MORTGAGE LOAN</li>
                <li style={{ fontSize: '12px', textAlign: 'left', position: 'relative', paddingLeft: '20px' }}><span style={{ position: 'absolute', left: 0, top: 0 }}>•</span>EDUCATION LOAN</li>
                <li style={{ fontSize: '12px', textAlign: 'left', position: 'relative', paddingLeft: '20px' }}><span style={{ position: 'absolute', left: 0, top: 0 }}>•</span>LOANS FOR STARTUP'S BUSINESS</li>
                <li style={{ fontSize: '12px', textAlign: 'left', position: 'relative', paddingLeft: '20px' }}><span style={{ position: 'absolute', left: 0, top: 0 }}>•</span>DSC - 2 YEARS WITH ENCRYPTION</li>
                <li style={{ fontSize: '12px', textAlign: 'left', position: 'relative', paddingLeft: '20px' }}><span style={{ position: 'absolute', left: 0, top: 0 }}>•</span>ROC FILINGS</li>
                <li style={{ fontSize: '12px', textAlign: 'left', position: 'relative', paddingLeft: '20px' }}><span style={{ position: 'absolute', left: 0, top: 0 }}>•</span>AMENDENT/ADDITIONS IN COMPANY</li>
                <li style={{ fontSize: '12px', textAlign: 'left', position: 'relative', paddingLeft: '20px' }}><span style={{ position: 'absolute', left: 0, top: 0 }}>•</span>CMA DATA</li>
                <li style={{ fontSize: '12px', textAlign: 'left', position: 'relative', paddingLeft: '20px' }}><span style={{ position: 'absolute', left: 0, top: 0 }}>•</span>PROVISIONALS</li>
                <li style={{ fontSize: '12px', textAlign: 'left', position: 'relative', paddingLeft: '20px' }}><span style={{ position: 'absolute', left: 0, top: 0 }}>•</span>PROJECTIONS</li>
                <li style={{ fontSize: '12px', textAlign: 'left', position: 'relative', paddingLeft: '20px' }}><span style={{ position: 'absolute', left: 0, top: 0 }}>•</span>COMPANY AUDIT</li>
                <li style={{ fontSize: '12px', textAlign: 'left', position: 'relative', paddingLeft: '20px' }}><span style={{ position: 'absolute', left: 0, top: 0 }}>•</span>STOCK AUDIT</li>
                <li style={{ fontSize: '12px', textAlign: 'left', position: 'relative', paddingLeft: '20px' }}><span style={{ position: 'absolute', left: 0, top: 0 }}>•</span>BOOK KEEPING</li>
                <li style={{ fontSize: '12px', textAlign: 'left', position: 'relative', paddingLeft: '20px' }}><span style={{ position: 'absolute', left: 0, top: 0 }}>•</span>MONTHLY ACCOUNTING SERVICES</li>
              </ul>
              </p>
            </div>
            <div className="flex justify-center mt-4">
              {expandedIndex === 3 ? (
                <button className="text-brightRed font-semibold hover:underline" onClick={() => toggleExpand(3)}>
                  Read Less
                </button>
              ) : (
                <button className="text-brightRed font-semibold hover:underline" onClick={() => toggleExpand(3)}>
                  Read More
                </button>
              )}
            </div>
          </div>
        </div>
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
