import React from 'react';
import './header.css';
//@ts-ignore
import people from '../../assets/people.png'
//@ts-ignore
import ai from '../../assets/ai.png'

const Header: React.FC = () => {
  return (
    <div className='gpt_header section_padding' id='home'>
      <div className='gpt_header_content'>
        <h1 className='gradient_text'>Lets Build Something Amazing With GPT3 OpenAI</h1>
        <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
        <div className='gpt_header_content_input'>
          <input type='email' placeholder='Enter your email' />
          <button type='button'>Get Started</button>
        </div>
        <div className='gpt_header_content_people'>
          <img src={people} alt='people'/>
          <p>1,600 people requested access in the last 24 hours</p>
        </div>
      </div>
      <div className='gpt_header_image'>
        <img src={ai} alt='ai' />
      </div>
    </div>
  );
}

export default Header;