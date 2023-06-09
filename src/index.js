import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as PenisRouter, Routes, Route } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <PenisRouter>
      <Routes>
        <Route path="*" element={<App />} />
      </Routes>
    </PenisRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
