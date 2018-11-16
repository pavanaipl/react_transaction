import React, { Component } from 'react';
import '../App.css';
import {connect} from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import axios from 'axios';

export default class Main extends Component {
    constructor(props){
        super(props)
        this.user_information=this.user_information.bind(this);
        
        this.state={
            all_transaction:[],
            showModaltitle:false,
            data_items:{}
        }
    }
    


   componentDidMount() {

    axios.get(`http://139.59.78.16:1337/api/trade-information/get`)
            .then((res) => {
              
              console.log(res.data.data)
               this.setState({all_transaction:res.data.data})
            })
            .catch(err => {
                console.log(err);
            });
    
  }


user_information(items){

this.setState({showModaltitle:true, data_items:items})


}

delete_information(id){
  var values={}
  values["id"]=id
 axios.post(`http://139.59.78.16:1337/api/trade-information/delete`,values)
            .then((res) => {
              
              console.log(res.data.data)
               this.setState({all_transaction:res.data.data})
            })
            .catch(err => {
                console.log(err);
            });


}


onClickHandler(){

}
    
  
  render() {

    return (
      <div className="App">
            
            <table style={{marginTop:50}} className="table table-hover table-striped">
            <tr>
                          <th style={{padding:20}}colSpan="3">ContactId</th>
                          <th >contract_status</th>
                          <th >portfolio</th>
                          <th >portfolio_group</th>
                          <th >counterparty</th>
                          <th >settlement_days</th>
                          <th >settlement_date</th>
                          <th >Actions</th>
</tr>
                          
                          <tbody>

                          {this.state.all_transaction.map((items,index) => (

                          <tr key={index}>
                            <td style={{textAlign:"center"}} colSpan="3">
                             {items.contract_id}
                            </td>
                            <td >
                             {items.contract_status}
                            </td>

                            <td >
                             {items.portfolio}
                            </td>

                            <td >
                             {items.portfolio_group}
                            </td>

                            <td >
                             {items.counterparty}
                            </td>

                            <td >
                             {items.settlement_days}
                            </td>

                            <td >
                             {items.settlement_date}
                            </td>

                            


                            <td>
                            <Link to={{ pathname: '/edit_transaction', state: { id:items} }}>
                            <button
                              type="button"
                              className="btn btn-xs btn-default"
                              onClick={(e) => this.user_information(items) }
                            >
                              Edit
                            </button>
                             </Link>
                             
                              <Link to={{ pathname: '/view_transaction', state: { id:items} }}>
                            <button
                              type="button"
                              className="btn btn-xs btn-default"
                              
                            >
                              View
                            </button>
                            </Link>

                            <button
                              type="button"
                              className="btn btn-xs btn-default"
                              onClick={(e) => this.delete_information(items.id) }
                            >
                              Delete
                            </button>

                            
                            </td>
                            
                            
                                 
                            
                          </tr>
                          ))}
                             
                          </tbody>

                          


                       </table> 

        <Link to="/add_transaction">
        <button onClick={this.onClickHandler.bind(this)}>Add Transaction</button>
           
        </Link>


      </div>
    );
  }
}

// function mapStateToProps(state) {
//     console.log(state)
//         return{
//             postdata : state.posts.items.data
//         }
//  }

// export default connect(mapStateToProps, {repairlist, repairphone, create_posts})(Main);


