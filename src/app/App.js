
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import SearchBar from "../features/searchBar/SearchBar";
import Home from "../components/Home";
import LargeArticle from "../components/largeArticle";
import Container from "../components/container";

function App() {


  return (
    <Router>
    <div>
      <SearchBar/>
    <Switch>
        {/*<Route exact path="/404" component={FourZeroFour} /> */}
        <Route exact path="/" component={Home} />
        <Route path={"/:categories/:articleId"} component={LargeArticle} />
        <Route exact path="/:searchTerm" component={Container} />
        
        {/*<Redirect from="/" to="/best" component={Container} />*/}
      </Switch>
    </div>
    </Router> 
  )
}


export default App;
