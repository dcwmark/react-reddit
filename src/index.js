import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import axios from 'axios';

const Reddit = () => {
  const [posts, setPosts] = useState([]);

  useEffect( () => {
    axios.get(`https://www.reddit.com/r/reactjs.json`)
      .then( res => {
        setPosts(res.data.data.children.map( obj => obj.data));
      });
  }, []);

  return (
    <div>
      <h1>/r/reactjs</h1>
      <ul>
        {posts.map( post => (
          <li key={ post.id }>{ post.title }</li>
        ))}
      </ul>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Reddit />
  </React.StrictMode>,
  rootElement
);
