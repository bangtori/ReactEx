import Categories from "../components/Categories";
import NewsList from "../components/NewsList";
import React from "react";
import { useParams } from "react-router-dom";

const NewsPage = () => {
  const { category } = useParams() || "all";
  return (
    <>
      <Categories />
      <NewsList category={category} />
    </>
  );
};

export default NewsPage;
