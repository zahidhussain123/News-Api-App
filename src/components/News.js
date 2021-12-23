import React from "react";
import { NewsContext } from "../context/NewsContext";
import { useContext } from "react";
import Newsletter from "./Newsletter";

const News = () => {
  const { news } = useContext(NewsContext);

  return (
    <div>
      {news
        ? news.map((item) => <Newsletter data={item} key={item.url} />)
        : "loading"}
    </div>
  );
};

export default News;
