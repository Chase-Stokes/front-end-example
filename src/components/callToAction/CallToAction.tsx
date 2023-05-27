import React from 'react';
import './callToAction.css';

const CallToAction: React.FC = () => {
  return (
    <div className='gpt_cta'>
      <div className='gpt_cta_content'>
        <p>Request Early Access to Get Started</p>
        <h3>Register today & start exploring</h3>
      </div>
      <div className='gpt_cta_button'>
        <button type='button'>Get Started</button>
      </div>
    </div>
  );
}

export default CallToAction;