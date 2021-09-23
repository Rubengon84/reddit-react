import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectArticles, selectCategory, setIsLarge, selectIsLoadingArticle, selectHasError } from "../features/data/dataSlice";
import Article from "./Article";
import Loading from "./Loading";
import ShowError from "./ShowError";

export const Container = () => {

  const articles = useSelector(selectArticles);
  const category = useSelector(selectCategory);
  let isLoadingArticle = useSelector(selectIsLoadingArticle);
  let hasError = useSelector(selectHasError);
  const [localArticles, setLocalArticles] = useState([]);
  const dispatch = useDispatch();
  dispatch(setIsLarge(false));

  useEffect(() => {
    const selectedArticles = articles.filter(article => article.subreddit === category);
    setLocalArticles(selectedArticles);
  },[category,articles])


  return (
    <div id="container">
      { isLoadingArticle? <Loading /> : hasError? <ShowError /> :
        category ? localArticles.map((article) => (
        <Article  article={article} key={article.key} />)) : 
         articles.map((article) => (
        <Article  article={article} key={article.id} />)) }
        
    </div>
  )
    
}

export default Container;

