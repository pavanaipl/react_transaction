
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

export default class AddTrasactionForm extends Component {


  constructor(props) {
        super(props);
        this.state = {
         
         error : "error",
         showModaltitle : false,
         contractid_list : [],

           
        };        
        this.onClickHandler=this.onClickHandler.bind(this);
        
    }

  componentDidMount() {

    axios.get(`http://139.59.78.16:1337/api/trade-information/get`)
            .then((res) => {
              
              console.log(res.data.data)
              var contract_list = []
              var resp_data = res.data.data
              for (var i=0;i<resp_data.length;i++){

                contract_list.push(resp_data[i].contract_id)
              }
              console.log(contract_list)
              this.setState({contractid_list:contract_list})
            })
            .catch(err => {
                console.log(err);
            });
    
  }

  onClickHandler () {

    var contract_id_list = this.state.contractid_list
    console.log(contract_id_list)
    console.log("id list")

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

    var trade_date = new Date(values["trade_date"]);
    var settlement_date = new Date(values["settlement_date"]);

    if (values["contract_id"] in (this.state.contractid_list) ){

        this.setState({ showModaltitle: true, error: "The entered contract ID already exists" })

    }

    else{

    if (trade_date < settlement_date){
      console.log(this.state.showModaltitle)
      console.log("testing")
      this.setState({ showModaltitle: false})
      axios.post(`http://139.59.78.16:1337/api/trade-information/create`,values)
            .then((res) => {
              console.log(res)    
            })
            .catch(err => {
                console.log(err);
            });

    }

    else {
      this.setState({ showModaltitle: true, error: "The trade date must be before settlement date" })
    }
  }




    
        
         
    
}



 
  render () {
    console.log(this.state.contract_id)

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
      id: '00002',
      label: '00002',
      value: '00002'
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
            
          />
          

          <Field
            name='contract_status'
            label='contract_status'
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
            placeholder = "yyyy-mm-dd"
          />

          <Field  
            name='settlement_days'
            label='SettlementDays'
            type='text'
            
          />

          <Field  
            name='settlement_date'
            label='SettlementDate'
            type='text'
            placeholder = "yyyy-mm-dd"
          />


        </Form>
        <button style={{marginBottom:20}} onClick={this.onClickHandler.bind(this)}>Submit</button>

         <Modal bsSize="lg" show={this.state.showModaltitle}
                            onHide={() => this.setState({ showModaltitle: false })}>                
              <Modal.Header closeButton>
                  <Modal.Title bsClass="text-primary">
                    
                  </Modal.Title>           
              </Modal.Header>             
               <Modal.Body> 

                   <p> {this.state.error} </p>
            
              </Modal.Body>          
         </Modal>

       

        
    </div>
   </div>
    );
  }
}