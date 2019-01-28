import React, { Component } from 'react';
import axios from 'axios'
import {withRouter} from 'react-router'
import { withAlert } from 'react-alert'
import {Link} from 'react-router-dom'
import Background from './icons/background.png';
import Logo from './icons/ipocrat.png'
import email from './icons/mail.svg'
import lock from './icons/lock.svg'
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBBtn, MDBCardBody, MDBIcon, MDBModalFooter } from 'mdbreact';

var sectionStyle = {
    backgroundImage: `url(${Background})`

  };
var inputStyle={
  background: `url(${email})`,
  backgroundRepeat: "no-repeat",
    backgroundPosition: "17px 17px"
}
var inputStyle1={
  background: `url(${lock})`,
  backgroundRepeat: "no-repeat",
    backgroundPosition: "17px 11px"
}
var styleinputfooter={
  display: 'flex',
    justifyContent: "center"
}

class Login extends Component {
  constructor(props)
    {
        super(props)
        this.state={
            email:'',
            password:'',
            
        }
      }

      sumbit =()=>{
        if((this.state.email!="")&&(this.state.password!=""))
        
        {
          axios.post("http://bo-ipocrat.satoripop.com:3001/api/subscriber/auth",{
            email:this.state.email,
            password:this.state.password})
            .then(response => {console.log(response.data);})
            .then(()=>this.props.history.push("/events"))

            .catch(error => {this.props.alert.error('email ou mot de passe incorrect !')})
              }  
            }

            handleChange=(e)=>
            {
                this.setState({
                   [e.target.name] : e.target.value
                })
            }
            submitHandler = event => {
              event.preventDefault();
              event.target.className += " was-validated";
            };
            
    render() { 
        console.log(this.state.checkbox,this.state.password)
        return ( 
            <div className='login-container' style={ sectionStyle }>
               <MDBContainer className='form-login'>
      <MDBRow center>
        <MDBCol md="6" className="mt-5">
          <MDBCard>
            <MDBCardBody>
              <center>
              <form center  className="needs-validation"
          onSubmit={this.submitHandler}
          noValidate
        >
          
          
               <img src={Logo} className="text-center py-5 mx-auto d-block" alt="logo"/>
                <input style={inputStyle}
                name='email'
                // value={this.state.value}
                className="form-control  mt-4"
                onChange={this.handleChange}
                  placeholder="E-mail"
                  type="email"
                  id="defaultFormRegisterConfirmEx3"
                  required
                />
                <div className="invalid-feedback" style={{textAlign:"-webkit-left"}}>

                Adresse mail non valide.
              </div>
                <br />
                
                
                <input
                style={inputStyle1}
                name="password"
                // value={this.state.value}
                placeholder="Mot de passe"
                type="password"
                  id="defaultFormCardEmailEx"
                  className="form-control"
                  onChange={this.handleChange}
                  required

                />
                
                <MDBCol md="12" className="mt-3" >
            <div className="custom-control custom-checkbox pl-3">
              <input
              style={{borderColor: 'black'}}
                className="custom-control-input"
                type="checkbox"
                value=""
                id="invalidCheck"
                required
                
              />
              <label className="custom-control-label" style={{color: 'black'}} htmlFor="invalidCheck">
                Se souvenir de moi <a href="#!" className="text ml-5" style={{color: '#7974bf'}}>Mot de passe oublié
                    </a>
              </label>
              
            </div>
          </MDBCol>
               
                <div className="text-center py-4 mt-3">
                
                  <MDBBtn color ='#BCBADF' className='login' type="submit" onClick={()=>this.sumbit()}>
               
                    Se connecter
                  </MDBBtn>
               
                </div>
                <MDBModalFooter style={styleinputfooter} className="mx-5 pt-3 mb-1">
              <p className="font-small d-flex justify-content-end">
                Nouveau sur ipocrat?
                <a href="#!" className="text ml-1" style={{color: '#7974bf'}}>
                  <strong>S'inscrire</strong>
                </a>
              </p>
            </MDBModalFooter>
              </form>
              </center>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
            </div>
         );
    }
}
 
export default withRouter(withAlert(Login));