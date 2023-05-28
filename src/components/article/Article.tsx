import React from 'react';
import './article.css';

interface IArticleProps {
  imgUrl: string;
  date?: string;
  title?: string;
}

const Article: React.FC<IArticleProps> = (props) => {
  const { imgUrl, date, title } = props;

  return (
    <div className='gpt_blog_container_article'>
      <div className='gpt_blog_container_article_image'>
        <img src={imgUrl} alt='blog pic'/>
      </div>
      <div className='gpt_blog_container_article_content'>
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <p>Read Full Article</p>
      </div>
      Article
    </div>
  );
}

export default Article;
