// 클래스 컴포넌트 예제
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker';
import React from 'react';

class ClassComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: 0};
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState(cur => {
      return {count: cur.count+1};
    });

    // 비동기 콜을 위한 테스트 코드
    setTimeout(()=>console.log('111'), 0)
    console.log('222')
    for (let i=0; i<800; i++) {
      console.log('333');
    }
  }


  render() {
    return (
      <div>
        {/* count의 state를 출력하세요. */}
        <p>You clicked {this.state.count} times</p>
        {/* setState()를 이용해 버튼 클릭 시 count가 1 증가하는 코드를 작성하세요. */}
        <button onClick={this.clickHandler}>
          Click me
        </button>
      </div>
    );
  }
}

ReactDOM.render(<ClassComp />, document.getElementById('root'));
serviceWorker.unregister();