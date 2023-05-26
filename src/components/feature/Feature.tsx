import React from 'react';
import './feature.css';

interface FeatureProps {
  title: string;
  text: string;
}

const Feature: React.FC<FeatureProps> = (props) => {
  const { title, text } = props;
  return (
    <div className='gpt_features_container_feature'>
      <div className='gpt_features_container_feature_title'>
        <div />
        <h1>{title}</h1>
      </div>
      <div className='gpt_features_container_feature_text'>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default Feature;