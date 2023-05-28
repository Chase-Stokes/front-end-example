import React from 'react';
import { Article } from '../../components';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog: React.FC = () => {
  return (
    <div className='gpt_blog section_padding' id='blog'>
      <div className='gpt_blog_heading'>
        <h1 className='gradient_text'>A lot is happening, 
We are blogging about it.</h1>
      </div>
      <div className='gpt_blog_container'>
        <div className='gpt_blog_container_groupA'>
          <Article imgUrl={blog01} date='Aug 28, 2021' title='Exploring ChatGPTs Capabilities' />
        </div>
        <div className='gpt_blog_container_groupB'>
          <Article imgUrl={blog02} date='Aug 28, 2021' title='Unleashing the Power of ChatGPT' />
          <Article imgUrl={blog03} date='Aug 28, 2021' title='ChatGPT: Revolutionizing AI' />
          <Article imgUrl={blog04} date='Aug 28, 2021' title='Deep Dive into ChatGPT' />
          <Article imgUrl={blog05} date='Aug 28, 2021' title='ChatGPT: Shaping the Future' />
        </div>
      </div>
    </div>
  );
}

export default Blog;