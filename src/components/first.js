import React, { Component } from 'react';
class First extends Component {
    constructor(props){
        super(props);
        this.state={name:"khalil"};
        
    }
      
    click(){
       
        console.log("clicked"+ this.state.name     );
        this.setState({name:"hamza"});
        }
    render(){
        return(
            <div>
             <button  onClick={() => this.click()}></button>
        <p>{this.state.name}</p>
            </div>
        )
    }

}
export default First;