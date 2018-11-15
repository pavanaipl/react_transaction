import React, { Component } from 'react';
import '../App.css';
import {connect} from 'react-redux'
import {repairlist} from '../redux/actions/postActions.js';

class error extends Component {
    componentWillMount(){
        this.props.repairlist()
    }
  render() {
      console.log("datagot",this.props.postdata)
    return (
      <div className="App">
            <div>404 not found</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
    console.log(state)
        return{
            postdata : state.posts.items
        }
 }

export default connect(mapStateToProps, {repairlist})(error);
