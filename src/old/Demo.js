//import { render } from '@testing-library/react';
import React, { Component } from 'react';
import hooks from 'react';
class Demo extends Component{
    constructor(props){
        super(props);
        this.state ={
           counter:0
        };
    }
    
incriment=()=>{
    this.setState((prev,prop)=>({counter:prev.counter+1}))
}

render(){
    console.log("Inside Render")
   
    
    return(
        <div className="">
            <button onClick={this.incriment}>Incriment</button>
            <p>
                You HAve Clicked {this.state.counter} times
            </p>
        </div>
    );
}
}
export default Demo;