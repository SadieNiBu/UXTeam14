import './Press.css';
import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import placeholder from '../Home/Images/placeholder.jpg';

const Press = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "C3 Team @ UCF | Press";

    const fetchArticles = async () => {
      try {
        const response = await fetch('https://213633.xyz/api/articles');
        const data = await response.json();

        if (response.ok) {
          setArticles(data);
        }
      } catch (error) {
        console.error('Failed to fetch articles:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  return (
    <div>
      <div className='press'>
        <div className='press__header'>
          <div className='press__header__tagline'>
            <svg xmlns="http://www.w3.org/2000/svg" width="72" height="3" viewBox="0 0 72 3" fill="none">
              <path d="M0 1.01758H72" stroke="#495057" strokeWidth="2"/>
            </svg>
            <div className='press__header__tagline__text'>Press </div>
          </div>
          <div className='press__header__text'>Articles About Us</div>
        </div>
        <div className='press__articles'>
          {loading && <p>Loading articles...</p>}
          {!loading && articles.length === 0 && <p>No articles available at the moment.</p>}
          {!loading && articles.map((article) => (
            <div className='press__article' key={article._id}>
              <div className='press__article__image'>
                <img src={article.image || placeholder} className="photo" alt={article.title} />
              </div>
              <div className='press__article__title'>{article.title}</div>
              <div className='press__article__info'>
                <div className='press__article__info__author'>{article.author}</div>
              </div>
              <div className='press__article__info__date'>{new Date(article.date).toLocaleDateString(undefined, { timeZone: 'UTC' })}</div>
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                <div className='press__article__button'>
                  <div className='press__article__button__text'>Read More</div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M11.4429 10.0031L5.83921 4.61586C5.68491 4.46787 5.60003 4.27002 5.60003 4.05906C5.60003 3.84797 5.68491 3.65024 5.83921 3.50202L6.33023 3.03022C6.48429 2.88177 6.69022 2.80005 6.90967 2.80005C7.12913 2.80005 7.33482 2.88177 7.48899 3.03022L14.1611 9.44418C14.3159 9.59287 14.4006 9.79154 14.4 10.0027C14.4006 10.2149 14.316 10.4133 14.1611 10.5621L7.49521 16.9699C7.34103 17.1183 7.13534 17.2 6.91576 17.2C6.69631 17.2 6.49062 17.1183 6.33632 16.9699L5.84542 16.4981C5.52598 16.191 5.52598 15.6911 5.84542 15.3841L11.4429 10.0031Z" fill="#0A58CA"/>
                  </svg>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Press;
