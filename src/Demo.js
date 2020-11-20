import { render } from '@testing-library/react';
import React, { Component } from 'react';

class Demo extends Component{
    constructor(props){
        super(props);
        this.state ={
            items:["apple","Banana","orange","pineapple","grapes"],
            users:[
                    {name:"tintu" ,age:26},
                    {name:"tintu" ,age:26},
                    {name:"tintu" ,age:26}
            ]
        };
    }

render(){

   
    
    return(
        <div className="">
            <input type="text"></input>
            <button>Add</button>
            <ul>
                <li>
                    Item 1 <button>Delete</button>
                </li>
            </ul>
        </div>
    );
}
}
export default Demo;