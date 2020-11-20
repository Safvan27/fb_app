import React,{Component} from 'react';
class welcome extends Component{

    constructor(props){
        super(props);

    }

    render(){
        return(
            <div>
                <p>This is {this.props.title} Quotes</p>
            </div>
        )
    }
}
export default welcome;