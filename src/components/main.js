import {Form, Field} from 'simple-react-forms';
import React, {Component} from 'react';
import axios, { post } from 'axios';

axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";
import { Modal } from 'react-bootstrap';

import Select from 'react-select';


export default class Category extends Component {


  constructor(props) {
        super(props);
        this.state = {
           all_details:[],
           showModaltitle:false,
           particular_user:'',
           show_category:false,
           show_subcategory:false,


           
        };        
        // this.onClickHandler=this.onClickHandler.bind(this);
        // this.onChange=this.onChange.bind(this);
        // this.excel_data=this.excel_data.bind(this);
       
  
    }


  componentDidMount() {

    axios.get(`/api/all_details/`)
            .then((res) => {
              console.log(res)
              console.log(res.data)
               this.setState({all_details:res.data})
            })
            .catch(err => {
                console.log(err);
            });
    
  }


 



 
  render () {
    return (
    <div className="container-fluid custom_container">
      <div className="col-md-12">

       


       


     

    </div>
   </div>
    );
  }
}