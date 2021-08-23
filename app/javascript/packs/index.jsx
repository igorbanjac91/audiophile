import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Categories from './components/categories/Categories';

document.addEventListener("DOMContentLoaded", () => {
  const index = document.getElementById("pages")
  ReactDOM.render(
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/categories/:slug" component={Categories} />
    </Router>,
    index,
  )
})

