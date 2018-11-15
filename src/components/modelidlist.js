import React, { Component } from 'react';
import '../App.css';
import {connect} from 'react-redux'
import {getmodel} from '../redux/actions/postActions'

class modelIdList extends Component { 
    constructor(props){
        super(props)
        this.state={
            showdiv: false 
         }
    }
    componentDidMount(){
        this.props.getmodel(this.props.match.params.id,this.props.match.params.idamanafacture,this.props.match.params.deviceid)
        setTimeout(
            function() {
                this.setState({showdiv: true});
            }
            .bind(this),
            1000
        );
    }
    getrepairid(repairdurl){
        this.props.history.push(repairdurl)
    }
  render() {
      {this.props.match.params.idamanafacture}
      console.log("datagot",this.props.postdata)
      console.log("modeldetailsdata", this.props.modeldetailsdata)
    return (
      <div className="App">
       <div className={this.state.showdiv?"hidden":null}>
            <div className="imageholder">
              <img src={require('../images/animate.gif')} />
              </div>
          </div>
      {
          this.props.modeldetailsdata!=="" && this.props.modeldetailsdata!==undefined?
     Object.values(this.props.modeldetailsdata.manufacturers_details).map((items,i)=>{
         return(
             <div key={i}>
             <div><h2>Manafacturer</h2></div> 
            <div>{items.name}</div>   
            </div>
         )  
          })
          :null
      }
        {
          this.props.modeldetailsdata!=="" && this.props.modeldetailsdata!==undefined?
     Object.values(this.props.modeldetailsdata.model_details).map((items1,i)=>{
         return(
             <div key={i}>
             <div><h2>Model details</h2></div> 
            <div>{items1.name}</div>   
            <img src={items1.image}/>
            </div>
         )  
          })
          :null
      }

         {
          this.props.modeldetailsdata!=="" && this.props.modeldetailsdata!==undefined?
     Object.values(this.props.modeldetailsdata.repairs).map((items2,i)=>{
         return(
                <div>
                <div onClick={()=>this.getrepairid('/repairdetails/'+this.props.match.params.id+'/'+this.props.match.params.idamanafacture+'/'+this.props.match.params.deviceid+'/'+items2.id)}>{items2.name}</div>
                <div>{items2.cost}</div>
                 </div>
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
            modeldetailsdata : state.posts.getmodelitems.data
        }
 }

export default connect(mapStateToProps, {getmodel})(modelIdList);
