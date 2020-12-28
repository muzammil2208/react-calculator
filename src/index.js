import React,{useState} from 'react'
import ReactDOM from 'react-dom'
import './index.css'


import Callbutton from './Calbutton'

function Index() {
  
    const [equation,setequation]=useState("")
    
    //input from the user
    const handleclick=(data)=>
    {
       var result=equation+data;
       setequation(result)
       
       
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
           alert("you have entered wrong equation")
           setequation("")
            
        }
    }
    return (
        <div>
            
            <div className="container"><h1>React Calculator app</h1>
                <div className="row">
                    <div className="input-group col">
                    <input className="form-control input-text" type="text" value={equation}></input>
                    </div>
                    
                </div>

               
                <div className="row">
                         <Callbutton value="1" classname="btn btn-outline-primary col" parentcallback={handleclick}/>
                        <Callbutton value="2" classname="btn btn-outline-primary col" parentcallback={handleclick}/>
                        <Callbutton value="3" classname="btn btn-outline-primary col" parentcallback={handleclick}/> 
                        <button className="btn btn-outline-warning col" onClick={clearEquation}>C</button>

                </div>
                <div className="row">
                         <Callbutton value="4" classname="btn btn-outline-primary col" parentcallback={handleclick}/>
                        <Callbutton value="5" classname="btn btn-outline-primary col" parentcallback={handleclick}/>
                        <Callbutton value="6" classname="btn btn-outline-primary col" parentcallback={handleclick}/> 
                        <Callbutton value="+" classname="btn btn-outline-success col" parentcallback={handleclick}/> 


                </div>
                <div className="row">
                         <Callbutton value="7" classname="btn btn-outline-primary col" parentcallback={handleclick}/>
                        <Callbutton value="8" classname="btn btn-outline-primary col" parentcallback={handleclick}/>
                        <Callbutton value="9" classname="btn btn-outline-primary col" parentcallback={handleclick}/> 
                        <Callbutton value="-" classname="btn btn-outline-success col" parentcallback={handleclick}/> 

                </div>
                <div className="row">
                    <Callbutton value="0" classname="btn btn-outline-primary col-6" parentcallback={handleclick}/>
                    <Callbutton value="/"  classname="btn btn-outline-success col-3" parentcallback={handleclick}/>
                    <Callbutton value="*" classname=" btn btn-outline-success col-3" parentcallback={handleclick}/>
                </div>
                
                <div className="row">
                <button  className="btn btn-danger col"onClick={answerfunc}>=</button>
                </div>
            </div>
       
        </div>
    )
}

ReactDOM.render(<Index/>,document.getElementById('root'));
