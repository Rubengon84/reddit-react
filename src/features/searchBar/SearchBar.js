import React, {useState, useEffect} from "react";
import {selectTerm, setSearchTerm} from "./searchSlice";
import {useDispatch, useSelector} from "react-redux";
import {loadData, setCategory, selectCategories, selectIsLarge} from "../data/dataSlice";
import { Link } from "react-router-dom";


 export function SearchBar() {
  
  const [termLocal, setTermLocal] = useState('');
  const [category, setLocalCategory] = useState('');
  const dispatch = useDispatch();
  const term = useSelector(selectTerm);
  const categories = useSelector(selectCategories);
  const notDuplicateCategories  = [...new Set(categories)];
  const isLarge = useSelector(selectIsLarge);

  useEffect(() => {
    dispatch(setSearchTerm(termLocal));
  }, [termLocal,dispatch]);
  

  useEffect(() => {
    dispatch(setCategory(category))
  },[dispatch, category]);
  

  const handleClick = () => {
    setCategory('');
    dispatch(loadData(term));
  };


  return (
    <div id="header">
      <div className= { isLarge ? "homeButtonShowed" : "homeButtonHide" }>
      <Link to = {'/'}>
        <div className="homeButton">
          <div id="homeTshirt"></div>
        </div>
      </Link>
      </div>
      <div id="headerTitle" className = { isLarge? "shortHeader" : "largeHeader"} >
        <h2 id="title" >JYMMY-REDDIT</h2>
        <div id="searchContainer">
          <div id="searchLine">
            <input 
              id= "search"
              type="text"
              value={termLocal}
              onChange= {(e) => {
                             let value = e.target.value.toLowerCase();
                             setTermLocal(value);  
                             dispatch(setCategory(''))}}
              placeholder= { window.screen.width < 450 ? "Your Topic" : "Introduce Your Topic"}
            />
         
            <Link to = {`/${termLocal}`}>
              <button  id="search-button"
                       aria-label="Search"
                       onClick={handleClick}>SEARCH</button>
            </Link>
          </div>
          <Link to={`${category}`}>
            <select name="category"
                  className = { isLarge ? "selectHide" : "selectShowed" } 
                  id="category-selected"
                  value={category}
                  onChange={(e) => {setLocalCategory(e.target.value)}}
            >
              <option value="">Categories</option>
              { notDuplicateCategories.map((iten, i) => (
              <option key={i} value={iten}>{iten}</option>))}    
            </select>
          </Link> 
        </div>
      </div>            
    </div>
  )
}

export default SearchBar;