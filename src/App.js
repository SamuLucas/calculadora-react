import React, { Component } from "react";
import style from './App.css'


class App extends Component {
  state = {
    n1: "",
    n2: "",
    result: ""
    
  };

  div = () => {
    let { n1, n2 } = this.state;
    this.setState({
      result: n1 / n2
    });
  };
  mult = () => {
    let { n1, n2 } = this.state;
    this.setState({
      result: n1 * n2
    });
  };
  add = () => {
    let { n1, n2 } = this.state;
    this.setState({
      result: n1 + n2
    });
  };
  sub = () => {
    let { n1, n2 } = this.state;
    this.setState({
      result: n1 - n2
    });
  };

  zerar = () => {
 
  
    this.setState({
      
      result: 0
      
    });
 
  
  };
 
  
  
   
  

  handleChange1 = (event) => {
    
    this.setState({
      
      n1: Number(event.target.value)
    });
  };


  handleChange2 = (event) => {
    this.setState({
      
      n2: Number(event.target.value)
    });
  
}



  render() {
    return (
      <div className = 'box-encapsulador'>
        <h1 className = 'title' >Calc App</h1>
        
        <div className = 'box-input'>
        <input onChange={this.handleChange1} />
        <input onChange={this.handleChange2} />
        </div>

        <div className= 'calculadora'>
        <button onClick={this.div}>/</button>
        <button onClick={this.mult}>*</button>
        <button onClick={this.sub}>-</button>
        <button onClick={this.add}>+</button>
        <button onClick={this.zerar} >C</button>
        </div>
       
        <h2 className='resultado'>{this.state.result}</h2>
      </div>
    );
    }

}
export default App;
