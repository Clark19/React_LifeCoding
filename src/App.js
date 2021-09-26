/* 생활코딩 React 리액트 프로그래밍
   1부 React.js 기초내용 내용 */

// import logo from './logo.svg';
import './App.css';
import { Component } from 'react';


class TOC extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li><a href="1.html">HTML</a></li>
          <li><a href="2.html">CSS</a></li>
          <li><a href="3.html">JavaScript</a></li>
        </ul>
      </nav>
    );
  }
}

class Content extends Component {
  render() {
    return (
      <article>
        <h2>{this.props.title}</h2>
        {this.props.desc}
      </article>
    );
  }
}

class Subjec extends Component {
  render(){
    return (
      <header>
        <h1>{this.props.title}</h1>
        {this.props.sub}
      </header>
    );
  }
}
class App extends Component {
  render() {
    return (
      <div className="App">
        <Subjec title="WEB" sub="world Wide Web!!!"></Subjec>
        <TOC></TOC>
        <Content title="HTML" desc="HTML is Hyper Text Markup Language."></Content>
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <h1>Xena</h1>

//     </div>
//   );
// }

export default App;
