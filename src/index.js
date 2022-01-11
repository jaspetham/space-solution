import ReactDOM from 'react-dom';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import DesignSystem from './Components/DesignSystem';
import Homepage from './Components/Homepage';
import Header from './Components/Header';

ReactDOM.render(
  <React.StrictMode>
    <Router>
        <Routes>
          <Route exact path="/" element={<Homepage/>}></Route>
          <Route exact path="/design-system" element={<DesignSystem/>}></Route>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
