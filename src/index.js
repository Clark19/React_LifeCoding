import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import './index.css';
import App from './App';
import AppClassVsFunc from './AppClassVsFunc';
import AppRouterDOM from './AppRouterDOM';
import {BrowserRouter} from 'react-router-dom';
import AppAjax from './AppAjax';
import AppPropEvtHandler from './AppPropEvtHandler'

ReactDOM.render(
  <React.StrictMode>
    <AppPropEvtHandler />
    <AppAjax />
    {/* 웹 서버 설정 잘 바꿔서 어떤 path 로 들어오든 간에 루트 페이지(폴더?)에 있는
       html을 서비스 할 수 있다면 <BrowserRouter> 사용하면 됨.
       그게 안되면 <HashRouter>를 사용하면 됨. 대신 이거 사용하며 
       주소 뒤에 http://example.com/#/ 또는 http://example.com/#/topic 이런식으로
      '/#'이 더 붙는다. '/#' 요부분은 웹서버에서 무시한다고 함. React에서만 처리한다고 함 */}
    <BrowserRouter>
      <AppRouterDOM /> {/* 3부 React Route DOM 강의 내용 */}
    </BrowserRouter>
    <AppClassVsFunc /> {/* 2부 클래스 스타일 vs. 함수 스타일 편(hook 포함) 강의 내용 */}
    <App /> {/* 1부 React.js 기초 강의 내용 */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
