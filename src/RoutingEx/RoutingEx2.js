// App.js 파일임
import {Switch, Route} from 'react-router-dom';
import Home from "./components/Home";
import { Write } from './components/Write';
import View from './components/View';

function RoutingEx2() {
  return (
    <Switch>
      <Route exact path='/'><Home /></Route>
      <Route path='/write' component={Write}></Route>
      <Route path='/view'><View /></Route>
      <Route path='/contact'>Contact</Route>
    </Switch>
  );
}

export default RoutingEx2;
