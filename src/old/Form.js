import React,{Component} from 'react';
import axios from 'axios';
class Form extends Component{

    constructor(props){
        super(props);
        this.state={
            username:"",
            password:"",
            displayname:""
        }

    }

    inputSet=(e)=>{
        //console.log.name(e.target.name);
        this.setState({ [e.target.name] : e.target.value   })

    }
    register = (e) =>{
        e.preventDefault();
        var data ={
            username:this.state.username,
            password:this.state.password,
            display_name:this.state.displayname
        };

    }    
    render(){
        return(

            <div className="container">
                <h2>Registration</h2>
                <form>
                    <div className="form-group">
                        <label>Username</label>
                        <input type="text" onChange={this.inputSet} name="username" className="form-control"/>

                    </div>
                    <div className="form-group">
                        <label>Passwod</label>
                        <input type="password" onChange={this.inputSet} name="password" className="form-control"/>

                    </div>
                    <div className="form-group">
                        <label>Display Name</label>
                        <input type="text" onChange={this.inputSet} name="displayname" className="form-control"/>

                    </div>
                    <div className="form-group">
                        <button onClick={this.register} className="btn btn-primary">Register</button>
                        
                    </div>
                        <p>{this.state.username}</p>
                        <p>{this.state.password}</p>
                        <p>{this.state.displayname}</p>
                </form>

            </div>
        )
    }

}
export default Form;
