import logo from './logo.svg';
import './App.css';

import ShowList from './components/list/List';
import Leftspace from './components/leftside/leftspace';
import Showhead from './components/header/heading';

import Detail from './components/logindetails/details';
const flag=false;
function App() {
  return (
    <div className="App">
    <div className="ls"> <Leftspace></Leftspace> </div>
     <Showhead role="Department/Role" access="Access level" num='No. of members' time='Last update'></Showhead>

     <Detail></Detail>

     <ShowList role="teacher" access="restricted" num='2' time='11'></ShowList>
     <ShowList role="teacher" access="restricted" num='2' time='11'></ShowList>
     <ShowList role="teacher" access="all access" num='2' time='11'></ShowList>
     <ShowList role="teacher" access="restricted" num='2' time='11'></ShowList>
     <ShowList role="teacher" access="restricted" num='2' time='11'></ShowList>
     <ShowList role="teacher" access="all access" num='2' time='11'></ShowList>

    </div>


  );
}

export default App;
