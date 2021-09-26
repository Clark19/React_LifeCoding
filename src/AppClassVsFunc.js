/* 2부 리액트 클래스 스타일 vs. 함수 스타일 편 (hook 포함) 2021.09.26 실습
 1. 스테이트(state), props 사용 실습
 2. 라이프 사이클 (life cycle) 실습 - https://gseok.gitbooks.io/react/content/bd80-bd84-bd80-bd84-c9c0-c2dd-b4e4/react-component-lifecycle-api-c815-b9ac.html
 -  https://youtube.com/playlist?list=PLuHgQVnccGMCEfBwnNGsJCQDiqSWI-edj */
import './App.css';
import { Component, useState } from 'react';

function AppClassVsFunc() {
  return (
    <div className="container">
      <h1>Xena</h1>
      <FuncComp initNumber={2}></FuncComp>
      <ClassComp initNumber={2}></ClassComp>

    </div>
  );
}

function FuncComp(props) {
  // 1. 스테이트의 값을 초기화 세팅 (스테이트 만들기?). 2개의 원소를 가진 배열 리턴함.
  // 내장 훅은 useXXX() 이런 식으로 시작됨. useState() 리액트에서 제공하는 Hook 임.
  let numberState = useState(props.initNumber);
  console.log('numberState', numberState);

  // 2-0. 스테이트 값 할당: 리턴된 배열의 첫번째 값은 상태 값 임
  let number = numberState[0];

  // 3-0. 스테이트 값 변경 함수 할당: 리턴된 배열의 두번째 값은 상태를 바꿀수 있는 함수임
  const setNumber = numberState[1];
  
  // destructuring assignment = 구조 분해 할당을 이용해 코드를 단순하게 바꿈
  let [date, setDate] = useState( (new Date()).toLocaleString() );



  return (
    <div className="container">
      <h2>function style Component</h2>
      {/* props 사용 예제
      <p>Number : {props.initNumber}</p>  */}

      {/* 2.스테이트 값 사용 */}
      <p>Number : {number}</p>
      <p>Date : {date}</p>

      {/* 3-1. 스테이트 값 변경 */}
      <input type="button"  value="random" onClick={
        function() { setNumber(Math.random()); }
        }></input>

      <input type="button"  value="date" onClick={
        function() {setDate( (new Date()).toLocaleString() ); }
        }></input>
    </div>
  );
}

class ClassComp extends Component {
  // 1. 스테이트의 값을 초기화 세팅
  state = {
    number: this.props.initNumber,
    date: (new Date()).toString()
  }

  render() {
    return (
      <div className="container">
        <h2>class style component</h2>

        {/* props 사용 예제
        <p>Number: {this.props.initNumber}</p>  */}

        {/* 2.스테이트 값을 사용. */}
        <p>Number : {this.state.number}</p>
        <p>Date : {this.state.date}</p>
        
        <input type="button" value="random" onClick={
          function(){
            // 3.스테이트 값 변경.
            this.setState({number: Math.random()});
          }.bind(this)
        }></input>

        <input type="button" value="date" onClick={
          function(){
            // 3.스테이트 값 변경.
            this.setState( {date: (new Date()).toLocaleString()} );
          }.bind(this)
        }></input>
      </div>
    );
  }
}

export default AppClassVsFunc;
