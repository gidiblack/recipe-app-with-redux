import React from "react";
import { Route, Switch } from "react-router-dom"; // Switch allows us to declare that only one route should match
import HomePage from "./components/home/HomePage";
import AboutPage from "./components/about/AboutPage";
import Header from "./components/common/Header"; // navigation header to be shown on all pages
import PageNotFound from "./components/PageNotFound"; // load this page when none of the paths match
import RecipesPage from "./components/recipes/RecipesPage";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/recipes" component={RecipesPage} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
