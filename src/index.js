import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

class App extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            count:0,
        }
    }
    increment=()=>{
     this.setState({count:this.state.count+1})
    }
    iswin=(counter)=>{
        if(counter>10)
        {
            alert("player won");
        }
    }

    render(){
    return(
        <div>
        <button className="btn btn-warning" onClick={this.increment}>increment</button>
        <p>{this.state.count}</p>
        {this.iswin(this.state.count)}
        </div>
        
    )
    }
}
ReactDOM.render(<App/>,document.getElementById('root'));