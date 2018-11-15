import React, { Component } from 'react';
import '../App.css';
import {connect} from 'react-redux'
import {modelsmanafacture} from '../redux/actions/postActions'
let modeldetails
class modelDetails extends Component {
constructor(props){
    super(props)
}
 componentDidMount(){
    this.props.modelsmanafacture(this.props.match.params.id, this.props.match.params.idamanafacture)
 } 

 getmodeldetailid(modeldeviceid){
    //  console.log("modeldeviceget",modeldeviceget)
    // localStorage.setItem('modeldeviceid', modeldeviceget);
    this.props.history.push(modeldeviceid);
}
componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps', nextProps.match);
}
  render() {
      {this.props.match.params}
     
      console.log("modeldetails",this.props.modeldetals)
     modeldetails = this.props.modeldetals
    return (
      <div className="App">
        <h2>Product Details</h2>
            {
                modeldetails!==""&&modeldetails!==undefined?
               Object.values(modeldetails.manufacturers_details).map((items,i)=>{
                   return(
                    <div key={i}>{items.name}</div>
                   )
               })
                :null
            }
            {
                modeldetails!==""&&modeldetails!==undefined?
                Object.values(modeldetails.models).map((items1,i)=>{
                    return(
                     <div onClick={()=>this.getmodeldetailid('/modeldeviceid/'+this.props.match.params.id+"/"+this.props.match.params.idamanafacture+"/"+items1.id)} key={i}>{items1.name}</div>
                    )
                })
                :null
            }
      </div>
    );
  }
}

function mapStateToProps(state) {
    console.log(state)
        return{
            modeldetals : state.posts.modalItems.data
        }
 }

export default connect(mapStateToProps, {modelsmanafacture})(modelDetails);
