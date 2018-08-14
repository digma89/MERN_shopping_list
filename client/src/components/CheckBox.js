import React, { Component } from 'react';

class CheckBox extends Component{

    state = {
             isOpen: true
         }
 
     toggle = () => {
         this.setState({
             isOpen: !this.state.isOpen
         });
     }
 
     render(){
         var msg = this.state.isOpen ? "checked" : "uncheck";
        
        return(
            <div>
                <input type="checkbox" onChange={this.toggle} defaultChecked={this.state.isOpen}/>
                <h3>Checkboc is {msg}</h3>
            </div>
        );
     }
         
 }
 
 export default CheckBox