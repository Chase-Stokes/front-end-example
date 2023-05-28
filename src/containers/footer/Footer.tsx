import React from 'react';
import './footer.css';
//@ts-ignore
import gpt3Logo from '../../assets/logo.svg';

const Footer: React.FC = () => {
  return (
    <div className='gpt_footer section_padding'>
      <div className='gpt_footer_heading'>
        <h1 className='gradient_text'>Do you want to step into the Future before others?</h1>
      </div>
      <div className='gpt_footer_button'>
        <p>Request Early Access</p>
      </div>
      <div className='gpt_footer_links'>
        <div className='gpt_footer_links_logo'>
          <img src={gpt3Logo} alt='gpt3Logo' />
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>
        <div className='gpt_footer_links_div'>
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contacts</p>
        </div>
        <div className='gpt_footer_links_div'>
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className='gpt_footer_links_div'>
          <h4>Get in touch</h4>
          <p>123 Sesame Street</p>
          <p>123-456-7890</p>
          <p>email@email.com</p>
        </div>
      </div>
      <div className='gpt_footer_copyright'>
        <p>© 2021 GPT. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;