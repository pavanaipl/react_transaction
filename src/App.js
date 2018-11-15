import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux'
import store from '../src/redux/store'
import Main from '../src/components/main'
import repairPhone from '../src/components/repairPhone'
import modelDetails from '../src/components/modelDetails'
import error from '../src/components/error'
import modelIdList from '../src/components/modelidlist'
import repairDetails from '../src/components/repairdetails'
import {BrowserRouter, Route, Switch} from "react-router-dom"

class App extends Component {
  constructor(props){
    super(props)
    this.state={
       showdiv: false 
    }
  }
  componentWillMount(){
    setTimeout(
      function() {
          this.setState({showdiv: true});
      }
      .bind(this),
      1000
  );
  }
  render() {
    return (
      <Provider store = {store}>
        <BrowserRouter>
          <div>
          <div className={this.state.showdiv?"hidden":null}>
            <div className="imageholder">
              <img src={require('./images/animate.gif')} />
              </div>
          </div>
            <Switch>
            <Route path="/" component={Main} exact/>
            <Route path="/repairphone/:id" component={repairPhone} />
            <Route path="/modeldetails/:id/:idamanafacture" component={modelDetails}/>
            <Route path="/modeldeviceid/:id/:idamanafacture/:deviceid" component={modelIdList}/>
            <Route path="/repairdetails/:id/:idamanafacture/:deviceid/:repairid" component={repairDetails}/>
            <Route  component={error}/>
            </Switch>
            </div>
        </BrowserRouter>

      {/* <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Main/>
      </div> */}
        
      </Provider>
    );
  }
}

export default App;
