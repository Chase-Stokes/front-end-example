import React from 'react';
import { Feature } from '../../components';
import './gpt.css';

const Gpt: React.FC = () => {
  return (
    <div className='gpt_whatgpt section_margin' id='gpt'>
      <div className='gpt_whatgpt_feature'>
        <Feature title='What is Chat GPT' text='We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.' /> 
      </div>
      <div className='gpt_whatgpt_heading'>
        <h1 className='gradient_text'>The possibilities are beyond your imagination</h1>
        <p>Explore the library</p>
      </div>
      <div className='gpt_whatgpt_container'>
      <Feature title="Chatbots" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought." />
      <Feature title="Knowledgebase" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
      <Feature title="Education" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
      </div>
    </div>
  );
}

export default Gpt;