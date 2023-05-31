import logo from './logo.svg';
import { Fragment } from 'react';
import './App.css';
import Myabout from './mycomponent/About.js';
import { Myabout20,Mycontact,Mytable } from './mycomponent/About.js';


function App() {
  return (
    <Fragment>
    <h1 >
    <del>  Welcome to react</del>
    <h2>My name is Aman</h2>
    </h1>
    <Mytable></Mytable>
    <Myabout></Myabout>
    <Myabout20></Myabout20>
    <Mycontact></Mycontact>
    </Fragment>
  );
}

export default App;
