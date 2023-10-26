import React, { Component } from 'react';
import ReactBootstrapNavbars from './components/ReactBootstrapNavbars';
import { Route, Switch } from "react-router-dom";


// 컴포넌트 아래에 다음의 import 구문을 넣어주시기 바랍니다.
import 'bootstrap/dist/css/bootstrap.css'; 
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';
import Goods from './components/Goods';
import QnA from './components/QnA';
import Community from './components/Community';
import Login from './components/Login';
import Join from './components/Join';
import Buy from './components/Buy';
import Point from './components/Point';
import Edit from './components/Edit';
import Leave from './components/Leave';


class App extends Component {
  render() {
    return (
      <div>
        <ReactBootstrapNavbars />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Goods" component={Goods} />
          <Route exact path="/QnA" component={QnA} />
          <Route exact path="/Community" component={Community} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/Join" component={Join} />
          <Route exact path="/Buy" component={Buy} />
          <Route exact path="/Point" component={Point} />
          <Route exact path="/Edit" component={Edit} />
          <Route exact path="/Leave" component={Leave} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;