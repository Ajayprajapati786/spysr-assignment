import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div>
      <div className='footer container mt-4'>
        <div className='row'>
          <div className='col-md-7'>
            <div className='row footerLinks'>
              <div className='col-md-5 text-lg-center'>Terms and conditions</div>
              <div className='col-md-3 text-lg-center'>About</div>
              <div className='col-md-4 text-lg-center'>Privacy Policy</div>
            </div>
          </div>

          <div className='col-md-5'>
            <div className='row'>
              <div className='col-4 icons text-lg-center'>
                <a href='#'>
                  <FontAwesomeIcon icon={faFacebook} style={{ color: 'white', padding:'10px', backgroundColor:'black', margin:'2px', borderRadius:'5px'  }} />
                </a>
              </div>
              <div className='col-4 icons text-lg-center'>
                <a href='#'>
                  <FontAwesomeIcon icon={faInstagram} style={{ color: 'white', padding:'11px', backgroundColor:'black', margin:'2px', borderRadius:'5px'  }} />
                </a>
              </div>
              <div className='col-4 icons text-lg-center'>
                <a href='#'>
                  <FontAwesomeIcon icon={faTwitter} style={{ color: 'white', padding:'10px', backgroundColor:'black', margin:'2px', borderRadius:'5px' }} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <p className='credits'>Copyright 2021 BitPesa</p>
      </div>
    </div>
  );
};

export default Footer;
