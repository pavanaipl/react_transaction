
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

export default class EditTrasactionForm extends Component {


  constructor(props) {
        super(props);
        this.state = {
         
         transaction_data:[]
           
        };        
        this.onClickHandler=this.onClickHandler.bind(this);  
    }

  

  onClickHandler () {
    var values=this.refs['simpleForm'].getFormValues()
    console.log(values)

    var input_type1=values["contract_status"]
    values["contract_status"]= input_type1["value"]

    var input_type2=values["portfolio"]
    values["portfolio"]= input_type2["value"]

    var input_type3=values["portfolio_group"]
    values["portfolio_group"]= input_type3["value"]

    var input_type4=values["counterparty"]
    values["counterparty"]= input_type4["value"]

    var input_type5=values["security_type"]
    values["security_type"]= input_type5["value"]

    var input_type6=values["security_group"]
    values["security_group"]= input_type6["value"]

    var input_type7=values["dealer"]
    values["dealer"]= input_type7["value"]


    values["id"]= this.props.location.state.id.id


    
    axios.post(`http://139.59.78.16:1337/api/trade-information/update`,values)
            .then((res) => {
              console.log(res)
               
            })
            .catch(err => {
                console.log(err);
            });
  }

 
  render () {

    let contractoptions = [{
      id: 'Entry',
      label: 'Entry',
      value:'Entry'
    }, {
      id: 'LongTerm',
      label: 'LongTerm',
      value: 'LongTerm'
    },
    
    ];

    let portfoliooptions = [{
      id: 'IAMP',
      label: 'IAMP',
      value:'IAMP'
    }, {
      id: 'JAMP',
      label: 'JAMP',
      value: 'JAMP'
    },
    
    ];

    let portfoliogroupsoptions = [{
      id: 'IAMP',
      label: 'IAMP',
      value:'IAMP'
    }, {
      id: 'JAMP',
      label: 'JAMP',
      value: 'JAMP'
    },
    
    ];



    let counteroptions = [{
      id: '00023',
      label: '00023',
      value:'00023'
    }, {
      id: '00024',
      label: '00024',
      value: '00024'
    },
    
    ];


    let secuirtytypeoptions = [{
      id: 'TCL',
      label: 'TCL',
      value:'TCL'
    }, {
      id: 'SSL',
      label: 'SSL',
      value: 'SSL'
    },
    
    ];

    let secuirtygroupoptions = [{
      id: 'GROUP1',
      label: 'GROUP1',
      value:'GROUP1'
    }, {
      id: 'GROUP2',
      label: 'GROUP2',
      value: 'GROUP2'
    },
    
    ];

    let Brokeroptions = [{
      id: '00001',
      label: '00001',
      value:'00001'
    }, {
      id: '00001',
      label: '00001',
      value: '00001'
    },
    
    ];



    return (
    <div className="container-fluid custom_container" style={{height:100}}>
      <div className="col-md-6">
       

        <Form ref='simpleForm'>
          <Field 
            name='contract_id'
            label='ContractId'
            type='text'
            placeholder = {this.props.location.state.id.contract_id}
            value={this.props.location.state.contract_id}
          />

          <Field
            name='contract_status'
            label='contract_status'
            placeholder = {this.props.location.state.id.contract_status}
            value={this.props.location.state.contract_status}
            element= {
              <Select
                options={contractoptions}
                valueAccessor={(selectedValue) => selectedValue.value}
              />
            }
          />

          

          <Field
            name='portfolio'
            label='portfolio'
            placeholder = {this.props.location.state.id.portfolio}
            value={this.props.location.state.portfolio}
            element= {
              <Select
                options={portfoliooptions}
                valueAccessor={(selectedValue) => selectedValue.value}
              />
            }
          />
          
          <Field
            name='portfolio_group'
            label='portfolio_group'
            placeholder = {this.props.location.state.id.portfolio_group}
            value={this.props.location.state.portfolio_group}
            element= {
              <Select
                options={portfoliogroupsoptions}
                valueAccessor={(selectedValue) => selectedValue.value}
              />
            }
          />

          <Field
            name='counterparty'
            label='counterparty'
            placeholder = {this.props.location.state.id.counterparty}
            value={this.props.location.state.counterparty}
            element= {
              <Select
                options={counteroptions}
                valueAccessor={(selectedValue) => selectedValue.value}
              />
            }
          />

          <Field
            name='security_type'
            label='security_type'
            placeholder = {this.props.location.state.id.security_type}
            value={this.props.location.state.security_type}
            element= {
              <Select
                options={secuirtytypeoptions}
                valueAccessor={(selectedValue) => selectedValue.value}
              />
            }
          />



          <Field
            name='security_group'
            label='security_group'
            placeholder = {this.props.location.state.id.security_group}
            value={this.props.location.state.security_group}
            element= {
              <Select
                options={secuirtygroupoptions}
                valueAccessor={(selectedValue) => selectedValue.value}
              />
            }
          />

          

          <Field
            name='dealer'
            label='dealer'
            placeholder = {this.props.location.state.id.dealer}
            value={this.props.location.state.dealer}
            element= {
              <Select
                options={Brokeroptions}
                valueAccessor={(selectedValue) => selectedValue.value}
              />
            }
          />


          <Field  
            name='trade_date'
            label='TradeDate'
            type='text'
            placeholder = {this.props.location.state.id.trade_date}
            value={this.props.location.state.trade_date}
          />

          <Field  
            name='settlement_days'
            label='SettlementDays'
            type='text'
            placeholder = {this.props.location.state.id.settlement_days}
            value={this.props.location.state.settlement_days}
          />

          <Field  
            name='settlement_date'
            label='SettlementDate'
            type='text'
            placeholder = {this.props.location.state.id.settlement_date}
            value={this.props.location.state.settlement_date}
          />


        </Form>
        <button style={{marginBottom:20}} onClick={this.onClickHandler.bind(this)}>Submit</button>

        
    </div>
   </div>
    );
  }
}