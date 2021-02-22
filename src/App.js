import React, {Component} from 'react';
import Tablist from "./components/tablist"; 
import Body from "./components/body";
import { useState } from 'react'

import './App.css'
//import './style.css'
import ScrollToTopBtn from "../src/components/backTop";

/*
function App() {

  const [active, setactive] = useState(1)
  const tabs =[{
    id: 1,
    title: 'Text'
},
{
    id: 2,
    title: 'Image'
},
{
    id: 3,
    title: 'Video'
},
{
    id: 4,
    title: 'Table'
},
{
    id: 5,
    title: 'Email'
}]

  const changetab = (id) =>{
    setactive(id)
  }

return (
  <div className="App">
    <h1>Tabs Demo</h1>
    <div className="nav-bar">
      <Tablist tabs = {tabs} activetab = {active} ctab = {changetab}/>
    </div>

    <div className="main-body">
      <Body activetab = {active}/>
    </div>


    <ScrollToTopBtn />

  </div>
);
}
*/

class App extends Component {
  constructor(){
    super();
    this.state = {
      active :1
    }
    this.changetab =(id) =>{
      this.setState({
        active :id
      })
    }
  }

  render(){
    const tabs =[{
      id:1,
      title: 'Text___'
  },
  {
      id:2,
      title: 'Image___'
  },
  {
      id:3,
      title: 'Video___'
  },
  {
      id:4,
      title: 'Table___'
  },
  {
      id:5,
      title: 'Email___'
  }]

  return (
    <div className="App">
      
      <div className="nav-bar">
        <Tablist tabs = {tabs} activetab = {this.state.active} ctab = {this.changetab}/>
        
      </div>

      <div className="main-body">
        <Body activetab = {this.state.active}/>
      </div>
    </div>
  );
  }
}



export default App;
