import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

document.addEventListener("DOMContentLoaded", () => {
  const index = document.getElementById("pages")
  ReactDOM.render(
    <App />,
    index,
  )
})

