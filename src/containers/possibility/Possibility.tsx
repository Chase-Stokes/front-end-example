import React from 'react';
import './possibility.css';
//@ts-ignore
import possibilityImage from '../../assets/possibility.png'

const Possibility: React.FC = () => {
  return (
    <div className='gpt_possibility section_padding' id='possibility'>
      <div className='gpt_possibility_image'>
        <img src={possibilityImage} alt='possibility' />
      </div>
      <div className='gpt_possibility_content'>
        <h4>Request Early Access to Get Started</h4>
        <h1 className='gradient_text'>The Possibilities are Beyond your Imagination.</h1>
        <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  );
}

export default Possibility;