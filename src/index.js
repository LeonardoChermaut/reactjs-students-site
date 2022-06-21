import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { MyThemeProvider } from "./context"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <MyThemeProvider>
      <App />
    </MyThemeProvider>
  </BrowserRouter>
);