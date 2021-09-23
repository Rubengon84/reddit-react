import React, {useState} from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectArticles, setIsLarge } from "../features/data/dataSlice";
import { Link, useHistory } from "react-router-dom";

export const LargeArticle = () => {
  
  let history = useHistory();
  const articles = useSelector(selectArticles);
  let articleId = useParams();
  const art = articles.find((obj) => obj.id === articleId.articleId);
  const index = articles.findIndex((obj) => obj.id === articleId.articleId);
  const [article, setArticle] = useState(art);
  const dispatch = useDispatch();
  dispatch(setIsLarge(true));

  const handleClickLeft = () => {
    history.replace('');
    setArticle(articles[index-1]);
  };
  
  const handleClickRight = () => {
    history.replace('');
    setArticle(articles[index+1]);
  };


 

  return (
    <div className="largeContainer">
            <ShowArticle article={article} />
      <div id="buttonsContainer">        
        {index !== 0? 
          <Link to={`${articles[index-1].subreddit}/${articles[index-1].id}`}>
            <button title="Previous Article" onClick = {handleClickLeft} className="buttonsBottom"><span className="arrow4">&#9664;</span><span className="arrow3">&#9664;</span><span className="arrow2">&#9664;</span><span className="arrow1">&#9664;</span></button></Link> : 
            <p id="beginningList">The Beginning of the List</p>}
        {index !== articles.length-1?
          <Link to={`${articles[index+1].subreddit}/${articles[index+1].id}`}>
            <button title="Next Article" onClick = {handleClickRight} className="buttonsBottom"><span className="arrow1">&#9654;</span><span className="arrow2">&#9654;</span><span className="arrow3">&#9654;</span><span className="arrow4">&#9654;</span></button></Link>: 
            <p id="endList">End of the List</p>}
      </div>     

    </div>
  )
} 


function ShowArticle({article}) {

  return (
    <div id="mainArticle">
      <div className="articleHeader">
        <h3>{article.title}</h3>
        <span id="author"><b>Author: </b>{article.author}</span>
      </div>
      <div className="largeMedia" >
        <Media article={article}/>
      </div>
    </div>
  )
}

function Media({article}) {
   if (article.post_hint.includes("image")){
     return(
      <img src={article.url} alt="" className="imagen"/>
     )
   }else if (article.post_hint.includes("link") && article.domain.includes("twitter")){
     return (
     <iframe title="Link to the website" src = {article.secure_media_embed.media_domain_url} className="iframe"></iframe>
     )
    }else if (article.post_hint.includes("link") && !article.domain.includes("twitter")){
      return (
      <iframe title="Link to the website" src = {article.url_overridden_by_dest} className="iframe"></iframe>
      )
    }else if (article.post_hint.includes("video") && article.media.reddit_video.fallback_url){
      return (
      <video controls className="video" autoPlay>
        <source src={article.media.reddit_video.fallback_url}>
        </source>
      </video>
      )
    }else if (article.post_hint.includes("video") && article.secure_media_embed){
      return (
      <iframe title="Link to the website" src = {article.secure_media_embed.media_domain_url} className="iframe"></iframe>
      )      
    }else if (article.post_hint.includes("self")) {
      return (
      <p id="articleText">{article.selftext}</p>
    )      
   }

}

export default LargeArticle;