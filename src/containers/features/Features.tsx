import React from 'react';
import './features.css';
import Feature from '../../components/feature/Feature';

interface IFeaturesData {
  title: string;
  text: string;
}

const featuresData = [
  {
    title: 'Enhanced Natural Language Understanding',
    text: 'ChatGPT demonstrates a remarkable ability to understand and generate human-like text. Its advanced language model allows it to comprehend complex queries and respond with accurate and relevant information.'
  },
  {
    title: 'Active Learning and Continuous Improvement',
    text: 'ChatGPT is designed to actively learn from user interactions and continuously improve its responses over time. Through user feedback, it adapts and refines its understanding, making it an ever-evolving and reliable conversational AI.'
  },
  {
    title: 'Versatile Communication and Adaptability',
    text: 'ChatGPT can communicate effectively across a wide range of topics and contexts. Whether you need assistance with technical queries, creative writing, or general knowledge, ChatGPT can adapt to your needs and provide helpful and insightful responses.'
  },
  {
    title: 'Empathetic and Engaging Conversations',
    text: 'ChatGPT is trained to engage in empathetic and meaningful conversations. It can understand emotions, provide support, and maintain a friendly tone while interacting with users. Its ability to create a positive and engaging conversational experience sets it apart from other AI models.'
  }
];


const Features: React.FC = () => {
  return (
    <div className='gpt_features section_padding' id='features'>
      <div className='gpt_features_heading'>
        <h1 className='gradient_text'>The Future is Now and You Just Need to Realize It. Step into the Future Today & Make it Happen.</h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className='gpt_features_container'>
        {featuresData.map((feature, index) => (
          <Feature title={feature.title} text={feature.text} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Features;