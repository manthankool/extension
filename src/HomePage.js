/* global chrome */
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import React, { Component }  from 'react';
import axios from 'axios';
import ReactSnackBar from "react-js-snackbar";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {Tabs, Tab} from 'material-ui/Tabs';
import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button,
} from 'reactstrap';
var isJSON = require('is-json');






const styles={
  backgroundColor:'#f4f4f4',
  marginLeft:'120px',
  fontFamily:'Montserrat,sans-serif',


}




export default class Scraperly extends Component {

  constructor(props) {
        super(props);
        this.state = {

            data:[],
            url:'',
            attribute:'',
            attributeName:'',
            foodata:'',
            java:'',
            status:false,
            Show: false,
            Showing: false

        }


    }

    copyToClipboard = (str) => {
      this.show()
      const el = document.createElement('textarea');
      el.value = str;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
};

    show = () => {
      if (this.state.Showing) return;

      this.setState({ Show: true, Showing: true });
      setTimeout(() => {
        this.setState({ Show: false, Showing: false });
      }, 2000);
    };

    onScrape = (e) => {


      e.preventDefault();
      this.setState({foodata:''})
      const {url,attribute,java,tag} = this.state;
      const proxyurl = "https://cors-anywhere.herokuapp.com/";
      var too = proxyurl + url;
      if(this.state.java === false){
        axios.get(too).then((data) => {

          this.setState({foodata:JSON.stringify(data.data)})

        }).catch((err) => {
          console.log(err);
        })
      }
      


    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });

      }


    handleChange = (value) => {
      this.setState({
        slideIndex: value,
      });
    };

    onRegister = (kurl) => {
      var url = kurl;
      chrome.tabs.create({ url: url });
    }


  render () {






    return (
      <div style={{height:'96.2vh',padding:'10px',overflowY:'hidden'}}>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossOrigin="anonymous" />


        <link rel="stylesheet" href="https://npmcdn.com/react-bootstrap-table/dist/react-bootstrap-table-all.min.css" />







        <MDBBtn onClick={() => this.onRegister("https://api.scraperly.io/register")}  outline color="danger" style={{textDecoration:'none',textAlign:'center',backgroundColor:'#ff6d34',outline:'none',float:'right',border:'1px solid #ff6d34',padding:'6px 25px',fontSize:'20px',fontWeight:'400',borderRadius:'25px',color:'white'}} type="submit">Register</MDBBtn>



        <div style={{textAlign:'center',marginRight:'750px',marginTop:'30px'}} className="complete-widget" >





        <div  className="data-string" style={{width:'300px',backgroundColor:'white',border:'1px solid #ff6d34',display:'inline-block',position:'fixed',zIndex:'999'}}>
        <MDBBtn onClick={() => this.copyToClipboard(this.state.stringdata)}  style={{top:'4px',backgroundColor:'white',outline:'none',border:'1px solid #ff6d34',borderRadius:'25px',color:'#ff6d34',padding:'4px 20px'}} outline color="danger">Copy Data</MDBBtn>
        <div style={{wordWrap: 'break-word',height:'400px',overflowY:'auto'}} className="headerline"><hr  /><div>{this.state.foodata}</div></div>
        </div>







        <div style={{textAlign:'center',display:'inline-block',position:'fixed',marginLeft:'230px',marginTop:'70px'}} className="scraper-form">






        <MDBContainer >

          <MDBRow >
            <MDBCol className="envelope"  md="6">
              <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,600" rel="stylesheet" />

              <form  onSubmit={this.onScrape} style={{width:'550px',height:'220px',padding:'8px',backgroundColor:'white', borderRadius:'60px',fontFamily:'Montserrat,sans-serif'}}>
                  {this.state.error ?
                      <div role="alert" className="alert alert-danger"><div>Something went Wrong!</div></div>
                    :
                      null
                  }





                <div style={{margin:'5px'}} className="form-group">

                <input
                  type="url"
                  style={{padding:'8px',borderRadius:'5px',outline:'none',width:'70%',border:'1px solid #ff6d34'}}
                  placeholder="Paste your Link"
                  value={this.state.url}
                  name="url"
                  className="form-control"
                  onChange={this.onChange}
                />
                </div>



                <div>

                <div style={{display:'inline-block',margin:'5px'}} className="form-group">

                <select style={{padding:'8px',padding:'8px',borderRadius:'5px',outline:'none',width:'100%',border:'1px solid #ff6d34'}} onChange={this.onChange}  value={this.state.attribute}  type="text" name="attribute"     >
                  <option hidden selected value> What attribute? </option>
                  <option value="class">class</option>
                  <option value="id">id</option>
                  <option value="title">title</option>

                </select>
                </div>


                <div style={{display:'inline-block',margin:'5px'}} className="form-group">

                <select style={{padding:'8px',padding:'8px',borderRadius:'5px',outline:'none',width:'100%',border:'1px solid #ff6d34'}} onChange={this.onChange}  value={this.state.java}  type="text" name="java"     >
                  <option hidden selected value> Render JavaScript? </option>
                  <option value=true>Yes</option>
                  <option value=false>No</option>


                </select>
                </div>
                </div>

                <div style={{margin:'5px'}}  className="form-group">

                <input
                  type="text"
                  style={{padding:'8px',borderRadius:'5px',outline:'none',width:'50%',border:'1px solid #ff6d34',color:'black'}}
                  placeholder="Name of the attribute"
                  value={this.state.attributeName}
                  name="attributeName"
                  className="form-control"
                  onChange={this.onChange}
                />
                </div>


                <div style={{margin:'5px'}}  className="form-group">

                <input
                  type="text"
                  style={{padding:'8px',borderRadius:'5px',outline:'none',width:'50%',border:'1px solid #ff6d34',color:'black'}}
                  placeholder="Which html tag? span, div, a,p,etc"
                  value={this.state.tag}
                  name="tag"
                  className="form-control"
                  onChange={this.onChange}
                />
                </div>























                <div style={{marginTop:'20px'}} className="text-center mt-4">
                  <MDBBtn  value="Submit" color="indigo" style={{backgroundColor:'#ff6d34',outline:'none',border:'1px solid #ff6d34',padding:'10px 30px',fontSize:'20px',fontWeight:'400',borderRadius:'25px',color:'white'}} type="submit">Scrape</MDBBtn>
                </div>



              </form>

              </MDBCol>
            </MDBRow>
        </MDBContainer>





        </div>



        </div>




        <ReactSnackBar style={{float:'right'}} Icon={<span>🦄</span>} Show={this.state.Show}>
          Copied to Clipboard
        </ReactSnackBar>


      </div>


  )
}



}
