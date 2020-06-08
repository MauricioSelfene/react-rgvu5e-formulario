import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class Formulario extends Component{
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }

  syncEmailChange(email){
    this.setState({
      email: email
    })
  }

  syncPasswordChange(password){
    this.setState({
      password: password
    })
  }  

  sutmitForm = ()=> {
    console.log(this.state);
  }

  render(){
    return(
      <form>
        <input 
          onChange={ (ev)=>{ this.syncEmailChange(ev.target.value) } }
          type="email" 
          value={this.state.email} 
          placeholder="Email"/>
        <input 
          onChange={ (ev)=>{ this.syncPasswordChange(ev.target.value) } }
          type="password" 
          value={this.state.password} 
          placeholder="****"/>
        <div>
          <input 
            onClick={this.sutmitForm}
            type="submit" 
            value="Iniciar Sesion"/>
        </div>
      </form>
    )
  }
}


class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Formulario />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
