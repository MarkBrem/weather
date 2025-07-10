import React, { useEffect, useState } from "react";
import "./NewsSection.css";

const API_KEY = "a389a1beba954ed1a5a051e628fcb1b8";
const API_URL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;

const NewsSection = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        if (data.articles) {
          setArticles(data.articles.slice(0, 6));
        }
      })
      .catch((err) => console.error("Помилка при завантаженні новин:", err));
  }, []);

  return (
    <section className="news-section">
      <h2 className="news-title">Останні новини</h2>
      <div className="news-grid">
        {articles.map((article) => (
          <div className="news-card" key={article.url}>
            {article.urlToImage && (
              <img
                src={article.urlToImage}
                alt={article.title}
                className="news-image"
              />
            )}
            <div className="news-content">
              <h3 className="news-headline">{article.title}</h3>
              <p className="news-description">
                {article.description ? article.description : "Без опису"}
              </p>
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="news-link"
              >
                Читати більше →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewsSection;