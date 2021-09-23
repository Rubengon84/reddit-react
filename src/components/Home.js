import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectTerm } from "../features/searchBar/searchSlice";
import { loadData } from "../features/data/dataSlice";
import { Container } from "./container";

export const Home = () => {

  const term = useSelector(selectTerm);
  const dispatch = useDispatch();
 

  
  useEffect(() => {
    dispatch(loadData(term))
  },[]);

  return (
    <div>
      <Container />
    </div>
  )

}

export default Home;