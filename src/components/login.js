import React, { Component } from 'react';
import '../App.css';
import {connect} from 'react-redux'
import {repairlist} from '../redux/actions/postActions.js';

class Login extends Component {
  
  render() {
    return (
      <div className="App">
            <div>Login</div>
            {/* <a onClick={()=>this.changapage("/repairphone")}>Clickme</a> */}
            
      </div>
    );
  }
}

function mapStateToProps(state) {
    console.log(state)
        return{
            postdata : state.posts.items.data
        }
 }

export default Login;
