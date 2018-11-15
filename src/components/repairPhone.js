import React, { Component } from 'react';
import '../App.css';
import {connect} from 'react-redux'
import {repairphone} from '../redux/actions/postActions'
let manafaturedata
class repairPhone extends Component {
    constructor(props){
        super(props)
        this.getmodelid=this.getmodelid.bind(this)
        this.state={
            showdiv: false 
         }
    }
    
    componentDidMount(){
        // let iddatastore = localStorage.getItem('myData');
        this.props.repairphone(this.props.match.params.id)
        setTimeout(
            function() {
                this.setState({showdiv: true});
            }
            .bind(this),
            1000
        );
    }
    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps', nextProps);
        // this.setState(nextProps);
    }
    getmodelid(modelid){
        // localStorage.setItem('manafaturedataid', modelid);
        this.props.history.push("/modeldetails/"+this.props.match.params.id+"/"+modelid);
    }
  render() {

      console.log("repairdata",this.props.repairdata)
      manafaturedata = this.props.repairdata
    //   let manafaturearray = manafaturedata.manufacturers
    //   console.log(manafaturearray)
    return (
      <div className="App">
         <div className={this.state.showdiv?"hidden":null}>
    <div className="imageholder">
      <img src={require('../images/animate.gif')} />
      </div>
  </div>
     
      {/* {this.props.match.params.id} */}
      {this.props.match.params.id}
        {
            this.props.repairdata!=="" && this.props.repairdata!==undefined?
          Object.values(this.props.repairdata.manufacturers).map((items,i)=>{
                return(
                    <ul>
                        <li>
                        <a onClick={()=>this.getmodelid(items.id)}>{items.name}</a>
                        </li>
                    </ul>
                    
                )
            })
            :null
        }
            
      </div>
    );
  }
}

function mapStateToProps(state) {
    console.log("repairphone",state.posts.RepairItems.data)
        return{
            repairdata : state.posts.RepairItems.data
        }
 }

export default connect(mapStateToProps, {repairphone})(repairPhone);
