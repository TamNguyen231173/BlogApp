import React, { useState, useEffect, createContext } from "react";
import { NewsRequest } from "./news.service";

export const NewsContext = createContext();

export const NewsContextProvider = ({ children }) => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isLogin, setIsLogin] = useState(false);
  const [infoUser, setInfoUser] = useState({});

  const retrieveNews = () => {
    setIsLoading(true);
    setError(null);
    NewsRequest()
      .then((news) => {
        setNews(news);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    retrieveNews();
  }, []);

  return (
    <NewsContext.Provider
      value={{
        news,
        isLoading,
        error,
        isLogin,
        setIsLogin,
        infoUser,
        setInfoUser,
      }}
    >
      {children}
    </NewsContext.Provider>
  );
};
