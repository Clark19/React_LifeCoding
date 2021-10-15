/* 생활코딩 리액트 프로그래밍 3부 React Router DOM 2021.09.26 실습
 */
import {Route, Switch, NavLink, useParams} from 'react-router-dom';

function Home() {
  return (
    <div>
      <h2>Home</h2>
      Home...
    </div>
  );
}


// 실제론 aJax 로 JSON 가져오는 데이터. 이건 학습용이라 하드 코딩
let contents = [
  {id:1, title:'HTML', description:'HTML is...'},
  {id:2, title:'JS', description:'JS is...'},
  {id:3, title:'React', description:'React is...'},
];

function Topics() {
  let list = [];
  contents.forEach(item => list.push(<li key={item.id}><NavLink to={'/topics/'+item.id}>{item.title}</NavLink></li>));

  return (
    <div>
      <h2>Topics</h2>
      <ul>
        {list}
      </ul>

      {/* <Switch>
        <Route path="/topics/1"> HTML is ... </Route>
        <Route path="/topics/2"> JS is ... </Route>
        <Route path="/topics/3"> React is ... </Route>
      </Switch> */}

      {/* 위에 주석 처리된 부분을 아래와 같이 개선 */}
      <Route path="/topics/:topic_id">
        <Topic></Topic>
      </Route>
    </div>
  );
}

const logStyle = 'color:red'
function Topic() {
  let params = useParams();
  console.log('%cparams', logStyle, params, params.topic_id);

  let {topic_id} = params;
  let selected_topic = {
    title:'Sorry',
    description:'Not Found'
  };

  contents.some(item => {
    if (item.id === Number(topic_id))
      selected_topic = item;
  });

  return (
    <div>
      <h3>{selected_topic.title}</h3>
      {selected_topic.description}
    </div>
  );
}


function Contact() {
  return (
    <div>
      <h2>Contact</h2>
      Contact...
    </div>
  );
}

function AppRouterDOM() {
  return (
    <div className="container">
      <h1>Hello React Router DOM Example</h1>

      <ul>
        {/* <NavLink>는 <Link>에 기능을 조금 더한거. 주로 메뉴(네비게이션) 용도로 사용.
            <a> 태그를 대체하고, a 태그의 href 속성을 to로 바꾸면 됨.
        */}
        <li><NavLink exact to="/">Home</NavLink></li>
        <li><NavLink to="/topics">Topics</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>

      {/* Switch, exact를 사용하고 아래 순서로 콤포넌트를 배열해야 제대로 작동하면서,
         이상한 URL로 접근시 'Not Found' 페이지 띄워주기 수월하다. */}
      <Switch>
        <Route exact path="/"><Home></Home></Route>
        <Route path="/topics"><Topics></Topics></Route>
        <Route path="/contact"><Contact></Contact></Route>
        <Route path="/">Not Found</Route>
      </Switch>

    </div>
  );
}

export default AppRouterDOM;
