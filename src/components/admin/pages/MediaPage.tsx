"use client";
import React, { useEffect, useState } from "react";
import scss from "./MediaPage.module.scss";

interface NewsItem {
  name: string;
  decription: string;
  url: string;
}

const MediaPage: React.FC = () => {
  const [newsList, setNewsList] = useState<NewsItem[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("newsList");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) setNewsList(parsed);
      } catch (err) {
        console.error("Error parsing localStorage data:", err);
      }
    }
  }, []);

  return (
    <div className={scss.media}>
      <div className="container">
        <h1>Media Page</h1>
        {newsList.length === 0 ? (
          <p>No news saved yet 😔</p>
        ) : (
          <div className={scss.cards}>
            {newsList.map((item, index) => (
              <div key={index} className={scss.card}>
                <img src={item.url} alt={item.name} />
                <h3>{item.name}</h3>
                <p>{item.decription}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MediaPage;
