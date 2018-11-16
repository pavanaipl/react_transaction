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
import AddTrasactionForm from "../src/components/transaction_form"
import EditTrasactionForm from "../src/components/edit_transaction_form"

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
          
            <Switch>
            <Route path="/" component={Main} exact/>
            <Route path="/add_transaction" component={AddTrasactionForm} />
            <Route path="/edit_transaction" component={EditTrasactionForm} />
            
           
            </Switch>
            </div>
        </BrowserRouter>

   
        
      </Provider>
    );
  }
}

export default App;
