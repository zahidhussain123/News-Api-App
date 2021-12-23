import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const NewsContext = createContext();

export const NewsProvider = (props) => {
  const [news, setNews] = useState("");
  const API_KEY = "1c13d83e2eca45e59d592e7458fb7456";
  useEffect(() => {
    axios
      .get(
`        https://newsapi.org/v2/everything?q=tesla&from=2021-11-23&sortBy=publishedAt&apiKey=${API_KEY}
`        )
      .then((response) => setNews(response.data.articles))
      .catch((error) => console.log(error));
  }, []);

  return (
    <NewsContext.Provider value={{ news }}>
      {props.children}
    </NewsContext.Provider>
  );
};
