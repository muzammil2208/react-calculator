import React,{useState} from 'react'
import ReactDOM from 'react-dom'
import {Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

import Callbutton from './Calbutton'

function Index() {
  
    const [equation,setequation]=useState("")
    const [answer,setanswer]=useState(0);
    //input from the user
    const handleclick=(data)=>
    {
        var lastcharachter=equation.charAt(equation.length-1)
        console.log("lastcharachter is"+lastcharachter)
        if(equation===""||lastcharachter==="*"||lastcharachter==="+"||lastcharachter==="-"||lastcharachter==="/")
        {
            if(data==="*"||data==="-"||data==="+"||data==="/")
            console.log("cannot add operator after a operator")
            else
            {
                var result=equation+data;
                setequation(result);
            }

        }
        else
        {

             var result=equation+data;
                setequation(result);
        
        }
       
    }
    //clear screen function
    const clearEquation=()=>
    {
        setequation("");
    }
    //calculating the output from the equation
    const answerfunc=()=>
    {
        try{
            setequation(eval(equation));
        }
        catch(e)
        {
            setequation("math error")
        }
    }
    return (
        <div>
            <div className="container">
                <div className="row">
                    <input className="input-group-text" type="text" value={equation}></input>
                </div>
                
               
                <div className="row">
                         <Callbutton value="1" classname="btn btn-primary" parentcallback={handleclick}/>
                        <Callbutton value="2" classname="btn btn-primary" parentcallback={handleclick}/>
                        <Callbutton value="3" classname="btn btn-primary" parentcallback={handleclick}/>  
                </div>
                
                <button onClick={answerfunc}>=</button>
                <button className="btn btn-warning" onClick={clearEquation}>C</button>
            </div>
       
        </div>
    )
}

ReactDOM.render(<Index/>,document.getElementById('root'));
