import React, { useState } from 'react';
import './App.css';
import UrlString from './components/UrlString/UrlStrnig';
import DragNDrop from './components/DragNDrop/DragNDrop';

// let api = 'https://github.com/facebook/react/issues' is this link  correct? :)


const data = [{
  "issueTitle": "Some  issue title ",
  "id": "#315",
  "date": "opened 3 days ago",
  "author": "Admin",
  "comments": "| comments: 4",
}]

function App() {

  return (
    <div className="App">
      <UrlString />
      <DragNDrop data={data} />
    </div>
  );
}

export default App;
