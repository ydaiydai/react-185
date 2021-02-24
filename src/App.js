/*
    Source References:
        https://www.youtube.com/watch?v=FM2RN8rHCTE&list=PLN3n1USn4xlntqksY83W3997mmQPrUmqM&index=12
        https://www.coderomeos.org/scroll-to-top-of-the-page-a-simple-react-component
        https://www.youtube.com/watch?v=LyLa7dU5tp8&list=LL&index=1&t=631s
*/

import React, {Component} from 'react';
import Tablist from "./components/tablist"; 
import Body from "./components/body";

import './App.css'
//import './style.css'
import ScrollToTopBtn from "../src/components/backTop";

class App extends Component {
  constructor(){
    super();
    this.state = {
      active :1
    }
    this.changetab =(id) =>{
      this.setState({
        active : id
      })
    }
  }

  render(){
    const tabs =[{
      id:1,
      title: 'Text'
  },
  {
      id:2,
      title: 'Image'
  },
  {
      id:3,
      title: 'Video'
  },
  {
      id:4,
      title: 'Table'
  },
  {
      id:5,
      title: 'Email'
  }]

  return (
    <div className="App">
      
      <div className="nav-bar">
        <Tablist tabs = {tabs} activetab = {this.state.active} ctab = {this.changetab}/> 
      </div>
      <div className="main-body">
        <Body activetab = {this.state.active}/>
      </div>

      <ScrollToTopBtn />
    </div>
  );
  }
}

export default App;
