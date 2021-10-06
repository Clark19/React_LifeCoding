/* 2부 리액트 클래스 스타일 vs. 함수 스타일 편 (hook 포함) 2021.09.26 실습
 1. 스테이트(state), props 사용 실습
 2. 라이프 사이클 (life cycle) 실습 - https://gseok.gitbooks.io/react/content/bd80-bd84-bd80-bd84-c9c0-c2dd-b4e4/react-component-lifecycle-api-c815-b9ac.html
 -  https://youtube.com/playlist?list=PLuHgQVnccGMCEfBwnNGsJCQDiqSWI-edj */
import './App.css';
import React, { Component } from 'react';

class Nav extends Component {

  state = {
    list: []
  }

  // 콤포넌트 생성시 네트워크 통신하기위한 최적의 메서드라고 공홈문서에 나옴
  /* 1. 즉, 콤포넌트 생성시 Ajax call을 통해 그 콤포넌트를 초기화/구성 해야 할때 이 메서드 ajax call 코드 작성하면 됨.
  2. 그리고 그 데이터를 렌더에 직접 영향을 끼치게 하는게 아니라
      state에 데이터를 주고
  3. 렌더는 스테이트에 영향을 받도록 하는 것을 통해 처리할 수 있다
  */
  componentDidMount() {
    fetch('list.json')
      .then(function(result){
        return result.json();
      })
      .then(function(json) {
        console.log(json);
        this.setState({list:json});
      }.bind(this))
  }

  render() {
    let listTag = [];
    for (let i=0; i<this.state.list.length; i++) {
      let li = this.state.list[i];
      listTag.push(
        <li key={li.id}>
          <a href={li.id} data-id={li.id} onClick={function(e) {
            // 링크의 디폴트 동작 못하게 함.
            e.preventDefault();
            console.log('trigger');
            this.props.onClick(e.target.dataset.id);
          }.bind(this)}>
            {li.title}
          </a>
        </li>)
    }

    return(
      <nav>
        <ul>
          {listTag}
        </ul>
      </nav>
    );
  }
}

class Article extends Component {
  render() {

    return(
      <article>
        <h2>{this.props.title}</h2>
        {this.props.desc}
      </article>
    );
  }
}

class AppAjax extends Component {
  state = {
    article: {title: 'Welcome', desc: 'Hello, React & Ajax'}
  }
  render() {

    return (
      <div className="container">
        <h1>생코 React & Ajax</h1>
        {/* <FuncComp initNumber={2}></FuncComp> */}
        <Nav onClick={function(id) {
          console.log(id);
          fetch(id+'.json')
            .then(function(result) {
              return result.json()
            })
            .then(function(json) {
              this.setState({
                article:{
                  title: json.title,
                  desc: json.desc
                }
              });
            }.bind(this))
        }.bind(this)}></Nav>
        <Article title={this.state.article.title} desc={this.state.article.desc}></Article>
      </div>
    );
  }
}

export default AppAjax;
