import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AppClassVsFunc from './AppClassVsFunc';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <AppClassVsFunc /> {/* 2부 클래스 스타일 vs. 함수 스타일 편(hook 포함) 강의 내용 */}
    <App /> {/* 1부 React.js 기초 강의 내용 */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
