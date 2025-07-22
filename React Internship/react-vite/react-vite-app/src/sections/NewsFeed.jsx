import { useEffect, useState } from "react";
import axios from "axios";
import NewsCard from "../components/NewsCard";

const NewsFeed = () => {
  const [articles, setArticles] = useState([]);  // Initially no article

  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchNews = async () => {
      try { 
        const res = await axios.get(API_URL);
        setArticles(res.data.articles);
      } catch (error) {
        console.error("Failed to fetch news:", error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
      {articles.map((article, index) => (
        <NewsCard key={index} article={article} />
      ))}
    </div>
  );
};

export default NewsFeed;
