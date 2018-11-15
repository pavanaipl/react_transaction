import React, { Component } from 'react';
import '../App.css';
import {connect} from 'react-redux'
import {getrepairdetails} from '../redux/actions/postActions'
let manafaturedata
class repairDetails extends Component {
    constructor(props){
        super(props)
        this.state={
            showdiv: false 
         }
    }
    componentDidMount(){
        setTimeout(
            function() {
                this.setState({showdiv: true});
            }
            .bind(this),
            1000
        );
        // let iddatastore = localStorage.getItem('myData');
        this.props.getrepairdetails(this.props.match.params.id,this.props.match.params.idamanafacture,this.props.match.params.deviceid,this.props.match.params.repairid)
    }
  render() {
      console.log("repairdetailsid",this.props.match.params)
      console.log(this.props.repairdetailsdata)
    //   let manafaturearray = manafaturedata.manufacturers
    //   console.log(manafaturearray)
    return (
      <div className="App">
      <div className={this.state.showdiv?"hidden":null}>
            <div className="imageholder">
              <img src={require('../images/animate.gif')} />
              </div>
          </div>
            {
                this.props.repairdetailsdata!==""&&this.props.repairdetailsdata!==undefined?
                Object.values(this.props.repairdetailsdata.manufacturers_details).map((items,i)=>{
                   return(
                    <div key={i}>
                        <h1>Name of the manafacture</h1>
                        <h2>{items.name}</h2>
                    </div>
                   )
                })
                :null
            }
            {
                this.props.repairdetailsdata!==""&&this.props.repairdetailsdata!==undefined?
                Object.values(this.props.repairdetailsdata.model_details).map((items1, i1)=>{
                    return(
                        <div key={i1}>
                            <h2>Model</h2>
                            <h3>{items1.name}</h3>
                        </div>
                    )
                })
                :null
            }
              <h2>Releated products</h2>
              {
                this.props.repairdetailsdata!==""&&this.props.repairdetailsdata!==undefined?
                Object.values(this.props.repairdetailsdata.related_products).map((items2, i2)=>{
                    return(
                        <div key={i2}>
                            <h3>{items2.name}</h3>
                            <h3>{items2.cost}</h3>
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
    console.log("repairdetails",state.posts.getrepairdetails.data)
        return{
            repairdetailsdata : state.posts.getrepairdetails.data
        }
 }

export default connect(mapStateToProps, {getrepairdetails})(repairDetails);
