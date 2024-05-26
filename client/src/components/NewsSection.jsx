import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../../src/news.css"
import rapidApiKey from '../config';

const NewsSection = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiKey = import.meta.env.VITE_RAPIDAPI_API_KEY
    const fetchNews = async () => {
      const options = {
        method: 'GET',
        url: 'https://crypto-news16.p.rapidapi.com/news/top/10',
        headers: {
          'X-RapidAPI-Key': apiKey,
          'X-RapidAPI-Host': 'crypto-news16.p.rapidapi.com',
        },
      };

      try {
        const response = await axios.request(options);
        setNews(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching news:', error);
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="news-container">
      <h2>Cryptocurrency News</h2>
      {loading ? (
        <p>Loading news...</p>
      ) : (
        <ul>
          {news.map((article, index) => (
            <li key={index}>
              <h3>{article.title}</h3>
              <p>{article.description}</p>
              <p>Date: {article.date}</p>
              <a href={article.url} target="_blank" rel="noopener noreferrer">Read More</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NewsSection;
