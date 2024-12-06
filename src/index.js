import React from 'react';
import ReactDOM from 'react-dom/client';
import StarRating from './starRaiting/StarRating';
// import './index.css';
// import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating starNum={5} 
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
    />
    <StarRating />
  </React.StrictMode>
);


