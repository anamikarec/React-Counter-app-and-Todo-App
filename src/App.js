import style from './App.module.css';
import Img from './Components/Img';
import List from './Components/List';
import ListUsingClass from './Components/ListUsingClass';
import {Counter} from "./Components/Counter"
import { Task } from './Components/Task';

function App() {
  return (
    <div className={style.App}>
      <Img/>
      Hello World!
      <List/>
      <ListUsingClass/>
      <Counter/>
      <Task/>
    </div>
  );
}

export default App;
// build react app to make some changes in the api
// 2018 September => Hooks API => which allows us to write some login in the functional component, manage the state
// state
//props
//hooks