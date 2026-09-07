import React from 'react'
import { createRoot } from 'react-dom/client';


import App from './App'


//styles
import './index.css';
import './App.css'


import reportWebVitals from './reportWebVitals';
import ShopContextProvider from './Context/Shopcontext';

const root = createRoot(document.getElementById('root'));
root.render(
  <ShopContextProvider>
      <App />
  </ShopContextProvider>
    
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
