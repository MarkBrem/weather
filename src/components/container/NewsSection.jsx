import React, { useEffect, useState } from "react";

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
        {articles.map((article, index) => (
          <div className="news-card" key={index}>
            {article.urlToImage && (
              <img src={article.urlToImage} alt={article.title} className="news-image" />
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





      <style jsx>{`
        .news-section {
          padding: 2rem;
          background-color: #f9f9f9;
        }

        .news-title {
          text-align: center;
          font-size: 2rem;
          margin-bottom: 2rem;
        }

        .news-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }

        .news-card {
          background-color: #fff;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          transition: transform 0.2s;
        }

        .news-card:hover {
          transform: translateY(-3px);
        }

        .news-image {
          width: 100%;
          height: 180px;
          object-fit: cover;
        }

        .news-content {
          padding: 1rem;
        }

        .news-headline {
          font-size: 1.2rem;
          margin-bottom: 0.5rem;
        }

        .news-description {
          font-size: 0.95rem;
          color: #555;
          margin-bottom: 0.5rem;
        }

        .news-link {
          text-decoration: none;
          color: #007bff;
          font-weight: bold;
        }

        /* 🔽 Адаптивність */
        @media (min-width: 600px) {
          .news-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 900px) {
          .news-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
      `}</style>
    </section>
  );
};

export default NewsSection;