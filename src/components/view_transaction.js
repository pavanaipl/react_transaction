
//eslint-disable import/first
/* eslint-disable import/first */

import React, {Component} from 'react';
import {Form, Field} from 'simple-react-forms';

import axios, { post } from 'axios';
axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";
//eslint-disable import/first
import { Modal } from 'react-bootstrap';
//eslint-disable import/first
import Select from 'react-select';
//eslint-disable import/first

export default class ViewTrasactionDetails extends Component {


  constructor(props) {
        super(props);
        this.state = {
         
         
           
        };        
        
    }
componentDidMount() {

console.log(this.props.location.state.contract_id)

}
  

  

 
  render () {

   
    return (
    <div className="container-fluid custom_container" style={{height:100}}>
      <div className="col-md-6">

         <table style={{marginTop:50}} className="table table-hover table-striped">

             <tr><b> ContractId : {this.props.location.state.id.contract_id}</b></tr>
             <tr><b> ContractStatus : {this.props.location.state.id.contract_status}</b></tr>
             <tr><b> Portfolio : {this.props.location.state.id.portfolio}</b></tr>
             <tr><b> PortfolioGroup : {this.props.location.state.id.portfolio_group}</b></tr>
             <tr><b> Counterparty : {this.props.location.state.id.counterparty}</b></tr>
             <tr><b> SecurityType : {this.props.location.state.id.security_type}</b></tr>
             <tr><b> SecurityGroup : {this.props.location.state.id.security_group}</b></tr>
             <tr><b> Dealer : {this.props.location.state.id.dealer}</b></tr>
             <tr><b> TradeDate : {this.props.location.state.id.trade_date}</b></tr>
             <tr><b> SettlementDays : {this.props.location.state.id.settlement_days}</b></tr>
             <tr><b> SettlementDate : {this.props.location.state.id.settlement_date}</b></tr>

         </table>
      </div>
     </div>
           
    );
  }
}